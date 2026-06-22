# Audit-TechNexusNext.ps1
# Read-only audit scan for technexus-next ONLY. Path is hardcoded on purpose
# so this cannot accidentally run against a different repo.
#
# Usage: run from anywhere, no -Path needed.
#   .\Audit-TechNexusNext.ps1

$repoRoot = "C:\Users\HP1\Documents\GitHub\technexus-next"

if (-not (Test-Path $repoRoot)) {
    Write-Host "Repo not found at $repoRoot. Stopping -- not guessing another path."
    exit 1
}

$outDir = Join-Path $repoRoot "audit-output"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$excludeDirs = @('node_modules','.git','.next','out','dist','build')
$excludePattern = ($excludeDirs | ForEach-Object { [regex]::Escape($_) }) -join '|'

function Get-RepoFiles($extensions) {
    Get-ChildItem -Path $repoRoot -Recurse -File -Include $extensions |
        Where-Object { $_.FullName -notmatch "\\($excludePattern)\\" }
}

Write-Host "Repo: $repoRoot"
Write-Host ""

# --- 1. Encoding integrity (mojibake) ---
$marker = [char]0x00E2
$textExt = @('*.ts','*.tsx','*.js','*.jsx','*.md','*.json','*.css','*.html','*.yml','*.yaml')
$codeFiles = Get-RepoFiles $textExt

$mojibakeHits = foreach ($f in $codeFiles) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    if ($text.Contains($marker)) {
        $lines = $text -split "`r?`n"
        $lineNums = for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i].Contains($marker)) { $i + 1 }
        }
        [PSCustomObject]@{
            File     = $f.FullName.Substring($repoRoot.Length+1)
            Count    = $lineNums.Count
            HitLines = ($lineNums -join ',')
        }
    }
}
$mojibakeHits | Sort-Object Count -Descending |
    Format-Table File, Count, HitLines -AutoSize -Wrap |
    Out-String -Width 400 |
    Out-File (Join-Path $outDir "01-mojibake.txt") -Encoding utf8
Write-Host "1. Encoding: $($mojibakeHits.Count) files with mojibake. See audit-output\01-mojibake.txt"

# --- 2. Secrets and credentials ---
$secretPatterns = @(
    'password\s*[:=]\s*["'']?[^"'';\s]{3,}',
    'apikey\s*[:=]\s*["'']?[A-Za-z0-9_\-]{10,}',
    'api_key\s*[:=]\s*["'']?[A-Za-z0-9_\-]{10,}',
    'secret\s*[:=]\s*["'']?[A-Za-z0-9_\-]{10,}',
    'token\s*[:=]\s*["'']?[A-Za-z0-9_\-\.]{15,}',
    'Bearer\s+[A-Za-z0-9_\-\.]{15,}'
)
$secretExt = @('*.ts','*.tsx','*.js','*.jsx','*.json','*.yml','*.yaml','*.env*')
$secretFiles = Get-RepoFiles $secretExt

$secretHits = foreach ($f in $secretFiles) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    $lines = $text -split "`r?`n"
    for ($i = 0; $i -lt $lines.Count; $i++) {
        foreach ($p in $secretPatterns) {
            if ($lines[$i] -match $p) {
                [PSCustomObject]@{
                    File    = $f.FullName.Substring($repoRoot.Length+1)
                    Line    = $i + 1
                    Pattern = $p
                    Text    = $lines[$i].Trim()
                }
            }
        }
    }
}
$secretHits | Sort-Object File, Line |
    Format-Table File, Line, Pattern, Text -AutoSize -Wrap |
    Out-String -Width 400 |
    Out-File (Join-Path $outDir "02-secrets.txt") -Encoding utf8
Write-Host "2. Secrets: $($secretHits.Count) potential matches. REVIEW BEFORE SHARING -- see audit-output\02-secrets.txt"

# --- 3. Dead code / duplication candidates: unused imports (heuristic) ---
$tsFiles = Get-RepoFiles @('*.ts','*.tsx')
$unusedImports = foreach ($f in $tsFiles) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    $importLines = [regex]::Matches($text, "^import\s+\{([^}]+)\}\s+from\s+['\""]([^'\""]+)['\""]", 'Multiline')
    foreach ($m in $importLines) {
        $names = $m.Groups[1].Value -split ',' | ForEach-Object { $_.Trim() } | Where-Object { $_ }
        foreach ($n in $names) {
            $shortName = ($n -split '\s+as\s+')[-1].Trim()
            $occurrences = ([regex]::Matches($text, "\b$([regex]::Escape($shortName))\b")).Count
            if ($occurrences -le 1) {
                [PSCustomObject]@{
                    File   = $f.FullName.Substring($repoRoot.Length+1)
                    Import = $shortName
                    From   = $m.Groups[2].Value
                }
            }
        }
    }
}
$unusedImports | Format-Table -AutoSize |
    Out-File (Join-Path $outDir "03-unused-imports.txt") -Encoding utf8
Write-Host "3. Unused imports (heuristic): $($unusedImports.Count) candidates. See audit-output\03-unused-imports.txt"

# --- 5. Complexity hotspots: long functions/components (proxy: line count between braces) ---
$longFunctions = foreach ($f in $tsFiles) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    $lines = $text -split "`r?`n"
    $start = -1
    $depth = 0
    $sig = ""
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match '^(export\s+)?(default\s+)?function\s+\w+|^(export\s+)?const\s+\w+\s*=\s*\(.*\)\s*(:\s*\S+)?\s*=>\s*\{' -and $start -eq -1) {
            $start = $i
            $sig = $lines[$i].Trim()
        }
        if ($start -ne -1) {
            $depth += ([regex]::Matches($lines[$i], '\{')).Count
            $depth -= ([regex]::Matches($lines[$i], '\}')).Count
            if ($depth -eq 0 -and $i -gt $start) {
                $len = $i - $start
                if ($len -gt 60) {
                    [PSCustomObject]@{
                        File      = $f.FullName.Substring($repoRoot.Length+1)
                        StartLine = $start + 1
                        Lines     = $len
                        Signature = $sig
                    }
                }
                $start = -1
            }
        }
    }
}
$longFunctions | Sort-Object Lines -Descending |
    Format-Table File, StartLine, Lines, Signature -AutoSize -Wrap |
    Out-String -Width 400 |
    Out-File (Join-Path $outDir "05-long-functions.txt") -Encoding utf8
Write-Host "5. Long functions/components: $($longFunctions.Count) found. See audit-output\05-long-functions.txt"

# --- 7. Comment extraction for manual quality triage ---
$comments = foreach ($f in $tsFiles) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    $lines = $text -split "`r?`n"
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match '^\s*//|^\s*\*|^\s*/\*') {
            $next = if ($i -lt $lines.Count - 1) { $lines[$i+1].Trim() } else { "" }
            [PSCustomObject]@{
                File         = $f.FullName.Substring($repoRoot.Length+1)
                Line         = $i + 1
                Comment      = $lines[$i].Trim()
                NextCodeLine = $next
            }
        }
    }
}
$comments | Format-Table File, Line, Comment, NextCodeLine -AutoSize -Wrap |
    Out-String -Width 400 |
    Out-File (Join-Path $outDir "07-comments.txt") -Encoding utf8
Write-Host "7. Comments extracted: $($comments.Count). See audit-output\07-comments.txt"

Write-Host ""
Write-Host "Done. All output in $outDir"
Write-Host "Paste back 01, 03, 05, 07. For 02 (secrets), summarize file/line/pattern only -- do not paste live values."

# Detect-Mojibake.ps1
# Finds files where UTF-8 text was misread as Windows-1252 and re-saved,
# corrupting em dashes, curly quotes, and box-drawing characters into
# 2-3 byte garbage sequences. Read-only.
#
# Usage:
#   .\Detect-Mojibake.ps1 -Path "C:\Users\HP1\some-project"
#   .\Detect-Mojibake.ps1 -Path "C:\Users\HP1\some-project" -Extensions *.cs,*.ts,*.md

param(
    [Parameter(Mandatory=$true)]
    [string]$Path,

    [string[]]$Extensions = @('*.cs','*.razor','*.cshtml','*.ts','*.tsx','*.js','*.jsx',
                               '*.md','*.json','*.yml','*.yaml','*.ps1','*.sql','*.html','*.css'),

    [string[]]$ExcludeDirs = @('bin','obj','node_modules','.git','dist','build','packages','.next')
)

if (-not (Test-Path $Path)) {
    Write-Host "Path not found: $Path"
    exit 1
}

$outDir = Join-Path $Path "audit-output"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# Lead byte for the UTF-8 -> Windows-1252 corruption family covering
# em dash, en dash, curly quotes, ellipsis, box-drawing chars (U+2000-U+25FF range).
$marker = [char]0x00E2

$excludePattern = ($ExcludeDirs | ForEach-Object { [regex]::Escape($_) }) -join '|'
$files = Get-ChildItem -Path $Path -Recurse -File -Include $Extensions |
    Where-Object { $_.FullName -notmatch "\\($excludePattern)\\" }

$hits = foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    if ($text -and $text.Contains($marker)) {
        $lines = $text -split "`r?`n"
        $lineNums = for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i].Contains($marker)) { $i + 1 }
        }
        if ($lineNums.Count -gt 0) {
            [PSCustomObject]@{
                File     = $f.FullName.Substring($Path.Length+1)
                Count    = $lineNums.Count
                HitLines = ($lineNums -join ',')
            }
        }
    }
}

$hits | Sort-Object Count -Descending |
    Format-Table File, Count, HitLines -AutoSize -Wrap |
    Out-String -Width 400 |
    Out-File (Join-Path $outDir "mojibake-report.txt") -Encoding utf8

Write-Host "Scanned $($files.Count) files under $Path"
Write-Host "Found mojibake in $($hits.Count) files. See $outDir\mojibake-report.txt"
if ($hits.Count -gt 0) {
    Write-Host "Run Fix-Mojibake.ps1 -Path `"$Path`" to repair. Commit or branch first."
}

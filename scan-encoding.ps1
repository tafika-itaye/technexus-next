# scan-encoding.ps1
# Read-only. Scans for BOM-prefixed files and Windows-1252 mojibake markers.
# Run from repo root: .\scan-encoding.ps1 -RepoPath "C:\Users\HP1\Documents\GitHub\technexus-next"

param(
    [Parameter(Mandatory = $true)]
    [string]$RepoPath
)

$extensions = @('*.ts', '*.tsx', '*.js', '*.jsx', '*.json', '*.md', '*.css')
$excludeDirs = @('node_modules', '.next', '.git', 'dist', 'out')

# ponytail: mojibake check is a fixed list of common UTF-8-as-1252 byte
# sequences (em dash, curly quotes, ellipsis). Upgrade path: run chardet/uchardet
# per file if this list misses cases.
$mojibakePatterns = @(
    'â€"',   # em dash
    'â€™',   # right single quote
    'â€œ',   # left double quote
    'â€\u009d', # right double quote
    'â€¦'    # ellipsis
)

$files = Get-ChildItem -Path $RepoPath -Recurse -Include $extensions |
    Where-Object {
        $path = $_.FullName
        -not ($excludeDirs | Where-Object { $path -match [regex]::Escape("\$_\") })
    }

$bomHits = @()
$mojibakeHits = @()

foreach ($file in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)

    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        $bomHits += $file.FullName
    }
    elseif ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xFE) {
        $bomHits += "$($file.FullName) (UTF-16 LE BOM)"
    }
    elseif ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFE -and $bytes[1] -eq 0xFF) {
        $bomHits += "$($file.FullName) (UTF-16 BE BOM)"
    }

    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    $lines = $text -split "`n"
    for ($i = 0; $i -lt $lines.Length; $i++) {
        foreach ($pattern in $mojibakePatterns) {
            if ($lines[$i] -like "*$pattern*") {
                $mojibakeHits += "$($file.FullName):$($i + 1) - pattern: $pattern"
            }
        }
    }
}

Write-Output "=== BOM-prefixed files ($($bomHits.Count)) ==="
$bomHits | ForEach-Object { Write-Output $_ }

Write-Output ""
Write-Output "=== Mojibake hits ($($mojibakeHits.Count)) ==="
$mojibakeHits | ForEach-Object { Write-Output $_ }

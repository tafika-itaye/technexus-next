# scan-secrets.ps1
# Read-only. Flags likely secrets by pattern. Does NOT print matched values
# for high-confidence hits (key/token/password patterns) - file + line + 
# pattern type only, per TJ's instruction to rotate live secrets himself.
# Run from repo root: .\scan-secrets.ps1 -RepoPath "C:\Users\HP1\Documents\GitHub\technexus-next"

param(
    [Parameter(Mandatory = $true)]
    [string]$RepoPath
)

$extensions = @('*.ts', '*.tsx', '*.js', '*.jsx', '*.json', '*.env*', '*.config.js')
$excludeDirs = @('node_modules', '.next', '.git', 'dist', 'out')

# ponytail: regex list covers common key/token shapes (AWS, generic API key,
# JWT, connection string, password assignment). Upgrade path: swap in
# detect-secrets or gitleaks if false-negative rate matters more later.
$patterns = @(
    @{ Name = 'AWS Access Key';        Regex = 'AKIA[0-9A-Z]{16}' }
    @{ Name = 'Generic API key assign'; Regex = '(?i)(api[_-]?key|apikey)\s*[:=]\s*["\x27][A-Za-z0-9_\-]{16,}["\x27]' }
    @{ Name = 'Password assignment';    Regex = '(?i)password\s*[:=]\s*["\x27][^"\x27]{4,}["\x27]' }
    @{ Name = 'JWT-shaped token';       Regex = 'eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}' }
    @{ Name = 'Connection string';      Regex = '(?i)(Server|Data Source)\s*=\s*[^;]+;.*(Password|Pwd)\s*=' }
    @{ Name = 'Bearer token literal';   Regex = '(?i)Bearer\s+[A-Za-z0-9_\-\.]{20,}' }
    @{ Name = 'Private key block';      Regex = '-----BEGIN (RSA |EC )?PRIVATE KEY-----' }
)

$files = Get-ChildItem -Path $RepoPath -Recurse -Include $extensions -File |
    Where-Object {
        $path = $_.FullName
        -not ($excludeDirs | Where-Object { $path -match [regex]::Escape("\$_\") })
    }

$findings = @()

foreach ($file in $files) {
    $lines = Get-Content -Path $file.FullName -ErrorAction SilentlyContinue
    if (-not $lines) { continue }

    for ($i = 0; $i -lt $lines.Count; $i++) {
        foreach ($p in $patterns) {
            if ($lines[$i] -match $p.Regex) {
                # Skip obvious env-var references and placeholders
                if ($lines[$i] -match '(?i)process\.env\.|import\.meta\.env\.|<.*>|YOUR_|PLACEHOLDER|xxxx|\$\{') {
                    continue
                }
                $findings += [PSCustomObject]@{
                    File    = $file.FullName
                    Line    = $i + 1
                    Pattern = $p.Name
                }
            }
        }
    }
}

Write-Output "=== Possible secrets ($($findings.Count)) ==="
$findings | Format-Table -AutoSize

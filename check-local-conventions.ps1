# check-local-conventions.ps1
# Read-only. Checks for a local-only, gitignored conventions/notes file
# (CLAUDE.md equivalent) before the audit starts. If found, prints its
# .gitignore status and a content preview so it can be treated as a
# reference, not an audit target.
# Run from repo root: .\check-local-conventions.ps1 -RepoPath "C:\Users\HP1\Documents\GitHub\technexus-next"

param(
    [Parameter(Mandatory = $true)]
    [string]$RepoPath
)

$candidateNames = @('CLAUDE.md', 'NOTES.md', 'CONVENTIONS.md', '.claude.md', 'AGENT.md', 'AGENTS.md')

$found = @()
foreach ($name in $candidateNames) {
    $matches = Get-ChildItem -Path $RepoPath -Recurse -Filter $name -File -ErrorAction SilentlyContinue
    if ($matches) { $found += $matches }
}

if (-not $found) {
    Write-Output "No local-only conventions file found (checked: $($candidateNames -join ', '))."
    return
}

$gitignorePath = Join-Path $RepoPath '.gitignore'
$gitignoreContent = if (Test-Path $gitignorePath) { Get-Content $gitignorePath } else { @() }

foreach ($file in $found) {
    $relativeName = Split-Path $file.FullName -Leaf
    $isIgnored = $gitignoreContent | Where-Object { $_ -eq $relativeName -or $_ -eq "/$relativeName" }

    Write-Output "=== $($file.FullName) ==="
    if ($isIgnored) {
        Write-Output "Status: gitignored (treat as conventions reference, not audit target)"
    } else {
        Write-Output "Status: NOT gitignored - flag this, may need adding to .gitignore"
    }
    Write-Output "--- Preview (first 15 lines) ---"
    Get-Content $file.FullName -TotalCount 15
    Write-Output ""
}

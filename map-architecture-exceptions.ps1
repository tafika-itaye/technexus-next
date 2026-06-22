# map-architecture-exceptions.ps1
# Read-only. Surfaces the theme-variant, locale, and server/client split
# files so duplication findings can be filtered against the repo's known
# architecture before anything gets flagged.
# Run from repo root: .\map-architecture-exceptions.ps1 -RepoPath "C:\Users\HP1\Documents\GitHub\technexus-next"

param(
    [Parameter(Mandatory = $true)]
    [string]$RepoPath
)

$excludeDirs = @('node_modules', '.next', '.git', 'dist', 'out')

function Test-Excluded($path) {
    return ($excludeDirs | Where-Object { $path -match [regex]::Escape("\$_\") }).Count -gt 0
}

# Locale files: common patterns for i18n string tables
$localeFiles = Get-ChildItem -Path $RepoPath -Recurse -Include '*.json','*.ts' -File |
    Where-Object {
        -not (Test-Excluded $_.FullName) -and
        ($_.FullName -match '(?i)(locale|i18n|lang|messages)[\\\/].*(en|pt|ny)\.(json|ts)$' -or
         $_.Name -match '(?i)^(en|pt|ny)\.(json|ts)$')
    }

# Theme files: look for theme-named dirs/files
$themeFiles = Get-ChildItem -Path $RepoPath -Recurse -Include '*.tsx','*.ts','*.css' -File |
    Where-Object {
        -not (Test-Excluded $_.FullName) -and
        ($_.FullName -match '(?i)theme' -or $_.Name -match '(?i)(eis|standard)')
    }

# Server/client split: pages with both a *.tsx page and a co-located client component
$clientComponents = Get-ChildItem -Path $RepoPath -Recurse -Include '*.tsx' -File |
    Where-Object {
        -not (Test-Excluded $_.FullName)
    } | ForEach-Object {
        $content = Get-Content $_.FullName -TotalCount 5 -ErrorAction SilentlyContinue
        if ($content -match "^'use client'" -or $content -match '^"use client"') {
            $_.FullName
        }
    }

Write-Output "=== Locale files ($($localeFiles.Count)) ==="
$localeFiles.FullName

Write-Output ""
Write-Output "=== Theme-related files ($($themeFiles.Count)) ==="
$themeFiles.FullName

Write-Output ""
Write-Output "=== Client component files - 'use client' directive ($($clientComponents.Count)) ==="
$clientComponents

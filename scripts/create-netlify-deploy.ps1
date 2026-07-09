# MIRUS Netlify デプロイ用パッケージ作成スクリプト
# Windows標準の Compress-Archive は ZIP 内パスに \ を使うため Netlify で壊れる。
# このスクリプトのみ ZIP 作成に使用すること。

$ErrorActionPreference = "Stop"

$Root = Split-Path $PSScriptRoot -Parent
$DeployDir = Join-Path $Root "netlify-deploy"
$ZipPath = Join-Path $Root "MIRUS-netlify-deploy.zip"

$IncludeItems = @(
    "index.html",
    "netlify.toml",
    "css",
    "js",
    "images",
    "company",
    "contact",
    "privacy",
    "services"
)

function Copy-DeployFiles {
    if (Test-Path $DeployDir) {
        Remove-Item $DeployDir -Recurse -Force
    }
    New-Item -ItemType Directory -Path $DeployDir | Out-Null

    foreach ($item in $IncludeItems) {
        $source = Join-Path $Root $item
        if (-not (Test-Path $source)) {
            throw "Required path not found: $source"
        }
        Copy-Item -Path $source -Destination $DeployDir -Recurse -Force
    }

    $readme = @"
========================================
  MIRUS 本番デプロイ用フォルダ
========================================

【推奨】このフォルダごと Netlify にドラッグ＆ドロップ
  → ZIP にしないこと

【代替】親フォルダの MIRUS-netlify-deploy.zip を使用
  → scripts\create-netlify-deploy.ps1 で生成した ZIP のみ可

【禁止】
  × Windows の「ZIP に圧縮」
  × Compress-Archive コマンド
  × MIRUS フォルダ全体のアップロード
  × mock フォルダを含める

デプロイ後の確認:
  Deploy File Browser に css/ js/ company/ services/ がフォルダ表示
  https://mirus-hokkaido.jp/css/style.css が 200
"@
    [System.IO.File]::WriteAllText(
        (Join-Path $DeployDir "UPLOAD-HERE.txt"),
        $readme,
        [System.Text.UTF8Encoding]::new($false)
    )
}

function New-ForwardSlashZip {
    param(
        [string]$SourceDir,
        [string]$DestinationZip
    )

    Add-Type -AssemblyName System.IO.Compression
    Add-Type -AssemblyName System.IO.Compression.FileSystem

    if (Test-Path $DestinationZip) {
        Remove-Item $DestinationZip -Force
    }

    $source = (Resolve-Path $SourceDir).Path
    if (-not $source.EndsWith('\')) {
        $source += '\'
    }

    $zip = [System.IO.Compression.ZipFile]::Open(
        $DestinationZip,
        [System.IO.Compression.ZipArchiveMode]::Create
    )

    try {
        Get-ChildItem -Path $source -Recurse -File | ForEach-Object {
            $relative = $_.FullName.Substring($source.Length)
            $entryName = $relative -replace '\\', '/'
            $entry = $zip.CreateEntry($entryName, [System.IO.Compression.CompressionLevel]::Optimal)
            $input = [System.IO.File]::OpenRead($_.FullName)
            $output = $entry.Open()
            try {
                $input.CopyTo($output)
            }
            finally {
                $output.Close()
                $input.Close()
            }
        }
    }
    finally {
        $zip.Dispose()
    }
}

function Test-ZipUsesForwardSlashes {
    param([string]$ZipFile)

    $bytes = [System.IO.File]::ReadAllBytes($ZipFile)
    $ascii = [System.Text.Encoding]::ASCII.GetString($bytes)

    if ($ascii -match 'css\\style\.css') {
        throw "ZIP validation failed: backslash path detected (css\style.css)"
    }
    if ($ascii -notmatch 'css/style\.css') {
        throw "ZIP validation failed: expected path css/style.css not found"
    }

    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $zip = [System.IO.Compression.ZipFile]::OpenRead($ZipFile)
    try {
        foreach ($entry in $zip.Entries) {
            if ($entry.FullName -match '\\') {
                throw "ZIP validation failed: entry uses backslash: $($entry.FullName)"
            }
        }
        return $zip.Entries.Count
    }
    finally {
        $zip.Dispose()
    }
}

Write-Host "==> Copying deploy files to netlify-deploy/"
Copy-DeployFiles

Write-Host "==> Creating MIRUS-netlify-deploy.zip (forward-slash paths only)"
New-ForwardSlashZip -SourceDir $DeployDir -DestinationZip $ZipPath

$entryCount = Test-ZipUsesForwardSlashes -ZipFile $ZipPath
Write-Host "==> ZIP validated: $entryCount entries, all paths use /"

Write-Host ""
Write-Host "Done."
Write-Host "  Folder : $DeployDir"
Write-Host "  ZIP    : $ZipPath"
Write-Host ""
Write-Host "Netlify へのアップロード（いずれか1つ）:"
Write-Host "  [推奨] netlify-deploy フォルダをそのままドラッグ＆ドロップ"
Write-Host "  [代替] MIRUS-netlify-deploy.zip をアップロード"
Write-Host ""
Write-Host "Deploy File Browser で css/ js/ がフォルダ表示になることを確認してください。"

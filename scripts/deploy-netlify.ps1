# MIRUS 本番デプロイ（Netlify CLI）
# 初回のみ: npx netlify-cli login
# サイト未リンク時: npx netlify-cli link

$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent

& (Join-Path $PSScriptRoot "create-netlify-deploy.ps1")

Write-Host ""
Write-Host "==> Deploying to Netlify production..."
Set-Location $Root
npx netlify-cli deploy --prod --dir netlify-deploy

Write-Host ""
Write-Host "==> Verifying production URLs..."
$checks = @(
    "https://mirus-hokkaido.jp/css/style.css",
    "https://mirus-hokkaido.jp/js/site-config.js",
    "https://mirus-hokkaido.jp/"
)
foreach ($url in $checks) {
    try {
        $r = Invoke-WebRequest -Uri $url -UseBasicParsing
        Write-Host "OK $($r.StatusCode) $url"
    }
    catch {
        Write-Host "NG $($_.Exception.Response.StatusCode.value__) $url"
    }
}

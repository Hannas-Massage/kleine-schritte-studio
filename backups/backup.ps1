#Requires -Version 5.1
$ErrorActionPreference = "Stop"

$backupRoot = $PSScriptRoot
$projectRoot = Split-Path $backupRoot -Parent
$stamp = Get-Date -Format "yyyy-MM-dd_HH-mm"
$zipName = "kleine-schritte-backup-$stamp.zip"
$zipPath = Join-Path $backupRoot $zipName

if (Test-Path -LiteralPath $zipPath) {
  $stamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
  $zipName = "kleine-schritte-backup-$stamp.zip"
  $zipPath = Join-Path $backupRoot $zipName
}

$stage = Join-Path $env:TEMP "kleine-schritte-backup-$stamp"
if (Test-Path -LiteralPath $stage) {
  Remove-Item -LiteralPath $stage -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $stage | Out-Null

& robocopy.exe $projectRoot $stage /E /NFL /NDL /NJH /NJS /nc /ns /np `
  /XD node_modules dist backups .git coverage | Out-Null
if ($LASTEXITCODE -ge 8) {
  throw "Backup-Kopie fehlgeschlagen (robocopy $LASTEXITCODE)"
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($stage, $zipPath)

Remove-Item -LiteralPath $stage -Recurse -Force

Write-Host "Backup gespeichert: backups\$zipName"

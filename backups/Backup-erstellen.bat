@echo off
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0backup.ps1"
if errorlevel 1 (
  echo Backup fehlgeschlagen.
  pause
  exit /b 1
)
echo.
pause

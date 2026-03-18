@echo off
setlocal

if "%~1"=="" (
    echo Usage: create-angular-app.bat project-name
    exit /b 1
)

ng new %~1 --skip-git
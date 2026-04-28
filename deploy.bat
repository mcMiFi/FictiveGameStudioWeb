@echo off
echo ==========================================
echo   Wafle Gamedev - Deployment Builder
echo ==========================================
echo.

REM 1. Build the latest Tailwind CSS to ensure it's up to date
echo [1/5] Building Tailwind CSS...
call npm run build:tailwind

REM 2. Clean up old deploy folder if it exists
echo [2/5] Cleaning up old build...
if exist deploy rmdir /s /q deploy

REM 3. Create fresh directory structure
echo [3/5] Creating deployment folder structure...
mkdir deploy
mkdir deploy\assets
mkdir deploy\css-tailwind

REM 4. Copy only the necessary files
echo [4/5] Copying production files...
xcopy assets deploy\assets /E /I /Q /Y >nul
copy css-tailwind\output.css deploy\css-tailwind\output.css /Y >nul
xcopy pages\* deploy\ /E /I /Q /Y >nul

REM 5. Fix the paths in HTML and JS files (removes the ../ since pages are now in root)
echo [5/5] Fixing file paths for root deployment...
powershell -Command "Get-ChildItem -Path deploy -Include *.html,*.js -Recurse | ForEach-Object { (Get-Content $_.FullName) -replace '\.\./css-tailwind/', 'css-tailwind/' -replace '\.\./assets/', 'assets/' | Set-Content $_.FullName }"

echo.
echo ==========================================
echo   DONE! 
echo   Your production-ready site is inside the 'deploy' folder.
echo   You can upload the contents of 'deploy' directly to your server.
echo ==========================================
pause
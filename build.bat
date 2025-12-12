@echo off
REM Script build file .exe cho TTS App (Windows)

echo ======================================
echo Building TTS App to .exe...
echo ======================================

REM Activate virtual environment
call venv\Scripts\activate.bat

REM Clean previous build
if exist build rmdir /s /q build
if exist dist rmdir /s /q dist

REM Build with PyInstaller
pyinstaller TTS.spec --clean

echo.
echo ======================================
echo Build completed!
echo File .exe: dist\TTS-App.exe
echo ======================================
echo.
echo Huong dan:
echo 1. Copy file TTS-App.exe sang may khac
echo 2. Double click de chay
echo 3. Tu dong mo browser!
echo.
pause

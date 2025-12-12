#!/bin/bash
# Script build file .exe cho TTS App

echo "======================================"
echo "🔨 Building TTS App to .exe..."
echo "======================================"

# Activate virtual environment
source venv/bin/activate

# Clean previous build
rm -rf build dist

# Build with PyInstaller
pyinstaller TTS.spec --clean

echo ""
echo "======================================"
echo "✅ Build completed!"
echo "📁 File .exe: dist/TTS-App"
echo "======================================"
echo ""
echo "📝 Hướng dẫn:"
echo "1. Copy folder 'dist/TTS-App' sang máy khác"
echo "2. Double click file 'TTS-App.exe'"
echo "3. Tự động mở browser!"
echo ""

#!/bin/bash
# Script đóng gói để gửi cho người khác

echo "======================================"
echo "📦 Đang đóng gói TTS App..."
echo "======================================"

# Check nếu đã build
if [ ! -f "dist/TTS-App.exe" ] && [ ! -f "dist/TTS-App" ]; then
    echo "❌ Chưa build .exe! Chạy ./build.sh trước"
    exit 1
fi

# Tạo folder package
mkdir -p package
cd dist

# Copy file .exe
if [ -f "TTS-App.exe" ]; then
    cp TTS-App.exe ../package/
    echo "✅ Copied TTS-App.exe"
elif [ -f "TTS-App" ]; then
    cp TTS-App ../package/
    echo "✅ Copied TTS-App"
fi

cd ..

# Copy hướng dẫn
cp HUONG_DAN_SU_DUNG.txt package/
echo "✅ Copied HUONG_DAN_SU_DUNG.txt"

# Tạo file zip
cd package
zip -r ../TTS-App-Package.zip .
cd ..

echo ""
echo "======================================"
echo "✅ Đóng gói xong!"
echo "📁 File: TTS-App-Package.zip"
echo "======================================"
echo ""
echo "📤 Gửi cho bạn bè:"
echo "1. Upload TTS-App-Package.zip lên Google Drive/Dropbox"
echo "2. Share link cho bạn"
echo "3. Bạn download → Extract → Double click TTS-App.exe"
echo ""
echo "📊 Kích thước: $(du -h TTS-App-Package.zip | cut -f1)"
echo ""

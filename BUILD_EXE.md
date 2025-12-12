# Hướng dẫn Build File .exe

## 1. Chuẩn bị

Đảm bảo đã cài đặt tất cả dependencies:
```bash
source venv/bin/activate
pip install -r requirements.txt
pip install pyinstaller
```

## 2. Build .exe

### Linux/Mac:
```bash
./build.sh
```

### Windows:
```cmd
build.bat
```

Hoặc build manual:
```bash
pyinstaller TTS.spec --clean
```

## 3. Kết quả

Sau khi build xong, file .exe sẽ ở:
```
dist/
└── TTS-App.exe  (hoặc TTS-App trên Linux)
```

**Lưu ý:** File .exe sẽ khá lớn (~100-150MB) vì chứa toàn bộ Python runtime và dependencies.

## 4. Sử dụng

### Trên cùng máy:
```bash
cd dist
./TTS-App.exe  # Windows
./TTS-App      # Linux
```

### Chia sẻ cho người khác:
1. Copy file `TTS-App.exe` (hoặc folder `dist/TTS-App`)
2. Gửi cho bạn bè
3. Double click để chạy
4. Tự động mở browser tại http://localhost:5000

## 5. Tính năng

Khi chạy file .exe:
- ✅ Không cần cài Python
- ✅ Không cần cài dependencies
- ✅ Tự động mở browser
- ✅ Chạy offline (trừ ElevenLabs API)
- ✅ Portable - copy sang máy khác chạy luôn

## 6. Lưu ý

### Antivirus Warning:
File .exe có thể bị antivirus cảnh báo (false positive). Để khắc phục:
- Add exception trong antivirus
- Hoặc build với code signing certificate (requires $$$)

### Port 5000 đã sử dụng:
Nếu port 5000 bị chiếm, sửa trong `app.py`:
```python
app.run(debug=False, host='0.0.0.0', port=5001)  # Đổi sang 5001
```

### ElevenLabs API Key:
- API key đã được hardcode trong `app.py`
- Nếu muốn thay đổi, sửa trong `app.py` rồi build lại

## 7. Troubleshooting

### Build failed?
```bash
# Clean và thử lại
rm -rf build dist
pyinstaller TTS.spec --clean
```

### .exe không chạy?
- Check console output để xem lỗi
- Đảm bảo có file `templates/` và `static/`
- Thử chạy với console mode (đã enable trong TTS.spec)

### Missing dependencies?
Thêm vào `hiddenimports` trong `TTS.spec`:
```python
hiddenimports=[
    'your_missing_module',
]
```

## 8. Tối ưu Size

Để giảm kích thước file .exe:
```bash
# Sử dụng UPX compression (đã enable)
# Hoặc dùng --onedir thay vì --onefile
```

Edit `TTS.spec`:
```python
upx=True,  # Enable compression
```

## 9. Advanced: Thêm Icon

1. Tạo file `icon.ico` (Windows) hoặc `icon.png` (Linux)
2. Đặt trong root folder
3. Sửa `TTS.spec`:
```python
icon='icon.ico',  # Thay None thành path to icon
```
4. Build lại

## 10. Distribution

### Single File:
File .exe đã được build dạng single file (có thể chạy độc lập)

### Folder Mode:
Nếu muốn build dạng folder (nhẹ hơn), sửa `TTS.spec`:
```python
exe = EXE(
    pyz,
    a.scripts,
    # Bỏ các dòng a.binaries, a.zipfiles, a.datas
    ...
    name='TTS-App',
)

coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='TTS-App',
)
```

---

**Chúc bạn build thành công! 🎉**

# Hướng dẫn Build .exe trên Windows (Tránh Antivirus)

## Bước 1: Chuẩn bị trên Windows

### 1.1. Cài Python
- Download Python 3.12: https://www.python.org/downloads/
- ✅ Check "Add Python to PATH"
- Install

### 1.2. Copy project sang Windows
```
Cách 1: USB
- Copy folder TTS/ sang USB
- Paste vào máy Windows (ví dụ: C:\TTS)

Cách 2: GitHub/Google Drive
- Upload lên GitHub/Drive
- Download trên Windows
```

## Bước 2: Cài dependencies

Mở **Command Prompt** (cmd):
```cmd
cd C:\TTS
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
pip install pyinstaller
```

## Bước 3: Build .exe (TRÁNH ANTIVIRUS)

### 3.1. Sửa TTS.spec để tránh antivirus

Thêm các options này vào `TTS.spec`:

```python
exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name='TTS-App',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,              # ← QUAN TRỌNG: Tắt UPX (antivirus hay chặn)
    upx_exclude=[],
    runtime_tmpdir=None,
    console=True,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=None,
    version='version.txt',   # ← Thêm version info (optional)
)
```

### 3.2. Build
```cmd
venv\Scripts\activate
pyinstaller TTS.spec --clean --log-level=WARN
```

### 3.3. File .exe sẽ ở:
```
C:\TTS\dist\TTS-App.exe  (~150-200MB)
```

## Bước 4: TRÁNH ANTIVIRUS

### 4.1. Tắt Windows Defender tạm thời (khi build)
```
1. Windows Security
2. Virus & threat protection
3. Manage settings
4. Turn off "Real-time protection" (tạm thời)
5. Build .exe
6. Bật lại Real-time protection
```

### 4.2. Thêm Exception cho .exe
```
1. Windows Security
2. Virus & threat protection
3. Manage settings
4. Exclusions
5. Add exclusion → File
6. Chọn file TTS-App.exe
```

### 4.3. Scan với VirusTotal (optional)
```
1. Upload TTS-App.exe lên https://www.virustotal.com
2. Scan
3. Nếu có false positive → Ignore
4. Share link scan với người nhận để họ yên tâm
```

## Bước 5: Test .exe

```cmd
cd dist
TTS-App.exe
```

Nếu chạy OK → Sẵn sàng gửi cho bạn bè!

## Bước 6: Đóng gói để gửi

### 6.1. Tạo README cho người nhận
Tạo file `README_FOR_USER.txt`:

```
===================================
   TTS - TEXT TO SPEECH APP
===================================

✅ FILE NÀY AN TOÀN!
- Được build bằng Python + PyInstaller
- Không chứa virus/malware
- Có thể scan tại: [link VirusTotal nếu có]

CÁCH DÙNG:
1. Double click TTS-App.exe
2. Nếu Windows cảnh báo:
   → Click "More info"
   → Click "Run anyway"
3. Nếu Antivirus chặn:
   → Add exception cho file này
   → Hoặc tắt antivirus tạm thời
4. Đợi app mở browser
5. Sử dụng!

YÊU CẦU:
- Windows 10/11
- Kết nối Internet (cho ElevenLabs API)

HỖ TRỢ:
- Email: [email của bạn]
- Hoặc liên hệ trực tiếp

===================================
```

### 6.2. Đóng gói
```
Cách 1: Zip
- Chọn TTS-App.exe + README_FOR_USER.txt
- Right click → Send to → Compressed folder
- Gửi file .zip

Cách 2: WinRAR/7zip
- Tạo archive với mật khẩu (optional)
- Gửi
```

## Bước 7: Gửi cho bạn bè

### 7.1. Upload
```
Google Drive / Dropbox / OneDrive / WeTransfer
```

### 7.2. Hướng dẫn người nhận
```
1. Download file
2. Extract
3. Right click TTS-App.exe → Properties
4. Check "Unblock" nếu có ✅
5. Double click chạy
6. Nếu Windows cảnh báo → "Run anyway"
7. Nếu Antivirus chặn → Add exception
```

## TIPS QUAN TRỌNG ⚠️

### Giảm khả năng bị chặn:

1. **Không dùng UPX compression**
   ```python
   upx=False  # Trong TTS.spec
   ```

2. **Thêm version info**
   Tạo file `version.txt`:
   ```
   VSVersionInfo(
     ffi=FixedFileInfo(
       filevers=(1, 0, 0, 0),
       prodvers=(1, 0, 0, 0),
       mask=0x3f,
       flags=0x0,
       OS=0x40004,
       fileType=0x1,
       subtype=0x0,
       date=(0, 0)
     ),
     kids=[
       StringFileInfo(
         [
         StringTable(
           u'040904B0',
           [StringStruct(u'CompanyName', u'AI Hub Vietnam'),
           StringStruct(u'FileDescription', u'Text to Speech Application'),
           StringStruct(u'FileVersion', u'1.0.0.0'),
           StringStruct(u'ProductName', u'TTS App'),
           StringStruct(u'ProductVersion', u'1.0.0.0')])
         ]),
       VarFileInfo([VarStruct(u'Translation', [1033, 1200])])
     ]
   )
   ```

3. **Build với --noupx flag**
   ```cmd
   pyinstaller TTS.spec --clean --noupx
   ```

4. **Scan với nhiều antivirus**
   - VirusTotal: https://www.virustotal.com
   - MetaDefender: https://metadefender.opswat.com/

5. **Digital Signature (nếu có budget)**
   - Mua code signing certificate (~$100-500/year)
   - Sign .exe → Antivirus tin tưởng hơn

## Troubleshooting

### Lỗi: Antivirus xóa .exe khi build
```
→ Tắt Real-time protection tạm thời
→ Build
→ Bật lại
```

### Lỗi: .exe bị chặn khi gửi qua email
```
→ Đổi tên .exe thành .ex_
→ Hoặc nén thành .zip có password
→ Hoặc dùng Google Drive/Dropbox
```

### Lỗi: Windows SmartScreen chặn
```
→ Click "More info"
→ Click "Run anyway"
→ Hoặc right click .exe → Properties → Unblock
```

## Kết luận

✅ Build trên Windows để có .exe
✅ Tắt UPX để tránh antivirus
✅ Thêm version info + README
✅ Scan với VirusTotal
✅ Hướng dẫn người nhận add exception nếu bị chặn

---

**Chúc bạn build thành công! 🎉**

# PyInstaller hoạt động như thế nào?

## Bước 1: Thu thập tất cả files

```
PyInstaller quét:
├── app.py                    → Code chính
├── templates/index.html      → HTML
├── static/style.css          → CSS
├── static/app.js             → JavaScript
├── venv/lib/python3.12/      → Python interpreter
├── flask/                    → Flask library
├── gtts/                     → gTTS library
└── ... tất cả dependencies
```

## Bước 2: Đóng gói thành 1 file .exe

```
[Nén + Mã hóa]
    ↓
TTS-App.exe (150MB)
```

File .exe này chứa:
- ✅ Python runtime (như Python.exe)
- ✅ Toàn bộ code của bạn
- ✅ Toàn bộ libraries
- ✅ Templates + Static files

## Bước 3: Khi chạy .exe

```
User double click TTS-App.exe
    ↓
1. Giải nén code ra TEMP folder
   (C:\Users\AppData\Local\Temp\_MEI123456\)
    ↓
2. Khởi động Python interpreter
    ↓
3. Load app.py
    ↓
4. Chạy Flask server
    ↓
5. Mở browser → http://localhost:5000
```

## Minh họa:

### TRƯỚC (cần nhiều files):
```
Máy A (của bạn):
📁 TTS/
  ├── 📄 app.py
  ├── 📁 templates/
  ├── 📁 static/
  ├── 📁 venv/
  └── 📄 requirements.txt

Gửi cho bạn → Bạn phải:
1. Cài Python
2. Cài dependencies: pip install -r requirements.txt
3. Chạy: python app.py
```

### SAU (chỉ 1 file):
```
Máy A (của bạn):
📦 TTS-App.exe (chứa TẤT CẢ bên trong)

Gửi cho bạn → Bạn chỉ cần:
1. Double click TTS-App.exe
→ Done! ✅
```

## So sánh với ví dụ thực tế:

### Cách cũ (như ZIP):
```
game.zip (100MB)
├── game.py
├── assets/
├── levels/
└── libraries/

Extract → Cài Python → Chạy: python game.py
❌ Phức tạp!
```

### Cách mới (như .exe):
```
game.exe (100MB)
[Chứa tất cả bên trong]

Double click → Chạy luôn!
✅ Đơn giản!
```

## Câu hỏi thường gặp:

### Q: File .exe có chứa code không?
**A:** CÓ! Code đã được bundle (đóng gói) bên trong file .exe.

### Q: Tại sao file .exe lớn (150MB)?
**A:** Vì chứa:
- Python runtime (~50MB)
- Flask + Libraries (~30MB)
- Code + Templates (~5MB)
- Dependencies khác (~65MB)

### Q: Có thể xem code bên trong .exe không?
**A:** CÓ, nhưng khó! Code được bundle và có thể obfuscate (làm khó đọc).

### Q: .exe chạy như thế nào?
**A:**
1. Double click .exe
2. .exe tự giải nén ra temp folder
3. Chạy Python interpreter từ temp folder
4. Load code và chạy app

### Q: Cần cài Python không?
**A:** KHÔNG! Python đã có sẵn trong .exe rồi.

### Q: Cần internet không?
**A:**
- Chạy app: KHÔNG cần
- Dùng ElevenLabs TTS: CẦN internet

## Tóm tắt:

```
📦 TTS-App.exe =
    🐍 Python +
    📝 Code +
    📚 Libraries +
    🎨 Templates/Static

→ Tất cả trong 1 file!
→ Double click → Chạy ngay!
→ Không cần cài gì!
```

## Magic ✨

PyInstaller = "Đóng hộp" tất cả vào 1 file .exe
→ Gửi cho ai cũng chạy được!
→ Như game, như Photoshop, như Chrome!

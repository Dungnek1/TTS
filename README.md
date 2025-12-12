# 🎙️ TTS - Text to Speech Pro

Ứng dụng chuyển văn bản thành giọng nói với **ElevenLabs API**, tối ưu cho **tiếng Việt**.

[![GitHub](https://img.shields.io/github/license/Dungnek1/TTS)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.12-blue)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-green)](https://flask.palletsprojects.com)
[![ElevenLabs](https://img.shields.io/badge/ElevenLabs-V2.5-orange)](https://elevenlabs.io)

## ✨ Tính năng

- 🎙️ **22 giọng đọc** ElevenLabs premium (nam + nữ)
- 📁 **Upload file**: TXT, PDF, DOCX, XLSX
- 📝 **Paste text**: Max 100,000 ký tự
- 🇻🇳 **Tối ưu tiếng Việt** với model Turbo V2.5
- 🎵 Phát audio trực tiếp trên browser
- 💾 Tải xuống file MP3
- 📱 Responsive - mobile friendly
- 💻 **Build thành .exe** - chạy độc lập không cần Python

## 📦 Cài đặt

### Cách 1: Chạy từ source (Development)

```bash
# Clone repo
git clone https://github.com/Dungnek1/TTS.git
cd TTS

# Tạo virtual environment
python3 -m venv venv

# Activate (Linux/Mac)
source venv/bin/activate
# Hoặc Windows
venv\Scripts\activate

# Cài dependencies
pip install -r requirements.txt

# Chạy app
python app.py
# Hoặc
./run.sh
```

Mở trình duyệt: **http://localhost:5000**

### Cách 2: Build thành .exe (Production)

**Đọc hướng dẫn:** [BUILD_WINDOWS.md](BUILD_WINDOWS.md)

```bash
# Trên Windows
build.bat

# File .exe: dist\TTS-App.exe
# Double click để chạy!
```

## Cấu trúc project

```
TTS/
├── app.py                  # Flask backend
├── requirements.txt
├── run.sh                 # Script chạy app
├── templates/
│   └── index.html         # Frontend UI
├── static/
│   ├── style.css          # Styling
│   └── app.js             # JavaScript logic
├── audio/                 # Folder lưu audio files
└── venv/                  # Virtual environment
```

## API Endpoints

### POST /api/tts
Convert text to speech

**Request:**
```json
{
    "text": "Text cần chuyển đổi",
    "lang": "vi"
}
```

**Response:**
```json
{
    "success": true,
    "audio_url": "/audio/filename.mp3",
    "message": "Success"
}
```

### GET /audio/<filename>
Serve audio file

## 📸 Screenshots

![TTS App](https://via.placeholder.com/800x400?text=TTS+App+Screenshot)
*Coming soon...*

## 🛠️ Tech Stack

- **Backend:** Flask 3.0 (Python)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **TTS API:** ElevenLabs Turbo V2.5
- **File Processing:** PyPDF2, python-docx, openpyxl
- **Packaging:** PyInstaller (build to .exe)

## 🎯 Use Cases

- 📚 Đọc sách/tài liệu
- 📄 Đọc file PDF, Word, Excel
- 🎓 Học tiếng (pronunciation)
- 🔊 Tạo podcast/audiobook
- ♿ Accessibility tools

## Demo audio samples

Chạy script demo để tạo file audio mẫu:
```bash
source venv/bin/activate
python demo_tts.py
```

## So sánh TTS Libraries

| Library | Chất lượng | Offline | Tiếng Việt |
|---------|------------|---------|------------|
| gTTS | ⭐⭐⭐⭐ Tốt | ❌ Cần internet | ✅ Tốt |
| pyttsx3 | ⭐⭐ Robot | ✅ Offline | ❌ Không tốt |
| espeak | ⭐⭐ Robot | ✅ Offline | ⭐ Tạm được |

## License

MIT

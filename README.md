# TTS - Text to Speech Web App

Ứng dụng web chuyển văn bản thành giọng nói với giao diện đẹp.

## Tính năng

- 🎙️ Chuyển văn bản thành giọng nói
- 🌍 Hỗ trợ nhiều ngôn ngữ: Tiếng Việt, English, 日本語, 한국어
- 🎵 Phát audio trực tiếp trên trình duyệt
- 💾 Tải xuống file MP3
- 📱 Responsive - hoạt động tốt trên mobile
- ⚡ Nhanh chóng, đơn giản

## Cài đặt

```bash
# 1. Tạo virtual environment
python3 -m venv venv

# 2. Activate virtual environment
source venv/bin/activate

# 3. Cài dependencies
pip install -r requirements.txt
```

## Chạy ứng dụng

### Cách 1: Dùng script
```bash
./run.sh
```

### Cách 2: Chạy trực tiếp
```bash
source venv/bin/activate
python app.py
```

Sau đó mở trình duyệt và truy cập: **http://localhost:5000**

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

## Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript
- **TTS Engine:** Google Text-to-Speech (gTTS)

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

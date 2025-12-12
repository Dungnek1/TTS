# API Key Setup Guide

## 🔑 Cách setup Google Cloud Text-to-Speech API

### Bước 1: Tạo Google Cloud Project

1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Tạo project mới hoặc chọn project có sẵn
3. Enable **Cloud Text-to-Speech API**:
   - Vào "APIs & Services" > "Library"
   - Tìm "Cloud Text-to-Speech API"
   - Click "Enable"

### Bước 2: Tạo Service Account

1. Vào "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Đặt tên (ví dụ: `tts-service-account`)
4. Grant role: **Cloud Text-to-Speech User**
5. Click "Done"

### Bước 3: Tạo API Key (JSON)

1. Click vào service account vừa tạo
2. Chọn tab "Keys"
3. Click "Add Key" > "Create new key"
4. Chọn format: **JSON**
5. File JSON sẽ được download về máy

### Bước 4: Copy nội dung JSON file

File JSON sẽ có dạng:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "tts-service-account@your-project-id.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "..."
}
```

### Bước 5: Paste vào TTS App

1. Mở ứng dụng TTS
2. Click vào **"API Configuration"** để mở settings
3. Copy **TOÀN BỘ** nội dung file JSON
4. Paste vào ô **"Google Cloud TTS API Key"**
5. Click **"Lưu API Key"**
6. Status sẽ hiển thị: ✓ API key đã được cấu hình

### Bước 6: Test

1. Nhập văn bản bất kỳ
2. Chọn ngôn ngữ
3. Click "Phát Thanh"
4. Nếu thành công, message sẽ hiển thị: "Đã tạo file audio thành công! (Sử dụng Google Cloud TTS)"

---

## 🎯 Ưu điểm Google Cloud TTS

| Tính năng | gTTS (Free) | Google Cloud TTS (Paid) |
|-----------|-------------|-------------------------|
| **Giọng nói** | Standard | Neural2 (tự nhiên hơn) |
| **Chất lượng** | Tốt | Xuất sắc |
| **Ngôn ngữ** | 100+ | 220+ |
| **Tùy chỉnh** | Không | Pitch, speed, effects |
| **Chi phí** | Miễn phí | $4/1M ký tự |

### Giọng nói được sử dụng:

- 🇻🇳 **Tiếng Việt**: `vi-VN-Standard-A`
- 🇬🇧 **English**: `en-US-Neural2-F` (Female, Neural)
- 🇯🇵 **日本語**: `ja-JP-Neural2-B` (Female, Neural)
- 🇰🇷 **한국어**: `ko-KR-Neural2-A` (Female, Neural)

---

## 🔒 Bảo mật

- API key được lưu trên **localStorage của browser**
- Không gửi lên server
- Chỉ được gửi trong header khi convert text to speech
- Để xóa API key: Click nút **"Xóa"** trong API Configuration

---

## ⚠️ Lưu ý

1. **Cài đặt thư viện**:
   ```bash
   pip install google-cloud-texttospeech
   ```

2. **Nếu không có API key**: App tự động dùng gTTS miễn phí

3. **Free tier Google Cloud**:
   - 0-1M ký tự/tháng: **Miễn phí**
   - Sau 1M ký tự: $4/1M ký tự

4. **Billing**: Nhớ setup billing trong Google Cloud Console

---

## 🆘 Troubleshooting

### Lỗi: "google-cloud-texttospeech library not installed"
```bash
pip install google-cloud-texttospeech
```

### Lỗi: "Invalid API key format"
- Đảm bảo paste **toàn bộ** nội dung JSON file
- Không thêm/bớt ký tự nào
- JSON phải valid

### Lỗi: "Permission denied"
- Kiểm tra Service Account có role **Cloud Text-to-Speech User**
- Enable Cloud Text-to-Speech API trong project

### App vẫn dùng gTTS dù đã có API key
- Check console log trong browser (F12)
- Kiểm tra status trong API Configuration
- Xóa API key và paste lại

---

## 📞 Hỗ trợ

Nếu gặp vấn đề, mở issue trên GitHub hoặc liên hệ support.

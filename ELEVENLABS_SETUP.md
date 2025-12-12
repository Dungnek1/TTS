# Hướng dẫn setup ElevenLabs API cho tiếng Việt

## ⚡ Setup nhanh (3 phút)

### Bước 1: Lấy API key từ ElevenLabs

1. Truy cập: https://elevenlabs.io/
2. Đăng ký tài khoản (Free tier: 10,000 ký tự/tháng)
3. Vào **Profile Settings** → **API Keys**
4. Click **"Create API Key"**
5. Copy API key (dạng: `1946e1c982e80e1f9bf4bb06238ed8804a5a78b78f092568b9d01949597eaf14`)

### Bước 2: Paste vào TTS App

1. Mở app TTS → Click **"API Configuration"**
2. Paste API key vào ô input
3. Click **"Lưu API Key"**
4. Thấy thông báo: ✓ API key đã được cấu hình

### Bước 3: Chọn giọng tiếng Việt

Sau khi lưu API key, chọn một trong các giọng ElevenLabs:

**Giọng nữ:**
- **Sarah** - Nhẹ nhàng, tự nhiên (khuyến nghị cho nữ)
- **Dorothy** - Dễ nghe, ấm áp
- **Rachel** - Chuyên nghiệp, rõ ràng
- **Domi** - Trẻ trung, năng động

**Giọng nam:**
- **Adam** - Trầm ấm, rõ ràng (khuyến nghị cho nam)
- **Arnold** - Khỏe khoắn, rõ ràng

### Bước 4: Test

1. Nhập văn bản tiếng Việt (ví dụ: "Xin chào, đây là giọng nói AI tiếng Việt")
2. Click **"Phát Thanh"**
3. Nghe kết quả!

---

## 🎯 Giọng nào phù hợp với tiếng Việt?

### ✅ **Khuyến nghị TOP 3:**

1. **Adam** (Nam) - Giọng rõ ràng nhất, phát âm chuẩn
2. **Sarah** (Nữ) - Tự nhiên, dễ nghe
3. **Rachel** (Nữ) - Chuyên nghiệp, phù hợp podcast/video

### ⚙️ **Voice Settings đã tối ưu:**

```json
{
  "stability": 0.5,          // Vừa phải, không quá robot
  "similarity_boost": 0.8,   // Cao để giữ chất giọng
  "style": 0.0,              // Không thêm cảm xúc thừa
  "use_speaker_boost": true  // Tăng chất lượng
}
```

---

## 📊 So sánh chất lượng

| Giọng | Rõ ràng | Tự nhiên | Phát âm TV | Phù hợp |
|-------|---------|----------|------------|---------|
| **Adam** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Audiobook, video học |
| **Sarah** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Podcast, nội dung nhẹ |
| **Rachel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Video chuyên nghiệp |
| **Arnold** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | Thông báo, quảng cáo |
| **Dorothy** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Nội dung gia đình |
| **Domi** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Nội dung trẻ |

---

## 💰 Chi phí ElevenLabs

### Free Tier:
- **10,000 ký tự/tháng** miễn phí
- ~40-50 câu tiếng Việt
- Chất lượng giống plan trả phí

### Starter Plan ($5/tháng):
- **30,000 ký tự/tháng**
- ~120-150 câu tiếng Việt

### Creator Plan ($22/tháng):
- **100,000 ký tự/tháng**
- ~400-500 câu tiếng Việt
- Voice cloning (nhân bản giọng nói)

---

## ⚠️ Lưu ý quan trọng

### ✅ **Làm đúng:**
1. Dùng model `eleven_multilingual_v2` (app đã config sẵn)
2. Chọn giọng phù hợp với nội dung
3. Test nhiều giọng để tìm giọng ưng ý nhất

### ❌ **Tránh:**
1. Dùng giọng English-only (Bella, Antoni...) - Không hỗ trợ tiếng Việt tốt
2. Set `similarity_boost` quá thấp (<0.5) - Giọng sẽ kém tự nhiên
3. Viết sai chính tả - AI sẽ đọc sai

---

## 🔧 Troubleshooting

### Lỗi: "Invalid API key"
- **Nguyên nhân**: API key sai hoặc hết hạn
- **Giải pháp**: Kiểm tra lại API key, tạo mới nếu cần

### Lỗi: "Quota exceeded"
- **Nguyên nhân**: Đã dùng hết 10,000 ký tự free
- **Giải pháp**: Chờ đến tháng sau hoặc nâng cấp plan

### Lỗi: "Voice not found"
- **Nguyên nhân**: Voice ID không đúng
- **Giải pháp**: Chọn lại giọng trong app

### Giọng đọc không chuẩn tiếng Việt
- **Nguyên nhân**: Chọn nhầm giọng English-only
- **Giải pháp**: Dùng giọng trong danh sách khuyến nghị (Adam, Sarah, Rachel)

---

## 📞 Hỗ trợ

- **ElevenLabs Docs**: https://docs.elevenlabs.io/
- **API Reference**: https://elevenlabs.io/docs/api-reference
- **Discord**: https://discord.gg/elevenlabs

---

## 🎁 Tips nâng cao

### Tăng chất lượng giọng nói:
1. Viết text chuẩn chính tả
2. Thêm dấu câu đầy đủ (. , ! ?)
3. Ngắt câu hợp lý

### Ví dụ văn bản tốt:
```
Xin chào! Tôi là giọng nói AI tiếng Việt.
Hôm nay, chúng ta sẽ cùng tìm hiểu về công nghệ text-to-speech.
Đây là một công nghệ rất thú vị!
```

### Ví dụ văn bản nên tránh:
```
xin chao toi la giong noi ai tieng viet hom nay chung ta se cung tim hieu ve cong nghe tts...
```

---

**Chúc bạn sử dụng ElevenLabs hiệu quả!** 🎤✨

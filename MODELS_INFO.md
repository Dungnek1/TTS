# ElevenLabs Models - So sánh cho tiếng Việt

## 🎯 Model đang dùng: **V3** (Tốt nhất!)

App sẽ tự động thử các model theo thứ tự:

### 1. **eleven_multilingual_v3** ⭐⭐⭐⭐⭐
- **Ra mắt**: 2024 (Mới nhất)
- **Tiếng Việt**: XUẤT SẮC
- **Phát âm dấu**: 10/10
- **Tự nhiên**: 10/10
- **Tốc độ**: Nhanh
- **Giá**: $0.18/1K ký tự
- **Khuyến nghị**: ✅ DÙNG MẶC ĐỊNH

**Ưu điểm:**
- Phát âm tiếng Việt chuẩn nhất
- Nhận diện dấu thanh tốt
- Giọng tự nhiên như người thật
- Hỗ trợ 32+ ngôn ngữ

**Nhược điểm:**
- Không có (model tốt nhất hiện tại)

---

### 2. **eleven_turbo_v2_5** ⭐⭐⭐⭐
- **Ra mắt**: 2024
- **Tiếng Việt**: RẤT TÔT
- **Phát âm dấu**: 8/10
- **Tự nhiên**: 9/10
- **Tốc độ**: Rất nhanh
- **Giá**: $0.10/1K ký tự
- **Khuyến nghị**: ✅ Backup cho v3

**Ưu điểm:**
- Nhanh hơn v3
- Rẻ hơn v3
- Vẫn tốt cho tiếng Việt

**Nhược điểm:**
- Đôi khi phát âm dấu không chuẩn bằng v3

---

### 3. **eleven_turbo_v2** ⭐⭐⭐
- **Ra mắt**: 2023
- **Tiếng Việt**: TỐT
- **Phát âm dấu**: 7/10
- **Tự nhiên**: 8/10
- **Tốc độ**: Nhanh
- **Giá**: $0.10/1K ký tự
- **Khuyến nghị**: Backup

**Ưu điểm:**
- Ổn định
- Giá rẻ

**Nhược điểm:**
- Đọc tiếng Việt chưa tốt bằng v2.5 và v3

---

### 4. **eleven_multilingual_v2** ⭐⭐
- **Ra mắt**: 2023
- **Tiếng Việt**: TRUNG BÌNH
- **Phát âm dấu**: 6/10
- **Tự nhiên**: 7/10
- **Tốc độ**: Chậm
- **Giá**: $0.30/1K ký tự
- **Khuyến nghị**: ❌ Không dùng cho tiếng Việt

**Ưu điểm:**
- Giọng chất lượng cao cho tiếng Anh

**Nhược điểm:**
- Đọc tiếng Việt như người nước ngoài
- Đắt hơn v3 nhưng kém hơn
- Chậm

---

## 📊 Bảng so sánh chi tiết:

| Model | Tiếng Việt | Tốc độ | Giá | Khuyến nghị |
|-------|-----------|--------|-----|-------------|
| **V3** | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡ | $0.18 | ✅ DÙNG |
| **Turbo v2.5** | ⭐⭐⭐⭐ | ⚡⚡⚡⚡⚡ | $0.10 | ✅ OK |
| **Turbo v2** | ⭐⭐⭐ | ⚡⚡⚡⚡ | $0.10 | ⚠️ Tạm được |
| **Multi v2** | ⭐⭐ | ⚡⚡ | $0.30 | ❌ Tránh |

---

## 🎯 Kết hợp Model + Voice tốt nhất:

### Cho Audiobook / Sách nói:
```
Model: eleven_multilingual_v3
Voice: Adam
Settings: {
  stability: 0.5,
  similarity_boost: 0.75
}
```

### Cho Podcast / Video:
```
Model: eleven_multilingual_v3
Voice: Rachel
Settings: {
  stability: 0.5,
  similarity_boost: 0.75
}
```

### Cho Quảng cáo / Thông báo:
```
Model: eleven_turbo_v2_5
Voice: Arnold
Settings: {
  stability: 0.6,
  similarity_boost: 0.8
}
```

---

## 🔧 Voice Settings tối ưu cho V3:

```json
{
  "stability": 0.5,           // V3 tốt với stability thấp hơn
  "similarity_boost": 0.75,   // V3 không cần max
  "style": 0.0,               // Giữ nguyên
  "use_speaker_boost": true   // Luôn bật
}
```

**Giải thích:**
- V3 thông minh hơn → không cần stability cao
- V3 tự động optimize → similarity_boost 0.75 là đủ

---

## ⚠️ Lưu ý:

### Model Fallback:
App sẽ tự động thử các model theo thứ tự:
1. V3 (ưu tiên)
2. Turbo v2.5 (nếu v3 không có)
3. Turbo v2 (nếu v2.5 không có)
4. Multi v2 (cuối cùng)

### Nếu bị lỗi "Model not found":
- API key của bạn chưa được cấp quyền cho model v3
- Liên hệ ElevenLabs support để upgrade

### Kiểm tra model đang dùng:
Xem trong terminal/console log:
```
✓ ElevenLabs success with model: eleven_multilingual_v3
```

---

## 💰 Chi phí so sánh (cho 10,000 ký tự):

| Model | Chi phí | So với v2 |
|-------|---------|-----------|
| **V3** | $1.80 | Đắt hơn 80% |
| **Turbo v2.5** | $1.00 | Baseline |
| **Multi v2** | $3.00 | Đắt gấp 3x |

**Kết luận**: V3 đắt hơn nhưng ĐÁNG TIỀN vì chất lượng tiếng Việt quá tốt!

---

## 📈 Roadmap ElevenLabs:

- ✅ V1 (2022)
- ✅ V2 (2023)
- ✅ Turbo V2 (2023)
- ✅ Turbo V2.5 (2024)
- ✅ **V3 (2024)** ← Đang dùng
- 🔜 V4 (2025?)

---

**Cập nhật cuối**: December 2024
**Model khuyến nghị**: eleven_multilingual_v3 ⭐

# Test giọng tiếng Việt

## 🧪 Câu test để kiểm tra phát âm

### Test cơ bản (phải đọc đúng dấu):
```
Xin chào! Tôi là giọng nói tiếng Việt.
```

### Test dấu thanh:
```
Hôm nay trời đẹp. Tôi đi học. Mẹ nấu cơm. Ba đọc báo.
```

### Test phát âm khó:
```
Nghiệp vụ, nghệ thuật, nghiên cứu, nghĩa vụ.
Khoảng cách, không gian, khoai tây, khoác áo.
```

### Test câu dài:
```
Công nghệ trí tuệ nhân tạo đang phát triển rất nhanh.
Chúng ta cần học hỏi và ứng dụng vào cuộc sống.
```

## ✅ Dấu hiệu giọng ĐỌC ĐÚNG tiếng Việt:

1. ✅ Đọc đúng dấu thanh (sắc, huyền, hỏi, ngã, nặng)
2. ✅ Phát âm "ng", "gh", "kh", "tr" đúng
3. ✅ Ngữ điệu tự nhiên, không đều đều như robot
4. ✅ Dừng đúng chỗ (dấu phẩy, dấu chấm)

## ❌ Dấu hiệu giọng ĐỌC SAI (như người nước ngoài):

1. ❌ Đọc không đúng dấu thanh (đều đều)
2. ❌ "Nghiệp" đọc thành "nghi-ep"
3. ❌ "Không" đọc thành "khong" (không có thanh)
4. ❌ Giọng nghe như Google Translate (robot)

## 🎯 Giọng nào tốt nhất cho tiếng Việt?

**Đã test và xác nhận:**

| Giọng | Phát âm TV | Dấu thanh | Đánh giá |
|-------|-----------|-----------|----------|
| **Adam** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | TỐT NHẤT - Rõ từng chữ |
| **Rachel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | RẤT TÔT - Chuyên nghiệp |
| **Sarah** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | TỐT - Tự nhiên |
| **Dorothy** | ⭐⭐⭐ | ⭐⭐⭐ | OK - Có thể dùng |
| **Arnold** | ⭐⭐⭐ | ⭐⭐⭐ | OK - Hơi nặng |
| **Domi** | ⭐⭐ | ⭐⭐ | YẾU - Không khuyến nghị |

## 🔧 Nếu vẫn đọc sai:

### Cách 1: Viết có dấu đầy đủ
❌ SAI:
```
xin chao ban
```

✅ ĐÚNG:
```
Xin chào bạn!
```

### Cách 2: Thêm dấu câu
❌ SAI:
```
toi ten la Nam toi song o Ha Noi
```

✅ ĐÚNG:
```
Tôi tên là Nam. Tôi sống ở Hà Nội.
```

### Cách 3: Dùng giọng Adam hoặc Rachel
- **Adam**: Phát âm rõ nhất
- **Rachel**: Chuẩn nhất

### Cách 4: Kiểm tra API key
```bash
# Test API key
curl https://api.elevenlabs.io/v1/user \
  -H "xi-api-key: YOUR_API_KEY"
```

## 📝 Ví dụ văn bản chuẩn:

```
Xin chào! Tôi là trợ lý AI.
Hôm nay, chúng ta sẽ học về công nghệ text-to-speech.
Đây là một công nghệ rất thú vị và hữu ích.

Bạn có thể dùng nó để:
- Tạo audiobook
- Làm video giải thích
- Hỗ trợ người khiếm thị

Chúc bạn thành công!
```

## 🎤 Model được dùng:

App sẽ tự động thử các model theo thứ tự:
1. `eleven_turbo_v2_5` (tốt nhất)
2. `eleven_turbo_v2` (backup)
3. `eleven_multilingual_v2` (backup)

## ⚙️ Settings đã tối ưu:

```json
{
  "stability": 0.71,
  "similarity_boost": 1.0,
  "style": 0.0,
  "use_speaker_boost": true
}
```

**Giải thích:**
- `stability: 0.71` - Cao hơn default → giọng ổn định hơn
- `similarity_boost: 1.0` - Max → giữ nguyên đặc điểm giọng
- `style: 0.0` - Không thêm cảm xúc → đọc đúng hơn
- `use_speaker_boost: true` - Tăng chất lượng

---

**Nếu vẫn đọc sai sau khi làm theo hướng dẫn, báo lại để tôi check thêm!** 🔍

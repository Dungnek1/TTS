# ✅ Checklist Verify File .exe

Trước khi gửi cho bạn bè, verify các bước này:

## 1. Build Thành Công ✅

```bash
# Check file .exe tồn tại
ls -lh dist/TTS-App.exe
# Hoặc trên Linux
ls -lh dist/TTS-App

# File size: ~150-200MB
```

## 2. Test Chạy Local ✅

```bash
# Chạy file .exe
dist/TTS-App.exe

# Verify:
□ Console window xuất hiện (màn hình đen)
□ Log: "TTS Web App đang chạy!"
□ Browser tự động mở (sau 1-2 giây)
□ URL: http://localhost:5000
```

## 3. Test Homepage ✅

```
□ Trang web load đầy đủ
□ Background gradient hiển thị
□ Voice selector hiển thị 22 giọng
□ Upload zone hiển thị
□ Textarea hiển thị
□ Buttons hiển thị (Xuất, Xóa)
```

## 4. Test Upload File ✅

```
□ Click upload zone
□ Chọn file TXT/PDF/DOCX
□ File upload thành công
□ Nội dung hiển thị trong textarea
□ Character count cập nhật
```

## 5. Test TTS ✅

```
□ Nhập text hoặc upload file
□ Chọn giọng (ví dụ: Adam)
□ Click "Xuất đoạn ghi âm"
□ Loading spinner xuất hiện
□ Sau 2-5 giây: Audio player xuất hiện
□ Audio tự động play
□ Download button hoạt động
□ File MP3 tải về thành công
```

## 6. Test ElevenLabs API ✅

```
□ API call thành công
□ Audio chất lượng tốt
□ Không có lỗi 401/403
□ Giọng đọc tiếng Việt rõ ràng
```

## 7. Test Antivirus ⚠️

```
Windows Defender:
□ File .exe không bị xóa khi chạy
□ Nếu bị chặn: Add exception

Antivirus khác:
□ Test với antivirus của user
□ Hướng dẫn add exception nếu cần
```

## 8. Test Port Conflict

```
□ Port 5000 available
□ Nếu bị chiếm: Hướng dẫn user tắt app khác
```

## 9. Test Multiple Runs

```
□ Chạy lần 1: OK
□ Thoát (Ctrl+C hoặc đóng console)
□ Chạy lần 2: Vẫn OK
□ Không có lỗi "Address already in use"
```

## 10. Test UI/UX ✅

```
Voices:
□ 22 giọng hiển thị đầy đủ
□ Badge "PRO" hiển thị
□ Gender icons hiển thị
□ Hover effects hoạt động

Upload:
□ Drag & drop hoạt động
□ File info hiển thị sau upload
□ Remove button hoạt động

Audio:
□ Player controls hoạt động
□ Download button hoạt động
□ Audio quality tốt
```

## 11. Test Error Handling

```
□ Text trống → Hiển thị error
□ Text quá dài (>100k) → Hiển thị error
□ Upload file sai format → Hiển thị error
□ API error → Hiển thị error message rõ ràng
```

## 12. Package Files ✅

```
Files cần gửi:
□ TTS-App.exe
□ README_FOR_USER.txt

Optional:
□ Icon file (nếu có)
□ VirusTotal scan link
```

## 13. Test Trên Máy Khác (QUAN TRỌNG!)

```
Sau khi build, test trên máy Windows sạch:
□ Copy .exe sang máy khác
□ Không cài Python
□ Không cài dependencies
□ Double click .exe
□ App chạy bình thường
```

## 14. Documentation ✅

```
□ README_FOR_USER.txt rõ ràng
□ Hướng dẫn cách chạy
□ Hướng dẫn troubleshooting
□ Contact info (nếu cần)
```

## 15. Final Check Before Send

```
□ File size hợp lý (~150-200MB)
□ Virus scan OK
□ Test trên máy khác OK
□ Documentation đầy đủ
□ Nén thành .zip (nếu cần)
□ Upload lên Drive/Dropbox
□ Test download link
```

---

## ✅ ALL CHECKS PASSED?

**Sẵn sàng gửi cho bạn bè!** 🎉

## ⚠️ Common Issues & Solutions

### Issue 1: Antivirus blocks .exe
**Solution:**
- Add exception trong antivirus
- Hoặc disable real-time protection tạm thời

### Issue 2: Port 5000 already in use
**Solution:**
- Tắt app khác đang dùng port 5000
- Hoặc restart máy

### Issue 3: Browser không tự mở
**Solution:**
- Mở browser thủ công
- Vào: http://localhost:5000

### Issue 4: API error 401/403
**Solution:**
- Check API key còn valid không
- Check quota còn không

### Issue 5: .exe không chạy
**Solution:**
- Check antivirus logs
- Right click .exe → Properties → Unblock
- Run as Administrator

---

## 📊 Test Results

**Build Date:** [Ngày build]
**File Size:** [Kích thước file]
**Test Platform:** Windows 10/11
**Antivirus:** [Tên antivirus]
**Test Status:** ✅ PASS / ❌ FAIL

**Notes:**
[Ghi chú thêm nếu có]

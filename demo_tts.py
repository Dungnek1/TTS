#!/usr/bin/env python3
"""
Demo TTS Library - So sánh chất lượng giọng nói
"""

import os

# Demo 1: gTTS (Google Text-to-Speech - Free, cần internet)
def demo_gtts():
    try:
        from gtts import gTTS

        print("🔊 Demo 1: gTTS (Google TTS)")

        # Tiếng Việt
        text_vi = "Xin chào, tôi là trợ lý AI. Đây là giọng đọc tiếng Việt từ Google Text to Speech."
        tts_vi = gTTS(text=text_vi, lang='vi', slow=False)
        tts_vi.save('demo_gtts_vietnamese.mp3')
        print("✅ Đã tạo: demo_gtts_vietnamese.mp3")

        # Tiếng Anh
        text_en = "Hello, I am an AI assistant. This is English voice from Google Text to Speech."
        tts_en = gTTS(text=text_en, lang='en', slow=False)
        tts_en.save('demo_gtts_english.mp3')
        print("✅ Đã tạo: demo_gtts_english.mp3")

    except ImportError:
        print("❌ Chưa cài gTTS. Chạy: pip install gtts")
    except Exception as e:
        print(f"❌ Lỗi gTTS: {e}")


# Demo 2: pyttsx3 (Offline, không cần internet)
def demo_pyttsx3():
    try:
        import pyttsx3

        print("\n🔊 Demo 2: pyttsx3 (Offline TTS)")

        engine = pyttsx3.init()

        # Liệt kê các giọng có sẵn
        voices = engine.getProperty('voices')
        print(f"📋 Có {len(voices)} giọng:")
        for i, voice in enumerate(voices[:3]):  # Show 3 đầu
            print(f"  {i}: {voice.name}")

        # Tiếng Anh (pyttsx3 không hỗ trợ tiếng Việt tốt)
        text = "Hello, this is offline text to speech using pyttsx3 library."

        # Thử giọng nam
        if len(voices) > 0:
            engine.setProperty('voice', voices[0].id)
            engine.save_to_file(text, 'demo_pyttsx3_voice1.mp3')

        # Thử giọng nữ (nếu có)
        if len(voices) > 1:
            engine.setProperty('voice', voices[1].id)
            engine.save_to_file(text, 'demo_pyttsx3_voice2.mp3')

        engine.runAndWait()
        print("✅ Đã tạo: demo_pyttsx3_voice*.mp3")

    except ImportError:
        print("❌ Chưa cài pyttsx3. Chạy: pip install pyttsx3")
    except Exception as e:
        print(f"❌ Lỗi pyttsx3: {e}")


# Demo 3: espeak (Linux TTS engine)
def demo_espeak():
    try:
        import subprocess

        print("\n🔊 Demo 3: espeak (Linux TTS)")

        # Tiếng Việt
        text_vi = "Xin chào, đây là giọng đọc từ espeak"
        subprocess.run([
            'espeak', '-v', 'vi', '-w', 'demo_espeak_vietnamese.wav', text_vi
        ], check=True)
        print("✅ Đã tạo: demo_espeak_vietnamese.wav")

        # Tiếng Anh
        text_en = "Hello, this is espeak text to speech"
        subprocess.run([
            'espeak', '-v', 'en', '-w', 'demo_espeak_english.wav', text_en
        ], check=True)
        print("✅ Đã tạo: demo_espeak_english.wav")

    except FileNotFoundError:
        print("❌ Chưa cài espeak. Chạy: sudo apt-get install espeak")
    except Exception as e:
        print(f"❌ Lỗi espeak: {e}")


if __name__ == "__main__":
    print("=" * 60)
    print("DEMO TTS LIBRARY - So sánh chất lượng giọng nói")
    print("=" * 60)

    demo_gtts()
    demo_pyttsx3()
    demo_espeak()

    print("\n" + "=" * 60)
    print("✅ HOÀN TẤT! Mở các file MP3/WAV để nghe thử")
    print("=" * 60)

    # List files
    print("\n📁 Các file đã tạo:")
    for f in os.listdir('.'):
        if f.startswith('demo_') and (f.endswith('.mp3') or f.endswith('.wav')):
            print(f"  - {f}")

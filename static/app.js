// TTS Web App - Frontend JavaScript

// DOM elements
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const speakBtn = document.getElementById('speakBtn');
const clearBtn = document.getElementById('clearBtn');
const loading = document.getElementById('loading');
const message = document.getElementById('message');
const audioPlayer = document.getElementById('audioPlayer');
const audio = document.getElementById('audio');
const downloadBtn = document.getElementById('downloadBtn');

// File upload elements
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const removeFileBtn = document.getElementById('removeFileBtn');

let currentAudioUrl = '';
let currentFile = null;

// Voice storage
const VOICE_STORAGE = 'tts_selected_voice';

// Voice database - ElevenLabs Turbo V2.5 Multilingual - Tối ưu cho tiếng Việt
const VOICES = [
    // TOP PICKS - Giọng hay nhất cho tiếng Việt
    { id: 'elevenlabs-pNInz6obpgDQGcFmaJgB', name: 'Adam', description: 'Nam - Giọng trầm, rõ từng chữ ⭐ TOP 1', gender: 'male', badge: 'PRO', category: 'top' },
    { id: 'elevenlabs-21m00Tcm4TlvDq8ikWAM', name: 'Rachel', description: 'Nữ - Phát âm chuẩn, tự nhiên ⭐ TOP 2', gender: 'female', badge: 'PRO', category: 'top' },
    { id: 'elevenlabs-EXAVITQu4vr4xnSDxMaL', name: 'Sarah', description: 'Nữ - Giọng nhẹ nhàng, dễ nghe ⭐ TOP 3', gender: 'female', badge: 'PRO', category: 'top' },

    // GIỌNG NAM - Vietnamese Optimized
    { id: 'elevenlabs-VR6AewLTigWG4xSOukaG', name: 'Arnold', description: 'Nam - Mạnh mẽ, có năng lượng', gender: 'male', badge: 'PRO', category: 'male' },
    { id: 'elevenlabs-N2lVS1w4EtoT3dr4eOWO', name: 'Callum', description: 'Nam - Giọng trung, chững chạc', gender: 'male', badge: 'PRO', category: 'male' },
    { id: 'elevenlabs-IKne3meq5aSn9XLyUdCD', name: 'Charlie', description: 'Nam - Trẻ trung, năng động', gender: 'male', badge: 'PRO', category: 'male' },
    { id: 'elevenlabs-onwK4e9ZLuTAKqWW03F9', name: 'Daniel', description: 'Nam - Giọng sâu, uy tín', gender: 'male', badge: 'PRO', category: 'male' },
    { id: 'elevenlabs-cgSgspJ2msm6clMCkdW9', name: 'Eric', description: 'Nam - Giọng trung, rõ ràng', gender: 'male', badge: 'PRO', category: 'male' },
    { id: 'elevenlabs-JBFqnCBsd6RMkjVDRZzb', name: 'George', description: 'Nam - Giọng già, trầm ấm', gender: 'male', badge: 'PRO', category: 'male' },
    { id: 'elevenlabs-g5CIjZEefAph4nQFvHAz', name: 'Harry', description: 'Nam - Giọng trẻ, sôi nổi', gender: 'male', badge: 'PRO', category: 'male' },
    { id: 'elevenlabs-TX3LPaxmHKxFdv7VOQHJ', name: 'Liam', description: 'Nam - Giọng nam tính, khỏe khoắn', gender: 'male', badge: 'PRO', category: 'male' },

    // GIỌNG NỮ - Vietnamese Optimized
    { id: 'elevenlabs-ThT5KcBeYPX3keUQqHPh', name: 'Dorothy', description: 'Nữ - Ấm áp, truyền cảm', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-AZnzlk1XvdvUeBnXmlld', name: 'Domi', description: 'Nữ - Trẻ trung, dễ thương', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-XB0fDUnXU5powFXDhCwa', name: 'Charlotte', description: 'Nữ - Giọng ngọt ngào, chuyên nghiệp', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-Xb7hH8MSUJpSbSDYk0k2', name: 'Alice', description: 'Nữ - Giọng tươi tắn, năng lượng', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-jBpfuIE2acCO8z3wKNLl', name: 'Gigi', description: 'Nữ - Giọng trẻ, vui tươi', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-jsCqWAovK2LkecY7zXl4', name: 'Freya', description: 'Nữ - Giọng mềm mại, dịu dàng', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-XrExE9yKIg1WjnnlVkGX', name: 'Matilda', description: 'Nữ - Giọng trung niên, ổn định', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-z9fAnlkpzviPz146aGWa', name: 'Lily', description: 'Nữ - Giọng cao, trong treo', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-pFZP5JQG7iQjIQuC4Bku', name: 'Grace', description: 'Nữ - Giọng thanh lịch, sang trọng', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-oWAxZDx7w5VEj9dCyTzz', name: 'Emily', description: 'Nữ - Giọng nhẹ nhàng, êm tai', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-MF3mGyEYCl7XYWbV9V6O', name: 'Elli', description: 'Nữ - Giọng tự nhiên, thân thiện', gender: 'female', badge: 'PRO', category: 'female' },
    { id: 'elevenlabs-cjVigY5qzO86Huf0OWal', name: 'Aria', description: 'Nữ - Giọng hiện đại, sành điệu', gender: 'female', badge: 'PRO', category: 'female' }
];

// Không cần quản lý API key nữa - đã hardcode trong backend

// Load voices - chỉ giọng ElevenLabs Premium
function loadVoices() {
    const voiceGrid = document.getElementById('voiceGrid');
    if (!voiceGrid) return;

    // Get saved voice or default to Adam
    const savedVoice = localStorage.getItem(VOICE_STORAGE);
    const defaultVoice = VOICES[0]?.id;

    voiceGrid.innerHTML = VOICES.map(voice => {
        const isChecked = savedVoice === voice.id || (!savedVoice && voice.id === defaultVoice);
        const genderIcon = voice.gender === 'male'
            ? '<path d="M10.25 13a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM15 11.438V8.5h2.25M17.25 8.5l-2.5 2.5"/>'
            : '<circle cx="12" cy="8" r="3"/><path d="M12 11v10m-4-4l4 4 4-4"/>';

        return `
            <label class="voice-option">
                <input type="radio" name="voice" value="${voice.id}" ${isChecked ? 'checked' : ''}>
                <div class="voice-header">
                    <span class="voice-name">${voice.name}</span>
                    <span class="voice-badge neural">${voice.badge}</span>
                </div>
                <p class="voice-description">${voice.description}</p>
                <div class="voice-gender">
                    <svg class="gender-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${genderIcon}
                    </svg>
                    <span>${voice.gender === 'male' ? 'Nam' : 'Nữ'}</span>
                </div>
                <svg class="voice-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </label>
        `;
    }).join('');

    // Add event listeners to voice options
    voiceGrid.querySelectorAll('input[name="voice"]').forEach(input => {
        input.addEventListener('change', () => {
            localStorage.setItem(VOICE_STORAGE, input.value);
        });
    });
}

// Get selected voice
function getSelectedVoice() {
    const selected = document.querySelector('input[name="voice"]:checked');
    return selected ? selected.value : '';
}

// Update character count
function updateCharCount() {
    const count = textInput.value.length;
    charCount.textContent = count.toLocaleString();

    // Change color if approaching limit (100,000 max)
    if (count > 90000) {
        charCount.style.color = '#dc3545'; // Red - very close to limit
    } else if (count > 70000) {
        charCount.style.color = '#ffc107'; // Yellow - warning
    } else if (count > 50000) {
        charCount.style.color = '#F97316'; // Orange - getting long
    } else {
        charCount.style.color = '#999'; // Gray - normal
    }
}

// Show message
function showMessage(text, type = 'success') {
    message.textContent = text;
    message.className = `message ${type}`;
    message.classList.remove('hidden');

    // Auto hide after 5 seconds
    setTimeout(() => {
        message.classList.add('hidden');
    }, 5000);
}

// Mặc định tiếng Việt
function getSelectedLanguage() {
    return 'vi';
}

// Convert text to speech
async function textToSpeech() {
    const text = textInput.value.trim();

    if (!text) {
        showMessage('Vui lòng nhập văn bản!', 'error');
        return;
    }

    if (text.length > 100000) {
        showMessage('Text quá dài (max 100,000 ký tự). Vui lòng chia nhỏ thành nhiều đoạn.', 'error');
        return;
    }

    // Warning cho text dài
    if (text.length > 5000) {
        showMessage('⚠️ Text dài, có thể mất thời gian xử lý...', 'warning');
    }

    // Show loading
    loading.classList.remove('hidden');
    audioPlayer.classList.add('hidden');
    message.classList.add('hidden');
    speakBtn.disabled = true;

    try {
        const voice = getSelectedVoice();

        const response = await fetch('/api/tts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                voice: voice
            })
        });

        const data = await response.json();

        if (data.success) {
            // Show audio player
            currentAudioUrl = data.audio_url;
            audio.src = currentAudioUrl;
            audioPlayer.classList.remove('hidden');

            // Auto play
            audio.play().catch(err => {
                console.log('Auto-play prevented:', err);
            });

            showMessage(data.message, 'success');
        } else {
            showMessage(data.message, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('Lỗi kết nối đến server', 'error');
    } finally {
        loading.classList.add('hidden');
        speakBtn.disabled = false;
    }
}

// Download audio file
function downloadAudio() {
    if (currentAudioUrl) {
        const a = document.createElement('a');
        a.href = currentAudioUrl;
        a.download = `tts_${Date.now()}.mp3`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showMessage('Đang tải xuống...', 'success');
    }
}

// Clear text
function clearText() {
    textInput.value = '';
    updateCharCount();
    audioPlayer.classList.add('hidden');
    message.classList.add('hidden');
    currentAudioUrl = '';
    removeFile();
}

// File upload functions
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function showFileInfo(file) {
    currentFile = file;
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    uploadZone.classList.add('hidden');
    fileInfo.classList.remove('hidden');
}

function removeFile() {
    currentFile = null;
    fileInput.value = '';
    uploadZone.classList.remove('hidden');
    fileInfo.classList.add('hidden');
}

async function uploadFile(file) {
    if (!file) return;

    // Validate file size
    if (file.size > 16 * 1024 * 1024) {
        showMessage('File quá lớn (max 16MB)', 'error');
        return;
    }

    // Show loading
    loading.classList.remove('hidden');
    message.classList.add('hidden');

    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            // Populate textarea with extracted text
            textInput.value = data.text;
            updateCharCount();
            showFileInfo(file);
            showMessage(data.message, 'success');
        } else {
            showMessage(data.message, 'error');
            removeFile();
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('Lỗi kết nối đến server', 'error');
        removeFile();
    } finally {
        loading.classList.add('hidden');
    }
}

// Event listeners
textInput.addEventListener('input', updateCharCount);
speakBtn.addEventListener('click', textToSpeech);
clearBtn.addEventListener('click', clearText);
downloadBtn.addEventListener('click', downloadAudio);

// File upload event listeners
uploadZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        uploadFile(e.target.files[0]);
    }
});
removeFileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    removeFile();
});

// Drag and drop
uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('drag-over');
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('drag-over');
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        uploadFile(files[0]);
    }
});

// Enter key to submit (Ctrl+Enter or Cmd+Enter)
textInput.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        textToSpeech();
    }
});

// Initialize
updateCharCount();
loadVoices();

// Show info
console.log('🎙️ TTS Web App - ElevenLabs V3 (Vietnamese Optimized)');
console.log('💡 Tip: Press Ctrl+Enter (or Cmd+Enter) to export audio');

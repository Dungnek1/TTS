# Deploy Guide - TTS Web App

Hướng dẫn deploy ứng dụng TTS lên production.

## Option 1: Deploy lên Railway (Miễn phí, dễ nhất)

### Bước 1: Chuẩn bị files

Tạo file `Procfile`:
```
web: gunicorn app:app
```

Cập nhật `requirements.txt` thêm:
```
gunicorn==21.2.0
```

### Bước 2: Deploy

1. Push code lên GitHub
2. Truy cập https://railway.app
3. "New Project" → "Deploy from GitHub"
4. Chọn repository TTS
5. Railway tự động deploy

**URL:** `https://your-app.up.railway.app`

---

## Option 2: Deploy lên Render (Miễn phí)

### Bước 1: Chuẩn bị

Tạo file `render.yaml`:
```yaml
services:
  - type: web
    name: tts-app
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: gunicorn app:app
```

### Bước 2: Deploy

1. Push code lên GitHub
2. Truy cập https://render.com
3. "New Web Service"
4. Connect GitHub repository
5. Auto deploy

---

## Option 3: Deploy lên VPS (DigitalOcean/AWS/GCP)

### Bước 1: Setup server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python
sudo apt install python3 python3-pip python3-venv nginx -y

# Clone code
cd /var/www
git clone <your-repo> tts
cd tts
```

### Bước 2: Setup app

```bash
# Create venv
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
pip install gunicorn
```

### Bước 3: Setup Gunicorn

Tạo file `/etc/systemd/system/tts.service`:
```ini
[Unit]
Description=TTS Web App
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/tts
Environment="PATH=/var/www/tts/venv/bin"
ExecStart=/var/www/tts/venv/bin/gunicorn -w 4 -b 0.0.0.0:8000 app:app

[Install]
WantedBy=multi-user.target
```

Start service:
```bash
sudo systemctl start tts
sudo systemctl enable tts
```

### Bước 4: Setup Nginx

Tạo file `/etc/nginx/sites-available/tts`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /audio {
        proxy_pass http://127.0.0.1:8000/audio;
        proxy_set_header Host $host;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/tts /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Option 4: Docker

### Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

### Build & Run

```bash
docker build -t tts-app .
docker run -p 5000:5000 tts-app
```

---

## Lưu ý Production

1. **Environment Variables:**
   - Set `FLASK_ENV=production`
   - Disable debug mode

2. **Security:**
   - Add rate limiting
   - Setup HTTPS với Let's Encrypt
   - Add CORS headers nếu cần

3. **Performance:**
   - Use CDN cho static files
   - Setup Redis cache
   - Auto cleanup old audio files

4. **Monitoring:**
   - Setup error tracking (Sentry)
   - Monitor server resources
   - Log requests

---

## Production-ready updates

Update `app.py`:

```python
import os
from flask import Flask
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

# Rate limiting
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["100 per hour"]
)

# Disable debug in production
if __name__ == '__main__':
    debug = os.getenv('FLASK_ENV') != 'production'
    app.run(debug=debug, host='0.0.0.0', port=int(os.getenv('PORT', 5000)))
```

Add to `requirements.txt`:
```
Flask-Limiter==3.5.0
redis==5.0.0
```

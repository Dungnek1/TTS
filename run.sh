#!/bin/bash
# Script to run TTS Web App

cd "$(dirname "$0")"

echo "🚀 Starting TTS Web App..."
echo ""

# Activate virtual environment
source venv/bin/activate

# Run Flask app
python app.py

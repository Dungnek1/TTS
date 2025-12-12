# -*- mode: python ; coding: utf-8 -*-

block_cipher = None

a = Analysis(
    ['app.py'],
    pathex=[],
    binaries=[],
    datas=[
        ('templates', 'templates'),  # Bundle templates folder
        ('static', 'static'),        # Bundle static folder
    ],
    hiddenimports=[
        'flask',
        'gtts',
        'requests',
        'PyPDF2',
        'docx',
        'openpyxl',
        'werkzeug',
        'jinja2',
        'click',
    ],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name='TTS-App',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,  # ← QUAN TRỌNG: Tắt UPX để tránh antivirus
    upx_exclude=[],
    runtime_tmpdir=None,
    console=True,  # Show console window
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=None,  # Add icon later if needed
)

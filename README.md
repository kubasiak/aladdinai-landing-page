# 🌟 AladdinAI Landing Page

**🌐 Live Site:** https://kubasiak.github.io/aladdinai-landing-page/

**📤 Share this URL with anyone** - it's publicly accessible!

**📂 GitHub Repository:** https://github.com/kubasiak/aladdinai-landing-page

---

Professional landing page with live admin editor and media library management.

## 📁 Project Structure

```
PagesAI/
├── index.html              # Main public landing page
├── admin.html              # Admin editor (password protected)
│
├── assets/                 # All organized assets
│   ├── css/
│   │   ├── styles.css      # Main page styles
│   │   └── admin-live.css  # Admin panel styles
│   ├── js/
│   │   ├── script.js       # Main page scripts
│   │   └── admin-live.js   # Admin functionality
│   ├── media/              # Media library
│   │   ├── videos/
│   │   │   └── background-video-slow.mp4  # Current background
│   │   └── audio/
│   │       └── (ocean-waves.mp3)  # Add soundtrack here
│   └── images/
│       └── card-background.jpg    # Card static background
│
├── MEDIA/                  # Original source files (not deployed)
│
└── docs/                   # Documentation
    ├── ADMIN_README.md
    └── DEPLOYMENT_GUIDE.md
```

## 🚀 Quick Start

### For Viewing:
1. Open `index.html` in browser
2. See the published landing page

### For Editing:
1. Open `admin.html` in browser
2. Login with password: `admin123`
3. Edit content, adjust styles, manage media
4. Click "💾 Save All Changes"
5. Refresh `index.html` to see changes

## 📚 Media Library

**Current Assets:**
- ✅ Video: Sunset Timelapse (1.1 MB) - `assets/media/videos/`
- ⏳ Audio: Add ocean soundtrack - `assets/media/audio/`

**Limits:**
- Videos: Max 15 MB (MP4/WebM)
- Audio: Max 5 MB (MP3/OGG)
- Total: 20 MB library

## 🎬 Adding Media

### Add Ocean Soundtrack:
1. Download ocean waves MP3 (< 3MB)
2. Open `admin.html`
3. Upload via "Background Audio"
4. Saved to `assets/media/audio/`

### Add More Videos:
1. Optimize video (< 15MB)
2. Upload via admin panel
3. Saved to `assets/media/videos/`
4. Switch between videos in library

## 📤 Deployment

### GitHub Pages:
```bash
# Upload these files:
- index.html
- admin.html (optional - for admin access)
- assets/ (entire folder with all subfolders)

# Don't upload:
- MEDIA/ (source files)
- docs/ (optional)
- Old files in root (cleanup first)
```

See `docs/DEPLOYMENT_GUIDE.md` for detailed instructions.

## 🔒 Security

**Default Password:** `admin123`

**Change it:**
Edit `assets/js/admin-live.js` line 3:
```javascript
const ADMIN_PASSWORD = 'your-secure-password';
```

## 📖 Documentation

- **Admin Guide**: `docs/ADMIN_README.md`
- **Deployment Guide**: `docs/DEPLOYMENT_GUIDE.md`

## 🌊 Current Content

- **Company**: AladdinAI
- **Tagline**: Creating Innovative Tools Based on Agentic AI
- **Founded**: 2026 in Warsaw
- **Contact**:
  - Email: aladdinai@aladdin.ai
  - Phone: +48 123 123 123
  - Office: Str. Somewhere Nice, Top Floor 1/2, Warsaw

## ✨ Features

- 🎨 Live editing with instant preview
- 📚 Media library management
- 🎬 Video background with fade effects
- 🎵 Background audio support
- 💾 localStorage persistence
- 📱 Mobile responsive
- 🚀 GitHub Pages ready

## 🔧 Tech Stack

- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- localStorage API
- FileReader API for media uploads

---

**Ready to deploy?** See `docs/DEPLOYMENT_GUIDE.md`

**Need help editing?** Open `admin.html` and start clicking!

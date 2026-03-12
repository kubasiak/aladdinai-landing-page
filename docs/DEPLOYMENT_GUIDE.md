# 🚀 GitHub Pages Deployment Guide

## Media Library Limits (Optimized for GitHub Pages)

### 📊 File Size Limits
- **Videos**: Max 15 MB per file (MP4, WebM only)
- **Audio**: Max 3 MB per file (MP3, OGG only)
- **Total Library**: 20 MB maximum
- **Repository**: Keep under 100 MB total for best performance

### ✅ Supported Formats

**Video:**
- ✅ MP4 (H.264 codec) - **Recommended**
- ✅ WebM (VP8/VP9 codec)
- ❌ MOV, AVI, MKV (not web-optimized)

**Audio:**
- ✅ MP3 - **Recommended**
- ✅ OGG
- ❌ WAV, FLAC (too large)

## 📚 Using the Media Library

### Upload Files
1. Open `admin.html`
2. Login with password
3. Scroll to "Media Upload" section
4. Click "Background Video" or "Background Audio"
5. Select file (must meet size/format requirements)
6. File is added to library automatically

### Manage Library
- **View**: See all uploaded files in "Media Library" section
- **Use**: Click ▶️ to use a file as background
- **Delete**: Click 🗑️ to remove from library
- **Monitor**: Check "Total Size" to track usage

### Library Features
- ✅ Store multiple videos/audio files
- ✅ Switch between files instantly
- ✅ Files persist in browser localStorage
- ✅ Visual size tracking
- ⚠️ Local storage only (per browser)

## 🎬 Optimizing Media for Web

### Video Optimization

**Recommended Tools:**
1. **HandBrake** (Free, Desktop)
   - Settings: Web Optimized, 720p, CRF 23
   - Download: https://handbrake.fr

2. **Online Compressor**
   - https://www.freeconvert.com/video-compressor
   - https://www.videosmaller.com

**Settings:**
- Resolution: 1280x720 (HD) or 1920x1080 (Full HD)
- Bitrate: 1-2 Mbps
- Frame rate: 24-30 fps
- Codec: H.264
- Format: MP4

### Audio Optimization

**Recommended Tools:**
1. **Audacity** (Free, Desktop)
   - Export as MP3, 128-192 kbps
   - Download: https://www.audacityteam.org

2. **Online Compressor**
   - https://www.freeconvert.com/audio-compressor

**Settings:**
- Bitrate: 128-192 kbps
- Sample rate: 44.1 kHz
- Format: MP3
- Mono (if background music)

## 📤 Deploying to GitHub Pages

### Option 1: GitHub Web Interface (Easiest)

1. **Create Repository**
   - Go to https://github.com/new
   - Name: `aladdinai-landing` (or your choice)
   - Public repository
   - Click "Create repository"

2. **Upload Files**
   - Click "Add file" → "Upload files"
   - Drag entire `PagesAI` folder contents
   - **Important**: Upload all files including media library files
   - Commit changes

3. **Enable Pages**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` or `master`
   - Folder: `/root`
   - Click Save

4. **Get URL**
   - Wait 1-2 minutes
   - Your site: `https://yourusername.github.io/aladdinai-landing`

### Option 2: Git Command Line

```bash
cd PagesAI
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/aladdinai-landing.git
git push -u origin main
```

Then enable Pages in repository settings.

## ⚠️ Important Notes for GitHub Pages

### Media Library Persistence

**Current System (Browser Storage):**
- Media files stored in browser's localStorage
- Works great for local admin editing
- Each browser has separate library

**For GitHub Pages:**
You need to include media files in your repository:

1. **Export from Library**
   - After uploading to admin, files are in browser
   - Save them manually to your computer
   - Place in `PagesAI/media` folder

2. **Upload to GitHub**
   - Include all media files when uploading
   - Path: `media/your-video.mp4`
   - Update HTML to reference them

3. **Workflow**
   ```
   Admin → Upload → Preview → Save Files → Add to Repo → Push to GitHub
   ```

### File Structure for Deployment

```
PagesAI/
├── index.html
├── admin.html
├── styles.css
├── admin-live.css
├── script.js
├── admin-live.js
├── background-video-slow.mp4  ← Include this
├── media/                      ← Create this folder
│   ├── video1.mp4
│   ├── video2.mp4
│   └── soundtrack.mp3
└── MEDIA/                      ← Your original media
    └── ...
```

## 🔄 Update Workflow

### Method 1: GitHub Web Interface
1. Make changes in admin locally
2. Test thoroughly
3. Go to GitHub repository
4. Click "Add file" → "Upload files"
5. Upload changed files
6. Commit changes
7. Pages auto-updates in 1-2 minutes

### Method 2: Git Command Line
```bash
# Make changes locally
# Test in admin
# Then:
git add .
git commit -m "Update content"
git push
# Pages auto-updates
```

## 💡 Pro Tips

### Before Deployment
- ✅ Test everything in admin.html locally
- ✅ Optimize all media files
- ✅ Check total size < 20 MB
- ✅ Save all changes
- ✅ Export media files from browser

### Performance
- Keep videos under 10 MB ideally
- Use 720p instead of 1080p if possible
- Compress aggressively for background videos
- Test on mobile devices

### Security
- ⚠️ Change admin password before deploying
- Don't share admin.html URL publicly
- Or remove admin.html from deployment
- Use environment variables for production

## 🔒 Securing Admin Panel

### Option 1: Remove from Public Site
Don't upload `admin.html` to GitHub - keep it local only.

### Option 2: Change Password
Edit `admin-live.js`:
```javascript
const ADMIN_PASSWORD = 'your-secure-password-here';
```

### Option 3: Use Separate Branch
- Keep admin in `dev` branch
- Deploy `main` branch without admin files

## 📱 Mobile Optimization

GitHub Pages serves to all devices:
- Test on mobile browsers
- Videos may not autoplay on mobile
- Keep total page size small
- Use responsive breakpoints

## 🆘 Troubleshooting

### "Site not updating"
- Wait 5 minutes after push
- Hard refresh (Ctrl+Shift+R)
- Check GitHub Actions tab for build status

### "Video not loading"
- Check file path is correct
- Ensure file uploaded to repo
- Check file size < 100 MB (GitHub limit)
- Verify format (MP4 recommended)

### "Admin changes not saving"
- Remember: localStorage is per-browser
- Export and include files in repo
- Update HTML references

## 📊 Monitoring

Check your GitHub Pages site:
- Performance: https://pagespeed.web.dev
- Size: GitHub repo shows total size
- Traffic: GitHub Insights tab

## 🎯 Recommended Setup

**For Production:**
1. Use admin locally for editing
2. Export finalized content
3. Deploy static files to GitHub Pages
4. Keep admin.html separate/private
5. Update via Git when needed

**Total size goal:** < 50 MB for fast loading

# AladdinAI Live Admin Editor

## Overview
The admin editor allows you to edit the landing page in real-time with instant visual feedback.

## Quick Start
1. Open `admin.html` in your browser
2. Enter password: `admin123`
3. Edit text directly by clicking on it
4. Use the control panel on the right to adjust styles
5. See changes instantly
6. Click "💾 Save All Changes" to persist

## Features

### ✏️ Direct Text Editing
- Click any text on the page to edit it directly
- Changes appear instantly as you type
- Editable fields are highlighted with a dashed outline on hover

**Editable Content:**
- Company name (title)
- Tagline
- About section title and text (2 paragraphs)
- Email address
- Phone number
- Office address

### 🎨 Live Style Controls (Right Panel)

**Font Size**
- Title size: 2-8 rem
- Body text size: 0.8-2 rem
- Drag sliders to see instant changes

**Overlay Filter**
- Max Transparency: 0-100%
- Animation Speed: 5-20 seconds
- Control how the video fades in/out

**Colors**
- Font Color: Pick any color with color picker
- Changes apply to all text instantly

### 💾 Saving & Actions

**Save All Changes**
- Saves everything to browser localStorage
- Changes persist between sessions
- Main page (`index.html`) will load these settings

**Reset**
- Restores all default values
- Requires confirmation

**Exit Admin**
- Returns to main page
- Prompts if you have unsaved changes

## How It Works

### Real-Time Preview
All changes are applied instantly using JavaScript and CSS:
- Text edits update the DOM directly
- Sliders modify CSS properties in real-time
- Color picker updates styles immediately

### Data Storage
Settings are saved to browser's `localStorage`:
```javascript
{
  companyName: "...",
  tagline: "...",
  aboutText1: "...",
  titleSize: 4,
  fontColor: "#ffffff",
  maxTransparency: 30,
  // ... etc
}
```

### Main Page Integration
The main page (`index.html`) automatically loads and applies saved settings on load.

## Usage Tips

### Editing Text
1. Hover over text to see it's editable (dashed outline)
2. Click to start editing
3. Type your changes
4. Click outside or press Escape to finish
5. Changes are visible immediately

### Adjusting Styles
1. Open the control panel (right side)
2. Drag sliders or pick colors
3. Watch changes happen live
4. Fine-tune until perfect

### Saving Work
- Click "💾 Save All Changes" frequently
- Settings are saved locally (per browser)
- Refresh main page to see saved changes there

## Control Panel

### Collapsible Panel
- Click the ◀ button to collapse/expand
- Saves screen space while editing
- Collapsed panel shows small toggle button

### Organized Sections
- **Font Size**: Title and body text controls
- **Overlay Filter**: Video fade settings
- **Colors**: Font color picker
- **Actions**: Save, Reset, Exit buttons

## Technical Details

### Password Protection
- Default: `admin123`
- Stored in session (clears on browser close)
- To change: Edit `ADMIN_PASSWORD` in `admin-live.js`

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Edge, Safari)
- Requires JavaScript enabled
- Uses HTML5 contenteditable attribute

### Limitations
- Video upload: Interface only (needs backend)
- Audio: Not implemented
- Settings: Local to browser (not synced)
- Security: Client-side only (not for production)

## Production Deployment

For real-world use, add:
1. **Backend Server**: Node.js/PHP/Python
2. **Database**: Store settings globally
3. **Authentication**: Proper user management
4. **File Upload**: Handle video/audio uploads
5. **API**: Sync changes across devices

## Keyboard Shortcuts

While editing:
- **Enter**: New line (in multi-line fields only)
- **Escape**: Stop editing
- **Tab**: Move to next editable field
- **Ctrl+Z**: Undo (browser native)

## Troubleshooting

### Changes not saving
- Check browser console for errors
- Make sure you clicked "💾 Save All Changes"
- Try clearing browser cache

### Can't edit text
- Make sure you're in admin.html (not index.html)
- Check that you're logged in
- Look for dashed outline on hover

### Sliders not working
- Refresh the page
- Check JavaScript console
- Ensure admin-live.js loaded

### Saved changes not on main page
- Make sure you saved in admin panel
- Refresh main page (Ctrl+F5)
- Check localStorage in browser DevTools

## Files

- `admin.html` - Live admin editor page
- `admin-live.css` - Admin styling
- `admin-live.js` - Admin functionality
- `index.html` - Main public page
- `styles.css` - Shared styles
- `script.js` - Main page scripts (loads admin settings)

## Security Note

⚠️ This is a client-side implementation suitable for:
- Personal projects
- Local development
- Testing/prototyping

For production:
- Implement server-side authentication
- Use HTTPS
- Validate all inputs
- Store passwords securely (hashed)
- Implement proper access control

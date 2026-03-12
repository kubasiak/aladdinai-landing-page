@echo off
echo ========================================
echo AladdinAI - Cleanup Old Files
echo ========================================
echo.
echo This will delete old/duplicate files from the root folder.
echo Files are now organized in the assets/ folder.
echo.
echo Files to be deleted:
echo - Old CSS files (styles.css, admin-*.css)
echo - Old JS files (script.js, admin-*.js)
echo - Old videos (background-video*.mp4)
echo - Old images (card-background.jpg)
echo.
echo KEEP: index.html, admin.html, assets/, MEDIA/, docs/, README.md
echo.
pause
echo.
echo Deleting old files...

REM Delete old CSS
del /Q styles.css 2>nul
del /Q admin-live.css 2>nul
del /Q admin-styles.css 2>nul

REM Delete old JS
del /Q script.js 2>nul
del /Q admin-live.js 2>nul
del /Q admin.js 2>nul

REM Delete old videos (keep MEDIA folder)
del /Q background-video.mp4 2>nul
del /Q background-video-slow.mp4 2>nul
del /Q background-video-part1.mp4 2>nul
del /Q background-video-part2.mp4 2>nul

REM Delete old images
del /Q card-background.jpg 2>nul

echo.
echo ✓ Cleanup complete!
echo.
echo Your organized structure:
dir /B
echo.
pause

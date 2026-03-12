// IndexedDB Storage (same as admin)
const MediaStorage = {
    dbName: 'AladdinMediaDB',
    version: 1,
    db: null,

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
        });
    },

    async get(storeName, id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(id);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
};

// Ensure video plays on load
document.addEventListener('DOMContentLoaded', async function() {
    const video = document.getElementById('bgVideo');

    // Initialize IndexedDB
    try {
        await MediaStorage.init();
    } catch (error) {
        console.log('IndexedDB not available:', error);
    }

    // Load admin settings if available
    await loadAdminSettings();

    // Attempt to play the video
    if (video) {
        video.play().catch(function(error) {
            console.log('Video autoplay failed:', error);
        });
    }

    // Add smooth scroll behavior for any future navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Load admin settings from localStorage
async function loadAdminSettings() {
    const settings = JSON.parse(localStorage.getItem('aladdinSettings'));
    if (!settings) return;

    // Update text content
    const companyNameEl = document.querySelector('.logo h1');
    if (companyNameEl && settings.companyName) {
        companyNameEl.textContent = settings.companyName;
    }

    const taglineEl = document.querySelector('.tagline');
    if (taglineEl && settings.tagline) {
        taglineEl.textContent = settings.tagline;
    }

    const aboutTitleEl = document.querySelector('.about h2');
    if (aboutTitleEl && settings.aboutTitle) {
        aboutTitleEl.textContent = settings.aboutTitle;
    }

    const aboutTexts = document.querySelectorAll('.about-text');
    if (aboutTexts[0] && settings.aboutText1) {
        aboutTexts[0].textContent = settings.aboutText1;
    }
    if (aboutTexts[1] && settings.aboutText2) {
        aboutTexts[1].textContent = settings.aboutText2;
    }

    // Update contact info
    const emailEl = document.querySelector('.contact-item a[href^="mailto:"]');
    if (emailEl && settings.contactEmail) {
        emailEl.textContent = settings.contactEmail;
        emailEl.href = 'mailto:' + settings.contactEmail;
    }

    const phoneEl = document.querySelector('.contact-item a[href^="tel:"]');
    if (phoneEl && settings.contactPhone) {
        phoneEl.textContent = settings.contactPhone;
        phoneEl.href = 'tel:' + settings.contactPhone.replace(/\s/g, '');
    }

    const addressEl = document.querySelector('.contact-item p');
    if (addressEl && settings.contactAddress) {
        addressEl.innerHTML = settings.contactAddress.replace(/\n/g, '<br>');
    }

    // Apply CSS overrides
    applyStyleOverrides(settings);

    // Apply card background
    if (settings.cardBackground) {
        const card = document.querySelector('.card');
        if (card) {
            card.style.backgroundImage = `url(${settings.cardBackground})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        }
    }

    // Load and play selected video
    if (settings.selectedVideoId && MediaStorage.db) {
        if (settings.selectedVideoId === 'none') {
            // Hide video
            const video = document.getElementById('bgVideo');
            if (video) {
                video.pause();
                video.style.opacity = '0';
            }
        } else {
            try {
                const videoData = await MediaStorage.get('videos', settings.selectedVideoId);
                if (videoData) {
                    const video = document.getElementById('bgVideo');
                    if (video) {
                        video.style.opacity = '1';
                        const source = video.querySelector('source');
                        if (source) {
                            source.src = videoData.data;
                            video.load();
                        }
                    }
                }
            } catch (error) {
                console.log('Error loading video:', error);
            }
        }
    }

    // Load and play background audio
    if (settings.selectedAudioId && MediaStorage.db) {
        if (settings.selectedAudioId === 'none') {
            // No audio
            console.log('Audio disabled');
        } else {
            try {
                const audioData = await MediaStorage.get('audio', settings.selectedAudioId);
                if (audioData) {
                    const audio = new Audio(audioData.data);
                    audio.loop = true;
                    audio.volume = 0.3;
                    audio.play().catch(error => console.log('Audio autoplay failed:', error));
                }
            } catch (error) {
                console.log('Error loading audio:', error);
            }
        }
    }
}

// Apply CSS style overrides
function applyStyleOverrides(settings) {
    // Create or update style element
    let styleEl = document.getElementById('admin-overrides');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'admin-overrides';
        document.head.appendChild(styleEl);
    }

    // Calculate overlay opacity (transparency % to opacity)
    const minOpacity = 1 - ((settings.minTransparency || 0) / 100);  // Darkest
    const maxOpacity = 1 - ((settings.maxTransparency || 30) / 100); // Lightest

    styleEl.textContent = `
        .logo h1 {
            font-size: ${settings.titleSize}rem !important;
            color: ${settings.fontColor} !important;
        }
        .tagline {
            color: ${settings.fontColor} !important;
        }
        .about h2 {
            color: ${settings.fontColor} !important;
        }
        .about-text {
            font-size: ${settings.bodySize}rem !important;
            color: ${settings.fontColor} !important;
        }
        .contact-item h3 {
            color: ${settings.fontColor} !important;
        }
        .video-overlay {
            animation-duration: ${settings.animDuration}s !important;
        }
        @keyframes videoFade {
            0% { background: rgba(0, 0, 0, ${minOpacity}); }
            50% { background: rgba(0, 0, 0, ${maxOpacity}); }
            100% { background: rgba(0, 0, 0, ${minOpacity}); }
        }
    `;
}

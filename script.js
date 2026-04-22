// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');

            // Scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxInfo = document.getElementById('lightbox-info');
const lightboxClose = document.querySelector('.lightbox-close');

// Add click handlers to gallery items
document.querySelectorAll('.gallery-item, .design-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const info = item.querySelector('.gallery-info, .design-info');

        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;

        if (info) {
            lightboxInfo.innerHTML = info.innerHTML;
        } else {
            lightboxInfo.innerHTML = '';
        }

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox on button click
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

// Close lightbox on background click
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

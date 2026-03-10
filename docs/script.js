/**
 * MiroslavSec Portfolio - Enhancements
 */

(function () {
    'use strict';

    // Smooth scroll for anchor links (fallback for browsers that need it)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Subtle card entrance on scroll (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.lab-card, .video-card, .thm-path-card').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add visible class styles via JS to avoid extra CSS
    const style = document.createElement('style');
    style.textContent = '.lab-card.visible, .video-card.visible, .thm-path-card.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
})();

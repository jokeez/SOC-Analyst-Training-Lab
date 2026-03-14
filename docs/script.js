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

    function observeCard(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    }

    document.querySelectorAll('.lab-card, .video-card, .thm-path-card').forEach(observeCard);

    // Load videos from JSON (updated by GitHub Action from YouTube)
    const videoGrid = document.getElementById('video-grid');
    if (videoGrid) {
        fetch('data/videos.json')
            .then(function (r) { return r.json(); })
            .then(function (videos) {
                videos.forEach(function (v) {
                    var card = document.createElement('div');
                    card.className = 'video-card';
                    card.innerHTML =
                        '<div class="video-wrapper">' +
                        '<iframe src="https://www.youtube.com/embed/' + v.id + '" title="' + escapeHtml(v.title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                        '</div><p>' + escapeHtml(v.title) + '</p>';
                    videoGrid.appendChild(card);
                    observeCard(card);
                });
            })
            .catch(function () {
                videoGrid.innerHTML = '<p class="section-desc">Videos load from <code>data/videos.json</code>. Run the site from the same origin or check the file.</p>';
            });
    }

    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Add visible class styles via JS to avoid extra CSS
    const style = document.createElement('style');
    style.textContent = '.lab-card.visible, .video-card.visible, .thm-path-card.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
})();

// Animaciones simples de fade-in
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) sec.classList.add('visible');
    });
});
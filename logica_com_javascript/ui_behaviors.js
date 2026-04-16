document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const themeToggle = document.getElementById('theme-toggle');
    const backToTop = document.createElement('button');
    const themeStorageKey = 'pageTheme';
    let lastScrollY = window.pageYOffset;

    backToTop.id = 'back-to-top';
    backToTop.type = 'button';
    backToTop.title = 'Voltar ao topo';
    backToTop.textContent = '↑';
    document.body.appendChild(backToTop);

    function setTheme(theme) {
        if (theme === 'light') {
            document.documentElement.classList.add('light-theme');
            themeToggle.textContent = 'Modo Escuro';
        } else {
            document.documentElement.classList.remove('light-theme');
            themeToggle.textContent = 'Modo Claro';
        }
        localStorage.setItem(themeStorageKey, theme);
    }

    function handleScroll() {
        const currentScrollY = window.pageYOffset;

        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        if (currentScrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        lastScrollY = currentScrollY;
    }

    function loadInitialTheme() {
        const savedTheme = localStorage.getItem(themeStorageKey);
        setTheme(savedTheme === 'light' ? 'light' : 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.classList.contains('light-theme');
        setTheme(isLight ? 'dark' : 'light');
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    loadInitialTheme();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
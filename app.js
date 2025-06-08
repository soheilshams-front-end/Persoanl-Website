document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (!menuIcon || !navLinks) {
        return;
    }

    function closeMenu() {
        menuIcon.classList.remove('open');
        navLinks.classList.remove('show');
        
        setTimeout(() => {
            navLinks.classList.remove('active');
        }, 400);
    }

    menuIcon.addEventListener('click', () => {
        const isOpen = menuIcon.classList.contains('open');
        
        if (isOpen) {
            closeMenu();
        } else {
            menuIcon.classList.add('open');
            navLinks.classList.add('active');
            setTimeout(() => {
                navLinks.classList.add('show');
            }, 10);
        }
    });

    const allNavLinks = navLinks.querySelectorAll('a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => scrollObserver.observe(el));

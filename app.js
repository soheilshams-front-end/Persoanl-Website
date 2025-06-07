// --- I. ADVANCED HAMBURGER MENU LOGIC ---

// Select all necessary elements from the DOM once the document is loaded
document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Exit if the menu elements don't exist on the page
    if (!menuIcon || !navLinks) {
        return;
    }

    // A reusable function to cleanly close the menu
    function closeMenu() {
        menuIcon.classList.remove('open');
        navLinks.classList.remove('show'); // This starts the fade-out animation
        
        // Wait for the animation to finish before setting display to none
        setTimeout(() => {
            navLinks.classList.remove('active');
        }, 400); // This duration must match your CSS transition time for the overlay
    }

    // Add click listener to the hamburger icon to open/close the menu
    menuIcon.addEventListener('click', () => {
        const isOpen = menuIcon.classList.contains('open');
        
        if (isOpen) {
            closeMenu();
        } else {
            menuIcon.classList.add('open');
            navLinks.classList.add('active');
            // A small timeout to allow the 'active' class (display:flex) to apply
            // before adding the 'show' class which triggers the fade-in animation.
            setTimeout(() => {
                navLinks.classList.add('show');
            }, 10);
        }
    });

    // Add click listener to each menu link to close the menu
    const allNavLinks = navLinks.querySelectorAll('a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

});


// --- II. SCROLL REVEAL ANIMATION LOGIC ---

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => scrollObserver.observe(el));

// Select the DOM elements
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
   // Toggle the 'open' class on the menu icon for the animation
   menuIcon.classList.toggle('open');
   // Toggle the 'active' and 'show' classes on the nav-links list for the slide-down animation
   navLinks.classList.toggle('active');
   // We use setTimeout to ensure the 'active' class is added before 'show' for the transition effect
   setTimeout(() => {
       navLinks.classList.toggle('show');
   }, 10);
});

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Optional: remove class if you want animation to repeat
            // entry.target.classList.remove('active'); 
        }
    });
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));
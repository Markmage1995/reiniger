// Basic JavaScript for any future interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');

    // Example: Smooth scroll for navigation links (if needed)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

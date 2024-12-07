document.addEventListener('DOMContentLoaded', (event) => {
    // Function to apply dark mode with blue and green themes
    function applyTheme() {
        document.body.style.backgroundColor = '#00172D'; // Deep blue background
        document.body.style.color = '#E9F8F9'; // Light cyan text for better readability

        // Header and footer
        document.querySelectorAll('header, footer').forEach(el => {
            el.style.backgroundColor = '#00334E'; // Darker blue for contrast
            el.style.color = '#CFF09E'; // Soft green for text
        });

        // Navigation links
        document.querySelectorAll('nav a').forEach(link => {
            link.style.color = '#AED6F1'; // Light blue for navigation links
        });

        // Hero section
        document.querySelector('.hero').style.background = 'linear-gradient(to bottom, #00334E, #004D40)'; // Gradient from blue to green
        document.querySelectorAll('.hero h1, .hero p').forEach(el => {
            el.style.color = '#E9F8F9'; // Light text on dark background
        });

        // Strain teasers or product sections
        document.querySelectorAll('.strain-teasers a, .product').forEach(el => {
            el.style.backgroundColor = '#004D40'; // Dark green background
            el.style.color = '#E9F8F9'; // Light text
        });

        // Product images (assuming they have a class or id)
        document.querySelectorAll('.product img').forEach(img => {
            img.style.border = '2px solid #CFF09E'; // Green border for images
        });

        // Positivity and health messages
        const healthBenefits = [
            "Cannabis can enhance creativity and relaxation when used responsibly.",
            "Discover the therapeutic potential of cannabis for well-being.",
            "Cultivate mindfulness with the natural properties of our strains.",
            "Enjoy the journey of cannabis in promoting health and positivity."
        ];
        let randomBenefit = healthBenefits[Math.floor(Math.random() * healthBenefits.length)];
        let benefitElement = document.createElement('p');
        benefitElement.textContent = randomBenefit;
        benefitElement.style.color = '#AED6F1'; // Light blue for the message
        benefitElement.style.padding = '1rem';
        benefitElement.style.textAlign = 'center';
        document.body.appendChild(benefitElement);
    }

    // Apply the theme immediately
    applyTheme();

    // Smooth scrolling for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
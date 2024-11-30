// Falling stars when the cart icon is clicked
const cartLink = document.querySelector('.cart-link');

cartLink.addEventListener('click', createFallingStars);

function createFallingStars() {
    const container = document.body;
    const starCount = 50; // Number of stars to generate
    const interval = 50; // Interval in milliseconds between each star creation

    for (let i = 0; i < starCount; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'star';

            // Set random horizontal position
            star.style.left = Math.random() * window.innerWidth + 'px';

            // Set random size for the stars
            const size = Math.random() * 15 + 5; // Range: 5px to 20px
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Set random color for the stars
            const colors = ['#6a5acd', '#6495ed', '#ffcc00', '#b0e0e6']; // Add any color you prefer
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            star.style.backgroundColor = randomColor;

            // Set a random delay for each star's animation
            const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
            star.style.animationDelay = `${randomDelay}s`;

            container.appendChild(star);

            // Remove star after animation ends
            star.addEventListener('animationend', () => {
                star.remove();
            });
        }, i * interval); // Create stars with an increasing delay
    }
}


// script.js
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// script.js

// Scroll to Gallery Button Action
function scrollToGallery() {
    alert("Scrolling to Gallery... (add smooth scroll implementation)");
    // Add smooth scrolling logic here if needed
}

// Learn More Button Action
function learnMore() {
    alert("Learn more about the artist or platform!");
    // Add navigation or modal popup logic here
}


// script.js

// Add to Cart Functionality
function addToCart(artTitle) {
    alert(`${artTitle} has been added to your cart!`);
    // Add your cart logic here (e.g., update cart state or backend API calls)
}

// script.js

// Example placeholder for future interactive features
console.log("About the Artist Section Loaded Successfully");


// script.js

let currentTestimonialIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
    const testimonials = document.querySelectorAll(".testimonial-item");
    const totalTestimonials = testimonials.length;

    // Ensure the index is within bounds
    if (index >= totalTestimonials) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = totalTestimonials - 1;
    } else {
        currentTestimonialIndex = index;
    }

    // Move testimonials
    const offset = -currentTestimonialIndex * (testimonials[0].offsetWidth + 32); // Account for margins
    document.querySelector(".testimonial-carousel").style.transform = `translateX(${offset}px)`;

    // Disable buttons if at the start or end
    document.getElementById("prev").disabled = currentTestimonialIndex === 0;
    document.getElementById("next").disabled = currentTestimonialIndex === totalTestimonials - 1;
}

// Function to change testimonial (on next/prev button click)
function changeTestimonial(direction) {
    showTestimonial(currentTestimonialIndex + direction);
}

// Show the first testimonial on load
window.onload = function() {
    showTestimonial(currentTestimonialIndex);
};


// script.js

// Example placeholder for interactive features
console.log("Gallery Preview Section Loaded Successfully");


// script.js

// Form submission logic
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (name && email && mobile) {
        alert(`Thank you for subscribing, ${name}!`);
        // Reset form fields after submission
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});


// script.js

// If needed, add any future interactivity for the footer (e.g., smooth scroll or popup logic)
// Example: Simple console log for testing footer scripts.
console.log("Footer Section Loaded Successfully");

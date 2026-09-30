/* ===================================
   DENTAL WEBSITE - JAVASCRIPT
   Dentiva Premium Dental Clinic
   =================================== */

// ===================================
// NAVIGATION TOGGLE
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// STICKY NAVBAR
// ===================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ===================================
// FAQ ACCORDION
// ===================================

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current FAQ
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ===================================
// FORM SUBMISSION
// ===================================

const appointmentForm = document.getElementById('appointment-form');

if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;

        // Validate form
        if (!name || !phone || !email || !service) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Validate email
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Validate phone
        if (!isValidPhone(phone)) {
            showNotification('Please enter a valid phone number', 'error');
            return;
        }

        // Create WhatsApp message
        const whatsappMessage = encodeURIComponent(
            `Hi Dentiva,\n\n` +
            `I would like to book an appointment.\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Email: ${email}\n` +
            `Service: ${service}\n` +
            `Message: ${message}\n\n` +
            `Looking forward to your response.`
        );

        // Send via WhatsApp
        const whatsappURL = `https://wa.me/919876543210?text=${whatsappMessage}`;
        
        // Show success message
        showNotification('Thank you! Redirecting to WhatsApp...', 'success');

        // Redirect to WhatsApp after delay
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            appointmentForm.reset();
        }, 1500);
    });
}

// ===================================
// FORM VALIDATION FUNCTIONS
// ===================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone);
}

// ===================================
// NOTIFICATION SYSTEM
// ===================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button class="notification-close" onclick="this.closest('.notification').remove()">×</button>
        </div>
    `;

    // Add styles dynamically if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            }

            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px 20px;
                gap: 15px;
            }

            .notification-content p {
                margin: 0;
                font-weight: 500;
            }

            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                opacity: 0.7;
                transition: opacity 0.2s;
            }

            .notification-close:hover {
                opacity: 1;
            }

            .notification-success {
                background: #4CAF50;
                color: white;
            }

            .notification-error {
                background: #FF6B6B;
                color: white;
            }

            .notification-info {
                background: #00A8D8;
                color: white;
            }

            .notification-warning {
                background: #FFA500;
                color: white;
            }

            @media (max-width: 480px) {
                .notification {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ===================================
// INTERSECTION OBSERVER - LAZY LOAD & ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, team cards, and testimonial cards
document.querySelectorAll('.service-card, .team-card, .testimonial-card, .why-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===================================
// COUNTER ANIMATION
// ===================================

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Trigger counter animation when hero section comes into view
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    let counterStarted = false;

    window.addEventListener('scroll', function() {
        if (!counterStarted && isElementInViewport(statsSection)) {
            counterStarted = true;
            document.querySelectorAll('.stat-number').forEach(stat => {
                const targetText = stat.textContent;
                const target = parseInt(targetText.replace(/\D/g, ''));
                animateCounter(stat, target);
            });
        }
    });
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

window.addEventListener('scroll', function() {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// ===================================
// WHATSAPP CTA BUTTON
// ===================================

// WhatsApp button on navbar (already implemented in HTML)
// WhatsApp button on appointment section (already implemented in HTML)

// You can customize WhatsApp numbers here
const WHATSAPP_NUMBER = '919876543210'; // Replace with actual number
const WHATSAPP_MESSAGE = 'Hi Dentiva, I would like to book an appointment.';

// Update all WhatsApp links
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
});

// ===================================
// RESPONSIVE IMAGE LOADING
// ===================================

// Optimize image loading for different screen sizes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// SERVICE CARDS HOVER EFFECT
// ===================================

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// TESTIMONIALS CAROUSEL (Optional - Basic Version)
// ===================================

// Simple testimonials slider for mobile
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

// Initialize testimonials for mobile
if (window.innerWidth < 768) {
    showTestimonial(currentTestimonial);
}

// ===================================
// PRINT FUNCTIONALITY
// ===================================

function printClinicInfo() {
    window.print();
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Add keyboard navigation for modals and forms
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Close any open mobile menu
        document.getElementById('navToggle').classList.remove('active');
        document.getElementById('navMenu').classList.remove('active');
    }
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

// Get current time and show business hours status
function getBusinessStatus() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();

    // Monday to Saturday: 9 AM to 8 PM
    // Sunday: 10 AM to 6 PM
    if (day === 0) { // Sunday
        return hours >= 10 && hours < 18 ? 'Open' : 'Closed';
    } else if (day === 6) { // Saturday
        return hours >= 9 && hours < 20 ? 'Open' : 'Closed';
    } else {
        return hours >= 9 && hours < 20 ? 'Open' : 'Closed';
    }
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

window.addEventListener('load', function() {
    // Initialize all tooltips
    initializeTooltips();

    // Initialize forms
    initializeFormValidation();

    // Log initialization complete
    console.log('Dentiva Website Initialized');
});

// Initialize tooltips
function initializeTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseover', function() {
            const tooltip = this.getAttribute('data-tooltip');
            // Add tooltip logic here
        });
    });
}

// Initialize form validation
function initializeFormValidation() {
    const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateInput(this);
            }
        });
    });
}

function validateInput(input) {
    let isValid = true;

    if (input.type === 'email') {
        isValid = isValidEmail(input.value);
    } else if (input.type === 'tel') {
        isValid = isValidPhone(input.value);
    } else if (input.type === 'text' || input.tagName === 'TEXTAREA') {
        isValid = input.value.trim().length > 0;
    } else if (input.tagName === 'SELECT') {
        isValid = input.value !== '';
    }

    if (!isValid) {
        input.classList.add('error');
        input.style.borderColor = '#FF6B6B';
    } else {
        input.classList.remove('error');
        input.style.borderColor = '#E0E0E0';
    }

    return isValid;
}

// ===================================
// SERVICE WORKER (OPTIONAL - For PWA)
// ===================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('sw.js');
}

// ===================================
// PAGE VISIBILITY API
// ===================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});

// ===================================
// CUSTOM FUNCTIONS FOR TEMPLATE CUSTOMIZATION
// ===================================

// Update clinic information easily
function updateClinicInfo(options) {
    const defaults = {
        name: 'Dentiva',
        phone: '+91 9876543210',
        whatsapp: '919876543210',
        email: 'info@dentiva.com',
        address: '123 Smile Street, Medical Complex, New Delhi, Delhi 110001, India',
        hours: 'Mon-Sat: 9:00 AM - 8:00 PM | Sunday: 10:00 AM - 6:00 PM'
    };

    const config = { ...defaults, ...options };

    // You can add logic here to update various elements with clinic info
    // This is useful for template reuse across different clinics

    return config;
}

// Example usage (commented out):
// const clinicConfig = updateClinicInfo({
//     name: 'New Clinic Name',
//     phone: '+91 1234567890'
// });

console.log('Dentiva Website - JavaScript Loaded Successfully');

// JavaScript for Georgia Tech Cricket Club Website with Fluent 2 Design

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links .fluent-link, .nav-links .fluent-button');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('#navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky navigation on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('#navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(0, 48, 87, 0.95)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'var(--navy-blue)';
        }
    });

    // Add animation effects to cards on hover
    const cards = document.querySelectorAll('.fluent-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--fluent-shadow)';
        });
    });

    // Add click event to donation button
    const donateBtn = document.querySelector('.donate-btn');
    if (donateBtn) {
        donateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in supporting the Georgia Tech Cricket Club! This would redirect to a secure payment page in a production environment.');
        });
    }

    // Implement Fluent 2 focus states for interactive elements
    const interactiveElements = document.querySelectorAll('.fluent-button, .fluent-link, input, select, textarea');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--tech-gold)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });

    // Add subtle animation to section titles when they come into view
    const sectionTitles = document.querySelectorAll('.section-title');
    
    const fadeInOnScroll = () => {
        sectionTitles.forEach(title => {
            const titlePosition = title.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (titlePosition < screenPosition) {
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on scroll and initial load
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
});

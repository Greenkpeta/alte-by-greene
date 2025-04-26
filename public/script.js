document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup - hide all sections
    gsap.set('section, footer', {
        opacity: 0,
        y: 50
    });

    // Animate each section when it comes into view
    document.querySelectorAll('section, footer').forEach(section => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Navbar animation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        gsap.from(navbar, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    }

    // Hero content animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.from(heroContent, {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.out"
        });
    }

    // Hero image animation
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        gsap.from(heroImage, {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.out"
        });
    }

    // Button animations
    const buttons = document.querySelectorAll('.hero-buttons button, .join-now-btn');
    if (buttons.length) {
        gsap.from(buttons, {
            scale: 0,
            duration: 0.5,
            delay: 1,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to check if device is mobile
    const isMobile = () => window.innerWidth <= 768;

    // Navbar animation
    gsap.from('.navbar', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-content h1', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .from('.hero-content p', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, '-=0.4')
        .from('.hero-buttons button', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        }, '-=0.4')
        .from('.hero-image', {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, '-=0.6');

    // Scroll animations for sections
    const sections = ['#about', '#mission', '#brand-cta', '#newsletter'];
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            },
            y: isMobile() ? 30 : 50,
            opacity: 0,
            duration: isMobile() ? 0.6 : 0.8,
            ease: "power2.out"
        });
    });

    // Footer animations
    gsap.from('#footer', {
        scrollTrigger: {
            trigger: '#footer',
            start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    // Social icons hover animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            if (!isMobile()) {
                gsap.to(icon, {
                    y: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        icon.addEventListener('mouseleave', () => {
            if (!isMobile()) {
                gsap.to(icon, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });

    // Handle resize events
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Refresh ScrollTrigger on resize
            ScrollTrigger.refresh();
        }, 250);
    });
});
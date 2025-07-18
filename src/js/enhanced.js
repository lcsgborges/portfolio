document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced.js loaded'); // Debug log
    
    // Mobile menu functionality - Initialize early
    function initMobileMenu() {
        const navigation = document.querySelector('.header-navigation');
        const navList = document.querySelector('.header-navigation ul');
        
        if (!navigation || !navList) {
            console.error('Navigation elements not found');
            return;
        }
        
        // Create hamburger menu
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        
        // Insert hamburger menu after the h1 element
        const h1Element = navigation.querySelector('h1');
        h1Element.insertAdjacentElement('afterend', hamburger);
        
        console.log('Hamburger menu created'); // Debug log
        
        hamburger.addEventListener('click', function(e) {
            console.log('Hamburger clicked'); // Debug log
            e.stopPropagation();
            this.classList.toggle('active');
            navList.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on a link
        const navItems = document.querySelectorAll('a[href^="#"]');
        navItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navigation.contains(e.target) && navList.classList.contains('active')) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        return hamburger;
    }
    
    // Initialize mobile menu immediately
    const hamburgerElement = initMobileMenu();
    
    // Create floating particles
    function createParticles() {
        if (window.innerWidth > 768) {
            const particlesContainer = document.createElement('div');
            particlesContainer.className = 'particles';
            document.body.appendChild(particlesContainer);
            
            function createParticle() {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 6000);
            }
            
            setInterval(createParticle, 300);
        }
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateHeader);
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.header-navigation a[href^="#"]');
    
    function updateActiveSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveSection);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add special effects to different elements
                if (entry.target.classList.contains('tech-item')) {
                    entry.target.classList.add('floating');
                }
                if (entry.target.classList.contains('project-item')) {
                    entry.target.classList.add('enhanced-glass');
                }
                if (entry.target.classList.contains('about-image')) {
                    entry.target.querySelector('img').classList.add('pulse-glow');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.tech-item, .project-item, .about-text, .about-image');
    animateElements.forEach(el => observer.observe(el));
    
    // Form submission enhancement
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Add loading spinner
            button.innerHTML = '<div class="loading-spinner"></div> Enviando...';
            button.disabled = true;
            
            // Reset button after form submission attempt
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    }
    
    // Parallax effect for background elements
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.about::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translate(-50%, -50%) translateY(${scrolled * speed}px)`;
        });
    }
    
    window.addEventListener('scroll', parallaxEffect);
    
    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('.modal-button, .contact-form button, .social-links a');
    
    magneticElements.forEach(element => {
        element.classList.add('magnetic');
        
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Preload images for better performance
    function preloadImages() {
        const images = document.querySelectorAll('img[src]');
        images.forEach(img => {
            const imageLoader = new Image();
            imageLoader.src = img.src;
        });
    }
    
    preloadImages();
    
    // Add loading states
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Initialize special effects after load
        createParticles();
        
        // Add typing effect to main title
        const mainTitle = document.querySelector('.about-text h2');
        if (mainTitle) {
            mainTitle.classList.add('typing-effect');
        }
    });
    
    // Performance optimization
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    function updateAnimations() {
        updateHeader();
        updateActiveSection();
        parallaxEffect();
        ticking = false;
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add neon border effect to cards on hover
    const cards = document.querySelectorAll('.project-item, .tech-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('neon-border');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('neon-border');
        });
    });
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu
            const hamburger = document.querySelector('.hamburger');
            const navList = document.querySelector('.header-navigation ul');
            if (hamburger && navList) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
            
            // Close modal
            const modal = document.getElementById('modal');
            if (modal && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        }
    });
    
    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-neon)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Add CSS for loading and enhanced effects
const style = document.createElement('style');
style.textContent = `
    body.menu-open {
        overflow: hidden;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid var(--primary-accent);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Enhanced hamburger styles */
    .hamburger {
        z-index: 1001;
        position: relative;
    }
    
    .hamburger:hover {
        background: rgba(100, 255, 218, 0.1);
    }
    
    @media (max-width: 768px) {
        body.menu-open .header-navigation ul {
            right: 0 !important;
        }
        
        .cursor,
        .cursor-follower,
        .particles {
            display: none;
        }
        
        .hamburger {
            display: flex !important;
        }
    }
`;
document.head.appendChild(style);

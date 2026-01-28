// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Animation for sections on scroll and click
const animateSection = (section) => {
    section.classList.add('animate');
};

// Scroll Animation
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSection(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// Smooth scrolling for general navigation links (مركز‑الشاشة)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const sectionTop = targetSection.offsetTop;
            const windowHeight = window.innerHeight;
            const sectionHeight = targetSection.offsetHeight;

            // Center target section
            const scrollPosition = sectionTop - headerHeight - (windowHeight - sectionHeight) / 2;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });

            animateSection(targetSection);
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Send data to server (demo)
    console.log('Form submitted:', data);

    // Success message
    alert('تم إرسال رسالتك بنجاح!');
    contactForm.reset();
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Service cards animation
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.service-card').forEach(card => {
    cardObserver.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    // Executor card scroll
    const executorCard = document.querySelector('#executor-card-main');
    if (executorCard) {
        executorCard.addEventListener('click', function(e) {
            e.preventDefault();
            const powerfulFeaturesSection = document.querySelector('#executor-img-cards-section');
            if (powerfulFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = powerfulFeaturesSection.offsetTop;
                
                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Executor nav link scroll
    const executorNavLink = document.querySelector('#executor-nav-link');
    if (executorNavLink) {
        executorNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            const powerfulFeaturesSection = document.querySelector('#executor-img-cards-section');
            if (powerfulFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = powerfulFeaturesSection.offsetTop;

                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }

    // External card scroll
    const externalCard = document.querySelector('#external-card-main');
    if (externalCard) {
        externalCard.addEventListener('click', function(e) {
            e.preventDefault();
            const externalFeaturesSection = document.querySelector('#external-img-cards-section');
            if (externalFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = externalFeaturesSection.offsetTop;
                
                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }

    // External nav link scroll
    const externalNavLink = document.querySelector('#external-nav-link');
    if (externalNavLink) {
        externalNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            const externalFeaturesSection = document.querySelector('#external-img-cards-section');
            if (externalFeaturesSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const sectionTop = externalFeaturesSection.offsetTop;

                window.scrollTo({
                    top: sectionTop - headerHeight + 150,
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const homeNavLink = document.querySelector('#home-nav-link');
    if (homeNavLink) {
        homeNavLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Download button enhancements
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            
            // Reset animation after a short delay
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add hover sound effect (optional)
        button.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
});

// Prevent download button click from bubbling to card in main cards-section
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cards-section .download-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});

// script1.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navItems = document.querySelectorAll('#side_nav li a, .mobile-menu li a');
    const sideNav = document.querySelector('.nav__wrapper');
    const sections = document.querySelectorAll('section');
    
    // Function to check screen width and adjust navigation visibility
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            sideNav.style.display = 'none';
            hamburger.style.display = 'flex';
        } else {
            sideNav.style.display = 'block';
            hamburger.style.display = 'none';
            mobileMenu.style.display = 'none';
        }
    }
    
    // Run on page load
    checkScreenSize();
    
    // Run when window is resized
    window.addEventListener('resize', checkScreenSize);
    
    // Mobile menu toggle
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Add active class to nav items when scrolling
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.pageYOffset >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for navigation
    navItems.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            if(mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
            }
        });
    });
    
    // Reveal animations when scrolling
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {threshold: 0.1});
    
    document.querySelectorAll('.square, .card, #Textmain4, #Textmain5').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu.style.display === 'block' && 
            !hamburger.contains(event.target) && 
            !mobileMenu.contains(event.target)) {
            mobileMenu.style.display = 'none';
        }
    });
});

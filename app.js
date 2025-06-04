// function toggleMenu() {
//     const menu = document.querySelector('.link-menu');
//     const icon = document.querySelector('.ham-icon');
//     menu.classList.toggle('active');
//     icon.classList.toggle('active');

// }

        // Navigation
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Scroll Animations
        function checkVisibility() {
            const fadeElements = document.querySelectorAll('.fade-in');
            const triggerPoint = window.innerHeight * 0.8;
            
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < triggerPoint) {
                    element.classList.add('visible');
                }
            });
            
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                
                if (itemTop < triggerPoint) {
                    item.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('load', checkVisibility);
        window.addEventListener('scroll', checkVisibility);
        
        // Back to Top Button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });
        
        // Active Navigation Link on Scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    document.querySelector('.nav-link[href="#' + sectionId + '"]').classList.add('active');
                } else {
                    document.querySelector('.nav-link[href="#' + sectionId + '"]').classList.remove('active');
                }
            });
        });
        
        // Testimonials Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialControls = document.querySelectorAll('.testimonial-control');
        let currentSlide = 0;
        
        function showSlide(index) {
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            testimonialControls.forEach(control => {
                control.classList.remove('active');
            });
            
            testimonialSlides[index].classList.add('active');
            testimonialControls[index].classList.add('active');
            currentSlide = index;
        }
        
        testimonialControls.forEach((control, index) => {
            control.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto slide testimonials
        setInterval(() => {
            let nextSlide = currentSlide + 1;
            if (nextSlide >= testimonialSlides.length) {
                nextSlide = 0;
            }
            showSlide(nextSlide);
        }, 5000);
        
        // Portfolio Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(filterBtn => {
                    filterBtn.classList.remove('active');
                });
                
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Skill Bars Animation
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
        
        // Contact Form
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
        
        // Initialize skill bars when About section is visible
        const aboutSection = document.querySelector('.about');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutSection);
   
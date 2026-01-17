// Projects data - Edit this array with your own projects
// category: "uiux" for UI/UX Design, "web" for Web Developer
const projects = [
    {
        id: 1,
        title: "Refreshoil Web",
        description: "A Laravel-based web application designed to manage used cooking oil distribution digitally. The system includes data collection features, pickup scheduling, distribution flow monitoring, and transaction data management. Built with a focus on ease of use, system efficiency, and data transparency through a modern, responsive, and user-friendly UI/UX approach.",
        tags: ["Web Development", "Database", "laravel", "JavaScript"],
        image: "🌐",
        category: "web",
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Weather Prediction",
        description: "A weather prediction web application that provides accurate weather information with real-time weather API integration. Displays temperature, humidity, wind speed data, and weather forecasts for several days ahead. Built using JavaScript with interactive data visualization and a responsive design for various devices.",
        tags: ["Web Development", "API Integration", "JavaScript"],
        image: "🌤️",
        category: "web",
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Lost and Found Mobile App",
        description: "A Flutter-based mobile application designed to help users report and find lost items. Key features include lost/found item reporting with photos and descriptions, category and location-based search, real-time notifications, and automatic matching system. Designed with an intuitive UI/UX using Figma to ensure optimal user experience.",
        tags: ["Mobile App", "UI/UX Design", "Flutter", "Figma"],
        image: "📱",
        category: "flutter",
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "SalesHub",
        description: "An integrated sales platform designed to optimize e-commerce business operations. The system provides product management, order processing, real-time inventory tracking, sales reports and analytics, as well as customer management. Built with modern web technologies to support efficient sales workflows and enable data-driven business decision making.",
        tags: ["Web Development", "E-Commerce", "Database"],
        image: "🛒",
        category: "web",
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "Smartkost IoT",
        description: "An Internet of Things (IoT) based smart boarding house management system that integrates sensors and IoT devices for automated monitoring. Features include room temperature and humidity monitoring, motion detection, automatic light control, electricity usage monitoring, and a web dashboard for real-time data visualization. The system helps property owners manage their facilities efficiently while providing enhanced comfort for residents.",
        tags: ["IoT", "Embedded Systems", "Web Development"],
        image: "🏠",
        category: "web",
        demoUrl: "#",
        githubUrl: "#"
    }
];

// Function to render projects - Type8 Style
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}" data-project-id="${project.id}">
            <div class="project-content">
                <h3 class="project-title">
                    <span class="project-title-text" style="cursor: pointer;">${project.title}</span>
                </h3>
                <div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags" style="margin-top: 15px;">
                        ${project.tags.map(tag => `<span class="tag">${tag.toLowerCase()}</span>`).join('')}
                    </div>
                    <div class="project-actions" style="margin-top: 20px; display: flex; gap: 15px;">
                        ${project.demoUrl !== '#' ? `<a href="${project.demoUrl}" target="_blank" class="btn btn-outline" style="padding: 10px 20px; font-size: 0.9rem;">
                            <span>View Demo</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>` : ''}
                        ${project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-outline" style="padding: 10px 20px; font-size: 0.9rem;">
                            <span>GitHub</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handler to open project modal
    const projectCards = projectsGrid.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const projectId = parseInt(card.getAttribute('data-project-id'));
        const titleText = card.querySelector('.project-title-text');
        
        if (titleText) {
            titleText.addEventListener('click', () => {
                openProjectModal(projectId);
            });
        }
        
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on links
            if (!e.target.closest('a')) {
                openProjectModal(projectId);
            }
        });
    });
}

// Portfolio filter functionality - removed for minimal design
function initPortfolioFilter() {
    // Filter removed for Type8 minimal style
}

// Contact form handling with EmailJS
// To setup EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template
// 4. Get your Public Key from Account > API Keys
// 5. Replace "YOUR_PUBLIC_KEY", "YOUR_SERVICE_ID", and "YOUR_TEMPLATE_ID" below
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    
    if (!contactForm) return;
    
    // Initialize EmailJS (you need to get your public key from EmailJS dashboard)
    // For now, using a placeholder - replace with your actual EmailJS public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    }
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validate form
        if (!name || !email || !subject || !message) {
            showFormError('Please fill in all fields');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormError('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span>';
        
        try {
            // Option 1: Using EmailJS (recommended)
            if (typeof emailjs !== 'undefined') {
                await emailjs.send(
                    'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                    'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                    {
                        from_name: name,
                        from_email: email,
                        subject: subject,
                        message: message,
                        to_email: 'fatihmuhammadzaid406@gmail.com'
                    }
                );
            } else {
                // Option 2: Fallback to mailto (if EmailJS not configured)
                const mailtoLink = `mailto:fatihmuhammadzaid406@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoLink;
            }
            
            // Show success message
            contactForm.style.display = 'none';
            contactSuccess.style.display = 'flex';
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                contactForm.style.display = 'block';
                contactSuccess.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            console.error('Error sending message:', error);
            showFormError('Failed to send message. Please try again or contact me directly via email.');
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}

// Show form error message
function showFormError(message) {
    const contactForm = document.getElementById('contactForm');
    let errorDiv = contactForm.querySelector('.form-error');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        contactForm.insertBefore(errorDiv, contactForm.firstChild);
    }
    
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

// Project Modal Functions
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-project-header">
            <div class="modal-project-icon">${project.image}</div>
            <h2 class="modal-project-title">${project.title}</h2>
        </div>
        <div class="modal-project-content">
            <div class="modal-project-description">
                <h3>About This Project</h3>
                <p>${project.description}</p>
            </div>
            <div class="modal-project-tech">
                <h3>Technologies Used</h3>
                <div class="modal-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag.toLowerCase()}</span>`).join('')}
                </div>
            </div>
            <div class="modal-project-links">
                ${project.demoUrl !== '#' ? `
                    <a href="${project.demoUrl}" target="_blank" class="btn btn-primary">
                        <span>View Live Demo</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                ` : ''}
                ${project.githubUrl !== '#' ? `
                    <a href="${project.githubUrl}" target="_blank" class="btn btn-outline">
                        <span>View on GitHub</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize modal close handlers
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeProjectModal);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// Download CV handler
function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadCV');
    
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your actual CV URL or file path
        alert('Please add your CV file and update the download link in script.js');
        // Uncomment below when you have CV file:
        // window.open('path/to/your-cv.pdf', '_blank');
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counter animation when in view
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                if (target) {
                    animateCounter(entry.target, target);
                    entry.target.classList.add('animated');
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Parallax effect for hero background
function initParallax() {
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.bg-shape');
    
    if (!hero || shapes.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.3;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Project card hover effect
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// Scroll indicator animation
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (!scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// Fade-in animation observer
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Page loader - hide immediately for now
function initPageLoader() {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        // Hide loader immediately
        pageLoader.classList.add('hidden');
    }
}

// WebGL 3D Scene with Three.js
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let animationFrameId = null;
let isWebGLSupported = false;

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check WebGL support
function checkWebGLSupport() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
}

// Detect device capabilities
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function initWebGL() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas || typeof THREE === 'undefined') {
        console.log('Three.js not loaded, using fallback particles');
        return;
    }
    
    // Check WebGL support
    isWebGLSupported = checkWebGLSupport();
    if (!isWebGLSupported) {
        console.log('WebGL not supported, using fallback particles');
        return;
    }
    
    // Reduce particles on mobile for performance
    const isMobile = isMobileDevice();
    const particleCount = isMobile ? 800 : 2000;
    
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    
    try {
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 1000;
        
        // Renderer with performance optimizations
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: !isMobile, // Disable antialiasing on mobile for performance
            powerPreference: 'high-performance'
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        renderer.setClearColor(0x000000, 0);
        
        // Create particle system
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        const color = new THREE.Color();
        const galaxyColors = [0xffffff, 0xc8b5ff, 0xa855f7, 0x8b5cf6, 0xec4899, 0x3b82f6]; // Galaxy colors: white, purple, pink, blue
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 2000;
            positions[i + 1] = (Math.random() - 0.5) * 2000;
            positions[i + 2] = (Math.random() - 0.5) * 2000;
            
            // Random galaxy color
            const randomColor = galaxyColors[Math.floor(Math.random() * galaxyColors.length)];
            color.setHex(randomColor);
            const alpha = Math.random() * 0.8 + 0.2; // Alpha between 0.2 and 1.0
            colors[i] = color.r * alpha;
            colors[i + 1] = color.g * alpha;
            colors[i + 2] = color.b * alpha;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: isMobile ? 1.5 : 2.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        particles = new THREE.Points(geometry, material);
        scene.add(particles);
        
        // Throttled mouse movement for better performance
        const throttledMouseMove = throttle(onDocumentMouseMove, 16);
        document.addEventListener('mousemove', throttledMouseMove, false);
        
        // Throttled resize handler
        const throttledResize = throttle(onWindowResize, 100);
        window.addEventListener('resize', throttledResize, false);
        
        // Start animation
        animate();
    } catch (error) {
        console.error('WebGL initialization error:', error);
        // Fallback to CSS particles
    }
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.1;
    mouseY = (event.clientY - windowHalfY) * 0.1;
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    if (particles && camera) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
        
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
    }
    
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

// Cleanup function
function cleanupWebGL() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (renderer) {
        renderer.dispose();
    }
    if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
    }
}

// Create animated particles (fallback CSS particles)
function initParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        container.appendChild(particle);
    }
    
    // Add enhanced floating particles
    const enhancedParticleCount = 20;
    for (let i = 0; i < enhancedParticleCount; i++) {
        const enhancedParticle = document.createElement('div');
        enhancedParticle.className = 'particle-enhanced';
        
        // Random starting position
        enhancedParticle.style.left = Math.random() * 100 + '%';
        enhancedParticle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        enhancedParticle.style.animationDelay = Math.random() * 15 + 's';
        
        container.appendChild(enhancedParticle);
    }
}

// Initialize GSAP Scroll Animations
function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-greeting', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-actions', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out'
    });
    
    // Section animations with scroll trigger
    gsap.utils.toArray('.section-title').forEach((title, index) => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            ease: 'power3.out'
        });
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            ease: 'power3.out'
        });
    });
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 40,
            rotationX: -15,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            ease: 'power3.out'
        });
    });
    
    // Resume items animation
    gsap.utils.toArray('.resume-item').forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            ease: 'power3.out'
        });
    });
}

// Enhanced project card interactions
function initAdvancedProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1.05,
                    y: -10,
                    rotationY: 5,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            } else {
                this.style.transform = 'translateY(-10px) scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1,
                    y: 0,
                    rotationY: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
        
        // Parallax effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;
            
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    rotationY: moveX,
                    rotationX: -moveY,
                    duration: 0.3,
                    ease: 'power1.out'
                });
            }
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initWebGL(); // Initialize WebGL 3D scene (with fallback)
    initParticles(); // Fallback CSS particles (always runs)
    renderProjects();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initCounterAnimation(); // Statistics counter
    initScrollProgress(); // Scroll progress indicator
    initParallax();
    initProjectCards();
    initAdvancedProjectCards(); // Enhanced interactions
    initScrollIndicator();
    initPortfolioFilter();
    initContactForm();
    initDownloadCV();
    initProjectModal(); // Initialize project modal
    initGSAPAnimations(); // GSAP scroll animations
    
    // Observe elements for fade-in animation (fallback)
    const animatedElements = document.querySelectorAll('.about-text, .contact-item, .section-subtitle, .service-card, .resume-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeObserver.observe(el);
    });
});

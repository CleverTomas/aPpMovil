document.addEventListener('DOMContentLoaded', function() {
    // Manejo de modales
    const modals = document.querySelectorAll('.modal');
    const modalButtons = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Mostrar modal
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Cerrar modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Cerrar modal al hacer click fuera
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Manejo de login y register modales
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginButtons = document.querySelectorAll('.btn-login');
    
    // Mostrar modal de login
    loginButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Alternar entre login y register
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('show');
        registerModal.classList.add('show');
    });
    
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.classList.remove('show');
        loginModal.classList.add('show');
    });
    
    // Formulario de aplicación
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simular envío de formulario
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto contigo pronto.');
                this.reset();
                submitButton.textContent = 'Enviar Solicitud';
                submitButton.disabled = false;
                
                // Cerrar modal
                const applyModal = document.getElementById('apply-modal');
                if (applyModal) {
                    applyModal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            }, 1500);
        });
    }
    
    // Formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simular inicio de sesión
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Iniciando sesión...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Inicio de sesión exitoso.');
                loginModal.classList.remove('show');
                document.body.style.overflow = '';
                
                // Simular usuario logueado
                document.querySelector('.user-controls').innerHTML = `
                    <div class="user-profile">
                        <span>Bienvenido, Usuario</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                `;
                
                submitButton.textContent = 'Ingresar';
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simular registro
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Creando cuenta...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Cuenta creada con éxito. Por favor inicia sesión.');
                this.reset();
                registerModal.classList.remove('show');
                loginModal.classList.add('show');
                
                submitButton.textContent = 'Crear Cuenta';
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Animación de botones al hacer scroll
    const animateOnScroll = () => {
        const featureCards = document.querySelectorAll('.feature-card');
        const vacancyCards = document.querySelectorAll('.vacancy-card');
        
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        [...featureCards, ...vacancyCards].forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    };
    
    // Iniciar animación al cargar la página
    animateOnScroll();
    
    // Botón de explorar oportunidades con animación
    const exploreButton = document.getElementById('btn-explore');
    if (exploreButton) {
        exploreButton.addEventListener('mouseenter', () => {
            exploreButton.style.transform = 'scale(1.1)';
        });
        
        exploreButton.addEventListener('mouseleave', () => {
            exploreButton.style.transform = 'scale(1)';
        });
        
        exploreButton.addEventListener('click', () => {
            document.querySelector('.vacancies-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Botón de hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const sideNav = document.querySelector('.side-nav');

    menuToggle.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const sideNavLinks = document.querySelectorAll('.side-nav a');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideNav.classList.remove('active');
        });
    });
});
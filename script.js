// Búsqueda
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert('Buscando: ' + searchTerm);
                // Aquí puedes implementar la lógica de búsqueda real
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Slider automático del hero
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (slides[index]) {
            slides[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambiar slide cada 5 segundos
    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }

    // Navegación móvil mejorada
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');

        if (dropdown && window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Cerrar otros dropdowns
                navItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherDropdown = otherItem.querySelector('.dropdown');
                        if (otherDropdown) {
                            otherDropdown.style.display = 'none';
                        }
                    }
                });

                // Toggle dropdown actual
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                }
            });
        }
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de animación al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar las tarjetas de noticias y eventos
    document.querySelectorAll('.noticia-card, .evento-card, .enlace-card').forEach(card => {
        observer.observe(card);
    });

    // Agregar año actual al footer
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const currentYear = new Date().getFullYear();
        footerBottom.textContent = footerBottom.textContent.replace('2024', currentYear);
    }
});

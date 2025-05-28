
document.addEventListener('DOMContentLoaded', function() {
    
    smoothScroll();
    
   
    animateCards();
    
   
    handleNavbarScroll();
    
   
    setupMobileMenu();
});


function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


function animateCards() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
}


function handleNavbarScroll() {
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
       
        if (currentScroll > 50) {
            nav.style.backgroundColor = '#ff69b4';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.boxShadow = 'none';
        }

        
        if (currentScroll > lastScroll && currentScroll > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}


function setupMobileMenu() {
    const nav = document.querySelector('nav ul');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    document.querySelector('nav').prepend(hamburger);
    
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}


document.querySelectorAll('.section h2').forEach(heading => {
    heading.addEventListener('mouseenter', () => {
        heading.style.transform = 'scale(1.05)';
    });
    
    heading.addEventListener('mouseleave', () => {
        heading.style.transform = 'scale(1)';
    });
});


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});


window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroText.style.transition = 'all 1s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 500);
});

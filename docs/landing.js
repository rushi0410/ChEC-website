// Simple function to scroll smoothly to sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Optional: Subtle entry animation
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-text > *');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const text = "Connect • Engage • Catalyze";
    const element = document.querySelector('.tagline');
    
    let i = 0;
    let isDeleting = false;
    
    function typeLoop() {
        // Determine current text based on i
        const currentText = text.substring(0, i);
        element.textContent = currentText;

        // Typing Speed logic
        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2; // Delete faster than typing
            i--;
        } else {
            i++;
        }

        // Logic to switch between typing and deleting
        if (!isDeleting && i > text.length) {
            // Finished typing, pause before deleting
            typeSpeed = 2000; 
            isDeleting = true;
        } else if (isDeleting && i === 0) {
            // Finished deleting, pause before re-typing
            isDeleting = false;
            typeSpeed = 500;
        }

        setTimeout(typeLoop, typeSpeed);
    }

    typeLoop();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Only run if it's an internal link (starts with #)
        if (targetId.startsWith("#")) {
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
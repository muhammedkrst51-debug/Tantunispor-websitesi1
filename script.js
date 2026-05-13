// Konfeti Efekti
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const confettiPieces = 100;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 0.5;
        const randomDuration = 2 + Math.random() * 1;
        const randomRotation = Math.random() * 360;
        const randomColor = ['#FFD700', '#FFA500', '#FF6F00', '#FF0000', '#00FF00', '#0000FF', '#FF69B4'][Math.floor(Math.random() * 7)];
        
        confetti.style.left = randomLeft + '%';
        confetti.style.backgroundColor = randomColor;
        confetti.style.animation = `fall ${randomDuration}s linear ${randomDelay}s forwards`;
        confetti.style.transform = `rotate(${randomRotation}deg)`;
        
        container.appendChild(confetti);
    }
    
    // CSS animasyonu
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to player cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.player-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Highlight active navigation link
window.addEventListener('load', function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && item.getAttribute('href') === 'index.html')) {
            item.style.color = '#ffd700';
        }
    });
});

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    // Sayfa yüklendiğinde konfeti efektini başlat
    createConfetti();
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';

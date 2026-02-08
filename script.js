// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });
});

// Hero text motion effect
const heroText = document.querySelector('.hero-content h1');
const heroBtn = document.querySelector('.hero-content .btn');

if(heroText && heroBtn){
  heroText.addEventListener('mouseover', () => {
    heroText.style.transform = 'scale(1.05)';
  });
  heroText.addEventListener('mouseout', () => {
    heroText.style.transform = 'scale(1)';
  });

  heroBtn.addEventListener('mouseover', () => {
    heroBtn.style.transform = 'scale(1.05)';
  });
  heroBtn.addEventListener('mouseout', () => {
    heroBtn.style.transform = 'scale(1)';
  });
}

// HEADER
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// SEÇÃO NOSSA SOLUÇÃO
const carousel = document.querySelector('.solucao-carousel');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


const scrollAmount = 370;

btnNext.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// FOOTER
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Sua mensagem foi enviada com sucesso.');
    contactForm.reset();
  });
}
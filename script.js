// scripts.js

// Mostrar seções com efeito ao rolar (fade-in)
function revealOnScroll() {
  const sections = document.querySelectorAll('section, .hero, form');

  sections.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Efeito para header mudar cor ao rolar
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Validação simples e feedback ao enviar formulário
const form = document.getElementById('pedidoForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Pode adicionar validação extra aqui se quiser
  alert('Pedido enviado com sucesso! Entraremos em contato em breve.');
  form.reset();
});

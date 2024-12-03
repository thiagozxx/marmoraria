window.addEventListener('scroll', function() {
  const header = document.querySelector('.init');
  
  if (window.scrollY > 68) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// Funcionalidade do menu hambúrguer para dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Abre ou fecha o menu quando o botão for clicado
menuToggle.addEventListener('click', function() {
  menu.classList.toggle('open');
});

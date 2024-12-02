const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Função para abrir/fechar o menu ao clicar no botão
menuToggle.addEventListener("click", function (event) {
  event.stopPropagation(); // Impede que o clique no botão feche o menu
  menu.classList.toggle("open");
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
  const isClickInside = menu.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside) {
    menu.classList.remove("open");
  }
});
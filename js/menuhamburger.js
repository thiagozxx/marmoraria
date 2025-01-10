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


const categoryButtons = document.querySelectorAll('.category button');
    const galleries = document.querySelectorAll('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.querySelector('.modal-close');

    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        galleries.forEach(gallery => gallery.style.display = 'none');
        document.getElementById(button.dataset.category).style.display = 'flex';
      });
    });

    galleries.forEach(gallery => {
      gallery.addEventListener('click', event => {
        if (event.target.tagName === 'IMG') {
          modalImg.src = event.target.src;
          modalDesc.textContent = event.target.dataset.desc;
          modal.style.display = 'flex';
        }
      });
    });

    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    galleries.forEach(gallery => {
  gallery.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
      modalImg.src = event.target.src; // Define a imagem no modal
      modalDesc.innerHTML = `${event.target.dataset.desc}<br><br><strong>${event.target.alt}</strong>`; // Exibe o título e a descrição
      modal.style.display = 'flex'; // Mostra o modal
    }
  });
});
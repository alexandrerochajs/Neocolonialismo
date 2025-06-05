const btn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('menu-ativo');
  menu.classList.toggle('menu-escondido');
});

const btnOpen = document.getElementById('menu-toggle');
const btnClose = document.getElementById('menu-close');
const menu1 = document.getElementById('menu');

btnOpen.addEventListener('click', () => {
  menu.classList.add('menu-ativo');
});

btnClose.addEventListener('click', () => {
  menu.classList.remove('menu-ativo');
});

function abrirModal(imagem) {
    const modal = document.getElementById("modal");
    const imgModal = document.getElementById("imgModal");
    modal.style.display = "flex";
    imgModal.src = imagem.src;
  }

  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }

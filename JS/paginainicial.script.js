const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modalOverlay');

// Abre o modal ao clicar no botão +
openBtn.onclick = function() {
  modal.style.display = 'flex';
}

// Fecha o modal ao clicar em Confirmar
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Fecha se o usuário clicar fora da caixa azul
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

const serieInput = document.getElementById("serie");
const turmaInput = document.getElementById("turma");

const erroSerie = document.getElementById("erroSerie");
const erroTurma = document.getElementById("erroTurma");

// abrir modal
openModal.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  serieInput.focus();
});

// fechar clicando fora
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    fecharModal();
  }
});

// série apenas números
serieInput.addEventListener("input", () => {
  serieInput.value = serieInput.value.replace(/\D/g, "");
  limparErro(serieInput, erroSerie);
});

// limpa erro ao digitar turma
turmaInput.addEventListener("input", () => {
  limparErro(turmaInput, erroTurma);
});

// confirmar
closeModal.addEventListener("click", () => {
  const serie = serieInput.value.trim();
  const turma = turmaInput.value.trim();

  let valido = true;

  if (serie === "") {
    mostrarErro(serieInput, erroSerie, "Digite a série.");
    valido = false;
  }

  if (turma === "") {
    mostrarErro(turmaInput, erroTurma, "Digite a turma.");
    valido = false;
  }

  if (!valido) return;

  fecharModal();
});

function mostrarErro(input, campoErro, mensagem) {
  input.classList.add("erro-input");
  campoErro.textContent = mensagem;
}

function limparErro(input, campoErro) {
  input.classList.remove("erro-input");
  campoErro.textContent = "";
}

function fecharModal() {
  modalOverlay.style.display = "none";

  serieInput.value = "";
  turmaInput.value = "";

  limparErro(serieInput, erroSerie);
  limparErro(turmaInput, erroTurma);
}
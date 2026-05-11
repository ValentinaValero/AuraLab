const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

const nomeAlunoInput = document.getElementById("nomeAluno");
const numeroChamadaInput = document.getElementById("numeroChamada");

const erroNome = document.getElementById("erroNome");
const erroNumero = document.getElementById("erroNumero");

// abrir modal
openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlay.style.display = "flex";
    nomeAlunoInput.focus();
});

// fechar clicando fora
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        fecharModal();
    }
});

// limpar erro nome
nomeAlunoInput.addEventListener("input", () => {
    limparErro(nomeAlunoInput, erroNome);
});

// número apenas números
numeroChamadaInput.addEventListener("input", () => {
    numeroChamadaInput.value = numeroChamadaInput.value.replace(/\D/g, "");
    limparErro(numeroChamadaInput, erroNumero);
});

// confirmar
closeModal.addEventListener("click", () => {
    const nome = nomeAlunoInput.value.trim();
    const numero = numeroChamadaInput.value.trim();

    let valido = true;

    if (nome === "") {
        mostrarErro(nomeAlunoInput, erroNome, "Digite o nome do aluno.");
        valido = false;
    }

    if (numero === "") {
        mostrarErro(numeroChamadaInput, erroNumero, "Digite o número da chamada.");
        valido = false;
    }

    if (!valido) return;

    console.log("Aluno:", nome, "Número:", numero);

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

    nomeAlunoInput.value = "";
    numeroChamadaInput.value = "";

    limparErro(nomeAlunoInput, erroNome);
    limparErro(numeroChamadaInput, erroNumero);
}
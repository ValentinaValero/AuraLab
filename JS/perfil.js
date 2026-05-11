const addAura = document.querySelector(".addAura");
const dscAura = document.querySelector(".dscAura");

const modalOverlay = document.getElementById("modalOverlay");
const tituloPopup = document.getElementById("tituloPopup");
const inputAura = document.getElementById("inputAura");
const erroAura = document.getElementById("erroAura");
const confirmarAura = document.getElementById("confirmarAura");

const numeroAura = document.querySelector(".numAura h1");

let tipoAcao = "add";

// abrir modal adicionar
addAura.addEventListener("click", () => {
    tipoAcao = "add";
    tituloPopup.textContent = "Adicionar Aura";
    abrirModal();
});

// abrir modal descontar
dscAura.addEventListener("click", () => {
    tipoAcao = "remove";
    tituloPopup.textContent = "Descontar Aura";
    abrirModal();
});

// fechar clicando fora
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        fecharModal();
    }
});

// somente números
inputAura.addEventListener("input", () => {
    inputAura.value = inputAura.value.replace(/\D/g, "");
    limparErro();
});

// confirmar
confirmarAura.addEventListener("click", () => {
    const valor = inputAura.value.trim();

    if (valor === "") {
        mostrarErro("Digite um valor.");
        return;
    }

    let auraAtual = parseInt(numeroAura.textContent);
    let valorDigitado = parseInt(valor);

    if (tipoAcao === "add") {
        auraAtual += valorDigitado;
    } else {
        auraAtual -= valorDigitado;
        if (auraAtual < 0) auraAtual = 0;
    }

    numeroAura.textContent = auraAtual;
    fecharModal();
});

function abrirModal() {
    modalOverlay.style.display = "flex";
    inputAura.focus();
}

function fecharModal() {
    modalOverlay.style.display = "none";
    inputAura.value = "";
    limparErro();
}

function mostrarErro(mensagem) {
    inputAura.classList.add("erro-input");
    erroAura.textContent = mensagem;
}

function limparErro() {
    inputAura.classList.remove("erro-input");
    erroAura.textContent = "";
}
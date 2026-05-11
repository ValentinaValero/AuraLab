const username = document.getElementById("username");
const senha = document.getElementById("senha");
const erroUsername = document.getElementById("erroUsername");
const erroSenha = document.getElementById("erroSenha");
const btn = document.querySelector(".btn");
const toggleSenha = document.getElementById("toggleSenha");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    let valido = true;

    erroUsername.style.display = "none";
    erroSenha.style.display = "none";

    const usernameValor = username.value.trim();
    const senhaValor = senha.value.trim();

    if (usernameValor === "") {
        erroUsername.textContent = "Digite seu username";
        erroUsername.style.display = "block";
        valido = false;
    }

    if (senhaValor === "") {
        erroSenha.textContent = "Digite sua senha";
        erroSenha.style.display = "block";
        valido = false;
    }

    if (valido) {
        window.location.href = "../HTML/paginainicial.html";
    }
});

toggleSenha.addEventListener("click", function () {
    if (senha.type === "password") {
        senha.type = "text";
        toggleSenha.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        senha.type = "password";
        toggleSenha.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});
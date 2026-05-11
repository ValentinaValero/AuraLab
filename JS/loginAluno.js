const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    let valido = true;

    erroEmail.style.display = "none";
    erroSenha.style.display = "none";

    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();

    if (emailValor === "") {
        erroEmail.textContent = "Digite seu e-mail";
        erroEmail.style.display = "block";
        valido = false;
    } else {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(emailValor)) {
            erroEmail.textContent = "Digite um e-mail válido";
            erroEmail.style.display = "block";
            valido = false;
        }
    }

    if (senhaValor === "") {
        erroSenha.textContent = "Digite sua senha";
        erroSenha.style.display = "block";
        valido = false;
    }

    if (valido) {
        window.location.href = "../HTML/aluno.html";
    }
});
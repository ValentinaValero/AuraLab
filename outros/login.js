const btn = document.querySelector('.btn');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const toggleSenha = document.getElementById('toggleSenha');
const erroEmail = document.getElementById('erroEmail');

toggleSenha.addEventListener('click', () => {

    const icone = toggleSenha.querySelector('i');

    if(senha.type === 'password'){
        senha.type = 'text';
        icone.classList.remove('fa-eye');
        icone.classList.add('fa-eye-slash');
    } else {
        senha.type = 'password';
        icone.classList.remove('fa-eye-slash');
        icone.classList.add('fa-eye');
    }

});

email.addEventListener('input', () => {
    const valido = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i.test(email.value);

    if(email.value === ""){
        erroEmail.style.display = "none";
    }else if(valido){
        erroEmail.style.display = "none";
    }else{
        erroEmail.style.display = "block";
    }
});

btn.addEventListener('click', () => {

    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();

    const valido = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i.test(emailValor);

    if(!valido){
        erroEmail.style.display = "block";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user =>
        user.email === emailValor &&
        user.senha === senhaValor
    );

    if(usuario){
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        alert('Login realizado!');
        window.location.href = 'paginainicial.html';
    }else{
        alert('Email ou senha incorretos.');
    }

});
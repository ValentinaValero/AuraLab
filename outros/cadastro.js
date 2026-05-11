const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const senha = document.getElementById('senha');
const btn = document.querySelector('.btn');
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

cpf.addEventListener('input', () => {
  let valor = cpf.value.replace(/\D/g, '');

  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  cpf.value = valor;
});

btn.addEventListener('click', () => {

  const nomeValor = nome.value.trim();
  const emailValor = email.value.trim();
  const cpfValor = cpf.value.trim();
  const senhaValor = senha.value.trim();

  const emailValido = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i.test(emailValor);

  if(!nomeValor || !emailValor || !cpfValor || !senhaValor){
    alert('Preencha todos os campos.');
    return;
  }

  if(!emailValido){
    erroEmail.style.display = "block";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const existe = usuarios.find(user => user.email === emailValor);

  if(existe){
    alert('Email já cadastrado.');
    return;
  }

  usuarios.push({
    nome: nomeValor,
    email: emailValor,
    cpf: cpfValor,
    senha: senhaValor
  });

  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'login.html';

});
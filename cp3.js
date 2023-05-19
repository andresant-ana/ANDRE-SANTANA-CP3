var camposInvalidos = [];

function validarPrimeiroNome() {
  var primeiroNome = document.getElementById("primeiro-nome");
  var primeiroNomeErro = document.getElementById("primeiro-nome-erro");

  if (primeiroNome.value.length < 5 || primeiroNome.value.trim() == "") {
    primeiroNome.classList.add("is-invalid");
    primeiroNomeErro.classList.remove("d-none");
    camposInvalidos.push(primeiroNome.name);
    return false;
  } else {
    primeiroNome.classList.remove("is-invalid");
    primeiroNomeErro.classList.add("d-none");
    return true;
  }
}

function validarSegundoNome() {
  var segundoNome = document.getElementById("segundo-nome");
  var segundoNomeErro = document.getElementById("segundo-nome-erro");
  if (segundoNome.value.length < 5 || segundoNome.value.trim() == "") {
    segundoNome.classList.add("is-invalid");
    segundoNomeErro.classList.remove("d-none");
    camposInvalidos.push(segundoNome.name);
    return false;
  } else {
    segundoNome.classList.remove("is-invalid");
    segundoNomeErro.classList.add("d-none");
    return true;
  }
}

function validarEmail() {
  var email = document.getElementById("email");
  var emailErro = document.getElementById("email-erro");
  if (
    email.value.length < 5 ||
    email.value.trim() == "" ||
    !email.value.includes("@")
  ) {
    email.classList.add("is-invalid");
    emailErro.classList.remove("d-none");
    camposInvalidos.push(email.name);
    return false;
  } else {
    email.classList.remove("is-invalid");
    emailErro.classList.add("d-none");
    return true;
  }
}

function validarSenha() {
  var senha = document.getElementById("senha");
  var senhaErro = document.getElementById("senha-erro");
  if (
    senha.value.length < 6 ||
    senha.value.length > 8 ||
    senha.value.trim() == ""
  ) {
    senha.classList.add("is-invalid");
    senhaErro.classList.remove("d-none");
    camposInvalidos.push(senha.name);
    return false;
  } else {
    senha.classList.remove("is-invalid");
    senhaErro.classList.add("d-none");
    return true;
  }
}

function validarConfirmacaoSenha() {
  var confirmacaoSenha = document.getElementById("confirmacao-senha");
  var senha = document.getElementById("senha");
  var confirmacaoSenhaErro = document.getElementById("confirmacao-senha-erro");
  if (confirmacaoSenha.value != senha.value) {
    confirmacaoSenha.classList.add("is-invalid");
    confirmacaoSenhaErro.classList.remove("d-none");
    camposInvalidos.push(confirmacaoSenha.name);
    return false;
  } else {
    confirmacaoSenha.classList.remove("is-invalid");
    confirmacaoSenhaErro.classList.add("d-none");
    return true;
  }
}

function validarFormulario() {
  camposInvalidos.splice(0, camposInvalidos.length);
  var primeiroNomeValido = validarPrimeiroNome();
  var segundoNomeValido = validarSegundoNome();
  var emailValido = validarEmail();
  var senhaValida = validarSenha();
  var confirmacaoSenhaValida = validarConfirmacaoSenha();
  if (
    primeiroNomeValido &&
    segundoNomeValido &&
    emailValido &&
    senhaValida &&
    confirmacaoSenhaValida
  ) {
    alert("Cadastro realizado com sucesso!");
    return true;
  } else {
    var camposLegiveis = camposInvalidos.map((campo) =>
      campo
        .split("-")
        .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
        .join(" ")
    );
    alert(
      "Por favor, corrija os seguintes campos: " + camposLegiveis.join(", ")
    );
    return false;
  }
}

function ativarDarkMode() {
  var checkbox = document.getElementById("checkbox-dark-mode");
  var corpo = document.body;
  var formulario = document.getElementById("form-cadastro");
  var entradas = document.getElementsByTagName("input");
  var etiquetas = document.getElementsByTagName("label");
  var botao = document.getElementsByTagName("button")[0];
  if (checkbox.checked) {
    corpo.style.backgroundColor = "#222";
    corpo.style.color = "#fff";
    formulario.style.backgroundColor = "#333";
    formulario.style.borderColor = "#fff";
    botao.style.backgroundColor = "#444";
    botao.style.borderColor = "#fff";
    for (var i = 0; i < entradas.length; i++) {
      entradas[i].style.backgroundColor = "#444";
      entradas[i].style.borderColor = "#fff";
    }
    for (var i = 0; i < etiquetas.length; i++) {
      etiquetas[i].style.color = "#fff";
    }
  } else {
    corpo.style.backgroundColor = "";
    corpo.style.color = "";
    formulario.style.backgroundColor = "";
    formulario.style.borderColor = "";
    botao.style.backgroundColor = "";
    botao.style.borderColor = "";
    for (var i = 0; i < entradas.length; i++) {
      entradas[i].style.backgroundColor = "";
      entradas[i].style.borderColor = "";
    }
    for (var i = 0; i < etiquetas.length; i++) {
      etiquetas[i].style.color = "";
    }
  }
}

function validarPrimeiroNome() {
    var primeiroNome = document.getElementById("primeiro-nome");
    var primeiroNomeErro = document.getElementById("primeiro-nome-erro");
    if (primeiroNome.value.length < 5 || primeiroNome.value.trim() == "") {
        primeiroNome.classList.add("is-invalid");
        primeiroNomeErro.classList.remove("d-none");
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
    if (email.value.length < 5 || email.value.trim() == "" || !email.value.includes("@")) {
        email.classList.add("is-invalid");
        emailErro.classList.remove("d-none");
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
    if (senha.value.length < 6 || senha.value.length > 8 || senha.value.trim() == "") {
        senha.classList.add("is-invalid");
        senhaErro.classList.remove("d-none");
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
        return false;
    } else {
        confirmacaoSenha.classList.remove("is-invalid");
        confirmacaoSenhaErro.classList.add("d-none");
        return true;
    }
}
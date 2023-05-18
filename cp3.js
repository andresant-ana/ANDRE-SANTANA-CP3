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
        return false;
    } else {
        segundoNome.classList.remove("is-invalid");
        return true;
    }
}
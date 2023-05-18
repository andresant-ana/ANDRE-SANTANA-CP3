function validarPrimeiroNome() {
    var primeiroNome = document.getElementById("primeiro-nome");
    var primeiroNomeErro = document.getElementById("primeiro-nome-erro");
    if (primeiroNome.value.length < 5 || primeiroNome.value.trim() == "") {
        primeiroNome.classList.add("is-invalid");
        return false;
    } else {
        primeiroNome.classList.remove("is-invalid");
        return true;
    }
}
function mostrarDadosForm(event){
    event.preventDefault();

    if (!document.getElementById("formulario").checkValidity()) {
        document.getElementById("formulario").reportValidity();
        return;
    }

    let nome = document.getElementById("ipNome").value;
    let email = document.getElementById("ipEmail").value;
    let data = document.getElementById("ipDtNascimento").value;
    let tel = document.getElementById("ipTelefone").value;
    let mensagem = document.getElementById("taMensagem").value;
    let motivo = document.getElementById("slMotivo").value;

    let opcao = document.querySelector('input[name="gostou"]:checked');
    let gostou = opcao ? opcao.value : "Não respondeu";

    if (gostou == "Sim") {
        document.getElementById("resposta").innerHTML =
            "Olá, " + nome + "! Fico feliz que tenha gostado do site! 😃";
    }
    else if (gostou == "Não") {
        document.getElementById("resposta").innerHTML =
            "Olá, " + nome + "! Obrigado pela sinceridade, sei que sou uma inútil. Vou melhorar o site! 😔";
    }
    else {
        document.getElementById("resposta").innerHTML =
            "Olá, " + nome + ", confira os dados informados:";
    }

    document.getElementById("pNome").innerHTML =
        "Nome: " + nome;

    document.getElementById("pEmail").innerHTML =
        "Email: " + email;

    document.getElementById("pDtNascimento").innerHTML =
        "Data de nascimento: " + data;

    document.getElementById("pTelefone").innerHTML =
        "Telefone: " + tel;

    document.getElementById("pMensagem").innerHTML =
        "Mensagem: " + mensagem;

    document.getElementById("pMotivo").innerHTML =
        "Motivo: " + motivo;

    document.getElementById("pGostou").innerHTML =
        "Gostou do site: " + gostou;

    document.getElementById("btConfirmar").style.display = "inline-block";
}

function confirmarDados(){
    alert("Dados confirmados com sucesso!");

    document.getElementById("formulario").submit();
}

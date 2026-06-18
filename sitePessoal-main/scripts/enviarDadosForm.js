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

    document.getElementById("resposta").innerHTML =
        "Olá, " + nome + ", confira os dados informados:";

    document.getElementById("pNome").innerHTML =
        "Nome: " + nome;

    document.getElementById("pEmail").innerHTML =
        "Email: " + email;

    document.getElementById("pDtNascimento").innerHTML =
        "Data de nascimento: " + data;

    document.getElementById("pTelefone").innerHTML =
        "Telefone" + tel;

    document.getElementById("pMensagem").innerHTML =
        "Mensagem: " + mensagem;

    document.getElementById("pMotivo").innerHTML =
        "Motivo: " + motivo;

    document.getElementById("btConfirmar").style.display = "inline-block";
}

function confirmarDados(){
    alert("Dados confirmados com sucesso!");

    // Envia o formulário
    document.getElementById("formulario").submit();
}
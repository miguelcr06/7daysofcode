function daytwo_userexperience_run() {
    let nome = document.getElementById("daytwo_nome").value.trim();
    let idade = document.getElementById("daytwo_idade").value.trim();
    let linguagem = document.getElementById("daytwo_linguagem").value.trim();

    if (!nome || !idade || !linguagem) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    let mensagem = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
    document.getElementById("daytwo_result").innerHTML = mensagem;

    // Atualizar a pergunta opcional com a linguagem
    document.getElementById("daytwo_optional_question").innerHTML = `Você gosta de estudar ${linguagem}?`;

    // Mostrar a seção opcional
    document.getElementById("daytwo_optional").style.display = "block";
}

function daytwo_optional_sim() {
    let linguagem = document.getElementById("daytwo_linguagem").value.trim();
    let mensagem = "Muito bom! Continue estudando e você terá muito sucesso.";
    document.getElementById("daytwo_optional_result").innerHTML = mensagem;
}

function daytwo_optional_nao() {
    let linguagem = document.getElementById("daytwo_linguagem").value.trim();
    let mensagem = "Ahh que pena... Já tentou aprender outras linguagens?";
    document.getElementById("daytwo_optional_result").innerHTML = mensagem;
}
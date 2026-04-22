let numeroSecretoHints = Math.floor(Math.random() * 11);
let tentativasRestantesHints = 3;
let jogoAtivoHints = true;

function dayfour_guess_hints() {
    if (!jogoAtivoHints) return;

    let chute = parseInt(document.getElementById("dayfour_hints_input").value);
    if (isNaN(chute) || chute < 0 || chute > 10) {
        alert("Por favor, insira um número entre 0 e 10.");
        return;
    }

    let resultado = `Você chutou: ${chute}<br>`;
    if (chute === numeroSecretoHints) {
        resultado += "Parabéns! Você acertou!<br>";
        jogoAtivoHints = false;
        document.getElementById("dayfour_hints_submit_btn").innerHTML = "Tentar Novamente";
        document.getElementById("dayfour_hints_submit_btn").onclick = dayfour_reset_hints;
    } else {
        tentativasRestantesHints--;
        if (chute > numeroSecretoHints) {
            resultado += "Errou! O número é menor.<br>";
        } else {
            resultado += "Errou! O número é maior.<br>";
        }
        if (tentativasRestantesHints > 0) {
            resultado += `Você tem ${tentativasRestantesHints} tentativa(s) restante(s).<br>`;
        } else {
            resultado += `Você perdeu! O número era ${numeroSecretoHints}.<br>`;
            jogoAtivoHints = false;
            document.getElementById("dayfour_hints_submit_btn").innerHTML = "Tentar Novamente";
            document.getElementById("dayfour_hints_submit_btn").onclick = dayfour_reset_hints;
        }
    }

    document.getElementById("dayfour_hints_result").innerHTML += resultado;
    document.getElementById("dayfour_hints_input").value = "";
}

function dayfour_reset_hints() {
    numeroSecretoHints = Math.floor(Math.random() * 11);
    tentativasRestantesHints = 3;
    jogoAtivoHints = true;
    document.getElementById("dayfour_hints_result").innerHTML = "";
    document.getElementById("dayfour_hints_submit_btn").innerHTML = "Enviar";
    document.getElementById("dayfour_hints_submit_btn").onclick = () => { event.preventDefault(); dayfour_guess_hints(); };
}
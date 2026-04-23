let numeroSecreto = Math.floor(Math.random() * 11);
let tentativasRestantes = 3;
let jogoAtivo = true;

function dayfour_guess() {
    if (!jogoAtivo) return;

    let chute = parseInt(document.getElementById("dayfour_guess_input").value);
    if (isNaN(chute) || chute < 0 || chute > 10) {
        alert("Por favor, insira um número entre 0 e 10.");
        return;
    }

    let resultado = `Você chutou: ${chute}<br>`;
    if (chute === numeroSecreto) {
        resultado += "Parabéns! Você acertou!<br>";
        jogoAtivo = false;
        document.getElementById("dayfour_submit_btn").innerHTML = "Tentar Novamente";
        document.getElementById("dayfour_submit_btn").onclick = dayfour_reset;
    } else {
        tentativasRestantes--;
        if (tentativasRestantes > 0) {
            resultado += `Errou! Você tem ${tentativasRestantes} tentativa(s) restante(s).<br>`;
        } else {
            resultado += `Você perdeu! O número era ${numeroSecreto}.<br>`;
            jogoAtivo = false;
            document.getElementById("dayfour_submit_btn").innerHTML = "Tentar Novamente";
            document.getElementById("dayfour_submit_btn").onclick = dayfour_reset;
        }
    }

    document.getElementById("dayfour_result").innerHTML += resultado;
    document.getElementById("dayfour_guess_input").value = "";
}

function dayfour_reset() {
    numeroSecreto = Math.floor(Math.random() * 11);
    tentativasRestantes = 3;
    jogoAtivo = true;
    document.getElementById("dayfour_result").innerHTML = "";
    document.getElementById("dayfour_submit_btn").innerHTML = "Enviar";
    document.getElementById("dayfour_submit_btn").onclick = () => { event.preventDefault(); dayfour_guess(); };
}
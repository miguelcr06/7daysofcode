function dayfour_solving_run() {
    let numeroSecreto = 7;
    let tentativas = 3;
    let acertou = false;
    let chutes = [5, 8, 7]; // Simulação de chutes
    let index = 0;
    let resultado = "Jogo com número secreto: 7<br>";

    while (tentativas > 0 && !acertou) {
        let chute = chutes[index++];
        resultado += `Tentativa ${4 - tentativas}: Você chutou ${chute}. `;
        if (chute === numeroSecreto) {
            resultado += "Parabéns! Você acertou!<br>";
            acertou = true;
        } else {
            tentativas--;
            if (tentativas > 0) {
                resultado += `Errou! Você tem ${tentativas} tentativa(s) restante(s).<br>`;
            } else {
                resultado += `Você perdeu! O número era ${numeroSecreto}.<br>`;
            }
        }
    }

    document.getElementById("dayfour_solving_result").innerHTML = resultado;
}
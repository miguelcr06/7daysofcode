let numeroSecretoExample = 7;
let tentativasRestantesExample = 3;
let jogoAtivoExample = true;

function dayfour_example_guess() {
    if (!jogoAtivoExample) return;

    let chute = parseInt(document.getElementById("dayfour_example_input").value);
    if (isNaN(chute) || chute < 0 || chute > 10) {
        alert("Por favor, insira um número entre 0 e 10.");
        return;
    }

    let resultado = `Você chutou: ${chute}<br>`;
    if (chute === numeroSecretoExample) {
        resultado += "Parabéns! Você acertou!<br>";
        jogoAtivoExample = false;
        document.getElementById("dayfour_example_submit_btn").innerHTML = "Tentar Novamente";
        document.getElementById("dayfour_example_submit_btn").onclick = dayfour_reset_example;
    } else {
        tentativasRestantesExample--;
        if (tentativasRestantesExample > 0) {
            resultado += `Errou! Você tem ${tentativasRestantesExample} tentativa(s) restante(s).<br>`;
        } else {
            resultado += `Você perdeu! O número era ${numeroSecretoExample}.<br>`;
            jogoAtivoExample = false;
            document.getElementById("dayfour_example_submit_btn").innerHTML = "Tentar Novamente";
            document.getElementById("dayfour_example_submit_btn").onclick = dayfour_reset_example;
        }
    }

    document.getElementById("dayfour_example_result").innerHTML += resultado;
    document.getElementById("dayfour_example_input").value = "";
}

function dayfour_reset_example() {
    tentativasRestantesExample = 3;
    jogoAtivoExample = true;
    document.getElementById("dayfour_example_result").innerHTML = "";
    document.getElementById("dayfour_example_submit_btn").innerHTML = "Enviar";
    document.getElementById("dayfour_example_submit_btn").onclick = () => { event.preventDefault(); dayfour_example_guess(); };
}
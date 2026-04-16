function dayone_userexperience_run() {
	let entradaUm = document.getElementById("dayone_entrance_one").value.trim();
	let entradaDois = document.getElementById("dayone_entrance_two").value.trim();

	// Função para parsear o valor e tipo
	function parseValue(input) {
		if ((input.startsWith('"') && input.endsWith('"')) || (input.startsWith("'") && input.endsWith("'"))) {
			// É uma string com aspas, remove as aspas
			return input.slice(1, -1);
		} else {
			// Tenta converter para número
			let num = Number(input);
			if (!isNaN(num) && isFinite(num)) {
				return num;
			} else {
				// Trata como string
				return input;
			}
		}
	}

	let valorUm = parseValue(entradaUm);
	let valorDois = parseValue(entradaDois);

	let tipoUm = typeof valorUm;
	let tipoDois = typeof valorDois;

	let iguaisValor = valorUm == valorDois;
	let iguaisTipo = tipoUm === tipoDois;

	let resultado = "Os valores " + entradaUm + " e " + entradaDois;

	if (iguaisValor) {
		resultado += " são iguais ";
	} else {
		resultado += " são diferentes ";
	}

	if (iguaisTipo) {
		resultado += "e do mesmo tipo. <br> Elas são do tipo " + tipoUm;
	} else {
		resultado += "e de tipos diferentes. <br> O tipo de " + entradaUm + " é " + tipoUm + " e o tipo de " + entradaDois + " é " + tipoDois;
	}

	let linhaDeResultado = document.getElementById("user_experience_result");
	linhaDeResultado.innerHTML = resultado;
	console.log(resultado);
}




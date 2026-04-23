function dayone_solving_run() {
	let numeroUm = 1
	let stringUm = '1'
	let numeroTrinta = 30
	let stringTrinta = '30'
	let numeroDez = 10
	let stringDez = '10'

	let lista = [numeroUm, stringUm, numeroTrinta, stringTrinta, numeroDez, stringDez]
	let resultadoComparacaoTipo = []
	let resultadoComparacaoValor = []

	for (let i = 0; i < lista.length; i += 2) {
		let mod = i % 2
		if (mod === 0) {
			resultadoComparacaoValor.push(lista[i] == lista[i + 1])
			resultadoComparacaoTipo.push(lista[i] === lista[i + 1])
		} else {
			continue
		}
	}

	let listaComparacao = []

	for (let i = 0; i < resultadoComparacaoValor.length; i++) {
		if (resultadoComparacaoValor[i] === true) {
			listaComparacao.push("Os valores são iguais ")
		} else {
			listaComparacao.push("Os valores são diferentes ")
		}
		if (resultadoComparacaoTipo[i] === true) {
			listaComparacao[i] += "e do mesmo tipo"
		} else {
			listaComparacao[i] += "e de tipos diferentes"
		}
	}

	let linhaDeResultado = document.getElementById("answer_dayone_returned")
	linhaDeResultado.innerHTML = listaComparacao[0] + "<br>" + listaComparacao[1] + "<br>" + listaComparacao[2]

	console.log(listaComparacao[0])
	console.log(listaComparacao[1])
	console.log(listaComparacao[2])
}
// Funções de operação
function calcSomar(a, b) {
    return a + b;
}

function calcSubtrair(a, b) {
    return a - b;
}

function calcMultiplicar(a, b) {
    return a * b;
}

function calcDividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

let calculadoraAtiva = true;

function dayseven_showMenu() {
    let resultado = document.getElementById("dayseven_result");
    
    if (!calculadoraAtiva) {
        resultado.innerHTML += '<br><strong>Até a próxima!</strong><br>';
        resultado.innerHTML += '<button onclick="dayseven_reset()">Usar Calculadora Novamente</button>';
        return;
    }
    
    let menuDiv = document.createElement('div');
    menuDiv.style.marginTop = '15px';
    menuDiv.style.marginBottom = '15px';
    menuDiv.style.display = 'flex';
    menuDiv.style.gap = '10px';
    menuDiv.style.flexWrap = 'wrap';
    
    let opcoes = [
        { texto: '+', acao: 'soma' },
        { texto: '-', acao: 'subtracao' },
        { texto: '×', acao: 'multiplicacao' },
        { texto: '÷', acao: 'divisao' },
        { texto: 'Sair', acao: 'sair' }
    ];
    
    opcoes.forEach(op => {
        let btn = document.createElement('button');
        btn.textContent = op.texto;
        btn.onclick = () => dayseven_selectOperation(op.acao);
        menuDiv.appendChild(btn);
    });
    
    resultado.appendChild(menuDiv);
}

function dayseven_selectOperation(operacao) {
    if (operacao === 'sair') {
        calculadoraAtiva = false;
        dayseven_showMenu();
        return;
    }
    
    let resultado = document.getElementById("dayseven_result");
    
    let num1Str = prompt("Digite o primeiro número:");
    if (num1Str === null) return;
    
    let num1 = parseFloat(num1Str);
    if (isNaN(num1)) {
        resultado.innerHTML += "Número inválido!<br>";
        setTimeout(() => dayseven_showMenu(), 500);
        return;
    }
    
    let num2Str = prompt("Digite o segundo número:");
    if (num2Str === null) return;
    
    let num2 = parseFloat(num2Str);
    if (isNaN(num2)) {
        resultado.innerHTML += "Número inválido!<br>";
        setTimeout(() => dayseven_showMenu(), 500);
        return;
    }
    
    let resultado_operacao;
    let operacao_nome;
    let operacao_simbolo;
    
    switch(operacao) {
        case 'soma':
            resultado_operacao = calcSomar(num1, num2);
            operacao_nome = 'Soma';
            operacao_simbolo = '+';
            break;
        case 'subtracao':
            resultado_operacao = calcSubtrair(num1, num2);
            operacao_nome = 'Subtração';
            operacao_simbolo = '-';
            break;
        case 'multiplicacao':
            resultado_operacao = calcMultiplicar(num1, num2);
            operacao_nome = 'Multiplicação';
            operacao_simbolo = '×';
            break;
        case 'divisao':
            resultado_operacao = calcDividir(num1, num2);
            operacao_nome = 'Divisão';
            operacao_simbolo = '÷';
            break;
    }
    
    resultado.innerHTML += `<strong>${operacao_nome}:</strong> ${num1} ${operacao_simbolo} ${num2} = ${resultado_operacao}<br>`;
    
    setTimeout(() => dayseven_showMenu(), 800);
}

function dayseven_reset() {
    calculadoraAtiva = true;
    document.getElementById("dayseven_result").innerHTML = "";
    dayseven_showMenu();
}
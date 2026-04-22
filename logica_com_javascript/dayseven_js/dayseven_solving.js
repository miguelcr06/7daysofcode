// Funções de operação
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function dayseven_solving_run() {
    let resultado = '<strong>Exemplo de Calculadora:</strong><br>';
    
    // Exemplo 1: Soma
    let num1 = 10, num2 = 5;
    resultado += `${num1} + ${num2} = ${somar(num1, num2)}<br>`;
    
    // Exemplo 2: Subtração
    resultado += `${num1} - ${num2} = ${subtrair(num1, num2)}<br>`;
    
    // Exemplo 3: Multiplicação
    resultado += `${num1} × ${num2} = ${multiplicar(num1, num2)}<br>`;
    
    // Exemplo 4: Divisão
    resultado += `${num1} ÷ ${num2} = ${dividir(num1, num2)}<br>`;
    
    // Exemplo 5: Divisão por zero
    resultado += `${num1} ÷ 0 = ${dividir(num1, 0)}<br>`;
    
    document.getElementById("dayseven_solving_result").innerHTML += resultado;
}
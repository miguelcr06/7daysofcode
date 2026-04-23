function dayone_instructions_run() {
    // Cria o overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.backdropFilter = 'blur(5px)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    // Fecha o modal ao clicar fora
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });

    // Cria o modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.backgroundColor = 'var(--bg-secondary)';
    modal.style.color = 'var(--text-primary)';
    modal.style.padding = '20px';
    modal.style.borderRadius = '8px';
    modal.style.maxWidth = '80%';
    modal.style.width = '700px';
    modal.style.maxHeight = '80vh';
    modal.style.overflowY = 'auto';
    modal.style.position = 'relative';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.border = '2px solid var(--accent)';

    // Botão de fechar
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    // Conteúdo das instruções
    const content = document.createElement('div');
    content.innerHTML = `
        <style>
            .modal-content h2 { color: var(--accent); margin-bottom: 20px; }
            .modal-content p { margin-bottom: 15px; color: var(--text-primary); }
            .modal-content pre { background: var(--bg-primary); padding: 10px; border-radius: 5px; overflow-x: auto; color: var(--text-primary); margin: 15px 0; }
        </style>
        <div class="modal-content">
            <h2>Instruções Completas - Dia 1</h2>
            <p>Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si.</p>
            <p>Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.</p>
            <p>Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.</p>
            <p>A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….</p>
            <p>Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:</p>
            <pre>
console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );
            </pre>
            <p>O que não faz necessariamente muito sentido.</p>
            <p>Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:</p>
            <pre>
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, 
  mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
            </pre>
        </div>
    `;

    // Monta o modal
    modal.appendChild(closeButton);
    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

/*

Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si.

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.

A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

O que não faz necessariamente muito sentido.

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}


*/
function daytwo_instructions_run() {
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
            <h2>Instruções Completas - Dia 2</h2>
            <p>Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!</p>
            <p>Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica.</p>
            <p>Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que você precisará escrever pode ser imensa.</p>
            <p>Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. E é nisso que eu vou te ajudar hoje!</p>
            <p>Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.</p>
            <p>Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:</p>
            <ul>
                <li>Qual o seu nome?</li>
                <li>Quantos anos você tem?</li>
                <li>Qual linguagem de programação você está estudando?</li>
            </ul>
            <p>À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.</p>
            <p>No final, o sistema vai exibir a mensagem:</p>
            <pre>"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"</pre>
            <p>Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.</p>
            <h3>EXERCÍCIO OPCIONAL</h3>
            <p>Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.</p>
            <p>Mas ele é 100% opcional.</p>
            <p>Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:</p>
            <pre>Você gosta de estudar [linguagem]? > Botão para SIM e outro para NÃO.</pre>
            <p>E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:</p>
            <pre>SIM > Muito bom! Continue estudando e você terá muito sucesso.
NÃO > Ahh que pena... Já tentou aprender outras linguagens?</pre>
        </div>
    `;

    modal.appendChild(closeButton);
    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
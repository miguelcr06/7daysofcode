function daythree_instructions_run() {
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
            <h2>Instruções Completas - Dia 3</h2>
            <p>Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?</p>
            <p>Hoje você vai desenvolver um exemplo assim com Javascript!</p>
            <p>Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.</p>
            <p>Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.</p>
            <p>O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.</p>
            <p>Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.</p>
            <p>Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:</p>
            <ul>
                <li>1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.</li>
                <li>2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.</li>
                <li>3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.</li>
                <li>4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.</li>
            </ul>
            <p>O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.</p>
            <p>Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.</p>
        </div>
    `;

    modal.appendChild(closeButton);
    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
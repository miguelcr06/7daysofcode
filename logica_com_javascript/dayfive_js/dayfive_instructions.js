function dayfive_instructions_run() {
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
            <h2>Instruções Completas - Dia 5</h2>
            <p><strong>Lista de Compras Organizada</strong></p>
            <p>Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?</p>
            <p>Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.</p>
            <p><strong>O Desafio:</strong></p>
            <p>Criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras.</p>
            <p>Se sim, insira o nome da comida (ex: batata) e escolha a categoria (frutas, laticínios, congelados, doces, etc).</p>
            <p>Quando decidir parar de adicionar, o programa exibe a lista completa agrupada por categoria.</p>
            <p><strong>Exemplo de saída:</strong></p>
            <pre>
Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete, bala de ursinho
            </pre>
            <p><strong>Conceitos:</strong></p>
            <ul>
                <li>Arrays para armazenar itens</li>
                <li>Objetos para agrupar por categoria</li>
                <li>Loops para coletar múltiplos itens</li>
                <li>Condicionais para controlar o fluxo</li>
            </ul>
        </div>
    `;

    // Monta o modal
    modal.appendChild(closeButton);
    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
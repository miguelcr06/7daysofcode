function daysix_instructions_run() {
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
            .modal-content ul { margin-left: 20px; margin-bottom: 15px; }
            .modal-content li { margin-bottom: 10px; }
            .modal-content pre { background: var(--bg-primary); padding: 10px; border-radius: 5px; overflow-x: auto; color: var(--text-primary); margin: 15px 0; }
        </style>
        <div class="modal-content">
            <h2>Instruções Completas - Dia 6</h2>
            <p><strong>Lista de Compras com Remoção</strong></p>
            <p>Hoje você vai melhorar o programa do Dia 5 adicionando a funcionalidade de remover itens!</p>
            <p><strong>O Desafio:</strong></p>
            <ul>
                <li>Manter todas as funcionalidades do Dia 5 (adicionar itens por categoria)</li>
                <li>Adicionar a opção de REMOVER um item da lista</li>
                <li>Exibir os itens atuais quando o usuário escolhe remover</li>
                <li>Permitir que o usuário escolha qual item remover</li>
                <li>Mostrar confirmação de remoção</li>
                <li>Se o item não existir, mostrar: "Não foi possível encontrar o item dentro da lista!"</li>
                <li>Voltar ao menu de opções (adicionar ou remover)</li>
            </ul>
            <p><strong>Importante:</strong></p>
            <p>A opção de remover só deve estar disponível se houver pelo menos um item na lista.</p>
            <p><strong>Conceitos-chave:</strong></p>
            <ul>
                <li>Array.indexOf() para buscar itens</li>
                <li>Array.splice() para remover itens</li>
                <li>Validação de existência de itens</li>
                <li>Loops para navegar entre categorias</li>
            </ul>
        </div>
    `;

    // Monta o modal
    modal.appendChild(closeButton);
    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
let shoppingListUserSix = {
    'Frutas': [],
    'Laticínios': [],
    'Congelados': [],
    'Doces': [],
    'Outros': []
};

let categoriasSix = ['Frutas', 'Laticínios', 'Congelados', 'Doces', 'Outros'];

function daysix_mainMenu() {
    let resultado = document.getElementById("daysix_result");
    
    let allItems = [];
    for (let cat of categoriasSix) {
        allItems = allItems.concat(shoppingListUserSix[cat]);
    }
    
    let hasItems = allItems.length > 0;
    let menuText = "O que deseja fazer?<br>";
    
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = menuText;
    tempDiv.style.marginTop = '10px';
    tempDiv.style.marginBottom = '10px';
    
    let addBtn = document.createElement('button');
    addBtn.textContent = 'Adicionar Comida';
    addBtn.onclick = daysix_addItem;
    tempDiv.appendChild(addBtn);
    
    if (hasItems) {
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover Comida';
        removeBtn.onclick = daysix_showRemoveOptions;
        removeBtn.style.marginLeft = '10px';
        tempDiv.appendChild(removeBtn);
    }
    
    let viewBtn = document.createElement('button');
    viewBtn.textContent = 'Ver Lista Completa';
    viewBtn.onclick = daysix_displayList;
    viewBtn.style.marginLeft = '10px';
    tempDiv.appendChild(viewBtn);
    
    resultado.appendChild(tempDiv);
}

function daysix_addItem() {
    let resultado = document.getElementById("daysix_result");
    resultado.innerHTML += 'Adicionando novo item...<br>';
    
    let itemName = prompt("Qual comida você deseja inserir?");
    if (!itemName || itemName.trim() === "") {
        resultado.innerHTML += "Operação cancelada.<br>";
        setTimeout(() => daysix_mainMenu(), 500);
        return;
    }
    
    let categoriaHtml = '<strong>Selecione a categoria:</strong><br>';
    categoriasSix.forEach((cat) => {
        categoriaHtml += `<button onclick="daysix_selectCategory('${cat}')">${cat}</button> `;
    });
    
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = categoriaHtml;
    tempDiv.style.marginTop = '10px';
    tempDiv.style.marginBottom = '10px';
    
    resultado.appendChild(tempDiv);
    
    window.daysix_currentItem = itemName;
}

function daysix_selectCategory(categoria) {
    let itemName = window.daysix_currentItem;
    shoppingListUserSix[categoria].push(itemName);
    
    let resultado = document.getElementById("daysix_result");
    resultado.innerHTML += `Item '${itemName}' adicionado à categoria '${categoria}'<br>`;
    
    setTimeout(() => {
        daysix_mainMenu();
    }, 800);
}

function daysix_showRemoveOptions() {
    let resultado = document.getElementById("daysix_result");
    resultado.innerHTML += '<br><strong>Itens disponíveis para remover:</strong><br>';
    
    let allItems = [];
    for (let cat of categoriasSix) {
        shoppingListUserSix[cat].forEach(item => {
            allItems.push({ item: item, categoria: cat });
        });
    }
    
    let tempDiv = document.createElement('div');
    allItems.forEach((entry) => {
        let btn = document.createElement('button');
        btn.textContent = `${entry.item} (${entry.categoria})`;
        btn.onclick = () => daysix_removeItem(entry.item, entry.categoria);
        btn.style.marginRight = '5px';
        btn.style.marginBottom = '5px';
        tempDiv.appendChild(btn);
    });
    
    resultado.appendChild(tempDiv);
}

function daysix_removeItem(itemName, categoria) {
    let resultado = document.getElementById("daysix_result");
    
    let index = shoppingListUserSix[categoria].indexOf(itemName);
    if (index > -1) {
        shoppingListUserSix[categoria].splice(index, 1);
        resultado.innerHTML += `<br>Item '${itemName}' removido com sucesso da categoria '${categoria}'<br>`;
    } else {
        resultado.innerHTML += `<br>Não foi possível encontrar o item dentro da lista!<br>`;
    }
    
    setTimeout(() => {
        daysix_mainMenu();
    }, 800);
}

function daysix_displayList() {
    let resultado = document.getElementById("daysix_result");
    resultado.innerHTML += '<br><strong>Lista de Compras Atual:</strong><br>';
    
    let hasItems = false;
    for (let categoria of categoriasSix) {
        if (shoppingListUserSix[categoria].length > 0) {
            resultado.innerHTML += `&nbsp;&nbsp;<strong>${categoria}:</strong> ${shoppingListUserSix[categoria].join(', ')}<br>`;
            hasItems = true;
        }
    }
    
    if (!hasItems) {
        resultado.innerHTML += 'Sua lista está vazia!<br>';
    }
    
    setTimeout(() => {
        daysix_mainMenu();
    }, 800);
}

function daysix_reset() {
    shoppingListUserSix = {
        'Frutas': [],
        'Laticínios': [],
        'Congelados': [],
        'Doces': [],
        'Outros': []
    };
    document.getElementById("daysix_result").innerHTML = "";
    daysix_mainMenu();
}
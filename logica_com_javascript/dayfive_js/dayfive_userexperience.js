let shoppingListUser = {
    'Frutas': [],
    'Laticínios': [],
    'Congelados': [],
    'Doces': [],
    'Outros': []
};

let categorias = ['Frutas', 'Laticínios', 'Congelados', 'Doces', 'Outros'];

function dayfive_addItem() {
    let resultado = document.getElementById("dayfive_result");
    
    let addMore = confirm("Deseja adicionar uma comida na sua lista de compras?");
    if (!addMore) {
        displayShoppingList();
        return;
    }
    
    let itemName = prompt("Qual comida você deseja inserir?");
    if (!itemName || itemName.trim() === "") {
        resultado.innerHTML += "Operação cancelada.<br>";
        return;
    }
    
    let categoriaHtml = '<strong>Selecione a categoria:</strong><br>';
    categorias.forEach((cat, index) => {
        categoriaHtml += `<button onclick="dayfive_selectCategory('${cat}')">${cat}</button> `;
    });
    
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = categoriaHtml;
    tempDiv.style.marginTop = '10px';
    tempDiv.style.marginBottom = '10px';
    
    resultado.appendChild(tempDiv);
    
    window.dayfive_currentItem = itemName;
}

function dayfive_selectCategory(categoria) {
    let itemName = window.dayfive_currentItem;
    shoppingListUser[categoria].push(itemName);
    
    let resultado = document.getElementById("dayfive_result");
    resultado.innerHTML += `Item '${itemName}' adicionado à categoria '${categoria}'<br>`;
    
    setTimeout(() => {
        dayfive_addItem();
    }, 500);
}

function displayShoppingList() {
    let resultado = document.getElementById("dayfive_result");
    resultado.innerHTML += '<br><strong>Lista de Compras Final:</strong><br>';
    
    for (let categoria of categorias) {
        if (shoppingListUser[categoria].length > 0) {
            resultado.innerHTML += `&nbsp;&nbsp;<strong>${categoria}:</strong> ${shoppingListUser[categoria].join(', ')}<br>`;
        } else {
            resultado.innerHTML += `&nbsp;&nbsp;<strong>${categoria}:</strong> <br>`;
        }
    }
    
    resultado.innerHTML += '<br><button onclick="dayfive_reset()">Criar Nova Lista</button>';
}

function dayfive_reset() {
    shoppingListUser = {
        'Frutas': [],
        'Laticínios': [],
        'Congelados': [],
        'Doces': [],
        'Outros': []
    };
    document.getElementById("dayfive_result").innerHTML = "";
    dayfive_addItem();
}
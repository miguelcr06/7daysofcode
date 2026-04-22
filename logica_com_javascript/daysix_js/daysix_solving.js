function daysix_solving_run() {
    let shoppingList = {
        'Frutas': ['banana', 'tomate', 'maçã'],
        'Laticínios': ['leite de vaca', 'leite em pó'],
        'Doces': ['chiclete']
    };
    
    let resultado = '<strong>Lista Inicial:</strong><br>';
    for (let categoria in shoppingList) {
        if (shoppingList[categoria].length > 0) {
            resultado += `&nbsp;&nbsp;<strong>${categoria}:</strong> ${shoppingList[categoria].join(', ')}<br>`;
        }
    }
    
    // Remove item
    let itemToRemove = 'tomate';
    let encontrou = false;
    for (let categoria in shoppingList) {
        let index = shoppingList[categoria].indexOf(itemToRemove);
        if (index > -1) {
            shoppingList[categoria].splice(index, 1);
            resultado += `<br><strong>Removendo: ${itemToRemove}</strong><br>`;
            resultado += `Item removido com sucesso!<br>`;
            encontrou = true;
            break;
        }
    }
    
    resultado += '<br><strong>Lista Final:</strong><br>';
    for (let categoria in shoppingList) {
        if (shoppingList[categoria].length > 0) {
            resultado += `&nbsp;&nbsp;<strong>${categoria}:</strong> ${shoppingList[categoria].join(', ')}<br>`;
        }
    }
    
    document.getElementById("daysix_solving_result").innerHTML += resultado;
}
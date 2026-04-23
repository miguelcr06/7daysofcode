function dayfive_solving_run() {
    let shoppingList = {
        'Frutas': ['banana', 'tomate', 'maçã', 'uva', 'abacate'],
        'Laticínios': ['leite vegetal', 'leite de vaca', 'leite em pó'],
        'Congelados': [],
        'Doces': ['chiclete', 'bala de ursinho']
    };
    
    let resultado = '<strong>Lista de Compras:</strong><br>';
    for (let categoria in shoppingList) {
        if (shoppingList[categoria].length > 0) {
            resultado += `&nbsp;&nbsp;<strong>${categoria}:</strong> ${shoppingList[categoria].join(', ')}<br>`;
        } else {
            resultado += `&nbsp;&nbsp;<strong>${categoria}:</strong> <br>`;
        }
    }
    
    document.getElementById("dayfive_solving_result").innerHTML += resultado;
}
const armario = [
    'camisas',
    'pijamas',
];
//acrescenta itens no final da lista
armario.push('blusas');
armario.push('calças');
armario.push('bermudas');

//remove itens do final da lista
// salva numa constante o item removido do final da lista
const itemRemovido = armario.pop()
console.log(itemRemovido)

//acrescenta itens no início da lista
armario.unshift('meias');

// remove itens do início da lista
// salva numa constante o item removido do início da lista
const itemRemovido2 = armario.shift();
console.log(itemRemovido2)

console.log(armario)
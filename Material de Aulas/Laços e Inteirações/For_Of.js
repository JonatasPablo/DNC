let total = 0;
let carrinho= [
    {nome: 'Casaco', preço: 120},
    {nome: 'Camiseta', preço: 50},
    {nome: 'Sapato', preço: 250},
];

for(let carrinhoItem of carrinho ){
    total = total + carrinhoItem.preço
}
console.log(total);


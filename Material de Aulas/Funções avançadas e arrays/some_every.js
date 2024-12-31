// //Some
// let lista = ['Jonatas',1,2,3,4,5,6,7,8,9,10];
// const maiorOuIgual = lista.some((item) => {
//     //verifica se pelo menos um dos itens satisfaz a condição
//     return item >= 11;
// })
// console.log(maiorOuIgual)

// //Every
// const isNumber = lista.every((item) => {
//     //verifica se todos os itens satisfaz a condição
//     return typeof item === 'number'
// })
// console.log(isNumber);

const gaveta = [
    {name: 'camiseta 1', material:['algodão', 'elastano']},
    {name: 'camiseta 2', material:['elastano']},
    {name: 'camiseta 3', material:['algodão']},
    {name: 'camiseta 4', material:['elastano']},
    {name: 'camiseta 5', material:['algodão']},
    {name: 'camiseta 6', material:['elastano']},
]

const hasElastano = gaveta.every((item) =>{
    return item.material.every(material => material === 'elastano')
})
console.log(hasElastano);

// const allElastano = gaveta.every((item) =>{
//     return item.material ==='elastano';
// })
// console.log(allElastano);




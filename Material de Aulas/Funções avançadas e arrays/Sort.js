const lista = [1,2,3,4,9,8,7,6,5,2,3,4,9,0];
const lista2 = ['J', 'R', 'L'];

//trás a lista em ordem decrescente (do maior para o menor), para trazer de forma crescente, remova o .reverse()
const listaOrdenada = lista.sort().reverse();
console.log(listaOrdenada);
//Ou dessa forma = 
    // const listaOrdenada = lista.sort((firstValue, secondValue) => secondValue - firstValue);
    // console.log(listaOrdenada);

//trás a lista em ordem decrescente (do maior para o menor), para trazer de forma crescente, remova o .reverse()
const listaOrdenada2 = lista2.sort().reverse();
console.log(listaOrdenada2);
//Ou dessa forma =
    // const listaOrdenada2 = lista2.sort((firstValue, secondValue) => firstValue > secondValue ? -1 : 1);
    // console.log(listaOrdenada2);

//Ordenando Objetos
const listaObjetos = [
    {id: 1, name: 'Jorge'},
    {id: 2, name: 'Lucas'},
    {id: 4, name: 'Junior'},
    {id: 9, name: 'Jonatas'},
    {id: 6, name: 'Fábio'},
]
//ordena de forma crescente pelo id.;
const listaOrdenada3 = listaObjetos.sort((a, b) => a.id - b.id);
console.log(listaOrdenada3)

//armario
const armario = [
    {tipo: 'camisetas', itens: [{nome:'camisa 1'}, {nome:'camisa 2'}, {nome:'camisa 3'}] },
    {tipo: 'calças', itens: [{nome:'calça 1'}, {nome:'calça 2'}] },
    {tipo: 'meias', itens: [{nome:'meia 1'}, {nome:'meia 2'}, {nome:'meia 3'}, {nome:'meia 4'}] },
]
//ordena o armário pela quantidade de itens por tipo, usando o comprimento dessa lista com .length
armarioOrdenado = armario.sort((gaveta1, gaveta2) => {
    return gaveta2.itens.length - gaveta1.itens.length
})
console.log(armarioOrdenado);
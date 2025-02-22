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

let fraseInicial = 'As gavetas que possuem pelo menos 3 itens dentro são: ';

const armarioSorteado = 
    armario
        .sort((gavetaUm, gavetaDois) => {return gavetaDois.itens.length - gavetaUm.itens.length})

        .map((gaveta) => ({...gaveta, count: gaveta.itens.length}))

        .filter((gaveta) => gaveta.count >= 3)

        .reduce((prev, next) => {
            if(prev === fraseInicial) return prev + `${next.tipo}`
            return prev +  `, ${next.tipo}`
        }, fraseInicial);

console.log(armarioSorteado)
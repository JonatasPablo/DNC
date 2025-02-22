//Faça três laços de repetição (For, While e For Of) que leiam o conteúdo da lista e imprima eles.

const frutas = [
    {name: 'laranja'},
    {name: 'banana'},
    {name: 'maça'},
    {name: 'abacaxi'},
    {name: 'melão'},
]

//Código For
// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i].name)
// }

//Código While
let i = 0
while(i < frutas.length){
    console.log(frutas[i].name)
    i++
}

//Código For Of
// for(let nomes of frutas ){
//     console.log(nomes.name)
// }


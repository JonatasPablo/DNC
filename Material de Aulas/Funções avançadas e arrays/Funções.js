//Criar uma função que soma dois valores

let total = 0;
function somaValores(listaValores){
    for(let valor of listaValores){
        total += valor;
    }
    return total;
}
console.log(somaValores([5,9,45,100,32,90,200,34,65,87,98,5,30,200]))
//Escreva uma função chamada maiorNumero que recebe um array de números e retorna o maior número do array

const maiorNumero = (numeros) =>{
    let maior = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior
}

const numeros = [5,6,7,8,9,12,234,24356,345,5,7,879,];
const resultado = maiorNumero(numeros);
console.log('O maior numero é o',resultado)


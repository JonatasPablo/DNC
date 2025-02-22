//Escreva uma função chamada fatorial que calcula o fatorial de um número

const fatorial = (numero) => {
    if(numero === 0 || numero === 1){
        return 1;
    }
    return numero * fatorial(numero -1);
}

console.log(fatorial(5));
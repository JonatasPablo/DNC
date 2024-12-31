//Crie uma função chamada contarVogais que recebe uma string e retorna o número de vogais nessa string.

const contarVogais = (palavra) => {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
};

console.log(contarVogais("JavaScript"));
console.log(contarVogais("Programação")); 
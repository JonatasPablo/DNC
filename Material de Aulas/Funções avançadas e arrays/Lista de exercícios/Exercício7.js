//Escreva uma função chamada palindromo que verifica se uma string é um palíndromo (lê-se da mesma forma de trás para frente).

const palindromo = (palavra) => {
    const len = palavra.length;
    for (let i = 0; i < len / 2; i++) {
        if (palavra[i] !== palavra[len - 1 - i]) {
            return false;
        }
    }
    return true;
};
console.log(palindromo("radar")); 
console.log(palindromo("javascript"));
console.log(palindromo("ovo"));

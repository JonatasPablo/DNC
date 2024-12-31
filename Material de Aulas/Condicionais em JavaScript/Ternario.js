let idade = 12;
let mensagem;
let numero = 1;

//Jeito If e Else
/*if(idade >= 18){
    mensagem = 'Pode tirar carta'
    console.log(mensagem)
}else{
    mensagem = 'Não pode tirar carta'
    console.log(mensagem)
}*/

//Jeito ternário
/*idade >= 18 ? mensagem = 'Pode tirar carta' : mensagem = 'Não pode tirar carta'
console.log(mensagem)*/

//Condição ternária com else if
let resultado = numero > 0 ? 'Positivo' : (numero < 0 ? 'Negativo' : 'Zero');
console.log(resultado);
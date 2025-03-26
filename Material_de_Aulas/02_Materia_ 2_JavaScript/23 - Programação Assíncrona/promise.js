let promise = new Promise((resolve, reject) => {
    /*operação assíncrona*/
    let sucesso = true; /*Simula o sucesso ou falha da operação*/
    if(sucesso){
        resolve('Operação bem-sucedida!');
    }else{
        reject('Operação falhou');
    }
});;

console.log(promise);

/*Exemplo*/
// let promise = new Promise((resolve, reject) => {
//     /*operação assíncrona*/
//     let sucesso = true; /*Simula o sucesso ou falha da operação*/
//     if(sucesso){
//         resolve('Operação bem-sucedida!');
//     }else{
//         reject('Operação falhou');
//     }
// });
// promise;

/*Exemplo*/
// console.log('Eu preciso de um caderno novo');

// let promessaDeCompra = new Promise((resolve, reject) => {
//     console.log('Amigo: Estou indo comprar o caderno...');
//     setTimeout(() => {
//         sucesso = false;
//         if(sucesso) resolve('Amigo: aqui está o seu caderno')
//         else reject('Amigo: A loja estava fechada quando eu cheguei')
//     },6000);
// });
// console.log('Eu: Vou continuar estudando as coisas que eu preciso enquanto espero pelo caderno');
// promessaDeCompra


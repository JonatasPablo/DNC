/*Escreva um código que crie uma Promisse que simula uma operação de buscar dados em um servidor.
Se os dados forem encontrados, a Promie deve ser resolvida; se não, deve ser rejeitada.*/

console.log('Buscar dados em um servidor');

let promessaDeBusca = new Promise((resolve, reject) => {
    console.log('Iniciando busca de dados no servidor');

    setTimeout(() => {
        let sucesso = true;
        if(sucesso) resolve({name: 'Fábio', age: 28})
        else reject('Opa, aconteceu um erro no servidor! Dados não encontrados')
    },5000)
})

console.log('Vida que segue, estou fazendo outras coisas no código enquanto executa a busca');

promessaDeBusca
    .then(console.log)
    .catch(console.log)
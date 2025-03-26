console.log('Buscar dados em um servidor.');

let promessaDeBusca = new Promise((resolve, reject) => {
    console.log('Iniciando busca de dados no servidor... ')

    setTimeout(()=>{
        let sucesso = true;
        if(sucesso) resolve({name: 'Jonatas', age: 29})
        else reject('Opa, aconteceu um erro no servidor, dados não encontrados.')
    },5000)
})

console.log('Vida que segue, estou fazendo outras coisas no codigo enquanto executa a busca.')

promessaDeBusca
    .then(console.log)
    .catch(console.log)
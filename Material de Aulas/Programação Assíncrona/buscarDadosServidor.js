


console.log('Buscar dados em um servidor.');

let counter = 0;
let sucesso = false;

let promessaDeBusca = () => new Promise((resolve, reject) => {
    console.log('Iniciando busca de dados no servidor... ')

    setTimeout(()=>{
        if (counter > 0) sucesso = true
        else counter++

        if(sucesso) resolve({name: 'Jonatas', age: 29})
        else reject('Opa, aconteceu um erro no servidor, dados não encontrados.')
    },5000)
})

console.log('Vida que segue, estou fazendo outras coisas no codigo enquanto executa a busca.')

promessaDeBusca()
    .then(console.log)
    .catch((error) => {
        console.log(error)

        promessaDeBusca()
            .then(console.log)
            .catch(console.log)
    })


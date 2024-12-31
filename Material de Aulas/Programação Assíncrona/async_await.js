/* - Async e await são formas de escrever código assíncrono de maneira mais clara e parecida com código síncrono.
    - Quando uma função é marcada como async, ela sempre retorna uma Promisse.
    - Await faz com que a execução da função async pause até que a Promise seja resolvida ou rejeitada.*/


let buscarDadosServidor = async () => new Promise((resolve, reject) => {
    console.log('Iniciando busca de dados no servidor... ')

    setTimeout(()=>{
        let sucesso = true;
        if(sucesso) resolve({name: 'Jonatas', age: 29})
        else reject('Opa, aconteceu um erro no servidor, dados não encontrados.')
    },5000)
})

const data = await buscarDadosServidor();
console.log(data);


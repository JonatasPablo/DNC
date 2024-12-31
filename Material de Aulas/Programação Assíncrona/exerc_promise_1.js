console.log('Fazer autenticação no instagram e buscar fotos recentes dos meus seguidores');

let autenticacaoInstagram = new Promise((resolve, reject) => {
    console.log('Início de autenticação do usuário')

    setTimeout(() => {
        let sucesso = true;
        if(sucesso) resolve ({username: 'Teste', following: [{user: 1}, {user: 2}, {user: 3}]})
        else reject('Ocorreu um erro na autenticação')
    },3000)
})

let buscaDasFotosSeguindo = (quemEuSigo) => new Promise((resolve, reject) => {
    console.log('Iniciando busca das fotos recentes de quem eu sigo')

    setTimeout(() => {
        let sucesso = true;
        if(sucesso) resolve([{foto: 'src1', user: 1}, {foto: 'src2', user: 2}, {foto: 'src3', user: 3}])
        else reject('Ocorreu um erro ao buscar uma foto recente de quem eu sigo.')
    },3000)
})

autenticacaoInstagram
    .then((resposta) => {
        return buscaDasFotosSeguindo(resposta)
    })
    .then((respostaFotosRecentes) => {
        console.log(respostaFotosRecentes)
    })
    


/* Código síncrono */
    // console.log('primeiro');
    // console.log('segundo');
    // console.log('terceiro');
    // teste = 123;
    // console.log('quarto teste = ', + teste);

/* Código assíncrono */
    // console.log('primeiro');
    // setTimeout(() => {
    //     console.log('segundo');
    // },5000);
    // console.log('terceiro');

/* Promisses */
    /* Quando criamos uma promise, ela pode estar em um desses três estágios:
    Pending (Pendente) = A operação ainda não foi concluída
    Fulfilled (Concluída) = A operação foi concluída com sucesso
    Rejected (Rejeitada) = A operação falhou. */
    /* Sintaxe base de uma Promise */
    // let promise = new Promise((resolve, reject) => { //new Promise é um construtor, é ele que está fazendo a promise acontecer
    //     let sucesso = true; //simula o sucesso ou a falha da operação
    //     if(sucesso) {
    //         resolve("Operação bem-sucedida!");
    //     } else {
    //         reject("Operação falhou!");
    //     }
    // });
    // promise

    /*outro exemplo*/
    // console.log('Eu: Preciso de um caderno novo');
    // let promessaDeCompra = new Promise ((resolve, reject) => {
    //     console.log('Amigo: Estou indo comprar o caderno...');
    //     setTimeout(() => {
    //         let sucesso = false;
    //         if(sucesso) resolve('Amigo: Aqui está o seu caderno!')
    //         else reject('Amigo: Não deu certo de comprar o caderno, a loja estava fechada!')
    //     }, 5000); // 5 segundos de tempo de espera
    // })
    // console.log('Eu vou continuar estudando as coisas que eu preciso enquanto espero pelo caderno');
    // promessaDeCompra
    //     .then((mensagem) => console.log(mensagem))
    //     .catch((erro) => console.log(erro))
    
    /*Exercício prático: Escreva um código que crie uma Promise que simula uma operação de buscar dados em um servidor. Se os dados forem encontrados, a promise deve ser resolvida; se não,
    deve ser rejeitada.*/
    // console.log('Buscando dados no servidor');
    // let buscarDadosServidor = new Promise ((resolve, reject) => {
    //     console.log('Acessei o servidor');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve('Dados encontrados com sucesso!');
    //         else reject('Falha, servidor fora do ar! Tente novamente em instantes');
    //     }, 5000);
    // })
    // console.log('Enquanto aguardo o retorno do servidor, vou fazendo outras coisas');
    // buscarDadosServidor
    //     .then((mensagem) => console.log(mensagem)) //outra forma de escrever esse then é .then(console.log)
    //     .catch((erro) => console.log(erro)) //outra forma de escrever esse catch é .catch(console.log)
    
    /*Encadeamento de Promises*/
    /*sintaxe base de um encadeamento de promise*/
    // primeiraPromise()
    //     .then((resultado) => {
    //         return segundaPromise(resultado)
    //     })
    //     .then((resultado2) => {
    //         return algumaInformacaoParaUsuario
    //     })

    /*Exemplo*/
    // console.log('Fazer autenticação no instagram e buscar fotos recentes dos meus seguidores');
    // let autenticacaoInstagram = new Promise((resolve, reject) => {
    //     console.log('Início de autenticação do usuário');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve({nomePerfil: 'Jonatas Pablo', Seguidores: [{user: 1}, {user: 2}, {user: 3}]})
    //         else reject('Ocorreu um erro na autenticação')
    //     }, 3000);
    // })
    // let buscaDasFotosSeguindo = (quemEuSigo) => new Promise((resolve, reject) => {
    //     console.log('Iniciando busca das fotos recentes de quem eu sigo');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve([{foto: 'src1', user: 1}, {foto: 'src2', user: 2}, {foto: 'src3', user: 3}])
    //         else reject('Ocorreu um erro ao buscar as fotos recentes de quem eu sigo!')
    //     }, 3000);
    // })
    // autenticacaoInstagram
    //     .then((resposta) => {
    //         return buscaDasFotosSeguindo(resposta)
    //     })
    //     .then((respostaFotosRecentes) => {
    //         console.log(respostaFotosRecentes)
    //     })
    //     .catch((resposta) =>{
    //         console.log(resposta)
    //     })

    /*Exercício: Escrever um código que simula um processo de encomenda.
    - Primeiro, fazemos o pedido
    - Se o pedido for confirmado (promise der sucesso)
    - Retornar uma nova promise para fazer o pagamento.
    - Caso pagamento com sucesso, logar "Pedido Pago! Aguardando envio" */
    // console.log('Fazendo o pedido');
    // let fazendoPedido = new Promise((resolve, reject) => {
    //     console.log('Início do pedido');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve('Pedido confirmado com sucesso')
    //         else reject('Falha ao concluir o pedido, reveja o pedido e tente novamente.')
    //     }, 3000);
    // })
    // let fazendoPagamento = (aguardarPagamento) => new Promise((resolve, reject) => {
    //     console.log('Início do pagamento')/
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve('Pedido pago! Aguardando envio.')
    //         else reject('Pagamento não aprovado, verifique as formas de pagamento e tente novamente.')
    //     }, 3000);
    // })
    // fazendoPedido
    //     .then((resposta) => {
    //         return fazendoPagamento(resposta)
    //     })
    //     .then((respostaPagamento) => {
    //         console.log(respostaPagamento)
    //     })
    //     .catch((resposta) => {
    //         console.log(resposta)
    //     });

    /*Praticando sozinho*/
    /*Rafaela fazendo a janta*/
    // console.log("Aguardando a janta ficar pronta");
    // let jantaPronta = new Promise((resolve, reject) => {
    //     console.log("Rafaela está fazendo a janta");
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve("Rafaela: A Janta está pronta, vamos comer!!!");
    //         else reject("Rafaela: Deu ruim na janta, vamos ter que pedir uma pizza!");
    //     }, 9000);
    // });
    // console.log("Enquanto a janta não está pronta, vou praticando as coisas que aprendi.");
    // jantaPronta
    //     .then((resposta) => {
    //         console.log(resposta);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    /* Simulação de um pedido
    - pedido confirmado
    - pagamento confirmado
    - envio realizado*/
    // console.log('Fazendo Pedido no Site.');
    // let fazendoPedido = new Promise((resolve, reject) => {
    //     console.log('Validando pedido');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso){
    //             console.log('Pedido validado com sucesso, você será encaminhado para o pagamento');
    //             resolve();
    //         }else reject('Pedido com erro, por favor revise e tente validar novamente.');
    //         }, 3000);
    // });
    // let fazendoPagamento = (verificarPagamento) => new Promise((resolve, reject) => {
    //     console.log('Validando Pagamento');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso){
    //             console.log('Pagamento aprovado, siga para confimar o envio do pedido');
    //             resolve();
    //         }else reject('Pagamento não aprovado, verifique as formas de pagamento disponíveis e tente novamente.');
    //     }, 5000);
    // });
    // let enviandoPedido = (validaEnvio) => new Promise((resolve, reject) => {
    //     console.log('Validando envio do pedido');
    //     setTimeout(() => {
    //         let sucesso = false;
    //         if(sucesso) resolve('Envio realizado com sucesso');
    //         else reject('Envio não realizado, verifique os detalhes do endereço e tente novamente.');
    //     }, 6000);
    // });
    // fazendoPedido
    //     .then((resposta) => {
    //         return fazendoPagamento(resposta)
    //     })
    //     .then((resposta) => {
    //         return enviandoPedido(resposta);
    //     })
    //     .then((resposta) => {
    //         console.log(resposta);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

/*Async/Await*/
    /*
    - Asunc e await são formas de escrever código assíncrono de maneira mais clara e parecida com código síncrono.
    - Quando uma função é marcada como async, ela sempre retorna uma Promise.
    - Await faz com que a execução da função async pause até que a Promise seja resolvida ou rejeitada.
    */
    /*Sintaxe base*/
        // const confirmarPedido = async () => new Promise (...);
        // const pedidoConfirmado = await confirmarPedido();
    /* Exemplo */
    // let buscarDadosServidor = async () => new Promise ((resolve, reject) => {
    //     console.log('iniciando busca de dados no servidor');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve({name: 'Jonatas', age: 29})
    //         else reject('Opa, aconteceu um erro no servidor! Dados não encontrados')
    //     }, 3000);
    // })
    // const data = await buscarDadosServidor();
    // console.log(data);

    /*Vídeo aula nº215 Exercício prático Async e Await*/

    /*Exercício: Escrever um código que simula um processo de encomenda.
    - Fazer com Async / Await e try/catch
    - Primeiro, fazemos o pedido
    - Se o pedido for confirmado (promise der sucesso)
    - Retornar uma nova promise para fazer o pagamento.
    - Caso pagamento com sucesso, logar "Pedido Pago! Aguardando envio" */
    // console.log('Fazendo o pedido');
    // let fazendoPedido = async () => new Promise((resolve, reject) => {
    //     console.log('Início do pedido');
    //     setTimeout(() => {
    //         let sucesso = false;
    //         if(sucesso) resolve('Pedido confirmado com sucesso')
    //         else reject('Falha ao concluir o pedido, reveja o pedido e tente novamente.')
    //     }, 3000);
    // })
    // let fazendoPagamento = async (aguardarPagamento) => new Promise((resolve, reject) => {
    //     console.log('Início do pagamento')/
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso) resolve('Pedido pago! Aguardando envio.')
    //         else reject('Pagamento não aprovado, verifique as formas de pagamento e tente novamente.')
    //     }, 3000);
    // })
    // try{
    //     const pedidoConfirmado = await fazendoPedido();
    // const pagamentoAprovado = await fazendoPagamento(pedidoConfirmado);
    // console.log('Tudo deu certo no seu pedido, aguardando envio!');
    // }catch(error){
    //     console.log(error);
    // }


    /*Teste sozinho*/
    // console.log('Rafaela está fazendo o jantar');
    // let pedidoDeJanta = async = () => new Promise((resolve, reject) => {
    //     console.log('Início dos preparos');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso){
    //             console.log('Deu certo o preparo');
    //             resolve();
    //         }else{
    //             console.log('Rafaela: Acabou o gás, você vai jejuar pela sua vida!');
    //             reject();
    //         } 
    //     }, 3000);
    // })
    // let jantando = async = () => new Promise((resolve, reject) => {
    //     console.log('Começar a comer');
    //     setTimeout(() => {
    //         let sucesso = true;
    //         if(sucesso){
    //             console.log('Comi tudo, estou satisfeito');
    //             resolve();
    //         }else{
    //             console.log('Noss... achei um cabelo, não vou comer mais!');
    //             reject();
    //         }
    //     }, 6000);
    // })
    // try {
    //     const jantaPronta = await pedidoDeJanta();
    //     const acabeiDeJantar = await jantando(jantaPronta);
    //     console.log('Jantar encerrado');
    // }catch(error){
    //     console.log('Jantar encerrado');
    // }


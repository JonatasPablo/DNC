console.log('Criar um pedido online em uma loja');

let promessaDePedidoConfirmado = new Promise((resolve, reject) => {
    console.log('Iniciando o pedido online');

    setTimeout(() => {
        let sucesso = true;
        if(sucesso){
            console.log('Pedido confirmado com sucesso')
            resolve({id: 1, confirmation: true, payment: 'WAITING'})
        } else{
            reject('O pedido não pode ser confirmado, tente novamente.')
        }
    }, 5000)
})

let promessaDePagamento = (pedido) => new Promise((resolve, reject) => {
    console.log('Aguardando o pagamento ser aprovado pelo cartão.');

    setTimeout(() => {
        let pagamentoAprovado = true;
        if(pagamentoAprovado) {
            console.log('Pagamento aprovado com sucesso!')
            resolve({ confirmation: true, payment: 'APPROVED'})
        } else{
            reject('Pagamento Recusado!!! Tente novamente.')
        }
    }, 5000);
})

const promessaResolvida = promessaDePedidoConfirmado
.then((pedido) => {
    console.log({ pedido })
    return promessaDePagamento(pedido)
})
.then((pagamento) => {
    return 'Sucesso ao realizar o pagamento! Aguardando envio do pedido.'
})
.catch((pagamento) => {
    return 'Pedido rejeita, pagamento não aprovado.'
})

console.log(promessaResolvida);
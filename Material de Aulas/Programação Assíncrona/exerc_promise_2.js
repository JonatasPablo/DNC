/*Escrever um código que simula um processo de encomenda.
    - Primeiro, fazemos o pedido.
    - Se o pedido for confirmado (promise der sucesso)
    - Retornar uma nova promise para fazer  o pagamento.
    - Caso pagamento com sucesso, logar "Pedido Pago! Aguardando envio."*/

const promessaDePedidoConfirmado = new Promise((resolve, reject) => {
    console.log("Iniciando o pedido online");

    setTimeout(() => {
        const sucesso = true;
        if(sucesso){
            console.log("Pedido confirmado com sucesso");
            resolve ({confirmation: true, payment: 'awaiting'});
        }else{
            reject("O pedido não pode ser confirmado. Tente novamente.");
        }
    }, 5000);
});

const promessaDePagamento = (pedido) => { return new Promise((resolve, reject) => {
    console.log("Aguardando pagamento ser aprovado pelo cartão.");

    setTimeout(() => {
        const pagamentoAprovado = true;
        if(pagamentoAprovado){
            console.log("Pagamento aprovado com sucesso");
            resolve({confirmation: true, payment: "approved"});
        }else{
            reject("Ocorreu um erro ao realizar o pagamento. Pedido cancelado.");
        }
    },5000);
});
};

promessaDePedidoConfirmado
.then((pedido) => {
return promessaDePagamento(pedido);
})
.then((pagamento) => {
console.log(pagamento);
console.log("Sucesso ao realizar o pagamento. Aguardando envio do pedido.");
})
.catch((erro) => {
console.error(erro);
});

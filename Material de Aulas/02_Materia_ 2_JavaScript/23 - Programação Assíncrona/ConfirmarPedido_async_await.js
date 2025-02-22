
const confirmarPedido = async () => new Promise((resolve, reject) => {
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

const processarPagamento = async (pedido) => { return new Promise((resolve, reject) => {
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

const pedidoConfirmado = await confirmarPedido();
const pagamentoAprovado = await processarPagamento(pedidoConfirmado);
console.log('Tudo deu certo no seu pedido! Aguardando envio');

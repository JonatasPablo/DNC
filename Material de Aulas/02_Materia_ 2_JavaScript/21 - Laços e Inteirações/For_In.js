let pessoa = {
    nome: 'Joao',
    idade: '29',
    altura: '170',
    documento: '40698524845',
}

Object.prototype.surname = 'Teste' //objeto pai, todos os outros vão herde dele

for (let chave in pessoa){
    console.log(pessoa[chave])
}
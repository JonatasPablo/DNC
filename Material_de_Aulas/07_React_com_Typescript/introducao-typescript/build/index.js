"use strict";
// function desejarBoasVindas(
//     nome: string,
//     idade: string,
//     internado: boolean): void {
//         console.log(`Boas Vindas ${nome}`)
//         console.log(`Você tem ${idade} anos de idade`)
Object.defineProperty(exports, "__esModule", { value: true });
//         if(internado == true){
//             console.log('Você está internado')
//         }else{
//             console.log('Você não está internado')
//         }
//         console.log('------')
// }
// desejarBoasVindas('Jonatas Pablo', '30', false)
// desejarBoasVindas('Rafaela Gonçalves', '26', false)
// desejarBoasVindas('Lorena', '7', true)
// function obterMensagemBoasVindas(
//     nome: string,
//     idade: string,
//     telefoneFixo?: string): string {
//         let mensagem =  `Boas vindas ${nome}, você tem ${idade} anos de idade`
//         if(telefoneFixo){
//             mensagem = mensagem + ` e seu número de telefone fixo é ${telefoneFixo}.`
//         }else {
//             mensagem = mensagem + `, vimos que não adicionou o seu telefone fixo, de qualquer forma vamos seguir à disposição.`
//         }
//         return mensagem
// }
// const mensagemBoasVindas = obterMensagemBoasVindas('Jonatas Pablo', '30', '17 3524-8110')
// console.log(mensagemBoasVindas)
// Interfaces
// interface Endereco{
//     cep: string,
//     rua: string,
//     numero: string,
//     bairro: string,
//     cidade: string,
//     estado: string,
//     pais: string
// }
// interface Paciente{
//     nome: string,
//     readonly cpf: string,
//     idade: string,
//     internado: boolean,
//     endereco?: Endereco
// }
// const pacienteUm: Paciente = {
//     nome: 'Jonatas Pablo',
//     cpf: '406.985.248-45',
//     idade: '30',
//     internado: false,
//     endereco: {
//         cep: '15.802-290',
//         rua: 'Nair de Freitas',
//         numero: '204',
//         bairro: 'Jardim Martani',
//         cidade: 'Catanduva',
//         estado: 'São Paulo',
//         pais: 'Brasil'
//     }
// }
// const pacienteDois: Paciente = {
//     nome: 'Fulano',
//     cpf: '405.985.248-45',
//     idade: '30',
//     internado: true
// }
// console.log({
//     pacienteUm,
//     pacienteDois
// })
// INTERFACE DE CLASSE
// interface Pessoa{
//     nome: string
//     dizerOi(): void
// }
// class Medico implements Pessoa{
//     nome: string
//     constructor(nome:string){
//         this.nome = nome
//     }
//     dizerOi(): void {
//         console.log(`Médico ${this.nome} diz oi`)
//     }
// }
// class Enfermeiro implements Pessoa{ 
//     nome: string
//     constructor(nome:string){
//         this.nome = nome
//     }
//     dizerOi(): void {
//         console.log(`Enfermeira ${this.nome} diz oi`)
//     }
// }
// const medico = new Medico('Jonatas')
// medico.dizerOi()
// const enfermeiro = new Enfermeiro('Rafaela')
// enfermeiro.dizerOi()
// EXTENDS - NÃO REPETIR CÓDIGO
// class Pessoa {
//     nome: string
//     id: string
//     constructor (nome: string, id: string){
//         this.nome = nome,
//         this.id = id
//     }
//     apresentar(): void {
//         console.log(`Olá, eu sou o ${this.nome}, e meu ID é ${this.id}`)
//     }
// }
// class Medico extends Pessoa{
//     apresentar(): void {
//         console.log(`Olá, eu sou o ${this.nome} e sou médico, e meu ID é ${this.id}`)
//     }
// }
// class Enfermeiro extends Pessoa{
//     apresentar(): void {
//         console.log(`Olá, eu sou o ${this.nome} e sou enfermeiro, e meu ID é ${this.id}`)
//     }
// }
// const pessoaUm = new Pessoa('Jonatas', '1')
// pessoaUm.apresentar()
// const medico = new Medico('Jonatas', '2')
// medico.apresentar()
// const enfermeiro = new Enfermeiro('Jonatas', '3')
// enfermeiro.apresentar()
// TYPES & UNION TYPES
// TYPES
// type Identificacao = {
//     id: string,
//     setor: string,
//     ala: number
// }
// let identificacao: Identificacao = {
//     id: '42',
//     setor: 'Norte',
//     ala: 25
// }
// let identificacaoDois: Identificacao = {
//     id: '43',
//     setor: 'sul',
//     ala: 40
// }
// console.log(identificacao)
// console.log(identificacaoDois)
// type Identificacao = {
//     id: string | number
// }
// const identificacao: Identificacao = {
//     id: 21321654
// }
// console.log(identificacao)
// UNION TYPES
// type TipoSanguineo = 'A+' | 'O+' | 'AB+'
// let meuTipoSanguineo: TipoSanguineo = "AB+"
// console.log(meuTipoSanguineo)
// function exibirTipoSanguineo (tipoSanguineo: TipoSanguineo): void {
//     console.log(`O tipo sanguineo é: ${tipoSanguineo}`)
// }
// exibirTipoSanguineo('AB+')
// GENERICS
// Criar duas classes, uma Pessoa e outra Animal
// class Pessoa{
//     identidade: string
//     constructor(identidade: string){
//         this.identidade = identidade
//     }
// }
// class Animal{
//     raca: string
//     constructor(raca: string){
//         this.raca = raca
//     }
// }
// function identidadePessoa<T extends Pessoa>(pessoa: T): void{
//     console.log(`Identidade retornada é: ${pessoa.identidade}`)
// }
// function racaGato<T extends Animal>(animal: T): void{
//     console.log(`A raça do gato é: ${animal.raca}`)
// }
// class Medico extends Pessoa{}
// class Enfermeira extends Pessoa{}
// class Seguranca extends Pessoa{}
// class Gato extends Animal{}
// const medicoUm = new Medico('123456')
// const enfermeiraUm = new Enfermeira('654321')
// const segurancaUm = new Seguranca('123abc')
// const gatoUm = new Gato('Amarelo')
// identidadePessoa(medicoUm)
// identidadePessoa(enfermeiraUm)
// identidadePessoa(segurancaUm)
// racaGato(gatoUm)
//Lista de Exercícios
//1. Declare uma variável em TypeScript que armazene um número e outra que armazene uma string. Quais são os tipos primitivos usados?
let numero = 30;
let letras = 'Trinta';
console.log({
    numero,
    letras
});
//2. Crie um array de números em TypeScript e atribua três valores a ele.
let arrayNumber = [1, 2, 3, 4, 5];
console.log(arrayNumber);
const pessoa = {
    nome: 'Jonatas',
    idade: 30
};
console.log(pessoa);
//4. Escreva uma função em TypeScript que receba dois números como parâmetros e retorne a soma deles. Tipifique os parâmetros e o retorno da função.
function soma(n1, n2) {
    return n1 + n2;
}
const resultado = soma(2, 4);
console.log(resultado);
const carro = {
    marca: 'Fiat',
    ano: 2025
};
console.log(carro);
const moto = {
    tipo: 'Honda',
    cilindradas: 660
};
console.log(moto);
//7. Crie uma variável que possa armazenar tanto um número quanto uma string.
let numeroString;
numeroString = 'olá';
numeroString = 123;
console.log(numeroString);
//8. Escreva uma função genérica em TypeScript que receba um array de qualquer tipo e retorne o primeiro elemento.
function generica(array) {
    return array[0];
}
const primeiroNumero = generica([1, 2, 3]);
const primeiraString = generica(['a', 'b', 'c']);
console.log({
    primeiroNumero,
    primeiraString
});
//# sourceMappingURL=index.js.map
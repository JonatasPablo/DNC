// function desejarBoasVindas(
//     nome: string,
//     idade: string,
//     internado: boolean): void {
//         console.log(`Boas Vindas ${nome}`)
//         console.log(`Você tem ${idade} anos de idade`)

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
//     bairro: string
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
//         bairro: 'Jardim Martani'
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
"use strict";
// function desejarBoasVindas(
//     nome: string,
//     idade: string,
//     internado: boolean): void {
//         console.log(`Boas Vindas ${nome}`)
//         console.log(`Você tem ${idade} anos de idade`)
Object.defineProperty(exports, "__esModule", { value: true });
class Medico {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    dizerOi() {
        console.log(`Médico ${this.nome} diz oi`);
    }
}
class Enfermeiro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    dizerOi() {
        console.log(`Enfermeira ${this.nome} diz oi`);
    }
}
const medico = new Medico('Jonatas');
medico.dizerOi();
const enfermeiro = new Enfermeiro('Rafaela');
enfermeiro.dizerOi();
//# sourceMappingURL=index.js.map
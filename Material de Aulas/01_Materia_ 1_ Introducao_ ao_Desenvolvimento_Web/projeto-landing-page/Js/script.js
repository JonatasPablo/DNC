var setaDireita = window.document.getElementById("seta-direita");
var Leonardo = window.document.getElementById("leonardo");
var Bruna = window.document.getElementById("bruna");
var Samanta = window.document.getElementById("samanta");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    setaEsquerda.style = "display: flex; margin-top: 55px"
    setaDireita.style = "display: none"
}

function RolarParaEsquerda(){
    setaDireita.style = "display: flex"
    setaEsquerda.style = "display: none"
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
}


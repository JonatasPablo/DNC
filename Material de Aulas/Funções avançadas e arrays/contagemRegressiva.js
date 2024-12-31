// Fazer um programa que gera uma contagem regressiva usando função.
const atualizaContadorRegressivo = (tempo, callback) => {
    let segundosRestantes = tempo

    const interval = setInterval(() => {
        console.log(segundosRestantes)        
        if(segundosRestantes === 0){
            clearInterval(interval);
            callback();
        }else{
            segundosRestantes--;
        }
    }, 1000)
}

const iniciarContador = (tempo, callback) => atualizaContadorRegressivo(tempo, callback);

iniciarContador(10, () => {
    console.log('Finalizei a contagem regressiva!')
})
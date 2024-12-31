//Escreva um laço for que imprime a tabuada do 5 (5, 10, 15,..., 50).

for(let numero = 5; numero <= 5; numero++){
    console.log('\n', 'Tabuada do ' + numero)
    for(let multiplicador = 0; multiplicador <= 10; multiplicador++){
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`)
    }    
}
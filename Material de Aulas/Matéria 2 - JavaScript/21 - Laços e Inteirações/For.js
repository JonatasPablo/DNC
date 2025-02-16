/*for(let i = 0; i <=10; i++){
    i % 2 == 0 ? console.log(i) : ''
}*/

//Tabuada do 01 ao 10
for(let numero = 1; numero <= 10; numero++){
    console.log('\n', 'Tabuada do ' + numero)
    for(let multiplicador = 0; multiplicador <= 10; multiplicador++){
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`)
    }    
}

/*
Resultado

'Tabuada do ' numero
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador
numero 'x' multiplicador '=' numero * multiplicador

Tabuada do 1
1 x 0 = 0
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10
*/
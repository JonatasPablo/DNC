const conversionFactor = 0.01;

function calculateIMC(person){

    let heigth = 170;
    let weight = 84;
    heigth *= conversionFactor;
    let imc = weight / (heigth * heigth);
    const result = " O resultado do IMC é de: " +imc;
    const isHealthy = true;

    return{
        name: person.name,
        imc,
        result,
        isHealthy,
    } 
}

const person = {
    name: 'Jonatas',
    weight: 84,
    heigth: 170,
}
console.log(calculateIMC(person))




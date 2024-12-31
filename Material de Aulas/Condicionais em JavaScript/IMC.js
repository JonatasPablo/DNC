const conversionFactor = 0.01;

const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'UNDERWEIGHT',
    REGULAR: 'REGULAR',
    OVERWEIGHT: 'OVERWEIGHT',
    OBESITY: 'OBESITY',
}

function getClassificationDetail(classification){
    return{
        [IMC_STATUS_DICT.UNDERWEIGHT]: 'Você está abaixo do peso',
        [IMC_STATUS_DICT.REGULAR]: 'Você está com o peso normal',
        [IMC_STATUS_DICT.OVERWEIGHT]:'Você está acima do peso',
        [IMC_STATUS_DICT.OBESITY]:'Você está com obesidade',
    }[classification] || 'Falha ao retornar a descrição do Status.'
}

function classificateIMC(imc){
    if(imc < 18.5){
        return IMC_STATUS_DICT.UNDERWEIGHT
    }else if(imc >= 18.5 && imc < 25){
        return IMC_STATUS_DICT.REGULAR
    }else if(imc >=25 && imc < 30){
        return IMC_STATUS_DICT.OVERWEIGHT
    }else{
        return IMC_STATUS_DICT.OBESITY
    }
}

function calculateIMC(person){

    let heigth = '170';
    let weight = '65';
    heigth *= conversionFactor;
    let imc = weight / (heigth * heigth);
    const classification = classificateIMC(imc);
    const getClassification = getClassificationDetail(classification)
    const result = " O resultado do IMC é de: " +imc;
    const isHealthy = true;
    
    return{
        name: person.name,
        imc,
        classification,
        getClassification,
        result,
        isHealthy,
    } 
}

const person = {
    name: 'Jonatas',
    weight: 65,
    heigth: 170,
}

console.log(calculateIMC(person))




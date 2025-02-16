let dia = 9;

//Feito com Object Mapping
const DAYS_OF_WEEK_DICT = {
    1: 'Domingo',
    2: 'Segunda-Feira',
    3: 'Terça-feira',
    4: 'Quarta-Feira',
    5: 'Quinta-Feira',
    6: 'Sexta-Feira',
    7: 'Sábado',
}

console.log(DAYS_OF_WEEK_DICT[dia] || 'Esse dia não existe')

//Feito com Switch Case
/*switch(dia){
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-Feira');
        break;
    case 3:
        console.log('Terça-Feira');
        break;
    case 4:
        console.log('Quarta-Feira');
        break;
    case 5:
        console.log('Quinta-Feira');
        break;
    case 6:
        console.log('Sexta-Feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Não existe esse dia na semana.')
}*/
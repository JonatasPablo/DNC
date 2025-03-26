let diaDaSemana = 'sabado'

switch(diaDaSemana){
    case 'segunda':
        console.log('Hoje é dia de Cappuccino')
        break;
    case 'terça':
        console.log('Hoje é dia de Latte')
        break;
    case 'quarta':
        console.log('Hoje é dia de Mocha')
        break;
    case 'quinta':
        console.log('Hoje é dia de Expresso')
        break;
    case 'sexta':
        console.log('Hoje é dia de Macchiato')
        break;
    case 'sabado':
    case 'domingo':
        console.log('Hoje é dia de café especial')
        break;
    default:
        console.log('Dia da semana inválido')
}
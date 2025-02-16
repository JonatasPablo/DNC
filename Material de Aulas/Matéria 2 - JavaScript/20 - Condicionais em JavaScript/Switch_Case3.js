let fruta = 'banana'

switch(fruta){
    case 'maça':
    case 'banana':
    case 'laranja':
        console.log('Essa fruta é comum')
        break;
    
    case 'manga':
    case 'kiwi':
        console.log('Essa é uma fruta rara')
        break;

    default:
        console.log('Fruta desconhecida')
        break;
}
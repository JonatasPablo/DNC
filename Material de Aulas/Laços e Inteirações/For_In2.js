let tasks = {
    'caminhar com o cachorro': true,
    'comprar ingredientes para o café da manhã': true,
    'preparar o almoço': false,
    'ir para a academia': false,
}

for(let key in tasks){
    console.log(`A tarefa: ${key} está ${tasks[key] ? 'concluída' : 'incompleta'}`)
}
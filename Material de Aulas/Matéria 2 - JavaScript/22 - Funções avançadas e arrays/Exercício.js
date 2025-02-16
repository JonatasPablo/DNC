// Criar uma lista de tarefas. Cada tarefa será representada por um objeto com as propriedades descrição, prioridade e status.
//Utilizando os métodos de array e funções avançadas vistas no módulo, vamos manipular essa lista de tarefas de várias maneiras.

/* Passo a passo
    * Criar a Lista de Tarefas:
        - Crie um array de objetos representando as tarefas.
        - Cada objeto deve ter as seguintes propriedades:
            descrição, prioridade (pode ser 1,2 ou 3, sendo
            3 a mais baixa), e status (pode ser "pendente" ou
            "concluída")
    * Adicionar Novas Tarefas:
        - Utilize o métido push para adicionar novas tarefas à lista.
    * Remover Tarefas Concluídas:
        - Utilize o método filter para criar uma nova lista apenas com
            as tarefas pendentes.
    * Marcar Tarefas como Concluídas:
        - Utilize o método map para alterar o status
        de uma tarefa específica para "Concluída".
    * Ordernar Tarefas por prioridade:
        - Utilize o método sort para ordenar as tarefas pela prioridade.
    * Contar Tarefas Pendente:
        - Utilize o método reduce para contar quantas tarefas estão pendentes.
    * Encontrar Tarefa Específica:
        - Utilize o método find para localizar uma tarefa específica pela descrição.
    * Verificar se Todas as Tarefas estão concluídas:
        - Utilize o método every para verificar se todas as tarefas tem o status "concluída".
*/

// Feito pelo professor na aula - Base para conhecimento.
/*Criar lista de tarefas*/
const tasks = [
    {descricao: 'Passear com o Cachorro', prioridade: 1, status: 'concluída'},
    {descricao: 'Comprar ingredientes para o almoço', prioridade: 1, status: 'concluída'},
    {descricao: 'Fazer o almoço', prioridade: 1, status: 'pendente'},
    {descricao: 'Ir para a academia', prioridade: 2, status: 'pendente'},
    {descricao: 'Resolver o exercício do curso', prioridade: 1, status: 'concluída'},
    {descricao: 'Ir para o futebol', prioridade: 3, status: 'pendente'},
]

/*Adicionar novas Tarefas*/
tasks.push({descricao:'Treinar violão', prioridade: 2, status:'pendente'})
console.log(tasks);

/*remover tarefas concluídas*/
const pendingTasks = tasks.filter(({status}) => status === 'pendente');
console.log(pendingTasks);

/*Marcar todas as tarefas como concluídas*/
const doneTasks = tasks.map((tasks) => ({...tasks, status: 'concluída'}));
console.log(doneTasks);

/*Ordenar tarefas por prioridades*/
const sortedTasks = tasks.sort((prevTasks, currentTasks) => prevTasks.prioridade - currentTasks.prioridade);
console.log(sortedTasks);

/*Contar as tarefas pendentes*/
const pendingTasksQtd = tasks.reduce((prev, next) => {
    if(next.status === 'pendente') return prev + 1;
    return prev;
},0);
console.log(pendingTasksQtd);

/*Encontrar uma tarefa específica*/
const selectedTask = tasks.find((task) => task.descricao === 'Treinar violão');
console.log(selectedTask)

/*Verificar se todas as tarefas estão concluídas*/
const isEveryTasksDone = tasks.every((task) => task.status === 'concluída');
console.log(isEveryTasksDone);
// =========================================================================================
// 🔹 IMPORTAÇÃO DOS HOOKS ESSENCIAIS DO REACT 🔹
// =========================================================================================

/**
 * useState:
 * - Permite criar um **estado** dentro do componente funcional.
 * - Armazena informações que podem **mudar ao longo do tempo** (exemplo: lista de projetos).
 * 
 * useEffect:
 * - Permite realizar **efeitos colaterais** dentro do componente.
 * - Exemplo de efeitos colaterais: buscar dados de uma API, manipular o DOM, configurar um listener.
 */
import { useState, useEffect } from 'react';

// =========================================================================================
// 🔹 IMPORTAÇÃO DO ARQUIVO CSS 🔹
// =========================================================================================

/**
 * Aqui importamos o arquivo de estilos específicos para este componente.
 * O CSS garante que o layout, cores, espaçamento e tipografia estejam de acordo com o design.
 */
import './ProjectsList.css';

// =========================================================================================
// 🔹 IMPORTAÇÃO DE ASSETS (IMAGENS DE ÍCONES) 🔹
// =========================================================================================

/**
 * Aqui importamos imagens que servem como ícones no projeto.
 * - `LikedFilled`: representa o ícone preenchido de "curtida" (exemplo: quando o usuário curtiu algo).
 * - `Liked`: representa o ícone vazio de "curtida" (não utilizado neste momento, mas poderia ser para alternar estados).
 */
import LikedFilled from '../../assets/like-filled.svg';
import Liked from '../../assets/like.svg';

// =========================================================================================
// 🔹 IMPORTAÇÃO DA FUNÇÃO DE SERVIÇO QUE BUSCA DADOS DA API 🔹
// =========================================================================================

/**
 * Importa a função `getApiData`, responsável por buscar dados em uma API externa.
 * - O `getApiData` centraliza a lógica de chamadas HTTP para evitar repetição de código.
 * - Torna o código mais organizado e fácil de manter.
 */
import { getApiData } from '../../services/apiServices';

// =========================================================================================
// 🔹 DEFINIÇÃO DO COMPONENTE FUNCIONAL: `ProjectsList` 🔹
// =========================================================================================

/**
 * O componente `ProjectsList` tem como função exibir uma **lista de projetos**.
 * 
 * Componentes funcionais:
 * - São declarados como **funções JavaScript**.
 * - No React, um componente sempre **começa com letra maiúscula** (ProjectsList).
 * - Retornam **JSX**, que descreve a interface visual no navegador.
 */
function ProjectsList() {

    // =====================================================================================
    // 🔹 DECLARAÇÃO DO ESTADO: LISTA DE PROJETOS 🔹
    // =====================================================================================

    /**
     * useState([]):
     * - Cria um estado chamado `projects` que começa com um array vazio `[]`.
     * - O estado `projects` vai armazenar os dados retornados pela API.
     * 
     * setProjects:
     * - Função que atualiza o estado `projects`.
     */
    const [projects, setProjects] = useState([]);

    // =====================================================================================
    // 🔹 EFEITO COLATERAL: BUSCAR DADOS DA API AO CARREGAR A PÁGINA 🔹
    // =====================================================================================

    /**
     * useEffect(() => {...}, []);
     * - Executa a função de efeito colateral quando o componente **monta pela primeira vez**.
     * - O array de dependências `[]` garante que isso acontece **apenas uma vez** (componentDidMount).
     */
    useEffect(() => {

        // =================================================================================
        // 🔸 DECLARAÇÃO DA FUNÇÃO ASSÍNCRONA fetchData 🔸
        // =================================================================================

        /**
         * Uma função assíncrona que:
         * - Faz uma chamada HTTP para a API.
         * - Aguarda a resposta.
         * - Atualiza o estado com os dados recebidos.
         */
        const fetchData = async () => {
            try {
                /**
                 * getApiData('projects'):
                 * - Faz uma requisição GET para o endpoint 'projects'.
                 * - Aguarda o retorno com a palavra-chave `await`.
                 */
                const projectsResponse = await getApiData('projects');

                /**
                 * Atualiza o estado `projects` com os dados recebidos da API.
                 * Isso automaticamente **re-renderiza** o componente exibindo os novos dados.
                 */
                setProjects(projectsResponse);

            } catch {
                /**
                 * Se ocorrer algum erro (exemplo: API indisponível), define a lista como vazia.
                 * Em um projeto real, você pode mostrar um alerta ou mensagem de erro para o usuário.
                 */
                setProjects([]);
            }
        };

        // =================================================================================
        // 🔸 EXECUTA A FUNÇÃO fetchData 🔸
        // =================================================================================

        /**
         * Chamamos `fetchData` para iniciar a busca de dados assim que o componente é montado.
         */
        fetchData();

    }, []); // Dependência vazia = executa apenas uma vez no ciclo de vida do componente.

    // =====================================================================================
    // 🔹 RENDERIZAÇÃO DO COMPONENTE 🔹
    // =====================================================================================

    /**
     * O JSX abaixo descreve como o componente será renderizado na interface.
     */
    return (
        // Container principal do componente, estilizado pela classe CSS 'projects-section'.
        <div className='projects-section'>

            {/* ================================================================================= */}
            {/* 🔸 SEÇÃO DO CABEÇALHO (TÍTULO E DESCRIÇÃO) 🔸 */}
            {/* ================================================================================= */}

            <div className='projects-hero'>
                <h2>Follow Our Projects</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the 
                    of readable content of page lookings at its layouts points.
                </p>
            </div>

            {/* ================================================================================= */}
            {/* 🔸 GRID DOS PROJETOS 🔸 */}
            {/* ================================================================================= */}

            <div className='projects-grid'>
                {
                    /**
                     * Iteramos sobre a lista de `projects` com o método `map()`.
                     * Para cada item no array, retornamos um card com suas informações.
                     * 
                     * O `project` representa um único item no array `projects`.
                     */
                    projects ?
                        projects.map((project) => (

                            /**
                            * Cada elemento da lista deve ter uma `key` única para o React identificar e otimizar  renderizações.
                            * Aqui usamos `project.id` como `key`.
                            */
                            <div 
                                className='project-card d-flex jc-center al-center fd-column' 
                                key={project.id}
                            >

                                {/* ================================================================================= */}
                                {/* 🔸 IMAGEM DO PROJETO 🔸 */}
                                {/* ================================================================================= */}

                                <div 
                                    className='thumb tertiary-background'
                                    style={{ backgroundImage: `url(${project.thumb})` }}
                                    /**
                                    * Define dinamicamente a imagem de fundo com o link de `project.thumb`.
                                     */
                                ></div>

                                {/* ================================================================================= */}
                                {/* 🔸 TÍTULO DO PROJETO 🔸 */}
                                {/* ================================================================================= */}

                                <h3>{project.title}</h3>

                                {/* ================================================================================= */}
                                {/* 🔸 SUBTÍTULO OU DESCRIÇÃO CURTA 🔸 */}
                                {/* ================================================================================= */}

                                <p>{project.subtitle}</p>

                                {/* ================================================================================= */}
                                {/* 🔸 ÍCONE DE CURTIDA 🔸 */}
                                {/* ================================================================================= */}

                                <img 
                                    src={LikedFilled}    // Exibe o ícone de "curtido" (poderia trocar dinamicamente para Liked)
                                    height='20px'        // Altura do ícone
                                    alt="Liked"          // Descrição para acessibilidade (SEO e leitores de tela)
                                />

                            </div>
                        ))
                    : null
                }
            </div>
        </div>
    );
}

// =========================================================================================
// 🔹 EXPORTAÇÃO DO COMPONENTE 🔹
// =========================================================================================

/**
 * `export default` permite que `ProjectsList` seja importado e usado em qualquer lugar do projeto.
 * Exemplo:
 * import ProjectsList from './components/ProjectsList/ProjectsList';
 */
export default ProjectsList;

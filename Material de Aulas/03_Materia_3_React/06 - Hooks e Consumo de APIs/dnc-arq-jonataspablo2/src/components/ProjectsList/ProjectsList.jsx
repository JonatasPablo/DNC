// Importação dos hooks do React para manipulação de estado e efeitos colaterais.
import { useState, useEffect } from 'react'; 

// Importação do arquivo de estilos CSS para estilizar o componente.
import './ProjectsList.css';

// Importação de ícones utilizados no projeto (ícone de "curtir" preenchido e não preenchido).
import LikedFilled from '../../assets/like-filled.svg';
import Liked from '../../assets/like.svg';

// Importação da função `getApiData`, responsável por buscar dados da API.
import { getApiData } from '../../services/apiServices';

// Definição do componente funcional `ProjectsList`.
function ProjectsList() {
    
    // Estado `projects` para armazenar a lista de projetos obtida da API.
    // `setProjects` é a função para atualizar esse estado.
    const [projects, setProjects] = useState([]);

    // `useEffect` é utilizado para executar código assim que o componente é montado.
    // Neste caso, ele busca os projetos da API.
    useEffect(() => {
        
        // Função assíncrona que busca os dados da API.
        const fetchData = async () => {
            try {
                // Chamada à API para obter a lista de projetos.
                const projectsResponse = await getApiData('projects');

                // Atualiza o estado com os projetos retornados da API.
                setProjects(projectsResponse);
            } catch {
                // Em caso de erro na requisição, define o estado como um array vazio.
                setProjects([]);
            }
        };

        // Chama a função `fetchData` ao montar o componente.
        fetchData();

    }, []); // O array vazio `[]` garante que esse efeito roda apenas uma vez, quando o componente é montado.

    return (
        // Contêiner principal do componente, com classe CSS 'projects-section' para estilização.
        <div className='projects-section'>
            
            {/* Seção do cabeçalho dos projetos */}
            <div className='projects-hero'>
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
            </div>

            {/* Grid para exibição dos projetos */}
            <div className='projects-grid'>
                {
                    // Mapeia a lista de projetos e renderiza um card para cada projeto.
                    projects.map((project) => (
                        // Cada card de projeto recebe uma `key` única (project.id) para otimizar a renderização no React.
                        <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                            
                            {/* Imagem de capa do projeto */}
                            <div 
                                className='thumb tertiary-background'
                                style={{ backgroundImage: `url(${project.thumb})` }} // Define a imagem de fundo dinamicamente com base na URL do projeto.
                            ></div>

                            {/* Título do projeto */}
                            <h3>{project.title}</h3>

                            {/* Subtítulo ou breve descrição do projeto */}
                            <p>{project.subtitle}</p>

                            {/* Ícone de "curtida" */}
                            <img src={LikedFilled} height='20px' alt="Liked"/>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

// Exportação do componente `ProjectsList` para ser utilizado em outras partes da aplicação.
export default ProjectsList;

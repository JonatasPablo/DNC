// Importação dos componentes reutilizáveis do site
import Header from "../components/Header/Header"; // Cabeçalho fixo
import ProjectsList from "../components/ProjectsList/ProjectsList"; // Lista de projetos
import Footer from "../components/Footer/Footer"; // Rodapé fixo
import Banner from "../components/Banner/Banner"; // Banner com título e imagem dinâmicos

/**
 * Componente `Projects`
 *
 * Esta página exibe a lista de projetos disponíveis.
 * Inclui:
 * - `Header`: Cabeçalho fixo com menu de navegação.
 * - `Banner`: Banner superior com título "Projects" e uma imagem de fundo.
 * - `ProjectsList`: Lista dinâmica de projetos em formato de grid.
 * - `Footer`: Rodapé fixo no final da página.
 */
function Projects() {
    return (
        <>
            {/* Cabeçalho fixo da página */}
            <Header />

            {/* Banner com título dinâmico e imagem de fundo */}
            <Banner title="Projects" image="Projects.jpg" />

            {/* Seção principal com a lista de projetos */}
            <div className="container">
                <ProjectsList />
            </div>    

            {/* Rodapé fixo da página */}
            <Footer />
        </>
    );
}

// Exporta o componente para ser utilizado em outras partes da aplicação
export default Projects;

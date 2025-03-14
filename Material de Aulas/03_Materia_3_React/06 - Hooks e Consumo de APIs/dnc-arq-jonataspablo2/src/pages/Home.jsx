// Importação dos componentes reutilizáveis
import Header from "../components/Header/Header"; // Cabeçalho fixo
import Hero from "../components/Hero/Hero"; // Seção principal da página inicial
import ProjectsList from "../components/ProjectsList/ProjectsList"; // Lista de projetos
import Footer from "../components/Footer/Footer"; // Rodapé fixo
// import Banner from "../components/Banner/Banner"; // Comentado (não está sendo usado)

/**
 * Componente `Home`
 *
 * Esta é a **página inicial** da aplicação.
 * Inclui:
 * - `Header`: Cabeçalho fixo com menu de navegação.
 * - `Hero`: Seção principal (Hero Section) destacando o site.
 * - `ProjectsList`: Lista de projetos apresentados na página inicial.
 * - `Footer`: Rodapé fixo no final da página.
 */
function Home() {
    return (
        <>
            {/* Cabeçalho fixo da página */}
            <Header />

            {/* Container principal da página */}
            <div className="container">
                
                {/* Seção Hero (imagem principal e texto de destaque) */}
                <Hero />

                {/* Lista de Projetos */}
                <ProjectsList />
            </div>    

            {/* Rodapé da página */}
            <Footer />
        </>
    );
}

// Exporta o componente `Home` para ser utilizado na aplicação
export default Home;

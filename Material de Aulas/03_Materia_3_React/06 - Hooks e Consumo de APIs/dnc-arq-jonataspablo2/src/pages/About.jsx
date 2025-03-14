// Importa os componentes reutilizáveis da aplicação
import Header from "../components/Header/Header"; // Cabeçalho da página
import Footer from "../components/Footer/Footer"; // Rodapé da página
import Banner from "../components/Banner/Banner"; // Banner superior com imagem e título
import AboutText from "../components/AboutText/AboutText"; // Seção de texto sobre a empresa

/**
 * Componente `About`
 * 
 * Esta página representa a seção "Sobre Nós" do site.
 * Inclui:
 * - `Header`: O cabeçalho da aplicação.
 * - `Banner`: Um banner com imagem de fundo e o título "About Us".
 * - `AboutText`: Bloco de conteúdo explicativo sobre a empresa.
 * - `Footer`: O rodapé da aplicação.
 */
function About() {
    return (
        <>
            {/* Cabeçalho fixo da página */}
            <Header />

            {/* Banner com título dinâmico e imagem de fundo */}
            <Banner title="About us" image="About.jpg" />

            {/* Seção principal de conteúdo dentro de um container */}
            <div className="container">
                <AboutText />
            </div>

            {/* Rodapé fixo da página */}
            <Footer />
        </>
    );
}

// Exporta o componente para ser utilizado em outras partes da aplicação
export default About;

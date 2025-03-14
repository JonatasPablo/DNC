// Importação dos componentes reutilizáveis do site
import Header from "../components/Header/Header"; // Cabeçalho fixo
import Footer from "../components/Footer/Footer"; // Rodapé fixo
import Banner from "../components/Banner/Banner"; // Banner com imagem e título dinâmicos
import ContactForm from "../components/ContactForm/ContactForm"; // Formulário de contato

/**
 * Componente `Contact`
 *
 * Esta página representa a seção "Fale Conosco" do site.
 * Inclui:
 * - `Header`: Cabeçalho fixo no topo da página.
 * - `Banner`: Banner superior com imagem de fundo e título "Contact Us".
 * - `ContactForm`: Formulário de contato para os usuários preencherem.
 * - `Footer`: Rodapé fixo no final da página.
 */
function Contact() {
    return (
        <>
            {/* Cabeçalho do site */}
            <Header />

            {/* Banner com título dinâmico e imagem de fundo */}
            <Banner title="Contact Us" image="Contact.jpg" />

            {/* Seção principal de conteúdo com um formulário de contato */}
            <div className="container">
                <ContactForm />
            </div>

            {/* Rodapé do site */}
            <Footer />
        </>
    );
}

// Exporta o componente para ser utilizado em outras partes da aplicação
export default Contact;

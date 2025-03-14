// ===========================================================
// 🔹 IMPORTAÇÃO DOS COMPONENTES REUTILIZÁVEIS DO SITE 🔹
// ===========================================================

/**
 * O comando `import` permite trazer funcionalidades e componentes de outros arquivos para o arquivo atual.
 * 
 * Em React, usamos componentes para **dividir o layout da interface em partes reutilizáveis**.
 * Cada componente tem uma responsabilidade única (Single Responsibility Principle).
 */

// ✅ Importa o componente `Header`, responsável pelo menu de navegação que aparece no topo do site.
import Header from "../components/Header/Header"; 

// ✅ Importa o componente `Footer`, responsável por exibir informações de contato, redes sociais e copyright.
import Footer from "../components/Footer/Footer"; 

// ✅ Importa o componente `Banner`, que exibe uma imagem de fundo com um título dinâmico (neste caso "Contact Us").
import Banner from "../components/Banner/Banner"; 

// ✅ Importa o componente `ContactForm`, que renderiza um formulário de contato onde o usuário pode preencher e enviar informações.
import ContactForm from "../components/ContactForm/ContactForm"; 


// ===========================================================
// 🔹 DEFINIÇÃO DO COMPONENTE PRINCIPAL: `Contact` 🔹
// ===========================================================

/**
 * Este componente representa a **página de contato** do site.
 * Ele renderiza todos os componentes necessários para exibir a tela "Fale Conosco".
 * 
 * O React renderiza este componente quando o usuário acessa a rota `/contact` (configurado no React Router).
 * 
 * O componente é uma função que retorna JSX (HTML + JavaScript misturados).
 */

function Contact() {
    /**
     * O `return` em um componente React define **o que será exibido na tela**.
     * 
     * O React exige que um componente retorne **apenas um elemento pai**.
     * Por isso, usamos `<> ... </>` (React Fragment), que é um container invisível.
     */
    return (
        <>
            {/* ===================================================== */}
            {/* 🔹 HEADER DO SITE 🔹 */}
            {/* ===================================================== */}

            {/*
                O componente `Header` exibe o menu de navegação do site.
                Ele geralmente inclui:
                - Logotipo
                - Links de navegação (Home, About, Projects, Contact)
                - Ícones ou menus para dispositivos móveis (hamburger menu)
            */}
            <Header />

            {/* ===================================================== */}
            {/* 🔹 BANNER SUPERIOR 🔹 */}
            {/* ===================================================== */}

            {/*
                O componente `Banner` exibe:
                - Um título (neste caso, "Contact Us").
                - Uma imagem de fundo, definida pela prop `image` (Contact.jpg).
                Props (propriedades) são argumentos passados para os componentes,
                permitindo personalização e reutilização.
            */}
            <Banner 
                title="Contact Us"    // Prop que define o texto do banner.
                image="Contact.jpg"   // Prop que define a imagem de fundo.
            />

            {/* ===================================================== */}
            {/* 🔹 ÁREA PRINCIPAL DE CONTEÚDO 🔹 */}
            {/* ===================================================== */}

            {/*
                A `div` com a classe `container` centraliza e organiza o conteúdo da página.
                Dentro dela, colocamos o `ContactForm`, um formulário onde o usuário pode preencher seus dados.
            */}
            <div className="container">
                {/* Componente `ContactForm` */}
                {/*
                    Este componente normalmente inclui:
                    - Campos de entrada de dados (nome, email, mensagem).
                    - Um botão para enviar o formulário.
                    - Validação de campos (obrigatórios, formatos de email, etc.).
                */}
                <ContactForm />
            </div>

            {/* ===================================================== */}
            {/* 🔹 RODAPÉ DO SITE 🔹 */}
            {/* ===================================================== */}

            {/*
                O componente `Footer` aparece no final da página.
                Ele geralmente exibe:
                - Direitos autorais ("Copyright © 2024").
                - Endereço da empresa.
                - Ícones e links para redes sociais.
            */}
            <Footer />
        </>
    );
}


// ===========================================================
// 🔹 EXPORTAÇÃO DO COMPONENTE `Contact` 🔹
// ===========================================================

/**
 * O comando `export default` permite que o componente `Contact` seja importado em outros arquivos do projeto.
 * Exemplo de uso:
 * 
 * import Contact from './pages/Contact';
 * 
 * O React Router usa este componente quando o usuário acessa a rota `/contact`.
 */
export default Contact;

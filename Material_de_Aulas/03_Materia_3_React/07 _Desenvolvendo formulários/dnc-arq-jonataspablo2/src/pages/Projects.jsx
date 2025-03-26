// ===========================================================
// 🔹 IMPORTAÇÃO DOS COMPONENTES REUTILIZÁVEIS DO SITE 🔹
// ===========================================================

/**
 * O `import` é a forma que o JavaScript tem de importar código de outro arquivo.
 * Ao invés de escrever o código de novo, reutilizamos componentes que já criamos.
 * 
 * Esses componentes montam as partes visuais da página de projetos:
 */

// ✅ Importa o componente do cabeçalho fixo da aplicação (menu de navegação principal)
import Header from "../components/Header/Header"; 

// ✅ Importa o componente que exibe a lista de projetos em formato de grid
import ProjectsList from "../components/ProjectsList/ProjectsList"; 

// ✅ Importa o componente do rodapé fixo, com informações de contato e links sociais
import Footer from "../components/Footer/Footer"; 

// ✅ Importa o componente do banner superior, que pode receber um título e uma imagem de fundo
import Banner from "../components/Banner/Banner"; 

// ===========================================================
// 🔹 DEFINIÇÃO DO COMPONENTE PRINCIPAL: `Projects` 🔹
// ===========================================================

/**
 * Função `Projects` → Define um **componente React**.
 * Em React, um componente é uma **função que retorna JSX**, que descreve o que será exibido na tela.
 * 
 * Este componente representa a **página de projetos** do site.
 * 
 * O que ele exibe?
 * 1️⃣ Header → Cabeçalho fixo com a navegação.
 * 2️⃣ Banner → Imagem de fundo + título "Projects".
 * 3️⃣ ProjectsList → Lista de projetos cadastrados.
 * 4️⃣ Footer → Rodapé com informações de contato.
 */

function Projects() {
    return (
        <>
            {/* ===================================================== */}
            {/* 🔹 CABEÇALHO DA PÁGINA 🔹 */}
            {/* ===================================================== */}

            {/*
                O `<Header />` é um componente fixo que contém o logotipo
                e o menu de navegação, permitindo o acesso às outras páginas.
            */}
            <Header />

            {/* ===================================================== */}
            {/* 🔹 BANNER DA PÁGINA 🔹 */}
            {/* ===================================================== */}

            {/*
                O `<Banner />` recebe duas props:
                - `title`: define o texto exibido no banner (neste caso "Projects").
                - `image`: define a imagem de fundo do banner (neste caso "Projects.jpg").

                Esse componente cria uma área visual de destaque logo após o cabeçalho.
            */}
            <Banner 
                title="Projects"      // Prop que define o texto do banner
                image="Projects.jpg"  // Prop que define a imagem de fundo do banner
            />

            {/* ===================================================== */}
            {/* 🔹 LISTA DE PROJETOS 🔹 */}
            {/* ===================================================== */}

            {/*
                A `<div className="container">` funciona como uma caixa de conteúdo centralizada,
                limitando a largura da área e alinhando o conteúdo de forma organizada.

                Dentro dela colocamos o componente `<ProjectsList />`,
                responsável por renderizar a lista dinâmica de projetos cadastrados.
            */}
            <div className="container">
                <ProjectsList />
            </div>    

            {/* ===================================================== */}
            {/* 🔹 RODAPÉ DA PÁGINA 🔹 */}
            {/* ===================================================== */}

            {/*
                O `<Footer />` é o componente que aparece no final da página.
                Ele exibe informações de contato, direitos autorais, links de redes sociais, etc.
            */}
            <Footer />
        </>
    );
}

// ===========================================================
// 🔹 EXPORTAÇÃO DO COMPONENTE 🔹
// ===========================================================

/**
 * `export default Projects;`
 * 
 * - Faz com que o componente `Projects` possa ser importado em outros arquivos.
 * - Esse componente normalmente será usado no sistema de rotas do React Router.
 * 
 * Exemplo de importação em `App.jsx`:
 * import Projects from './pages/Projects';
 */
export default Projects;

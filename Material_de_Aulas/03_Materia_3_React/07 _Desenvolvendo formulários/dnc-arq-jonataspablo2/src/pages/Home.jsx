// ============================================================
// 🔹 IMPORTAÇÃO DOS COMPONENTES UTILIZADOS NESTA PÁGINA 🔹
// ============================================================

/**
 * O comando `import` serve para trazer funcionalidades ou componentes de outros arquivos para o arquivo atual.
 * 
 * No React, é comum **quebrar a aplicação em componentes menores**, cada um com uma responsabilidade específica,
 * e depois montá-los juntos como peças de LEGO para formar as páginas.
 * 
 * A sintaxe básica é:
 * import [NomeDoComponente] from 'caminho/arquivo';
 * 
 * A palavra-chave `from` indica **de onde você está importando o componente**.
 * O caminho geralmente é relativo ao arquivo atual.
 */

// 🔹 Importamos o componente `Header`, que representa o cabeçalho da página (menu de navegação principal)
import Header from "../components/Header/Header";

// 🔹 Importamos o componente `Hero`, responsável por exibir uma imagem de destaque e um título na home
import Hero from "../components/Hero/Hero";

// 🔹 Importamos `ProjectsList`, que exibe a lista de projetos cadastrados na página inicial
import ProjectsList from "../components/ProjectsList/ProjectsList";

// 🔹 Importamos o `Footer`, que é o rodapé fixo exibido no final da página, com informações de contato e redes sociais
import Footer from "../components/Footer/Footer";

// 🔹 Existe também um componente `Banner`, mas ele está comentado no momento, ou seja, não está sendo utilizado
// import Banner from "../components/Banner/Banner";


// ========================================================
// 🔹 DEFINIÇÃO DO COMPONENTE PRINCIPAL: `Home` 🔹
// ========================================================

/**
 * 🔸 O que é um componente?
 * - Um **componente React** é uma função JavaScript que **retorna** um pedaço da interface do usuário (UI).
 * - Ele é responsável por **definir** o que aparece na tela, **controlar o comportamento**, e pode **reutilizar outros componentes** dentro dele.
 * 
 * 🔸 O que este componente faz?
 * - O `Home` é responsável por exibir a **página inicial** da aplicação.
 * - Dentro dele, importamos e utilizamos outros componentes (Header, Hero, ProjectsList e Footer).
 */

function Home() {

    /**
     * 🔸 O que o `return` faz?
     * - No React, o `return` de um componente **descreve a UI** que o usuário irá ver.
     * - Ele **retorna JSX**, que é uma sintaxe que parece HTML, mas é JavaScript.
     * 
     * 🔸 Por que `<>...</>` (React Fragment)?
     * - O React exige que o `return` retorne apenas **um único elemento pai**.
     * - Para evitar criar `divs` desnecessárias, usamos o `React Fragment` (`<>...</>`) como container invisível.
     */

    return (
        <>
            {/* ===================================================== */}
            {/* 🔹 HEADER 🔹 */}
            {/* ===================================================== */}

            {/* 
                Componente `Header`
                Exibe a barra de navegação fixa no topo do site. 
                Normalmente, ele inclui:
                - Logotipo da marca/empresa.
                - Links de navegação para outras páginas (Home, About, Projects, Contact).
            */}
            <Header />

            {/* ===================================================== */}
            {/* 🔹 CONTAINER PRINCIPAL 🔹 */}
            {/* ===================================================== */}

            {/* 
                `div.container`
                Um container é uma estrutura que centraliza e organiza o conteúdo da página.
                Normalmente limita a largura máxima do conteúdo e adiciona paddings/margens.
                A classe `container` geralmente vem com um estilo CSS associado.
            */}
            <div className="container">

                {/* 🔹 HERO SECTION 🔹 */}
                {/* 
                    Componente `Hero`
                    É a seção principal que aparece logo no topo após o header.
                    Normalmente usada para exibir:
                    - Um título de destaque (ex: "Bem-vindo à nossa página!").
                    - Uma descrição ou slogan.
                    - Imagem ou background chamativo.
                */}
                <Hero />

                {/* 🔹 PROJECTS LIST 🔹 */}
                {/* 
                    Componente `ProjectsList`
                    Exibe uma lista de projetos cadastrados.
                    Ele geralmente faz uma chamada à API para buscar os projetos e os renderiza em cards ou grids.
                */}
                <ProjectsList />
            </div>

            {/* ===================================================== */}
            {/* 🔹 FOOTER 🔹 */}
            {/* ===================================================== */}

            {/* 
                Componente `Footer`
                Exibe informações no rodapé do site, como:
                - Direitos autorais.
                - Informações de contato.
                - Links para redes sociais.
            */}
            <Footer />
        </>
    );
}


// ===========================================================
// 🔹 EXPORTAÇÃO DO COMPONENTE `Home` 🔹
// ===========================================================

/**
 * 🔸 O que `export default` faz?
 * - Torna o componente `Home` disponível para ser **importado em outro lugar** do projeto.
 * - Sem `export`, o componente só existiria dentro deste arquivo.
 * 
 * Exemplo de uso:
 * 
 * import Home from "./pages/Home";
 * 
 * Normalmente, isso acontece no arquivo `App.jsx` onde o `Home` é chamado nas rotas.
 */

export default Home;

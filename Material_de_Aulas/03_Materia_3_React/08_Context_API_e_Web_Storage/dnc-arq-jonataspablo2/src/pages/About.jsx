// ========================================================
// 🔹 IMPORTAÇÃO DOS COMPONENTES UTILIZADOS 🔹
// ========================================================

/**
 * 🔸 O que é o `import`?
 * Em JavaScript moderno (ES6+), `import` permite **trazer código de outros arquivos**
 * para o arquivo atual. Isso ajuda a **organizar** e **modularizar** o código.
 * 
 * 🔸 Por que usar?
 * Imagine um site como um prédio: cada **componente** (Header, Footer, etc.) é um **bloco**.
 * Com `import`, você traz esses blocos prontos de outros arquivos para montar o prédio (página).
 * 
 * 🔸 O que é `from`?
 * Define **de onde vem** aquele código. O caminho geralmente começa com:
 * - `./` → Pasta atual
 * - `../` → Pasta acima
 */

// ✅ Importamos o `Header`, que representa o **cabeçalho do site** (contém logo e menu de navegação)
import Header from "../components/Header/Header";

// ✅ Importamos o `Footer`, que representa o **rodapé da página** (normalmente com informações da empresa e redes sociais)
import Footer from "../components/Footer/Footer";

// ✅ Importamos o `Banner`, que exibe um **banner visual**, geralmente com uma imagem de fundo e um título no topo da página
import Banner from "../components/Banner/Banner";

// ✅ Importamos o `AboutText`, que mostra um **bloco de texto explicativo** sobre a empresa (quem somos, missão, etc.)
import AboutText from "../components/AboutText/AboutText";


// ========================================================
// 🔹 DEFINIÇÃO DO COMPONENTE PRINCIPAL `About` 🔹
// ========================================================

/**
 * 🔸 O que é um componente em React?
 * - Um **componente** é uma **função** que retorna JSX (parecido com HTML).
 * - Ele é responsável por **montar um pedaço da interface gráfica** do site/app.
 * 
 * 🔸 O nome do componente aqui é `About`.
 * - Ele representa a **página "Sobre Nós"**.
 * - Dentro dele, usamos outros componentes menores que juntos montam a página.
 * 
 * ✅ Cada componente deve retornar **um único elemento pai**.
 * Por isso, usamos `<>...</>` (React Fragment), que é um contêiner invisível.
 */

function About() {
    /**
     * 🔹 O que o `return` faz aqui?
     * - Ele define o **conteúdo visual da página**.
     * - Tudo dentro do `return` será **exibido no navegador**.
     * 
     * ✅ JSX → Parece HTML, mas é JavaScript! Você pode colocar variáveis e lógica.
     */

    return (
        <>
            {/* =================================================== */}
            {/* 🔸 CABEÇALHO DO SITE 🔸 */}
            {/* =================================================== */}

            {/* Exibe o menu de navegação e o logo no topo da página */}
            <Header />

            {/* =================================================== */}
            {/* 🔸 BANNER PRINCIPAL 🔸 */}
            {/* =================================================== */}

            {/* 
              O `Banner` exibe uma imagem de fundo e um título (texto). 
              Passamos duas `props` (propriedades):
              - `title`: O texto que será exibido no banner ("About us").
              - `image`: O arquivo da imagem de fundo ("About.jpg").
            */}
            <Banner title="About us" image="About.jpg" />

            {/* =================================================== */}
            {/* 🔸 CONTEÚDO PRINCIPAL DA PÁGINA 🔸 */}
            {/* =================================================== */}

            <div className="container">
                {/* 
                  O `container` centraliza o conteúdo e limita a largura máxima da área.
                  Dentro dele, chamamos o `AboutText`, que exibe a descrição da empresa.
                */}
                <AboutText />
            </div>

            {/* =================================================== */}
            {/* 🔸 RODAPÉ DO SITE 🔸 */}
            {/* =================================================== */}

            {/* 
              O `Footer` aparece no final da página.
              Ele normalmente exibe:
              - Endereço da empresa
              - Informações de contato
              - Links para redes sociais
            */}
            <Footer />
        </>
    );
}

// ========================================================
// 🔹 EXPORTAÇÃO DO COMPONENTE `About` 🔹
// ========================================================

/**
 * ✅ `export default` faz com que o componente `About` possa ser **importado em outros arquivos**.
 * 
 * Exemplo de uso:
 * import About from './pages/About';
 * 
 * ⚠️ Sem o `export`, não conseguiríamos acessar esse componente fora deste arquivo.
 */
export default About;

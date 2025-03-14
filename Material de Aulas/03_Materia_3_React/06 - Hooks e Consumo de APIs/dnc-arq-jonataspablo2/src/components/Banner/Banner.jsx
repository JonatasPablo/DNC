// ============================================================================================
// ✅ IMPORTAÇÃO DE ESTILOS (CSS) PARA O COMPONENTE `Banner`
// ============================================================================================

/**
 * ➡️ O comando `import` é usado em JavaScript para carregar arquivos, bibliotecas ou outros módulos.
 * 
 * 🔹 Aqui, estamos importando o arquivo de estilos `Banner.css` para definir a aparência visual do componente `Banner`.
 * 🔹 O CSS pode definir:
 *    - Altura e largura do banner
 *    - Bordas arredondadas ou não
 *    - Estilização do título
 *    - Imagem de fundo, cores e responsividade
 * 
 * ✅ Boas práticas:
 * - Manter o CSS do componente separado ajuda na organização e reusabilidade.
 * - Nomear o arquivo CSS com o nome do componente facilita a identificação do seu estilo.
 */
import './Banner.css';


// ============================================================================================
// ✅ DEFINIÇÃO DO COMPONENTE FUNCIONAL `Banner`
// ============================================================================================

/**
 * ➡️ O React permite criar componentes funcionais de forma simples.
 * 🔹 Um componente funcional em React é basicamente uma função JavaScript que retorna JSX.
 * 
 * ✅ O que são props?
 * - `props` (propriedades) são parâmetros que um componente recebe, permitindo customização.
 * - Isso torna o componente **reutilizável** e **dinâmico**.
 * 
 * ✅ Por que usar props?
 * - Ao invés de criar vários banners estáticos, você cria **um componente genérico** que pode mudar:
 *   Exemplo: 
 *   <Banner title="About Us" image="About.jpg" />
 */
function Banner(props) {

    // ========================================================================================
    // ✅ RETORNO DO JSX DO COMPONENTE BANNER
    // ========================================================================================

    /**
     * ➡️ JSX é uma extensão de sintaxe para JavaScript que permite escrever estruturas parecidas com HTML dentro do React.
     * ➡️ Tudo o que está dentro de `return()` será renderizado na tela pelo React.
     */
    return (

        // ====================================================================================
        // ✅ CONTAINER PRINCIPAL DO BANNER
        // ====================================================================================

        /**
         * ➡️ Aqui criamos a `div` principal do banner.
         * 
         * 🔹 A `className` (equivalente ao atributo `class` do HTML) aplica as regras do CSS importado.
         * 🔹 `d-flex` e `al-end` são classes utilitárias para facilitar o uso de `display: flex` e alinhamento dos elementos.
         * 
         * ✅ O atributo `style` define o estilo inline de CSS. Estamos utilizando-o para definir a imagem de fundo dinamicamente.
         * ✅ Por quê? Porque a imagem do banner muda de acordo com a prop recebida.
         * 
         * Exemplo: Se `props.image = "About.jpg"`, a propriedade `backgroundImage` será:
         * `url(/About.jpg)`
         * 
         * ✅ Dicas de boas práticas:
         * - Sempre valide o valor de `props.image` para evitar erros.
         * - Caso queira passar URLs completas, adapte a sintaxe.
         */
        <div 
            className='banner d-flex al-end'           // Classes CSS que definem o layout e alinhamento.
            style={{
                backgroundImage: `url(/${props.image})`, // Define a imagem de fundo dinamicamente com base na prop recebida.
                backgroundSize: 'cover',                 // Garante que a imagem cubra toda a área do banner.
                backgroundPosition: 'center'             // Centraliza a imagem dentro do container.
            }}
        >

            {/* ==================================================================================== */}
            {/* ✅ CONTAINER CENTRALIZADOR DO CONTEÚDO DENTRO DO BANNER                             */}
            {/* ==================================================================================== */}

            {/**
             * ➡️ A `div` com a classe `container` geralmente define uma largura máxima para o conteúdo.
             * ✅ Por que isso é importante?
             * - Em resoluções muito grandes, evita que o conteúdo fique "espalhado".
             * - Ajuda a centralizar o conteúdo e a manter um layout mais agradável visualmente.
             */}
            <div className='container'>

                {/* ==================================================================================== */}
                {/* ✅ ÁREA ONDE FICA O TÍTULO DO BANNER                                              */}
                {/* ==================================================================================== */}

                {/**
                 * ➡️ Este container centraliza o conteúdo do título no banner.
                 * 🔹 `d-flex` → Ativa o Flexbox para manipular o alinhamento.
                 * 🔹 `al-center` → Centraliza verticalmente (align-items: center).
                 * 🔹 `jc-center` → Centraliza horizontalmente (justify-content: center).
                 */}
                <div className='title-panel d-flex al-center jc-center'>

                    {/* ==================================================================================== */}
                    {/* ✅ TÍTULO H1 DO BANNER                                                           */}
                    {/* ==================================================================================== */}

                    {/**
                     * ➡️ O elemento <h1> define o título principal de uma seção ou página.
                     * 
                     * ✅ SEO (Search Engine Optimization):
                     * - O <h1> é o título mais importante para SEO.
                     * - Deve ser único na página ou pelo menos semântico (em banners informativos, pode-se usar <h2> ou <p>).
                     * 
                     * ✅ Acessibilidade (a11y):
                     * - Um <h1> ajuda leitores de tela a entenderem a estrutura do conteúdo.
                     * 
                     * ✅ Exemplo:
                     * Se passarmos no componente:
                     * <Banner title="About Us" image="About.jpg" />
                     * O conteúdo dentro do <h1> será "About Us".
                     */}

                    <h1>{props.title}</h1>
                </div>

            </div>
        </div>
    );
}

// ============================================================================================
// ✅ EXPORTAÇÃO DO COMPONENTE `Banner`
// ============================================================================================

{/**
 * ➡️ `export default` torna o componente acessível para ser usado em outros lugares da aplicação.
 * 
 * Exemplo de uso:
 * import Banner from './components/Banner/Banner';
 * 
 * E depois em algum JSX:
 * <Banner title="About Us" image="About.jpg" />
 * 
 * ✅ Boas práticas:
 * - Nomear componentes com letras maiúsculas (Banner).
 * - Usar `export default` facilita a importação sem precisar de chaves { }.
 */}
export default Banner;

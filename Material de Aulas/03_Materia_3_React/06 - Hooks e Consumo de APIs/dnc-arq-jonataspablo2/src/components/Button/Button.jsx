// ========================================================================================
// ✅ IMPORTAÇÕES INICIAIS
// ========================================================================================

/**
 * 🔹 Importa o arquivo de estilos CSS específico para o componente `Button`.
 *   - Ele define a aparência visual do botão (cores, tamanhos, hover, disabled, etc).
 *   - Mantemos a separação da lógica (JSX) e a aparência (CSS) por boas práticas.
 */
import './Button.css';

/**
 * 🔹 Importa uma imagem SVG (ícone de seta branca) localizada na pasta de assets.
 *   - Será usada de forma opcional no botão, como um indicador visual de "avanço" ou "ação".
 */
import WhiteArrow from '../../assets/white-arrow.svg';

// ========================================================================================
// ✅ DEFINIÇÃO DO COMPONENTE REUTILIZÁVEL BUTTON
// ========================================================================================

/**
 * Criamos um componente de botão funcional chamado `Button`.
 * Ele é reutilizável e personalizável, aceitando várias propriedades (props).
 *
 * Props são parâmetros passados para o componente que controlam seu comportamento e visual.
 *
 * ⚙️ Parâmetros recebidos (desestruturados diretamente no argumento da função):
 * @param {boolean} arrow - Define se deve exibir o ícone de seta ao lado do conteúdo do botão.
 * @param {string} buttonStyle - Define estilos adicionais do botão, controlando o layout (ex: primary, secondary, outline).
 * @param {boolean} loading - Indica um estado de carregamento. (⚠️ Não foi implementado no JSX, mas pode ser útil futuramente!)
 * @param {ReactNode} children - É o conteúdo do botão. Geralmente um texto ("Clique aqui"), mas pode ser qualquer elemento JSX.
 * @param {object} props - Outras propriedades nativas do elemento <button> (exemplo: onClick, disabled, type...).
 */
function Button({ arrow, buttonStyle, loading, children, ...props }) {

    // ========================================================================================
    // ✅ RETORNO DO JSX - ESTRUTURA VISUAL DO BOTÃO
    // ========================================================================================
    
    /**
     * JSX significa JavaScript XML. É uma forma de escrever a estrutura visual de um componente
     * (parecido com HTML, mas dentro do JavaScript).
     *
     * O JSX deve sempre retornar um único nó raiz. Aqui, usamos a tag `<button>`.
     */
    return (
        /**
         * ✅ `<button>` é o botão nativo do HTML.
         * - Ele é semântico e tem suporte para acessibilidade, navegação com teclado, entre outros.
         * - A `className` define as classes CSS aplicadas. Concatenamos a classe base `button` com a variação passada pela prop `buttonStyle`.
         * - O operador `...props` insere todas as propriedades extras que forem passadas para o componente, como:
         *    - onClick
         *    - type="submit"
         *    - disabled
         *    - aria-label (para acessibilidade)
         */
        <button className={`button ${buttonStyle}`} {...props}>

            {/**
             * ✅ {children}
             * - O conteúdo do botão (normalmente texto).
             * - O `children` é a parte do conteúdo entre a abertura e o fechamento da tag no JSX:
             *     <Button>CLIQUE AQUI</Button>
             * - É o que torna esse componente flexível e reutilizável.
             */}
            {children}

            {/**
             * ✅ {arrow && ...}
             * - Renderiza a imagem `WhiteArrow` somente se a prop `arrow` for true.
             * - O `&&` é uma forma curta de dizer: "Se `arrow` for verdadeiro, exiba o ícone".
             * - O `alt` ajuda na acessibilidade (a11y) descrevendo a imagem.
             */}
            {arrow && <img src={WhiteArrow} alt="Seta branca" />}
        </button>
    );
}

// ========================================================================================
// ✅ EXPORTAÇÃO DO COMPONENTE BUTTON
// ========================================================================================

/**
 * ✅ `export default Button`
 * - Permite que outros arquivos importem e usem esse componente.
 * - Exemplo de uso:
 *     import Button from './components/Button/Button';
 *     <Button buttonStyle="primary">Clique aqui</Button>
 */
export default Button;

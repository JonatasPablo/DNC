// ====================================================================================
// ✅ IMPORTAÇÕES DOS MÓDULOS NECESSÁRIOS
// ====================================================================================

/**
 * 🔹 Importa o `Link` do `react-router-dom`:
 * O `Link` permite a **navegação interna entre páginas** sem que o site seja recarregado.
 * Diferente do `<a href="">`, o `Link`:
 * - Não atualiza a página toda.
 * - É instantâneo e mantém o estado da aplicação.
 * - Evita que o navegador faça uma requisição ao servidor.
 */
import { Link } from 'react-router-dom';

/**
 * 🔹 Importa o `useState` do React:
 * O `useState` é um **Hook** nativo do React.
 * Ele permite criar um **estado interno** no componente, para armazenar valores e reagir a mudanças.
 * Aqui, será usado para **controlar a exibição do menu em dispositivos móveis** (aberto ou fechado).
 */
import { useState } from 'react';

/**
 * 🔹 Importa o arquivo de estilos CSS específico para o Header:
 * Aqui ficam as regras de layout, cores, tamanhos e responsividade que afetam **apenas** o Header.
 */
import './Header.css';

/**
 * 🔹 Importa o logotipo da empresa:
 * O arquivo de imagem SVG está na pasta `assets`. 
 * A logo será exibida no canto esquerdo do cabeçalho e servirá como link para a homepage.
 */
import Logo from '../../assets/dnc-logo.svg';

/**
 * 🔹 Importa o componente `Button`:
 * Um componente reutilizável que provavelmente tem estilos e funcionalidades já definidos.
 * É utilizado tanto no menu mobile quanto para o botão de fechar o menu.
 */
import Button from '../Button/Button';


// ====================================================================================
// ✅ DEFINIÇÃO DO COMPONENTE FUNCIONAL HEADER
// ====================================================================================

/**
 * O componente `Header` representa o **cabeçalho do site**.
 * Ele é fixo e geralmente aparece em todas as páginas.
 *
 * Funções principais:
 * - Exibir a logo (identidade visual).
 * - Oferecer navegação entre páginas através de links internos.
 * - Exibir um menu hamburguer no mobile, melhorando a responsividade e UX.
 */
function Header() {

    // ====================================================================================
    // ✅ DECLARAÇÃO DO ESTADO: isOpen
    // ====================================================================================

    /**
     * Cria o estado `isOpen`, que controla se o menu mobile está visível (true) ou não (false).
     * Por padrão, ele começa fechado (`false`).
     */
    const [isOpen, setIsOpen] = useState(false);

    // ====================================================================================
    // ✅ FUNÇÃO PARA ALTERAR O ESTADO: toggleMenu
    // ====================================================================================

    /**
     * Função responsável por alternar o estado do menu.
     * Sempre que o botão "Menu" ou "Fechar" for clicado:
     * - `isOpen` troca de `false` para `true` (ou vice-versa).
     * - O valor é invertido com `!isOpen`.
     *
     * Isso ativa a classe `open` no `<nav>`, exibindo ou escondendo o menu.
     */
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // ====================================================================================
    // ✅ RETORNO DO JSX - ESTRUTURA DO HEADER
    // ====================================================================================

    /**
     * O JSX abaixo descreve a estrutura do cabeçalho da página.
     * Começa com a tag semântica `<header>`, que facilita SEO e acessibilidade.
     */
    return (
        <header>
            {/* ================================================================================= */}
            {/* ✅ CONTAINER DO CONTEÚDO */}
            {/* ================================================================================= */}

            {/**
             * A `div.container` centraliza o conteúdo e define a largura máxima da área útil.
             * É um padrão para manter a identidade visual do site.
             */}
            <div className="container">

                {/* ================================================================================= */}
                {/* ✅ LINHA PRINCIPAL DO HEADER COM FLEXBOX */}
                {/* ================================================================================= */}

                {/**
                 * `d-flex`: Ativa o display: flex no container.
                 * `al-center`: Alinha os itens no centro verticalmente.
                 * `jc-space-between`: Distribui o espaço horizontalmente com espaçamento igual nas extremidades.
                 */}
                <div className="al-center d-flex jc-space-between">

                    {/* ================================================================================= */}
                    {/* ✅ LOGOTIPO COM LINK PARA A HOME */}
                    {/* ================================================================================= */}

                    {/**
                     * O `Link` envia o usuário de volta para a página inicial (`/`).
                     * A logo funciona como ponto de navegação padrão para voltar à home.
                     */}
                    <Link to="/">
                        <img src={Logo} alt="Logo da DNC" />
                        {/**
                         * ✅ Atributo `alt`:
                         * - Importante para acessibilidade (usuários com leitores de tela).
                         * - SEO: indica o conteúdo da imagem.
                         */}
                    </Link>

                    {/* ================================================================================= */}
                    {/* ✅ BOTÃO DE MENU HAMBURGER (MOBILE) */}
                    {/* ================================================================================= */}

                    {/**
                     * O botão aparece apenas em telas pequenas (CSS controla visibilidade).
                     * Ao ser clicado, chama `toggleMenu()` para abrir o menu lateral.
                     */}
                    <div className='mobile-menu'>
                        <Button 
                            buttonStyle='secondary' // Define a aparência (provavelmente cor escura).
                            onClick={toggleMenu}     // Dispara a função ao clicar.
                        >
                            Menu
                        </Button>
                    </div>

                    {/* ================================================================================= */}
                    {/* ✅ MENU DE NAVEGAÇÃO PRINCIPAL */}
                    {/* ================================================================================= */}

                    {/**
                     * A tag `<nav>` agrupa os links de navegação.
                     * A classe `open` será adicionada dinamicamente se `isOpen` for `true`.
                     * O CSS usa `.open` para exibir/ocultar o menu em mobile.
                     */}
                    <nav className={`${isOpen ? 'open' : ''}`}>

                        {/* ========================================================================= */}
                        {/* ✅ BOTÃO DE FECHAR O MENU NO MOBILE */}
                        {/* ========================================================================= */}

                        {/**
                         * Um botão dentro do `<nav>` que serve para fechar o menu.
                         * - buttonStyle='unstyled': sem estilos padrão (customizado para "X").
                         * - className='mobile-menu close-btn': controla a visibilidade e estilo.
                         */}
                        <Button 
                            buttonStyle='unstyled' 
                            className='mobile-menu close-btn' 
                            onClick={toggleMenu}
                        >
                            X
                        </Button>

                        {/* ========================================================================= */}
                        {/* ✅ LISTA DE LINKS DO MENU */}
                        {/* ========================================================================= */}

                        {/**
                         * Lista de itens `<li>`, cada um contendo um `Link` do React Router.
                         * Permite navegar para outras páginas internas:
                         * - Home ("/")
                         * - About ("/about")
                         * - Projects ("/projects")
                         * - Contact ("/contact")
                         */}
                        <ul className='d-flex'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                </div> {/* Fim da `div` com flexbox */}
            </div> {/* Fim da `container` */}
        </header>
    );
}


// ====================================================================================
// ✅ EXPORTAÇÃO DO COMPONENTE HEADER
// ====================================================================================

/**
 * `export default Header` permite que o componente seja usado em outras partes do projeto.
 * Exemplo de uso:
 * import Header from './components/Header/Header';
 */
export default Header;

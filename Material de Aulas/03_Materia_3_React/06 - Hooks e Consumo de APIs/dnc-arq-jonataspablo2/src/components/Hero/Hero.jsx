// ========================================================================================
// ✅ IMPORTAÇÃO DOS MÓDULOS NECESSÁRIOS PARA O COMPONENTE HERO
// ========================================================================================

/**
 * Importa o componente `Link` do `react-router-dom`.
 *
 * 🔹 Para que serve o `Link`?
 * O `Link` cria **navegação interna** (client-side routing) sem recarregar a página.
 * Ele permite que o React Router altere a URL **sem atualizar a página inteira**.
 *
 * 🔹 Vantagem:
 * Faz a navegação ficar **mais rápida** e fluida, sem a página "piscar".
 */
import { Link } from 'react-router-dom';

/**
 * Importa o arquivo de estilos CSS específico para o componente `Hero`.
 *
 * 🔹 Por que fazer isso?
 * O CSS modulariza o estilo, deixando cada componente com seu próprio visual isolado,
 * melhorando a **organização** e a **manutenção** do código.
 */
import './Hero.css';

/**
 * Importa o componente `Button`, que é um componente reutilizável no projeto.
 *
 * 🔹 Por que não usar uma `<button>` diretamente?
 * O componente `Button` provavelmente tem:
 * - Estilos padronizados (cores, tamanhos, animações)
 * - Funcionalidades extras (como ícones e carregamento)
 *
 * Assim, evita-se **duplicação de código** e **garante consistência** em toda a aplicação.
 */
import Button from '../Button/Button';


// ========================================================================================
// ✅ DEFINIÇÃO DO COMPONENTE FUNCIONAL: HERO
// ========================================================================================

/**
 * 🔸 O que é o `Hero`?
 * Um componente React **funcional**, que representa a **Hero Section**.
 * 
 * 🔸 O que é uma Hero Section?
 * É a **primeira área visível de uma página**, geralmente destacando:
 * - A proposta principal do site/app
 * - Um título chamativo (headline)
 * - Um CTA (Call To Action) com um botão, incentivando o usuário a agir.
 */
function Hero() {

    // 🔸 JSX retornado pelo componente → descreve a interface visual.
    return (
        // =================================================================================
        // ✅ CONTAINER PRINCIPAL DA HERO SECTION
        // =================================================================================

        /**
         * 🔹 `className='hero d-flex al-center'`
         * - `hero`: Classe específica para definir a área de Hero no layout.
         * - `d-flex`: Classe utilitária que ativa o `display: flex` para alinhar os elementos.
         * - `al-center`: Provavelmente alinha os itens ao centro no eixo vertical (align-items: center).
         */

        <div className='hero d-flex al-center'>
            
            {/* ============================================================================= */}
            {/* ✅ BLOCO DE TEXTO DENTRO DA HERO SECTION */}
            {/* ============================================================================= */}

            {/**
             * Este bloco envolve o conteúdo textual (título, parágrafo e botão).
             * A classe `hero-text` provavelmente define a largura e espaçamento desse container.
             */}

            <div className='hero-text'>
                
                {/* ================================================================ */}
                {/* ✅ TÍTULO PRINCIPAL */}
                {/* ================================================================ */}

                {/*
                  Um `h1` é o **título mais importante** da página.
                  Aqui, ele comunica **a proposta de valor** do site:
                  - "Let Your Home Be Unique" → Frase de impacto.                 
                  🔹 Importância:
                  - SEO: Ajuda os mecanismos de busca a entenderem o tema da página.
                  - Acessibilidade: Leitores de tela leem como título de prioridade alta.
                 */}

                <h1>Let Your Home Be Unique</h1>

                {/* ================================================================ */}
                {/* ✅ PARÁGRAFO DESCRITIVO */}
                {/* ================================================================ */}

                {/**
                 * O `p` dá mais contexto ou detalhe ao título.
                 * Ajuda a explicar a proposta de forma resumida e simples.
                 */}

                <p>
                    There are many variations of the passages of lorem Ipsum from available, majority.
                </p>

                {/* ================================================================ */}
                {/* ✅ LINK COM BOTÃO DE AÇÃO (CTA) */}
                {/* ================================================================ */}

                {/**
                 * O `Link` cria uma navegação interna para a página de "Get Started".
                 * 🔸 A prop `to="/get-started"` define o destino da navegação.
                 *
                 * Dentro do `Link`, usamos o `Button` para incentivar o usuário a tomar uma ação.
                 * Esse botão é um "Call To Action" (CTA).
                 */}

                <Link to="/get-started">
                    {/* =========================================================== */}
                    {/* ✅ COMPONENTE BUTTON (BOTÃO SECUNDÁRIO COM ÍCONE DE SETA) */}
                    {/* =========================================================== */}

                    {/**
                     * O componente `Button` recebe props para personalização:
                     * - `buttonStyle='secondary'`: Define o estilo do botão (provavelmente cor escura ou neutra).
                     * - `arrow`: Prop booleana que ativa um ícone de seta (provavelmente para indicar avanço).
                     *
                     * O texto `Get Started` é passado como `children`, aparecendo dentro do botão.
                     */}
                     
                    <Button buttonStyle='secondary' arrow>
                        Get Started
                    </Button>
                </Link>
            </div>

        </div> // Fim da div `hero`
    );
}


// ========================================================================================
// ✅ EXPORTAÇÃO DO COMPONENTE HERO
// ========================================================================================

/**
 * 🔸 `export default` permite que o componente `Hero` seja importado em outros arquivos.
 * Exemplo:
 * import Hero from './components/Hero/Hero';
 *
 * 🔸 Por que exportar?
 * Porque o React **monta a interface inteira** com vários componentes.
 * O `Hero` geralmente será usado dentro de uma página `Home`:
 * Exemplo:
 * <Hero />
 */
export default Hero;

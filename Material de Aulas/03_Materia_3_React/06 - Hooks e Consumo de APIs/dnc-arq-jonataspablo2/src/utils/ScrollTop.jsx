// =============================================================
// 🔹 IMPORTAÇÃO DOS HOOKS NECESSÁRIOS 🔹
// =============================================================

/**
 * O `useEffect` e `useLocation` são **hooks** do React e React Router.
 * - Hooks são funções especiais que permitem **adicionar funcionalidades** a componentes funcionais.
 */

import { useEffect } from "react"; // `useEffect` é um hook que executa efeitos colaterais em componentes.
import { useLocation } from "react-router-dom"; // `useLocation` retorna informações sobre a URL atual.

/**
 * 🔹 O QUE SÃO HOOKS?
 * Hooks são funções especiais do React que permitem o uso de recursos como:
 * - Estados (`useState`)
 * - Efeitos (`useEffect`)
 * - Navegação (`useLocation`)
 * 
 * 🔹 POR QUE `useEffect`?
 * - `useEffect` permite executar código **quando algo muda** no componente.
 * - No caso deste componente, ele executa a rolagem para o topo **sempre que a URL mudar**.
 * 
 * 🔹 POR QUE `useLocation`?
 * - `useLocation` obtém **o caminho da URL atual**, ajudando a detectar mudanças de rota.
 */

// =============================================================
// 🔹 DEFINIÇÃO DO COMPONENTE `ScrollToTop` 🔹
// =============================================================

/**
 * O componente `ScrollToTop` tem a função de garantir que, sempre que 
 * o usuário navegar para uma nova página, a rolagem volte ao topo.
 * 
 * Isso evita que uma nova página seja carregada na posição de rolagem
 * anterior, proporcionando uma **experiência de navegação mais fluida**.
 */

const ScrollToTop = () => {
    // 🔹 O `useLocation()` nos dá acesso à URL atual do usuário
    const { pathname } = useLocation(); // Extraímos o `pathname` da URL

    /**
     * 🔹 O `useEffect` monitora mudanças na URL e força a rolagem para o topo.
     * 
     * O que acontece aqui?
     * - Sempre que `pathname` muda (ou seja, o usuário navega para outra página),
     * - O efeito é acionado e a função `window.scrollTo(0, 0)` executa a rolagem.
     */
    useEffect(() => {
        window.scrollTo(0, 0); // Faz a rolagem para o topo da página (coordenadas X = 0, Y = 0)
    }, [pathname]); // 🚀 Sempre que `pathname` mudar, o efeito será reexecutado.

    // 🔹 Como este componente não precisa exibir nada na tela, retornamos `null`.
    return null;
};

// =============================================================
// 🔹 EXPORTAÇÃO DO COMPONENTE 🔹
// =============================================================

/**
 * 🔹 `export default ScrollToTop;`
 * - Isso permite que o componente seja importado e usado em outras partes do projeto.
 * 
 * Como usá-lo?
 * No arquivo principal da aplicação (`App.js` ou `index.js`), adicione:
 * 
 * import ScrollToTop from "./utils/ScrollToTop";
 * 
 * E inclua o componente dentro do `<Router>` para que funcione corretamente:
 * 
 * <Router>
 *   <ScrollToTop />
 *   <Routes> ... </Routes>
 * </Router>
 * 
 * Isso garantirá que a rolagem ao topo funcione em todas as páginas do site.
 */

export default ScrollToTop;

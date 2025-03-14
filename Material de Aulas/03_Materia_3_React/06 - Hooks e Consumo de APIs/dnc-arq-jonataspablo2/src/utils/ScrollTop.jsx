// Importa os hooks `useEffect` e `useLocation` do React e React Router
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente `ScrollToTop`
 *
 * Este componente **força a página a rolar para o topo** sempre que a rota for alterada.
 * 
 * Como funciona:
 * - Ele detecta mudanças na URL usando `useLocation()`.
 * - Sempre que o `pathname` mudar, `window.scrollTo(0,0)` é acionado, movendo a página para o topo.
 *
 * Isso melhora a **experiência do usuário**, garantindo que novas páginas carreguem do topo.
 */
const ScrollToTop = () => {
    // Obtém a propriedade `pathname` da URL atual
    const { pathname } = useLocation();

    // Executa o efeito sempre que o `pathname` mudar
    useEffect(() => {
        window.scrollTo(0, 0); // Faz a rolagem para o topo da página
    }, [pathname]); // Dependência: sempre que `pathname` mudar, o efeito é disparado

    // O componente não precisa renderizar nada
    return null;
};

// Exporta o componente para ser usado em outras partes da aplicação
export default ScrollToTop;

// Importa o arquivo CSS para estilizar o componente Button.
import './Button.css';

// Importa um ícone de seta branca localizado na pasta de assets.
import WhiteArrow from '../../assets/white-arrow.svg';

/**
 * Componente de botão reutilizável.
 *
 * Este componente permite criar botões estilizados, podendo incluir uma seta,
 * diferentes estilos e um estado de carregamento.
 *
 * @param {boolean} arrow - Define se o botão terá um ícone de seta.
 * @param {string} buttonStyle - Classe CSS adicional para estilização do botão.
 * @param {boolean} loading - Indica se o botão está em estado de carregamento (não utilizado diretamente aqui, mas pode ser implementado).
 * @param {ReactNode} children - Conteúdo interno do botão (texto ou outros elementos).
 * @param {object} props - Propriedades adicionais que serão repassadas ao botão.
 */
function Button({ arrow, buttonStyle, loading, children, ...props }) {
    return (
        // Renderiza um botão HTML nativo com classes dinâmicas e propriedades adicionais.
        <button className={`button ${buttonStyle}`} {...props}>
            
            {/* Renderiza o conteúdo do botão (texto ou outros elementos passados via children) */}
            {children}

            {/* Se a propriedade `arrow` for verdadeira, exibe a imagem da seta branca ao lado do conteúdo */}
            {arrow && <img src={WhiteArrow} alt="Seta branca" />}
        </button>
    );
}

// Exporta o componente para ser utilizado em outras partes da aplicação.
export default Button;

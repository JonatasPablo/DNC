// Importa o arquivo de estilos CSS para estilizar o componente Banner.
import './Banner.css';

// Definição do componente funcional `Banner`, que recebe `props` como parâmetro.
function Banner(props) {
    return (
        // Elemento principal do banner, aplicando classes para estilização e alinhamento.
        // O estilo de fundo é definido dinamicamente usando a propriedade `props.image`.
        <div 
            className='banner d-flex al-end' 
            style={{ backgroundImage: `url(/${props.image})` }}
        >
            {/* Contêiner para limitar a largura do conteúdo dentro do banner */}
            <div className='container'>
                
                {/* Painel do título, centralizando o texto dentro do banner */}
                <div className='title-panel d-flex al-center jc-center'>
                    <h1>{props.title}</h1> {/* Renderiza o título recebido via `props` */}
                </div>

            </div>
        </div>
    );
}

// Exporta o componente `Banner` para ser reutilizado em outras partes da aplicação.
export default Banner;

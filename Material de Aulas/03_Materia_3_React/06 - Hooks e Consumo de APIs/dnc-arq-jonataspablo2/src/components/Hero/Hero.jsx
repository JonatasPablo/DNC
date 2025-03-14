// Importa o componente `Link` do `react-router-dom` para criar links internos sem recarregar a página.
import { Link } from 'react-router-dom';

// Importa o arquivo de estilos CSS específico para o componente Hero.
import './Hero.css';

// Importa o componente `Button`, que será usado dentro do `Hero`.
import Button from '../Button/Button';

/**
 * Componente `Hero`
 * 
 * Este componente representa a seção principal da página (hero section), contendo:
 * - Um título (`h1`)
 * - Um texto descritivo (`p`)
 * - Um botão de ação (`Get Started`), dentro de um `Link` para redirecionamento.
 */
function Hero() {
    return (
        // Contêiner principal da hero section, utilizando classes CSS para organização
        <div className='hero d-flex al-center'>
            
            {/* Seção de texto dentro da hero section */}
            <div className='hero-text'>
                
                {/* Título principal da seção */}
                <h1>Let Your Home Be Unique</h1>
                
                {/* Parágrafo com texto descritivo */}
                <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                
                {/* Link que envolve o botão de chamada para ação (CTA) */}
                <Link to="/get-started">
                    <Button buttonStyle='secondary' arrow>
                        Get Started
                    </Button>
                </Link>

            </div>

        </div>
    );
}

// Exporta o componente `Hero` para ser utilizado em outras partes da aplicação.
export default Hero;

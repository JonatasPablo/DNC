// Importa o componente `Link` do `react-router-dom`, permitindo navegação interna sem recarregar a página.
import { Link } from 'react-router-dom';

// Importa o hook `useState` do React para gerenciar o estado do menu mobile.
import { useState } from 'react';

// Importa o arquivo de estilos CSS específico para o Header.
import './Header.css';

// Importa o logotipo da empresa, localizado na pasta `assets`.
import Logo from '../../assets/dnc-logo.svg';

// Importa o componente `Button` para ser utilizado no menu.
import Button from '../Button/Button';

/**
 * Componente `Header`
 * 
 * Este componente representa o cabeçalho do site, contendo:
 * - Logotipo que redireciona para a página inicial.
 * - Menu de navegação com links internos para outras páginas.
 * - Um botão para alternar a exibição do menu em dispositivos móveis.
 */
function Header() {
    // Define o estado `isOpen` para controlar se o menu está aberto ou fechado.
    const [isOpen, setIsOpen] = useState(false);

    // Função que alterna o estado `isOpen`, abrindo ou fechando o menu.
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Elemento semântico `header`, indicando a seção do cabeçalho do site.
        <header>
            {/* Container que mantém o conteúdo centralizado na largura da página */}
            <div className="container">

                {/* Estrutura flexível do cabeçalho, alinhando itens ao centro e distribuindo-os de forma equilibrada */}
                <div className="al-center d-flex jc-space-between">
                    
                    {/* Logotipo: Ao ser clicado, redireciona para a página inicial (`/`) */}
                    <Link to="/">
                        <img src={Logo} alt="Logo da DNC" />
                    </Link>

                    {/* Botão do menu para dispositivos móveis */}
                    <div className='mobile-menu'>
                        <Button buttonStyle='secondary' onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>

                    {/* Menu de navegação principal */}
                    <nav className={`${isOpen ? 'open' : ''}`}>  
                        
                        {/* Botão de fechar o menu (exibido apenas em dispositivos móveis) */}
                        <Button 
                            buttonStyle='unstyled' 
                            className='mobile-menu close-btn' 
                            onClick={toggleMenu}
                        >
                            X
                        </Button>

                        {/* Lista de links de navegação */}
                        <ul className='d-flex'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>                
            </div>
        </header>
    );
}

// Exporta o componente `Header` para ser utilizado em outras partes da aplicação.
export default Header;

// Importa o componente `Link` do `react-router-dom` para criar links internos na aplicação.
import { Link } from 'react-router-dom';

// Importa o arquivo de estilos CSS específico para o `Footer`.
import './Footer.css';

// Importação de ícones e imagens utilizados no rodapé.
import Logo from '../../assets/dnc-logo.svg'; // Logotipo da empresa
import BrasilLogo from '../../assets/brazil-icon.svg'; // Ícone da bandeira do Brasil
import UsaLogo from '../../assets/usa-icon.svg'; // Ícone da bandeira dos EUA
import FacebookIcon from '../../assets/facebook-icon.svg'; // Ícone do Facebook
import InstagramIcon from '../../assets/instagram-icon.svg'; // Ícone do Instagram
import LinkedinIcon from '../../assets/linkedin-icon.svg'; // Ícone do LinkedIn
import TwitterIcon from '../../assets/twitter-icon.svg'; // Ícone do Twitter

// Definição do componente funcional `Footer`, responsável pelo rodapé da aplicação.
export default function Footer() {
    return (
        <footer> {/* Elemento semântico `footer`, indicando a seção de rodapé da página. */}
            <div className="container"> {/* Contêiner para manter a estrutura centralizada. */}
                
                {/* Seção principal do rodapé, com alinhamento flexível e adaptação para dispositivos móveis */}
                <div className="d-flex jc-space-between mobile-fd-column">

                    {/* LOGO, DESCRIÇÃO E REDES SOCIAIS */}
                    <div className='footer-logo-col'>
                        {/* Logotipo da empresa */}
                        <img src={Logo} className='footer-logo' alt="Logo da Escola DNC" />

                        {/* Pequena descrição sobre a escola */}
                        <p className='grey-1-color'>
                            A escola que prepara você para as profissões em alta no mercado de trabalho.
                        </p>

                        {/* Links das redes sociais */}
                        <div className='d-flex social-links'>
                            {/* Facebook */}
                            <a href="#" target='_blank' rel="noopener noreferrer">
                                <img src={FacebookIcon} alt="Facebook" />
                            </a>
                            {/* Twitter */}
                            <a href="#" target='_blank' rel="noopener noreferrer">
                                <img src={TwitterIcon} alt="Twitter" />
                            </a>
                            {/* LinkedIn */}
                            <a href="#" target='_blank' rel="noopener noreferrer">
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </a>
                            {/* Instagram */}
                            <a href="#" target='_blank' rel="noopener noreferrer">
                                <img src={InstagramIcon} alt="Instagram" />
                            </a>
                        </div>
                    </div>

                    {/* LINKS PARA PÁGINAS INTERNAS */}
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>Pages</h3> {/* Título da seção */}
                            <ul>
                                {/* Links para navegação dentro da aplicação */}
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* INFORMAÇÕES DE CONTATO */}
                    <div className='footer-col'>
                        <h3>Contact</h3> {/* Título da seção */}
                        <p className='grey-1-color'>
                            R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030
                        </p>
                        <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                        <p className='grey-1-color'>(19) 99187-4342</p>
                    </div>
                </div>

                {/* COPYRIGHT E SEÇÃO DE IDIOMAS */}
                <div className='d-flex jc-space-between footer-copy'>
                    {/* Texto de direitos autorais */}
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>

                    {/* Ícones de idiomas (Brasil e EUA) */}
                    <div className='langs-area d-flex'>
                        <img src={BrasilLogo} height='29px' alt="Bandeira do Brasil" />
                        <img src={UsaLogo} height='29px' alt="Bandeira dos EUA" />
                    </div>
                </div>           
            </div>
        </footer>
    );
}

// =====================================================================================
// ✅ IMPORTAÇÃO DOS RECURSOS NECESSÁRIOS
// =====================================================================================

/**
 * 🔹 `Link` é importado do `react-router-dom`.
 * Usamos `Link` em vez de `<a>` para navegação interna entre as páginas do site.
 * Benefícios:
 * - Evita recarregar toda a página.
 * - Mantém o estado da aplicação intacto (SPA).
 */

import Button from '../Button/Button';

import { Link } from 'react-router-dom';

// CONTEXT
import { useContext } from 'react';

/**
 * 🔹 Importa o arquivo CSS específico do Footer.
 * Cada componente pode ter seu próprio CSS, seguindo a lógica de **CSS modularizado**.
 * Benefícios:
 * - Facilita manutenção do estilo.
 * - Evita conflitos de CSS entre componentes.
 */
import './Footer.css';

/**
 * 🔹 Importação das imagens (ícones e logos).
 * - Centralizamos imagens em uma pasta `assets` para melhor organização.
 * - Essas imagens são utilizadas para identidade visual (logo) e ícones de redes sociais e idiomas.
 */
import Logo from '../../assets/dnc-logo.svg';             // Logotipo da empresa
import BrasilLogo from '../../assets/brazil-icon.svg';    // Ícone da bandeira do Brasil (idioma português)
import UsaLogo from '../../assets/usa-icon.svg';          // Ícone da bandeira dos EUA (idioma inglês)
import FacebookIcon from '../../assets/facebook-icon.svg';   // Ícone Facebook
import InstagramIcon from '../../assets/instagram-icon.svg'; // Ícone Instagram
import LinkedinIcon from '../../assets/linkedin-icon.svg';   // Ícone LinkedIn
import TwitterIcon from '../../assets/twitter-icon.svg';     // Ícone Twitter


// =====================================================================================
// ✅ COMPONENTE FUNCIONAL FOOTER
// =====================================================================================

/**
 * O componente `Footer` representa o rodapé do site.
 * Ele contém:
 * - Links para as páginas internas.
 * - Informações institucionais e de contato.
 * - Botões de idiomas.
 * - Ícones das redes sociais.
 */

import { AppContext } from '../../contexts/AppContext';

export default function Footer() {
    const appContext = useContext(AppContext);
    const changeLanguage = (country) =>{
        appContext.setLanguage(country);
    }

    return (
    
        <footer>

            <div className="container">

                {/* ============================================================================================
                    ✅ PRIMEIRA SEÇÃO DO FOOTER: ORGANIZAÇÃO PRINCIPAL (Logo, Navegação, Contato)
                ============================================================================================ */}

                {/**
                 * `d-flex`: Exibe os elementos lado a lado (desktop).
                 * `jc-space-between`: Cria espaço igual entre os elementos, alinhando-os nas extremidades.
                 * `mobile-fd-column`: Adapta para colunas no mobile (provavelmente com flex-direction: column).
                 */}
                <div className="d-flex jc-space-between mobile-fd-column">


                    {/* =====================================================================================
                        ✅ COLUNA 1: LOGOTIPO + DESCRIÇÃO + ÍCONES DE REDES SOCIAIS
                    ===================================================================================== */}
                    <div className='footer-logo-col'>

                        {/* LOGOTIPO */}
                        <img 
                            src={Logo} 
                            className='footer-logo' 
                            alt="Logo da Escola DNC" 
                        />
                        <p className='grey-1-color'>
                            {appContext.languages[appContext.language].general.footerLogoText}
                        </p>

                        {/* LINKS DAS REDES SOCIAIS */}
                        <div className='d-flex social-links'>

                            {/* FACEBOOK */}
                            <a 
                                href="#" 
                                target='_blank' 
                                rel="noopener noreferrer" 
                                aria-label="Facebook"
                            >
                                <img src={FacebookIcon} alt="Facebook" />
                            </a>

                            {/* TWITTER */}
                            <a 
                                href="#" 
                                target='_blank' 
                                rel="noopener noreferrer" 
                                aria-label="Twitter"
                            >
                                <img src={TwitterIcon} alt="Twitter" />
                            </a>

                            {/* LINKEDIN */}
                            <a 
                                href="#" 
                                target='_blank' 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn"
                            >
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </a>

                            {/* INSTAGRAM */}
                            <a 
                                href="#" 
                                target='_blank' 
                                rel="noopener noreferrer" 
                                aria-label="Instagram"
                            >
                                <img src={InstagramIcon} alt="Instagram" />
                            </a>

                            {/**
                             * ✅ target='_blank' → Abre o link em uma nova aba.
                             * ✅ rel="noopener noreferrer" → Segurança e performance.
                             * Evita que a página de destino tenha acesso ao objeto `window.opener` da origem.
                             */}
                        </div>
                    </div>


                    {/* =====================================================================================
                        ✅ COLUNA 2: LINKS PARA AS PÁGINAS INTERNAS
                    ===================================================================================== */}
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>

                            {/* TÍTULO DA SEÇÃO */}
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>

                            {/* LISTA DE NAVEGAÇÃO INTERNA */}
                            <ul>
                                {/* Links com `Link` do react-router-dom:
                                    - Navegação interna sem recarregar a página.
                                    - Preserva o estado da aplicação (SPA).
                                */}
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>

                        </div>
                    </div>


                    {/* =====================================================================================
                        ✅ COLUNA 3: INFORMAÇÕES DE CONTATO
                    ===================================================================================== */}
                    <div className='footer-col'>

                        {/* TÍTULO DA SEÇÃO */}
                        <h3>{appContext.languages[appContext.language].general.contact}</h3>

                        {/* ENDEREÇO */}
                        <p className='grey-1-color'>
                            R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030
                        </p>

                        {/* E-MAIL */}
                        <p className='grey-1-color'>
                            suporte@escoladnc.com.br
                        </p>

                        {/* TELEFONE */}
                        <p className='grey-1-color'>
                            (19) 99187-4342
                        </p>

                        {/**
                         * ✅ Informações de contato claras:
                         * - Ajuda o usuário a entrar em contato rapidamente.
                         * - Passa confiança e credibilidade.
                         */}
                    </div>
                </div>


                {/* ============================================================================================
                    ✅ SEGUNDA SEÇÃO DO FOOTER: COPYRIGHT E SELEÇÃO DE IDIOMA
                ============================================================================================ */}
                <div className='d-flex jc-space-between footer-copy'>

                    {/* COPYRIGHT */}
                    <p className='grey-1-color'>
                        Copyright © DNC - 2024
                    </p>

                    {/* IDIOMAS (Bandeiras como ícones de troca de idioma) */}
                    <div className='langs-area d-flex'>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('br')}>
                            <img src={BrasilLogo} height='29px' alt="Bandeira do Brasil" />
                        </Button>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('en')}>
                            <img src={UsaLogo} height='29px' alt="Bandeira do EUA" />
                        </Button>
                    </div>

                    {/**
                     * ✅ Melhoria sugerida:
                     * - Tornar essas bandeiras clicáveis para trocar o idioma do site.
                     */}
                </div>
            </div>
        </footer>
    );
}

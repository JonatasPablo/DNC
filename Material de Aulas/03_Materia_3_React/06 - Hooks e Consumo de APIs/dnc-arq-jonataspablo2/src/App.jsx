// ===========================================================
// 🔹 IMPORTAÇÃO DOS MÓDULOS NECESSÁRIOS 🔹
// ===========================================================

/**
 * O `react-router-dom` é uma biblioteca que permite **navegação entre páginas** 
 * em aplicações React **sem recarregar a página** (Single Page Application - SPA).
 * 
 * 🔹 O QUE CADA MÓDULO FAZ?
 * - `BrowserRouter` (`Router`) → Define o ambiente de navegação.
 * - `Routes` → Agrupa todas as rotas do aplicativo.
 * - `Route` → Define uma rota específica e o componente que será renderizado.
 * - `Link` → Permite a navegação entre páginas sem recarregar a página.
 */

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// ===========================================================
// 🔹 IMPORTAÇÃO DAS PÁGINAS DA APLICAÇÃO 🔹
// ===========================================================

/**
 * Cada uma dessas importações representa uma **página** do site.
 * - O React renderiza a página correspondente de acordo com a URL acessada.
 */

import Home from './pages/Home';        // Página inicial
import About from './pages/About';      // Página "Sobre Nós"
import Contact from './pages/Contact';  // Página "Contato"
import Projects from './pages/Projects'; // Página "Projetos"

// ===========================================================
// 🔹 IMPORTAÇÃO DE UTILITÁRIOS 🔹
// ===========================================================

/**
 * `ScrollToTop` é um **componente utilitário** que força a página a 
 * rolar para o topo sempre que uma nova página for acessada.
 */

import ScrollToTop from '../src/utils/ScrollTop';

// ===========================================================
// 🔹 DEFINIÇÃO DO COMPONENTE PRINCIPAL: `App` 🔹
// ===========================================================

/**
 * O componente `App` é o **ponto de entrada da aplicação**.
 * Ele configura todas as **rotas** da aplicação usando `react-router-dom`.
 * 
 * 🔹 O QUE ACONTECE AQUI?
 * 1️⃣ Criamos um `<Router>` para gerenciar a navegação.
 * 2️⃣ Usamos `<ScrollToTop />` para garantir que cada nova página comece do topo.
 * 3️⃣ Definimos todas as páginas usando `<Routes>` e `<Route>`.
 * 4️⃣ Cada `<Route>` define um **caminho (`path`)** e o **componente a ser renderizado**.
 */

function App() {
  return (
    // 🔹 Define o ambiente de navegação
    <Router>
      {/* 🔹 Componente que garante que cada nova página carregue do topo */}
      <ScrollToTop />

      {/* 🔹 Definição das rotas da aplicação */}
      <Routes>

        {/* 🔹 Página inicial */}
        <Route path="/" element={<><Home/></>}></Route>

        {/* 🔹 Página "About" (Sobre Nós) */}
        <Route path="/about" element={
          <>
            <About />
            {/* 🔹 Link para voltar à página inicial */}
            <Link to="/">Navegar</Link> 
          </>
        }></Route>

        {/* 🔹 Página "Projects" (Projetos) */}
        <Route path="/projects" element={
          <>
            <Projects />
            {/* 🔹 Link para voltar à página inicial */}
            <Link to="/">Navegar</Link> 
          </>
        }></Route>

        {/* 🔹 Página "Contact" (Contato) */}
        <Route path="/contact" element={
          <>
            <Contact />
            {/* 🔹 Link para voltar à página inicial */}
            <Link to="/">Navegar</Link> 
          </>
        }></Route>

      </Routes>
    </Router>
  );
}

// ===========================================================
// 🔹 EXPORTAÇÃO DO COMPONENTE `App` 🔹
// ===========================================================

/**
 * O comando `export default` permite que o `App` seja usado em outros arquivos do projeto.
 * 
 * Ele será importado e usado no **ponto de entrada da aplicação**, geralmente `main.jsx` ou `index.js`:
 * 
 * ```javascript
 * import App from './App';
 * ```
 */

export default App;


import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';        // Página inicial
import About from './pages/About';      // Página "Sobre Nós"
import Contact from './pages/Contact';  // Página "Contato"
import Projects from './pages/Projects'; // Página "Projetos"

import ScrollToTop from '../src/utils/ScrollTop';
import { AppContext } from './contexts/AppContext';

function App() {
  const appContext = useContext(AppContext)

    if (appContext.loading){
      return 'Loading...'
    }

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

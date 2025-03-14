// Importa os módulos do React Router para navegação entre páginas
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importação das páginas da aplicação
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

// Importação de utilitários
import ScrollToTop from '../src/utils/ScrollTop';

/**
 * Componente `App`
 *
 * Este componente é responsável pela **configuração das rotas** da aplicação.
 * Ele utiliza:
 * - `Router`: Define o ambiente de roteamento do React Router.
 * - `Routes`: Agrupa todas as rotas da aplicação.
 * - `Route`: Define cada página e seu respectivo caminho (`path`).
 * - `ScrollToTop`: Força a rolagem para o topo sempre que uma página for alterada.
 */
function App() {
  return (
    // Define o ambiente de roteamento
    <Router>
      {/* Utilitário que rola para o topo sempre que a rota muda */}
      <ScrollToTop />

      {/* Define todas as rotas da aplicação */}
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<><Home/></>}></Route>

        {/* Página "About" (Sobre Nós) */}
        <Route path="/about" element={
          <>
            <About />
            <Link to="/">Navegar</Link> 
          </>
        }>
        </Route>

        {/* Página "Projects" (Projetos) */}
        <Route path="/projects" element={
          <>
            <Projects />
            <Link to="/">Navegar</Link> 
          </>
        }>
        </Route>

        {/* Página "Contact" (Contato) */}
        <Route path="/contact" element={
          <>
            <Contact />
            <Link to="/">Navegar</Link> 
          </>
        }>
        </Route>
      </Routes>
    </Router>
  );
}

// Exporta o componente `App` para ser utilizado na aplicação
export default App;

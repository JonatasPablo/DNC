// Importa o StrictMode do React, que ajuda a identificar problemas no código durante o desenvolvimento
import { StrictMode } from 'react';

// Importa a função `createRoot` do ReactDOM para renderizar a aplicação corretamente
import { createRoot } from 'react-dom/client';

// Importa o arquivo de estilos globais do projeto
import './main.css';

// Importa o componente principal `App`, que contém toda a estrutura da aplicação
import App from './App.jsx';

/**
 * Ponto de entrada da aplicação React.
 * Aqui, criamos a raiz do React e renderizamos o componente `App`.
 * 
 * - `document.getElementById('root')`: Obtém o elemento HTML onde o React será montado.
 * - `createRoot(...)`: Cria a raiz do React para renderização eficiente.
 * - `<StrictMode>`: Ativa verificações extras no modo de desenvolvimento.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

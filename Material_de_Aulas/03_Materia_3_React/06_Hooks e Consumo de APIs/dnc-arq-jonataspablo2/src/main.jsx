// ===========================================
// 🔹 IMPORTAÇÃO DE MÓDULOS NECESSÁRIOS 🔹
// ===========================================

/**
 * O comando `import` permite trazer funcionalidades externas para o código atual.
 * Aqui, estamos importando módulos essenciais para inicializar a aplicação React.
 */

// 🔹 Importa o `StrictMode`, que ajuda a identificar problemas no código durante o desenvolvimento
import { StrictMode } from 'react';

/**
 * 🔹 O QUE É O `StrictMode`?
 * - Ele **não afeta** a aplicação em produção.
 * - Ajuda a detectar **erros comuns** no código.
 * - Mostra **alertas de práticas obsoletas**.
 * - Faz **verificações extras** no código para garantir boas práticas.
 */

// 🔹 Importa `createRoot`, responsável por renderizar o React no DOM da página
import { createRoot } from 'react-dom/client';

/**
 * 🔹 O QUE `createRoot` FAZ?
 * - Cria uma **raiz do React** para renderizar componentes.
 * - É uma **versão otimizada** do `ReactDOM.render()` (que era usado em versões antigas do React).
 */

// 🔹 Importa o arquivo de estilos globais do projeto
import './main.css';

/**
 * 🔹 PARA QUE SERVE `main.css`?
 * - Contém os **estilos globais** da aplicação.
 * - Garante um **design padronizado** para todos os componentes.
 * - É carregado automaticamente pelo React.
 */

// 🔹 Importa o componente principal `App`, que contém toda a estrutura da aplicação
import App from './App.jsx';

/**
 * 🔹 O QUE É O `App.jsx`?
 * - É o **componente raiz** da aplicação.
 * - Contém **todas as rotas e componentes principais**.
 * - Serve como **ponto central** do React para exibir o site.
 */

// ==========================================================
// 🔹 PONTO DE ENTRADA DA APLICAÇÃO REACT 🔹
// ==========================================================

/**
 * Aqui, criamos a raiz do React e renderizamos o componente `App`.
 * 
 * 🔹 O QUE ACONTECE AQUI?
 * 1️⃣ `document.getElementById('root')` → Obtém a **div principal** onde o React será montado.
 * 2️⃣ `createRoot(...)` → Cria a **raiz do React**.
 * 3️⃣ `.render(<StrictMode> <App /> </StrictMode>)` → Renderiza a aplicação dentro do StrictMode.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* 🔹 Ativa verificações extras no desenvolvimento */}
    <App /> {/* 🔹 Renderiza o componente principal `App` dentro da div `#root` */}
  </StrictMode>,
);

/**
 * 🔹 O QUE É `document.getElementById('root')`?
 * - No HTML do projeto, existe uma **div com ID "root"** onde o React será montado:
 *   ```html
 *   <div id="root"></div>
 *   ```
 * - O React insere **toda a interface do usuário** dentro desta div.
 * - Sem isso, o React **não poderia manipular a página**.
 */

/**
 * 🔹 O QUE O `render()` FAZ?
 * - Ele pega o componente `<App />` e **o exibe dentro do HTML**.
 * - Como o React é baseado em **componentes**, ele renderiza **apenas o que foi alterado**,
 *   tornando a aplicação muito mais eficiente.
 */

// ==========================================================
// 🔹 RESUMO 🔹
// ==========================================================

/**
 * ✅ O React é montado dentro da `div#root` do HTML.
 * ✅ `createRoot` cria a **raiz do React** e gerencia a renderização.
 * ✅ `StrictMode` ativa **verificações extras** para encontrar erros no desenvolvimento.
 * ✅ O **`App.jsx`** é o componente principal da aplicação, onde tudo é organizado.
 * ✅ O **`main.css`** contém os estilos globais.
 */


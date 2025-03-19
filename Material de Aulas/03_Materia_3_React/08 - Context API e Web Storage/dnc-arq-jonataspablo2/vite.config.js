// ========================================================================================
// ✅ IMPORTAÇÕES NECESSÁRIAS PARA CONFIGURAR O VITE
// ========================================================================================

/**
 * O comando `import` é a forma moderna de importar módulos em JavaScript (ESModules).
 * 
 * ✅ O que estamos importando aqui?
 * 
 * 1️⃣ `defineConfig`: Função utilitária do próprio Vite.
 *    - Ajuda o editor (exemplo: VSCode) com **autocompletar** e **tipagem**.
 *    - Também organiza melhor o código de configuração.
 *    - Não é obrigatório, mas é recomendado (boa prática).
 * 
 * 2️⃣ `react`: É o plugin oficial do Vite que dá suporte a projetos React.
 *    - Permite que o Vite entenda JSX/TSX, faça transformações de código e ative recursos extras.
 *    - Sem isso, o Vite não saberia lidar com arquivos React (`.jsx` ou `.tsx`).
 */
import { defineConfig } from 'vite';      // Função que ajuda na tipagem da configuração
import react from '@vitejs/plugin-react'; // Plugin oficial para integrar React ao Vite


// ========================================================================================
// ✅ EXPORTAÇÃO DA CONFIGURAÇÃO PADRÃO DO VITE
// ========================================================================================

/**
 * ➡️ Aqui estamos exportando a configuração principal do Vite.
 * 
 * ✅ O `defineConfig()`:
 *    - Facilita a tipagem e oferece IntelliSense (auto-complete) ao configurar.
 *    - Recebe um objeto `{}` com todas as opções de configuração.
 * 
 * ✅ Plugins:
 *    - O array `plugins: [react()]` ativa o plugin React no projeto.
 *    - Com isso, o Vite vai:
 *        1️⃣ Processar JSX e TSX.
 *        2️⃣ Ativar Fast Refresh (atualizações rápidas sem perder o estado).
 *        3️⃣ Habilitar otimizações específicas para projetos React.
 */

export default defineConfig({
  
  // ======================================================================================
  // ✅ PLUGINS ATIVOS NO PROJETO
  // ======================================================================================

  /**
   * ➡️ A chave `plugins` é um array onde adicionamos plugins que estendem as funcionalidades do Vite.
   * 
   * ✅ O `react()`:
   *   - É uma função que retorna o plugin configurado.
   *   - Podemos passar opções dentro de `react({ ...options })` se quisermos configurar algo específico.
   *   - Exemplo:
   *     react({
   *       jsxRuntime: 'classic',
   *       babel: {
   *         plugins: [...]
   *       }
   *     })
   */
  plugins: [react()]

  // ======================================================================================
  // ✅ OUTRAS CONFIGURAÇÕES POSSÍVEIS (Exemplos para conhecimento)
  // ======================================================================================
  
  /**
   * Aqui são algumas opções que você poderia incluir futuramente:
   * 
   * ➡️ server: {
   *      port: 3000,           // Porta onde o servidor de dev irá rodar
   *      open: true            // Abre automaticamente o navegador ao iniciar
   *    }
   * 
   * ➡️ build: {
   *      outDir: 'dist',       // Pasta onde o build final será gerado
   *      minify: 'terser'      // Minimização avançada para produção
   *    }
   * 
   * ➡️ resolve: {
   *      alias: {
   *          '@components': '/src/components' // Atalhos de caminho
   *      }
   *    }
   * 
   * ➡️ css: {
   *      preprocessorOptions: {
   *        scss: {
   *          additionalData: `@import "src/styles/global.scss";`
   *        }
   *      }
   *    }
   */
});

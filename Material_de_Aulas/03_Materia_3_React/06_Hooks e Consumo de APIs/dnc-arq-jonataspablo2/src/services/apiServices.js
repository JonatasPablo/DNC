// =========================================================
// 🔹 FUNÇÃO ASSÍNCRONA PARA BUSCAR DADOS DA API 🔹
// =========================================================

/**
 * Esta função chama uma API externa de forma assíncrona.
 * Ela é usada para buscar dados a partir de um `endpoint` específico.
 *
 * - `endpoint`: Indica o recurso que você deseja acessar (exemplo: "projects").
 * - `params`: Parâmetros adicionais que poderiam ser enviados na requisição (opcional neste exemplo).
 *
 * A função retorna os dados em formato JSON, que é o tipo de dado mais comum em APIs REST.
 */

// ✅ Exportamos a função com `export const` para poder utilizá-la em outros arquivos do projeto.
export const getApiData = async (endpoint, params) => {
    // =========================================================
    // 🔸 BLOCO TRY/CATCH PARA TRATAR ERROS 🔸
    // =========================================================
    /**
     * O `try` tenta executar o código normalmente.
     * Se acontecer algum erro (exemplo: conexão perdida), o `catch` captura e trata esse erro.
     */
    try {

        // =========================================================
        // 🔹 CRIAÇÃO DA URL DA API 🔹
        // =========================================================
        /**
         * A URL é o endereço de onde os dados serão buscados.
         * Estamos concatenando o `endpoint` para acessar diferentes recursos.
         * Exemplo de URL gerada: https://dnc-react-api.vercel.app/files/projects
         */
        const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);

        // =========================================================
        // 🔹 ENVIO DA REQUISIÇÃO PARA A API 🔹
        // =========================================================
        /**
         * A função `fetch()` é nativa do JavaScript e faz a comunicação com a API.
         * - Primeiro argumento: a URL do recurso.
         * - Segundo argumento: um objeto de configuração para definir o método da requisição.
         * Neste caso, estamos fazendo uma requisição do tipo `GET` para obter informações.
         */
        const response = await fetch(url, {
            method: 'GET' // Informa que é uma requisição GET, utilizada para obter dados (não enviar).
        });

        // =========================================================
        // 🔹 VERIFICA SE A REQUISIÇÃO FOI BEM-SUCEDIDA 🔹
        // =========================================================
        /**
         * O `response.ok` retorna `true` se o status da resposta estiver no intervalo 200-299.
         * Se não estiver, significa que ocorreu um erro (exemplo: 404 Not Found ou 500 Internal Server Error).
         */
        if (!response.ok) {
            // Exibe um erro no console informando o status da falha.
            console.error(`Error: ${response.status}`);
            // ⚠️ Aqui poderia ser lançado um erro para interromper a execução caso necessário:
            // throw new Error(`HTTP error! status: ${response.status}`);
        }

        // =========================================================
        // 🔹 CONVERSÃO DOS DADOS PARA JSON 🔹
        // =========================================================
        /**
         * A resposta da API geralmente vem em formato JSON.
         * Precisamos converter o `response` para JSON usando `.json()`.
         * O resultado é um objeto JavaScript que podemos manipular.
         */
        const data = await response.json();

        // =========================================================
        // 🔹 RETORNO DOS DADOS 🔹
        // =========================================================
        /**
         * Retornamos o `data` para quem chamou esta função.
         * Quem chamou a função pode então manipular esses dados (exibir na tela, por exemplo).
         */
        return data;

    } catch (e) {
        // =========================================================
        // 🔹 TRATAMENTO DE ERROS 🔹
        // =========================================================
        /**
         * O bloco `catch` é acionado quando acontece um erro dentro do `try`.
         * Exemplos de erros que podem ocorrer:
         * - Falta de conexão com a internet.
         * - URL inválida.
         * - Problemas de CORS (Cross-Origin Resource Sharing).
         * 
         * Neste caso, estamos apenas exibindo o erro no console.
         * Em um projeto real, você poderia:
         * - Exibir uma mensagem de erro amigável para o usuário.
         * - Tentar refazer a requisição automaticamente.
         */
        console.error('Catch error: ', e);
    }
};

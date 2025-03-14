// Função assíncrona para buscar dados da API.
// `endpoint` define qual recurso será acessado na API.
// `params` pode ser usado para adicionar parâmetros opcionais à requisição.
export const getApiData = async (endpoint, params) => {
    try {
        // Criação da URL base da API, concatenando o `endpoint` para acessar o recurso específico.
        const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);

        // Envia uma requisição `GET` para a URL da API.
        const response = await fetch(url, {
            method: 'GET' // Especifica que a requisição será do tipo GET.
        });

        // Verifica se a resposta da API foi bem-sucedida.
        if (!response.ok) {
            // Caso o status da resposta não esteja entre 200-299, exibe um erro no console.
            console.error(`Error: ${response.status}`);
        }

        // Converte a resposta da API para JSON e armazena os dados.
        const data = await response.json();

        // Retorna os dados obtidos da API.
        return data;

    } catch (e) {
        // Captura erros que possam ocorrer na requisição e os exibe no console.
        console.error('Catch error: ', e);
    }
};

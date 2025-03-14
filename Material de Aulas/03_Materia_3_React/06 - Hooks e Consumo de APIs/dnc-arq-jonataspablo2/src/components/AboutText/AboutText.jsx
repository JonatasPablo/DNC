// Importa o arquivo de estilos CSS para estilizar o componente.
import './AboutText.css';

// Definição do componente funcional `AboutText`.
function AboutText() {
    return (
        // Contêiner principal do componente, utilizando a classe `container` para estilização.
        <div className='container'>

            {/* Seção de texto, utilizando a classe `text-section` e `d-flex` para organização e alinhamento. */}
            <div className='text-section d-flex'>

                {/* Bloco de texto com título principal */}
                <div className='text-section-text'>
                    <h2>We set the trends of modern living Services.</h2>
                </div>

                {/* Bloco de texto com parágrafos descritivos */}
                <div className='text-section-text'>
                    {/* Parágrafo destacado com cor primária (classe `primary-color`) */}
                    <p className='primary-color'>
                        It is a long established fact that a reader will be distracted by the of readable content of a page
                    </p>

                    {/* Parágrafo com texto adicional (parece ter alguns erros de digitação) */}
                    <p>
                        when lookings at its layouts the points spriof using that it has a more
                        less normal. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                    </p>

                    {/* Parágrafo repetido do anterior */}
                    <p>
                        when lookings at its layouts the points spriof using that it has a more
                        less normal. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Exporta o componente `AboutText` para ser utilizado em outras partes da aplicação.
export default AboutText;

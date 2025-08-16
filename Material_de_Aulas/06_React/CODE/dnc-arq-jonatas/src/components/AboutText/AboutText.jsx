import './AboutText.css'

function AboutText() {
    return (
        <div className="container">
            <div className="text-section d-flex">
                <div className="text-section-text">
                    <h2>ABC Ser</h2>
                </div>            
                <div className="text-section-text">
                    <p className='primary-color'>Primeira Linha</p>
                    <p>Segunda Linha</p>
                    <p>Terceira Linha</p>
                </div>
            </div>
        </div>
    )
}

export default AboutText

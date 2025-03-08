// ASSETS
import './Button.css'

export default function Button({arrow, buttonStyle, loading, children, ...props}) {
    return(
        <header>
            <button className={`button ${buttonStyle}`}>
                {children}
            </button>
        </header>
    )
}


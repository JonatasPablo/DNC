import { createContext, useState, useContext, useEffect } from "react"
import type { ReactNode } from "react"

interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const temaSalvo = localStorage.getItem('theme')
        return (temaSalvo === 'light' || temaSalvo === 'dark') ? temaSalvo : 'light'
    })

    const toggleTheme = () =>{
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error("useTheme deve ser utilizado com um <themeProvider>")
    }
    return context
}
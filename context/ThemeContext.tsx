import { createContext, useEffect, useState } from "react";

type Colors = {
    color01: string;
    color02: string;
    color03: string;
    color04: string;
    text: string;
}

export type ThemeContextType = {
    theme:string;
    colors:Colors;
    updateTheme:(newTheme:string)=>void;  
}

const ThemeContext = createContext<null|ThemeContextType>(null)

export const ThemeContextProvider = ({children}:any) => {

    const [theme, setTheme] = useState<string>('dark')

    const [colors, setColors] = useState<Colors>({
        color01: ``,
        color02: ``,
        color03: ``,
        color04: ``,
        text: ``,
    })

    useEffect(() => {

        setColors({
            color01: theme==='dark' ? `slate-700` : `slate-100`,
            color02: theme==='dark' ? `slate-800` : `slate-200`,
            color03: theme==='dark' ? `slate-900` : `slate-300`,
            color04: theme==='dark' ? `slate-950` : `slate-400`,
            text: theme==='dark' ? `white` : `black`,
        })

    }, [theme])

    const updateTheme = (newTheme:string):void => {

        // Validate Theme
        const validThemes:string[] = [
            'dark', 
            'light'
        ]

        if (!validThemes.includes(newTheme)) return;

        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, colors, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
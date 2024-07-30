import { createContext, useState } from "react"

export type LangContextType = {
    lang:string|null;
    updateLang:(newTheme:string)=>void;
}

const LangContext = createContext<LangContextType|null>(null)

export const LangContextProvider = ({children}:any) => {

    const [lang, setLang] = useState<string|null>('pt')

    const updateLang = (newLang:string) => {
        setLang(newLang)
    }

    return (
        <LangContext.Provider value={
                {
                    lang,
                    updateLang,
                }
            }>

            {children}

        </LangContext.Provider>
    )
}

export default LangContext
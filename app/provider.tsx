'use client'

import { LangContextProvider } from "@/context/LangContext"

export function Providers({children}:{children:React.ReactNode}) {
    return (
        <LangContextProvider>
            {children}
        </LangContextProvider>
    )
}
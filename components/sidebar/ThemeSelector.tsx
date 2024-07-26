'use client'

import { useEffect, useState } from "react";

export default function ThemeSelector() {

    const [mounted, setMounted] = useState<boolean>(false)
    const [currentTheme, setCurrentTheme] = useState<string|null>('slateLight')

    useEffect(() => {
        setMounted(true)
    }, [])

    const updateTheme = (e:any):void => {
        e.preventDefault()
        //console.log('chamou')

        const selectedTheme = e.target.id
        //console.log('selectedTheme: ', e.target)
        if (!selectedTheme) return;

        const ROOT  = document.querySelector("#root")
        if (!ROOT) return;

        // Remove all others themes
        const possibleThemes:string[] = [
            'slateDark',
            'slateLight',

            'limeDark',
            'limeLight',

            'amberDark',
            'amberLight',

            'roseDark',
            'roseLight',

            'skyDark',
            'skyLight',

            'neutralDark',
            'neutralLight',
        ]

        possibleThemes.map((possibleTheme:string) => {
            Object.values(ROOT.classList).map((currentTheme:string) => {
                if (possibleTheme === currentTheme) {
                    ROOT.classList.remove(currentTheme)
                }
            })
        })

        setCurrentTheme(selectedTheme)
        ROOT.classList.add(selectedTheme) 
    }

    if (!mounted) return;

    return (
        <div className="flex flex-col gap-2">
            <button onClick={(e) => updateTheme(e)} id="slateDark">slateDark</button>
            <button onClick={(e) => updateTheme(e)} id="slateLight">slateLight</button>

            <button onClick={(e) => updateTheme(e)} id="limeDark">limeDark</button>
            <button onClick={(e) => updateTheme(e)} id="limeLight">limeLight</button>

            <button onClick={(e) => updateTheme(e)} id="amberDark">amberDark</button>
            <button onClick={(e) => updateTheme(e)} id="amberLight">amberLight</button>

            <button onClick={(e) => updateTheme(e)} id="roseDark">roseDark</button>
            <button onClick={(e) => updateTheme(e)} id="roseLight">roseLight</button>

            <button onClick={(e) => updateTheme(e)} id="skyDark">skyDark</button>
            <button onClick={(e) => updateTheme(e)} id="skyLight">skyLight</button>

            <button onClick={(e) => updateTheme(e)} id="neutralDark">neutralDark</button>
            <button onClick={(e) => updateTheme(e)} id="neutralLight">neutralLight</button>
        </div>
    )
}
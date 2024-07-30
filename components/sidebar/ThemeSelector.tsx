'use client'

import { useEffect, useState } from "react";

const darkColors:string[] = [
    'neutralDark',
    'slateDark',
    'skyDark',
    'amberDark',
    'roseDark',
    'limeDark',
]

const lightColors:string[] = [
    'neutralLight',
    'slateLight',
    'skyLight',
    'amberLight',
    'roseLight',
    'limeLight',
]

export default function ThemeSelector() {

    const [mounted, setMounted] = useState<boolean>(false)
    const [currentTheme, setCurrentTheme] = useState<string|null>('')

    useEffect(() => {

        if (!currentTheme || !currentTheme.length) return;

        const ROOT  = document.querySelector("#root")
        if (!ROOT) return;

        // Remove all others themes
        [...darkColors, ...lightColors].map((color:string) => {
            Object.values(ROOT.classList).map((currentTheme:string) => {
                if (color === currentTheme) {
                    ROOT.classList.remove(currentTheme)
                }
            })
        })

        // Insert new theme 
        ROOT.classList.add(currentTheme)
        
        // Save new theme on local storage
        localStorage.setItem('theme', currentTheme)

    }, [currentTheme])

    useEffect(() => {
        setMounted(true)
        
        // Get theme from local storage
        const localStorageTheme = localStorage.getItem('theme')

        if (localStorageTheme) {
            setCurrentTheme(localStorageTheme)
        } else {
            // Default theme
            setCurrentTheme('slateLight')
        }

    }, [])

    const updateTheme = (e:any):void => {
        e.preventDefault()
        //console.log('chamou')

        const selectedTheme = e.target.id
        //console.log('selectedTheme: ', e.target)
        if (!selectedTheme) return;

        setCurrentTheme(selectedTheme)
    }

    if (!mounted) return;

    return (
        <div className="flex flex-col gap-3">
            
            <div className="flex gap-1">
                {darkColors.map((color:string, index:number) => (
                    <button key={index} onClick={(e) => updateTheme(e)}>
                        <span className={`h-6 w-6 block shadow-lg rounded-full ${color}02 hover:opacity-70 duration-300`} id={color} title={color}/>
                    </button>
                ))}
            </div>
            
            <div className="flex gap-1">
                {lightColors.map((color:string, index:number) => (
                    <button key={index} onClick={(e) => updateTheme(e)}>
                        <span className={`h-6 w-6 block shadow-lg rounded-full ${color}02 hover:opacity-70 duration-300`} id={color} title={color}/>
                    </button>
                ))}
            </div>

        </div>
    )
}
'use client'

import { useEffect, useRef, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";

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

type Props = {
    content: any
}

export default function ThemeSelector({content}:Props) {

    const [mounted, setMounted] = useState<boolean>(false)
    const [currentTheme, setCurrentTheme] = useState<string|null>('')

    const themeSelectorRef:any = useRef()

    const toggleThemeSelector = ():void => {
        themeSelectorRef.current.classList.toggle('hidden')
     }

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
            setCurrentTheme('skyLight')
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

    if (!mounted) {
        return (
            <div className="w-1/3 bg-color01 rounded-lg"/>
        );
    }

    return (
        <div className="shadow-lg rounded-lg bg-color01 p-3 w-1/3 flex flex-col items-center justify-center">
            
            <button className="rounded-lg shadow-lg p-2 bg-color03 duration-200 hover:bg-color04" onClick={toggleThemeSelector}>
                <IoColorPaletteOutline size={30}/>
            </button>

            <div className="relative self-start">
                <div className="absolute w-fit top-0 left-0 flex flex-col gap-3 bg-color04 p-3 rounded-lg shadow-lg mt-1 animate-fade-right animate-duration-200 hidden" ref={themeSelectorRef}>
                    <p className="font-bold text-sm">
                        {content}
                    </p>
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
                </div>
            </div>
        </div>
    )
}
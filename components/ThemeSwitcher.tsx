'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const updateTheme = (e:any):void => {
        e.preventDefault()
        console.log('chamou')

        const selectedTheme = e.target.id
        if (!selectedTheme) return;

        const ROOT  = document.querySelector("#root")
        if (!ROOT) return;

        // Remove all others themes
        const possibleThemes:string[] = [
            'slateDark',
            'slateLight'
        ]

        possibleThemes.map((possibleTheme:string) => {
            Object.values(ROOT.classList).map((currentTheme:string) => {
                if (possibleTheme === currentTheme) {
                    ROOT.classList.remove(currentTheme)
                }
            })
        })

        ROOT.classList.add(selectedTheme)
    }

    if (!mounted) return;

    return (
        <div>
            <button onClick={(e) => updateTheme(e)} id="slateDark" className="border-2 border-red-500">Dark Mode</button>
            <button onClick={(e) => updateTheme(e)} id="slateLight" className="border-2 border-red-500">Light Mode</button>
        </div>
    )
}
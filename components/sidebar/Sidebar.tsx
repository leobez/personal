'use client'

import { useEffect, useRef, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import ThemeSelector from "./ThemeSelector";
import { IoColorPaletteOutline } from "react-icons/io5";
import Summary from "./Summary";

export default function Sidebar() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeSelectorRef:any = useRef()

    const toggleThemeSelector = ():void => {
        themeSelectorRef.current.classList.toggle('hidden')
     }

    /* TODO: ADD GHOST COMPONENT FOR CLS */
    if (!mounted) return;

    return (
        <div className="flex flex-col gap-3 bg-color02 p-5 rounded-lg animate-fade-left animate-duration-300">
            
            <div className="flex gap-3 w-full">

                {/* THEME SELECTOR */}
                <div className="shadow-lg rounded-lg bg-color01 p-5 w-1/3">

                    <button className="rounded-xl p-2 border-2 border-color04 bg-color04 hover:opacity-60 duration-300" onClick={toggleThemeSelector}>
                        <IoColorPaletteOutline size={30}/>
                    </button>

                    <div className="absolute flex flex-col gap-5 bg-color03 p-5 rounded-lg shadow-lg mt-1 animate-fade-right animate-duration-200 border-2 border-color04 hidden" ref={themeSelectorRef}>
                        <p className="font-bold text-md">
                            Select a color theme
                        </p>
                        <ThemeSelector/>
                    </div>

                </div>

                {/* LANG SELECTOR */}
                <div className="shadow-lg rounded-lg bg-color01 p-5 w-2/3 grid place-items-center">
                    <LangSwitcher/>
                </div>

            </div>
            
            <div>
                <Summary/>
            </div>

            {/* SUMMARY */}
        </div>
    )
}
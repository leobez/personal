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


    if (!mounted) return;
  

    return (
        <div className="flex flex-col gap-3 bg-color02 p-5 rounded-lg h-full">
            
            <div className="flex gap-3 w-full">

                {/* THEME SELECTOR */}
                <div className="shadow-lg rounded-lg bg-color01 p-3 w-1/3 flex flex-col items-center justify-center">

                    <button className="rounded-lg shadow-lg p-2 bg-color03 duration-200 hover:bg-color04" onClick={toggleThemeSelector}>
                        <IoColorPaletteOutline size={30}/>
                    </button>

                    <div className="relative self-start">
                        <div className="absolute w-fit top-0 left-0 flex flex-col gap-5 bg-color04 p-5 rounded-lg shadow-lg mt-1 animate-fade-right animate-duration-200 hidden" ref={themeSelectorRef}>
                            <p className="font-bold text-sm">
                                Select a color theme
                            </p>
                            <ThemeSelector/>
                        </div>
                    </div>


                </div>

                {/* LANG SELECTOR */}
                <div className="shadow-lg rounded-lg bg-color01 p-3 w-2/3 grid place-items-center">
                    <LangSwitcher/>
                </div>

            </div>
            
            <div className="w-full">
                <Summary/>
            </div>

        </div>
    )
}
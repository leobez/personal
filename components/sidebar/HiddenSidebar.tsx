'use client'

import { useEffect, useRef, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import ThemeSelector from "./ThemeSelector";
import { IoColorPaletteOutline } from "react-icons/io5";
import Summary from "./Summary";

export default function HiddenSidebar() {

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
        <div className="lg:hidden bg-red absolute left-0 h-12 w-12">


        </div>
    )
}
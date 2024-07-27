'use client'

import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function HiddenMenuButton() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleClick = (e:any):void => {
        e.preventDefault()
        const hiddenSidebar = document.querySelector('#hiddenSidebar')
        const Overlay = document.querySelector('#overlay')
        hiddenSidebar?.classList.toggle('hidden')
        Overlay?.classList.toggle('hidden')
    }

    if (!mounted) return;

    return (

        <>
            {/* HIDDEN MENU BUTTON */}
            <button className="h-12 w-12 bg-color02 rounded-lg shadow-lg xl:hidden grid place-items-center hover:bg-color03 duration-200 cursor-pointer z-50" onClick={handleClick}>
                <CiMenuBurger size={30}/>
            </button> 
        </>

    )
}
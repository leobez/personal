'use client'

import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";

export default function LangSwitcher() {

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
            'slateLight'
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
        <div>

            {currentTheme === 'slateDark' && 
                <div className="flex border-2 border-white rounded-3xl">
                    <button onClick={(e) => updateTheme(e)} id="slateLight" className="flex py-2 px-3 items-center">
                        <FaCloudSunRain fill="white" size={20} id="slateLight" pointerEvents={'none'}/>
                    </button>
                    <button className="flex py-2 px-3 items-center bg-[#fff] rounded-r-2xl" disabled>
                        <FaRegMoon fill="black" size={20}/>
                    </button>
                </div>
            }

            {currentTheme === 'slateLight' && 
                <div className="flex border-2 border-white rounded-3xl">
                    <button className="flex py-2 px-3 items-center bg-[#fff] rounded-l-2xl" disabled>
                        <FaCloudSunRain fill="black" size={20}/>
                    </button>
                    <button onClick={(e) => updateTheme(e)} id="slateDark" className="flex py-2 px-3 items-center">
                        <FaRegMoon fill="white" size={20} id="slateDark" pointerEvents={'none'}/>
                    </button>
                </div>
            }

        </div>
    )
}
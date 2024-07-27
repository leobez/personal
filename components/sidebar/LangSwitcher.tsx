'use client'

import { useEffect, useState } from "react";

export default function LangSwitcher() {

    const [mounted, setMounted] = useState<boolean>(false)
    const [currentLang, setCurrentLang] = useState<string|null>('br')

    useEffect(() => {
        setMounted(true)
    }, [])

    const updateLang = (e:any):void => {
        e.preventDefault()
        setCurrentLang(e.target.id)
    }

    if (!mounted) return;

    return (
        <div className="w-fit">

            {currentLang === 'eng' && 
                <div className="flex rounded-3xl border-2 border-color04 ">
                    
                    <div className="w-1/2 overflow-x-hidden hover:opacity-60">
                        <button onClick={(e) => updateLang(e)} id="br" className="py-2 px-4 text-2xl">
                            {"\u{1F1E7}\u{1F1F7}"} {/* BR */}
                        </button>
                    </div>

                    <div className="w-1/2 overflow-x-hidden">
                        <button className="py-2 px-4 text-2xl bg-color04 rounded-r-2xl animate-fade-right animate-duration-100" disabled>
                            {"\u{1F1FA}\u{1F1F8}"} {/* ENG */}
                        </button>
                    </div>

                </div>
            }

            {currentLang === 'br' && 
                <div className="flex rounded-3xl border-2 border-color04">

                    <div className="w-1/2 overflow-x-hidden">
                        <button className="py-2 px-4 text-2xl bg-color04 rounded-l-2xl animate-fade-left animate-duration-100" disabled>
                            {"\u{1F1E7}\u{1F1F7}"} {/* BR */}
                        </button>
                    </div>

                    <div className="w-1/2 overflow-x-hidden hover:opacity-60">
                        <button onClick={(e) => updateLang(e)} id="eng" className="py-2 px-4 text-2xl">
                            {"\u{1F1FA}\u{1F1F8}"} {/* ENG */}
                        </button>
                    </div>

                </div>
            }

        </div>
    )
}
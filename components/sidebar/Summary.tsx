'use client'

import { useEffect, useState } from "react";

export default function Summary() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) return;

    return (
        <div className="flex flex-col gap-5 bg-color01 p-5 rounded-lg shadow-lg">
            <p className="text-lg font-bold">Sumário</p>

            <div className="flex flex-col gap-3">
                <div className="py-3 px-5 w-full hover:bg-color04 cursor-pointer rounded-lg shadow-sm">
                    Sobre mim
                </div>
                <div className="py-3 px-5 w-full hover:bg-color04 cursor-pointer rounded-lg shadow-sm">
                    Educação
                </div>
                <div className="py-3 px-5 w-full hover:bg-color04 cursor-pointer rounded-lg shadow-sm">
                    Tecnologias
                </div>
                <div className="py-3 px-5 w-full hover:bg-color04 cursor-pointer rounded-lg shadow-sm">
                    Experiência
                </div>
                <div className="py-3 px-5 w-full hover:bg-color04 cursor-pointer rounded-lg shadow-sm">
                    Projetos
                </div>
                <div className="py-3 px-5 w-full hover:bg-color04 cursor-pointer rounded-lg shadow-sm">
                    CV
                </div>
                <div className="py-3 px-5 w-full hover:bg-color04 cursor-pointer rounded-lg shadow-sm">
                    Contato
                </div>
            </div>

        </div>
    )
}
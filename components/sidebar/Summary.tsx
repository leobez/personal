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

            <div>
                
            </div>

        </div>
    )
}
'use client'

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return;

    return (
        <div>



        </div>
    )
}
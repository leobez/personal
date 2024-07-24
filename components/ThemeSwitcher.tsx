import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false)

    const {theme, setTheme} = useTheme()

    useEffect(() => {setMounted(true)}, [])

    if (!mounted) return;

    return (
        <div>
        The current theme is: {theme}
            <button onClick={() => setTheme('light')} className="border-2 border-red-500">Light Mode</button>
            <button onClick={() => setTheme('dark')} className="border-2 border-red-500">Dark Mode</button>
        </div>
    )
}
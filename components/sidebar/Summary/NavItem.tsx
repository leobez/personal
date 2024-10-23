'use client'

import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    section: String;
    content: {
        id: Number;
        link: String;
        name: String,
        icon: any;
    }
}

export default function NavItem({section, content}:Props) {

    const OBSERVEDDIV:HTMLDivElement|null = document.querySelector(`div#${section}`)

    const ref = useRef(OBSERVEDDIV)
    const isInView = useInView(ref, {amount: 0.82})

    const handleClick = (e:any):void => {
        e.preventDefault()
        const elementToTakeTo:any = document.querySelector(`div#${section}`)
        elementToTakeTo?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div>
            {isInView ? (
                <div 
                    className="rounded-lg shadow-md py-4 px-3 h-full w-full flex duration-200 cursor-pointer justify-between items-center text-sm bg-color04 hover:bg-color04 " 
                    onClick={handleClick}
                >
                    {content.name}
                    {content.icon}
                </div>
            ) : (
                <div 
                    className="rounded-lg shadow-md py-4 px-3 h-full w-full flex duration-200 cursor-pointer justify-between items-center text-sm bg-color01 hover:bg-color04"
                    onClick={handleClick}
                >
                    {content.name}
                    {content.icon}
                </div>
            )}
        </div>
    )
}
'use client'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const elements = [
    <FaHtml5 size={35}/>,
    <FaCss3Alt size={35}/>,
    <IoLogoJavascript size={35}/>,
    <FaReact size={35}/>,
    <RiTailwindCssLine size={35}/>,
    <FaNodeJs size={35}/>,
    <RiNextjsLine size={35}/>,
    <SiMysql size={35}/>,
    <FaGithub size={35}/>,
]

export default function AnimatedPool() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [] )

    if (!mounted) return;

    return (

        <div className="w-1/2 p-3">
            <div className="relative overflow-hidden h-full w-full">
                {elements.map((element:any, index:number) => (
                    <div key={index} 
                        className={`w-fit competence absolute`} 
                        style={{top: `${index}0%`, animationDelay: `${index}000ms`}}
                        >
                        {element}
                    </div>
                ))}
            </div>
        </div>

    )


}
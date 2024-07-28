'use client'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const elements = [
    <FaHtml5 size={50}/>,
    <FaCss3Alt size={50}/>,
    <IoLogoJavascript size={50}/>,
    <FaReact size={50}/>,
    <FaNodeJs size={50}/>,
    <SiExpress size={50}/>,
    <RiTailwindCssLine size={50}/>,
    <RiNextjsLine size={50}/>,
    <SiMysql size={50}/>,
    <TbBrandMongodb size={50}/>,
    <FaGithub size={50}/>,
]

export default function AnimatedPool() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [] )

    if (!mounted) return;

    return (

        <div className="w-1/2 p-5">
            <div className="relative overflow-hidden h-full w-full shadow-lg rounded-lg">
                {elements.map((element:any, index:number) => (
                    <div key={index} className={`w-fit competence absolute`} style={{top: `${index}0%`, animationDelay: `${index}000ms`}}>
                        {element}
                    </div>
                ))}
            </div>
        </div>

    )


}
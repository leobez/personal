import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import GradualText from "./GradualText";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

import Image from 'next/image'

export default function AboutMe() {

    return (
        <section className="bg-color01 p-5 rounded-lg shadow-lg flex gap-5 scroll-mt-[100px] max-w-full" id="about_me">

            <div className="w-1/2 flex flex-col gap-5">
                
                <GradualText 
                    text="Olá, me chamo Leonardo!" 
                    classNames="font-bold text-lg" 
                    preHeight='28px' 
                    ms={50}
                />
                
                <p className="text-justify font-light">
                    Sou técnico em informática e (quase) graduado em análise e desenvolvimento de sistemas. Busco oportunidades no mercado de TI que me permitam contribuir para o desenvolvimento de soluções de software. Posso atuar tanto no setor de desenvolvimento quanto de analise de sistemas. Minha tecnologia favorita é JavaScript!
                </p>
                
                <div className="h-full w-full flex justify-center items-end relative">
                    <div className="relative h-40 w-full">
                        <Image src={`/bonfire.gif`} alt='bonfire.gif' fill={true} style={{objectFit: "contain"}}/>
                    </div>
                </div>

            </div>

            <div className="border-2 border-color04 w-1/2 h-[450px] flex flex-col justify-between">

                <div className="relative h-full w-full">
                    <Image src={`/photo.jpg`} alt='photo' fill={true} style={{objectFit: "cover", objectPosition: 'center'}}/>
                </div>

                <div className="border-t-2 border-color04 w-full p-2 flex items-center justify-between">
                    <div className="w-fit flex flex-col">
                        <a href="https://www.linkedin.com/in/leosouz/" target="_blank" className="p-2 text-xs flex items-center gap-1"><FaLinkedin size={30}/>linkedin.com/leosouz</a>
                        <a href="https://github.com/leobez" target="_blank" className="p-2 text-xs flex items-center gap-1"><FaGithub size={30}/>github.com/leobez</a>
                    </div>
                    <div className="w-fit flex flex-col">
                        <p className="p-2 text-xs flex items-center gap-1"><IoMailOutline size={30}/>leosbezerra@outlook.com</p>
                        <p className="p-2 text-xs flex items-center gap-1"><CiPhone size={30}/>+55 (19) 99825-0343</p>
                    </div>
                </div>

            </div>

        </section>
    )
}
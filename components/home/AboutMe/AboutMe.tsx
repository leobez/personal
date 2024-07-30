import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import GradualText from "./GradualText";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

import Image from 'next/image'

export default function AboutMe() {

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg gap-3 scroll-mt-[100px] max-w-full flex md:flex-row flex-col-reverse" id="about_me">

            <div className="flex flex-col gap-3 md:w-1/2 w-full">
                
                <GradualText 
                    text="Olá, me chamo Leonardo!" 
                    classNames="font-bold text-lg" 
                    preHeight='28px' 
                    ms={50}
                />
                
                <p className="text-justify font-light">
                    Sou técnico em informática e (quase) graduado em análise e desenvolvimento de sistemas. Busco oportunidades no mercado de TI que me permitam contribuir para o desenvolvimento de soluções de software. Posso atuar tanto no setor de desenvolvimento quanto de analise de sistemas. Minha tecnologia favorita é JavaScript!
                </p>
                
                <div className="h-full w-full flex justify-center items-end relative bg-color03 p-3 rounded-lg shadow-lg">
                    <div className="relative h-40 w-full">
                        <Image src={`/bonfire.gif`} unoptimized={true} alt='bonfire.gif' fill={true} style={{objectFit: "contain"}}/>
                    </div>
                </div>

            </div>

            <div className="bg-color03 rounded-lg flex flex-col justify-between md:h-full md:w-1/2 min-h-[500px] h-full w-full">

                <div className="relative h-full w-full">
                    <Image 
                        src={`/photo.jpg`} 
                        alt='photo' 
                        fill={true} 
                        style={{objectFit: "cover", objectPosition: 'center'}}
                    />
                </div>

                <div className="border-t-2 border-color04 p-2 flex items-center justify-between w-full">
                    <div className="w-fit flex flex-col">
                        <a href="https://www.linkedin.com/in/leosouz/" target="_blank" className="p-2 text-xs flex-col items-start gap-1">
                            <FaLinkedin size={30}/>
                            <span className="block">linkedin.com/leosouz</span>
                        </a>
                        <a href="https://github.com/leobez" target="_blank" className="p-2 text-xs flex-col items-start gap-1">
                            <FaGithub size={30}/>
                            <span className="block">github.com/leobez</span>
                        </a>
                    </div>
                    <div className="w-fit flex flex-col">
                        <p className="p-2 text-xs flex flex-col items-start gap-1">
                            <IoMailOutline size={30}/>
                            <span className="block">leosbezerra@outlook.com</span>
                        </p>
                        <p className="p-2 text-xs flex flex-col items-start gap-1">
                            <CiPhone size={30}/>
                            <span className="block">+55 (19) 99825-0343</span>
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}
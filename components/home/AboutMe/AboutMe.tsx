import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import GradualText from "./GradualText";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import Image from 'next/image'
import { useTranslations } from "next-intl";

export default function AboutMe() {

    const t = useTranslations('AboutMe')

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg gap-3 max-w-full flex md:flex-row flex-col-reverse">

            <div className="flex flex-col gap-3 md:w-1/2 w-full">

                <GradualText 
                    text={t('title')}
                    classNames="font-bold text-lg" 
                    preHeight='28px' 
                    ms={25}
                />

                <p className="text-justify font-light">
                    {t('description')}
                </p>

                <p>
                    {t('learning')}
                </p>
                
                <div className="w-full flex items-end justify-end relative h-full rounded-lg">
                    <div className="relative w-1/2 h-[150px] bg-color03 rounded-lg grid place-items-center">
                        <Image 
                            src={`/gifs/darksouls.gif`} 
                            unoptimized={true} 
                            alt='darksouls.gif' 
                            fill={true} 
                            style={{objectFit: "cover", objectPosition: "right", borderRadius: "0.5rem"}}
                        />
                    </div>
                </div>

            </div>

            <div className="bg-color03 rounded-lg flex flex-col justify-between md:w-1/2 h-fit w-full">

                <div className="relative h-80 w-full rounded-lg">
                    <Image 
                        src={`/images/photo.jpg`} 
                        alt='photo' 
                        fill={true} 
                        style={{objectFit: "cover", objectPosition: 'center', opacity: '0.8', borderTopRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem'}}
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
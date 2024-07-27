'use client'

import { useEffect, useState } from "react";

import { IoPersonOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const sectionsLinks:string[] = [
    'about_me', 'education', 'technology', 'experience', 'projects', 'curriculum', 'contact'
]
const sectionsNames:string[] = [
    'Sobre mim', 'Educação', 'Tecnologias', 'Experiência', 'Projetos', 'Curriculum', 'Contato'
]

const sectionsIcons:any[] = [
    <IoPersonOutline size={25}/>, <IoSchoolOutline size={25}/>, <RiComputerLine size={25}/>, <IoBriefcaseOutline size={25}/>,<SlSocialGithub size={25}/>,<IoDocumentOutline size={25}/>,<IoMailOutline size={25}/>
]

export default function Summary() {

    const [mounted, setMounted] = useState<boolean>(false)

    const [currentSection, setCurrentSection] = useState<string>('')

    useEffect(() => {

        let options = {
            rootMargin: "10px",
            threshold: 1,
        };
          
        let observer = new IntersectionObserver((entries:any) => {
            entries.forEach((entry:IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    const idOfVisibleElement = entry.target.id
                    setCurrentSection(idOfVisibleElement)
                }
            });
        }, options);
        
        const sectionsToObserve:any = document.getElementsByTagName('section')

        if (!sectionsToObserve) return;

        Object.values(sectionsToObserve).forEach((section:any) => {
            observer.observe(section)
        });

        setMounted(true)

    }, [])

    const handleClick = (e:any):void => {
        e.preventDefault()
        const idToTakeTo:any = e.target.id.split('button_')[1]
        const elementToTakeTo:any = document.querySelector(`#${idToTakeTo}`)
        elementToTakeTo?.scrollIntoView({behavior: 'smooth'})
    }

    if (!mounted) return;

    return (
        <div className="flex flex-col gap-5 bg-color01 p-5 rounded-lg shadow-lg w-full">
            <p className="text-lg font-bold">Sumário</p>
            <div className="flex flex-col gap-3">
                {sectionsLinks.map((link:string, index:number) => (
                    <div className={`w-full hover:bg-color04 duration-200 cursor-pointer rounded-lg shadow-md ${link===currentSection ? 'bg-color04' : ''}`} key={index}>
                        <button className="p-4 px-10 h-full w-full flex justify-between items-center text-sm" onClick={handleClick} id={`button_${link}`}>
                            {sectionsNames[index]}
                            {sectionsIcons[index]}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
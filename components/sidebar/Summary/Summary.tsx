'use client'

import { useEffect, useState } from "react";

import { IoPersonOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

type Props = {
    content: {
        title:string,
        name1:string,
        name2:string,
        name3:string,
        name4:string,
        name5:string,
        name6:string,
        name7:string,
    }
}

export default function Summary({content}:Props) {

    const sectionsElements = [
        {
            link: 'about_me',
            name: content.name1,
            icon: <IoPersonOutline size={25} style={{pointerEvents: 'none'}}/>
        },
        {
            link: 'competence',
            name: content.name2,
            icon: <RiComputerLine size={25} style={{pointerEvents: 'none'}}/>
        },
        {
            link: 'education',
            name: content.name3,
            icon: <IoSchoolOutline size={25} style={{pointerEvents: 'none'}}/>
        },
    /*     {
            link: 'experience',
            name: content.name4,
            icon: <IoBriefcaseOutline size={25} style={{pointerEvents: 'none'}}/>
        }, */
        {
            link: 'projects',
            name: content.name5,
            icon: <SlSocialGithub size={25} style={{pointerEvents: 'none'}}/>
        },
        {
            link: 'curriculum',
            name: content.name6,
            icon: <IoDocumentOutline size={25} style={{pointerEvents: 'none'}}/>
        },
    /*     {
            link: 'contact',
            name: content.name7,
            icon: <IoMailOutline size={25} style={{pointerEvents: 'none'}}/>
        }, */
    ]

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const [currentSection, setCurrentSection] = useState<string>('')

    useEffect(() => {

        if (!mounted) return;

        let options = {
            rootMargin: "0px",
            threshold: 0.9,
        };
          
        let observer = new IntersectionObserver((entries:any) => {
            entries.forEach((entry:IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    const idOfVisibleElement = entry.target.id
                    //console.log('current visible section: ', idOfVisibleElement)
                    setCurrentSection(idOfVisibleElement)
                }
            });
        }, options);
        
        const sectionsToObserve:any = document.getElementsByTagName('section')

        //console.log('sectionsToObserve: ', sectionsToObserve)

        if (!sectionsToObserve) return;

        Object.values(sectionsToObserve).forEach((section:any) => {
            observer.observe(section)
            //console.log('observing section: ', section)
        });


    }, [mounted])

    const handleClick = (e:any):void => {
        e.preventDefault()
        const idToTakeTo:any = e.target.id.split('button_')[1]
        const elementToTakeTo:any = document.querySelector(`#${idToTakeTo}`)
        elementToTakeTo?.scrollIntoView({behavior: 'smooth'})
    }

    if (!mounted) {
        return (
            <div className="w-full  h-[400px] bg-color01 rounded-lg"/>
        );
    }

    return (
        <div className="flex flex-col gap-3 bg-color01 p-3 rounded-lg shadow-lg w-full">
            <div className="flex flex-col gap-3">
                {sectionsElements.map((element:any, index:number) => (
                    <div className={`w-full hover:bg-color04 duration-200 cursor-pointer rounded-lg shadow-md ${element.link===currentSection ? 'bg-color04' : ''}`} key={index}>
                        <button 
                            className="py-4 px-3 h-full w-full flex justify-between items-center text-sm" 
                            onClick={handleClick} 
                            id={`button_${element.link}`}
                        >
                            {element.name}
                            {element.icon}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
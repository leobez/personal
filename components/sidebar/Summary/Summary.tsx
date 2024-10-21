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
            id: 0,
            link: 'about_me',
            name: content.name1,
            icon: <IoPersonOutline size={25} style={{pointerEvents: 'none'}}/>
        },
        {
            id: 1,
            link: 'competence',
            name: content.name2,
            icon: <RiComputerLine size={25} style={{pointerEvents: 'none'}}/>
        },
        {
            id: 2,
            link: 'projects',
            name: content.name5,
            icon: <SlSocialGithub size={25} style={{pointerEvents: 'none'}}/>
        },
        {
            id: 3,
            link: 'education',
            name: content.name3,
            icon: <IoSchoolOutline size={25} style={{pointerEvents: 'none'}}/>
        },
    /*     {
            id: 3,
            link: 'experience',
            name: content.name4,
            icon: <IoBriefcaseOutline size={25} style={{pointerEvents: 'none'}}/>
        }, */
/*         {
            id: 5,
            link: 'curriculum',
            name: content.name6,
            icon: <IoDocumentOutline size={25} style={{pointerEvents: 'none'}}/>
        }, */
    /*     {
            id: 6,
            link: 'contact',
            name: content.name7,
            icon: <IoMailOutline size={25} style={{pointerEvents: 'none'}}/>
        }, */
    ]

    const [mounted, setMounted] = useState<boolean>(false)
    const [currentSection, setCurrentSection] = useState<string>('')

/*     useEffect(() => {
        console.log(currentSection, sectionsElements)
    }, [currentSection]) */

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {

        if (!mounted) return;

        const setObservers = () => {
              
            const observer = new IntersectionObserver((entries:any) => {
                entries.forEach((entry:IntersectionObserverEntry) => {

                    //console.log('activated: ', entry)
                    if (entry.isIntersecting) {
                        const idOfVisibleElement = entry.target.id
                        //console.log('current visible section: ', idOfVisibleElement)
                        setCurrentSection(idOfVisibleElement)
                    }
                });
            }, {
                threshold: 0.8
            });
            
            const sectionsToObserve:any = document.getElementsByClassName('section')
            //console.log('sectionsToObserve: ', sectionsToObserve)
        
            if (!sectionsToObserve) return;
        
            Object.values(sectionsToObserve).forEach((section:any) => {
                observer.observe(section)
                //console.log('observing section: ', section)
            });
        }

        //setObservers()

    }, [mounted, currentSection])


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
                    <div key={`div${index}`}>
                        {element.link === currentSection ? (
                            <button 
                                className="rounded-lg shadow-md py-4 px-3 h-full w-full flex duration-200 cursor-pointer justify-between items-center text-sm bg-color04 hover:bg-color04 " 
                                onClick={handleClick} 
                                id={`button_${element.link}`}
                                key={`${index}a`}
                            >
                                {element.name}
                                {element.icon}
                            </button>
                        ) : (
                            <button 
                                className="rounded-lg shadow-md py-4 px-3 h-full w-full flex duration-200 cursor-pointer justify-between items-center text-sm bg-color01 hover:bg-color04 " 
                                onClick={handleClick} 
                                id={`button_${element.link}`}
                                key={`${index}b`}
                            >
                                {element.name}
                                {element.icon}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
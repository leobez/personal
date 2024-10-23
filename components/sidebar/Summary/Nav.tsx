'use client'

import { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import NavItem from "./NavItem";

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

export default function Nav({content}:Props) {

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
    /*     {
            id: 6,
            link: 'contact',
            name: content.name7,
            icon: <IoMailOutline size={25} style={{pointerEvents: 'none'}}/>
        }, */
    ]

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return (
            <div className="w-full h-[400px] bg-color01 rounded-lg"/>
        );
    }

    return (
        <div className="flex flex-col gap-3 bg-color01 p-3 rounded-lg shadow-lg w-full">
            <div className="flex flex-col gap-3">
                <NavItem section={"about_me"} content={sectionsElements[0]}/>
                <NavItem section={"competence"} content={sectionsElements[1]}/>
                <NavItem section={"projects"} content={sectionsElements[2]}/>
                <NavItem section={"education"} content={sectionsElements[3]}/>
            </div>
        </div>
    )
}
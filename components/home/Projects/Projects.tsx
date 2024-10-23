'use client'

import { useEffect, useState } from "react"
import { LocaleProps } from "./types"
import { PROJECTDATA, ProjectTYPE } from "./ProjectData"
import Image from "next/image"
import Project from "./Project"

export default function Projects({
    localeContent: {
        l_title,
        l_subtitle,
        l_projects,
        l_linkRepo,
        l_linkProject,
    }
}:LocaleProps) {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])  

    if (!mounted) return;

    return (

        <section className="relative bg-color01 rounded-lg shadow-lg flex flex-col gap-3 overflow-y-scroll h-[900px] scrollbar-thin">

            <div className="sticky top-0 bg-color01 z-10 p-4">
                <p className="font-bold text-lg">
                    {l_title}
                </p>
            </div>
            
            <div className="px-7 py-4 flex flex-col gap-5">

                {PROJECTDATA.map((project:ProjectTYPE) => (             
                    <Project project={project} key={project.id}/>
                ))}

            </div>

        </section>
    )
}
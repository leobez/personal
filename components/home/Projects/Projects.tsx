'use client'

import { useEffect, useState } from "react"
import { PROJECTDATA, ProjectTYPE } from "./ProjectData"
import Project from "./Project"

type Props = {
    content: {
        title: string
        projects: {description:string}[]
    }
}

export default function Projects({content}:Props) {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])  

    if (!mounted) return;

    return (

        <section className="relative bg-color01 rounded-lg shadow-lg flex flex-col gap-3 overflow-y-scroll h-[900px] scrollbar-thin">

            <div className="sticky top-0 bg-color01 z-10 p-4">
                <p className="font-bold text-lg">
                    {content.title}
                </p>
            </div>
            
            <div className="px-7 pb-5 flex flex-col gap-5">

                {PROJECTDATA.map((project:ProjectTYPE) => (             
                    <Project project={project} key={project.id} description={content.projects[project.id].description}/>
                ))}

            </div>

        </section>
    )
}
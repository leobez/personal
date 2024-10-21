'use client'

import { useEffect, useState } from "react"
import { AllProjects } from "./SAVE/AllProjects"
import { LocaleProps } from "./types"
import { PROJECTDATA, Project } from "./ProjectData"
import Image from "next/image"

export default function Projects({
    localeContent: {
        l_title,
        l_subtitle,
        l_projects,
        l_linkRepo,
        l_linkProject,
    }
}:LocaleProps) {

    //console.log('l_projects: ', l_projects)

    const [mounted, setMounted] = useState<boolean>(false)
    const [currentProject, setCurrentProject] = useState<Project|null>(null)
    
/*     useEffect(() => {
        console.log('currentProject: ', currentProject)
    }, [currentProject])   */

    useEffect(() => {
        setMounted(true)
    }, [])  

    if (!mounted) return;

    return (

        <section className="relative bg-color01 p-4 rounded-lg shadow-lg flex flex-col gap-3 overflow-y-scroll h-[900px]">

            <div>
                <p className="font-bold text-lg">
                    {l_title}
                </p>
            </div>
            
            <div className="p-3 flex flex-col gap-3 ">

                {PROJECTDATA.map((project:Project) => (
                    
                    <div className="border border-color04 rounded-lg flex gap-1 bg-color03">

                        {/* IMAGEM */}
                        <div className="w-2/3 h-[360px] relative">
                            <Image
                                src={`${project.image_path}`} 
                                alt={`${project.name}`} 
                                fill={true}
                                style={{
                                    objectFit: "cover", 
                                    objectPosition: 'left', 
                                    borderTopLeftRadius: '0.5rem', 
                                    borderBottomLeftRadius: '0.5rem', 
                                }}
                            />
                        </div>

                        {/* TEXT */}
                        <div className="w-1/3 p-3">

                            {/* NAME */}
                            <div>{project.name}</div>

                            {/* LINK REPO */}
                            <div>{project.link_repo}</div>

                            {/* LINK PROJECT */}
                            <div>{project.link_project}</div>

                            {/* TECH STACK */}
                            <div> Tech Stack </div>

                            {/* DESCRIPTION */}
                            <div> Description </div>

                        </div>

                    </div>
                    
                ))}


                
            </div>

        </section>
    )
}
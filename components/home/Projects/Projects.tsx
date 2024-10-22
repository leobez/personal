'use client'

import { useEffect, useState } from "react"
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

        <section className="relative bg-color01 rounded-lg shadow-lg flex flex-col gap-3 overflow-y-scroll h-[900px] relative">

            <div className="sticky top-0 bg-color01 z-10 p-4">
                <p className="font-bold text-lg">
                    {l_title}
                </p>
            </div>
            
            <div className="px-7 py-4 flex flex-col gap-5">

                {PROJECTDATA.map((project:Project) => (
                    
                    <div className="border border-color04 rounded-lg flex gap-1 bg-color03 h-[360px]">

                        {/* IMAGEM */}
                        <div className="w-2/3 h-full relative">
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
                        <div className="w-1/3 p-3 h-full overflow-y-auto">

                            {/* NAME */}
                            <div className="font-bold text-lg">{project.name}</div>
                            
                            {/* LINKS */}
                            <div className="my-2 flex gap-5">

                                {/* LINK REPO */}
                                <div className="hover:text-color04 duration-200">
                                    <a href={`${project.link_repo}`} target="_blank">GITHUB URL</a>
                                </div>

                                {/* LINK PROJECT */}
                                { project.link_project &&
                                    <div className="hover:text-color04 duration-200">
                                        <a href={`${project.link_project}`} target="_blank">PROJECT URL</a>
                                    </div>
                                }

                            </div>


                            {/* TECH STACK */}
                            <div className="my-3 h-fit w-full flex flex-wrap gap-2"> 
                                {project.tech_stack.map((tech:String, index:number) => (
                                    <div key={index} className="text-xs py-1 px-2 rounded-lg bg-color04">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            
                            <hr></hr>

                            {/* DESCRIPTION */}
                            <div className="my-3 w-full">
                                <p className="w-full break-words text-justify text-sm">
                                    {project.desc}
                                </p>
                            </div>

                        </div>

                    </div>
                    
                ))}

            </div>

        </section>
    )
}
'use client'

import { useEffect, useRef, useState } from "react"
import { AllProjects } from "./AllProjects"
import ProjectComponent from "./ProjectComponent"
import SelectedProject from "./SelectedProject"
import { motion } from "framer-motion"

type Props = {
    content: {
        title:string,
        subtitle:string,
        projects: {
            1: {
                desc: string
            },
            2: {
                desc: string
            },
            3: {
                desc: string
            },
            4: {
                desc: string
            }
        },
        linkRepo:string,
        linkProject:string
    } 
}

export type Project = {
    id: number,
    name: string,
    description: string,
    topics: string[],
    repo_link: string,
    project_link: string,
    image_src: string,
}

export default function Projects({content}:Props) {

    const [mounted, setMounted] = useState<boolean>(false)

    const [currentProject, setCurrentProject] = useState<Project|null>({
    id: 1,
    name: 'cinelog',
    description: 'Site que usa uma API pública pra exibir filmes com alguns recursos de busca/filtragem.',
    topics: ['React.js', 'TypeScript', 'Vercel', 'React icons', 'Tailwind CSS', 'DaisyUI', 'Context API', 'TMDB'],
    repo_link: 'https://github.com/leobez/cinelog',
    project_link: 'https://cinelogleob.vercel.app/',
    image_src: '/images/media-collection.png' 
        
    })

    useEffect(() => {
        setMounted(true)
    }, [])  

    const handleClick = (e:any):void => {
        e.preventDefault()

        const id = e.currentTarget.id
        if (!id) return;

        const numberId = id.replace('project_', '')
        
        //console.log('numberId: ', numberId)

        setCurrentProject(AllProjects[numberId-1])

        const projectDetail = document.querySelector('#project_detail')
        //console.log('projectDetail: ', projectDetail)
        projectDetail?.classList.remove("projects_details_out")
        projectDetail?.classList.remove("hidden")
    }

    const handleClose = ():void => {
        const projectDetailSelectedCard = document.querySelector('#project_detail_selected_card')
        if (!projectDetailSelectedCard) return;
        setCurrentProject(null)

        const projectDetail = document.querySelector('#project_detail')
        projectDetail?.classList.add("projects_details_out")
    }

    if (!mounted) return;

    return (

        <section className="relative bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 scroll-mt-[100px] overflow-clip" id='projects'>

            <div>
                <p className="font-bold text-lg">
                    {content.title}
                </p>

                <p className="font-light">
                    <a href="https://github.com/leobez?tab=repositories" target="_blank" className="hover:text-color04 duration-200">
                        {content.subtitle}
                    </a>
                </p> 
            </div>
            
            <div>

                {/* Projects cards */}
                <div className="md:flex md:flex-wrap grid sm:grid-cols-2 grid-cols-1 relative">

                    <ProjectComponent
                        clickFunc={handleClick}
                        imgSrc="/images/media-collection.png"
                        name="cinelog"
                        id="project_01"
                    />
                    <ProjectComponent
                        clickFunc={handleClick}
                        imgSrc="/images/divulgacampo.png"
                        name="divulgacampo"
                        id="project_02"
                    />
                    <ProjectComponent
                        clickFunc={handleClick}
                        imgSrc="/images/seo-comparison.png"
                        name="seo-comparison"
                        id="project_03"
                    />
                    <ProjectComponent
                        clickFunc={handleClick}
                        imgSrc="/images/ads-content.png"
                        name="ads-projects"
                        id="project_04"
                    />

                </div>

                <div className="absolute h-full w-full left-0 top-0 bg-color03 rounded-lg flex flex-col projects_details_in" id="project_detail">
                    {currentProject && 
                        <SelectedProject 
                            closeFunc={handleClose} 
                            selectedProject={currentProject} 
                            content={content}
                        />
                    }
                </div>

            </div>

        </section>
    )
}
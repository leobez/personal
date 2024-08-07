'use client'

import { useEffect, useState } from "react"
import { AllProjects } from "./AllProjects"
import ProjectComponent from "./ProjectComponent"
import SelectedProject from "./SelectedProject2"

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
    showcase?:{id:number, image_src:string, desc:string}[]
}

export default function Projects({content}:Props) {

    const [mounted, setMounted] = useState<boolean>(false)

    const [currentProject, setCurrentProject] = useState<Project|null>(null)

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
        projectDetail?.scrollIntoView({block: "start", behavior: "smooth"});    
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

        <section className="relative bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 overflow-clip">

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
                        name="ads-content"
                        id="project_04"
                    />

                </div>

                <div className="absolute h-full w-full p-1 left-0 top-0 bg-color03 rounded-lg flex flex-col projects_details_in hidden scroll-mt-[630px] sm:scroll-mt-96" id="project_detail">
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
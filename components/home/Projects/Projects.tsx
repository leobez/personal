'use client'

import { useEffect, useState } from "react"
import { AllProjects } from "./AllProjects"
import ProjectComponent from "./ProjectComponent"
import SelectedProject from "./SelectedProject2"

/* TYPES TO LOCALIZED CONTENT PROPS */
export type ShowCaseDesc = {
    id:string;
    desc:string;
}

export type LocalizedProjectContent = {
    desc:string;
    showcaseDescs:ShowCaseDesc[];
}

export type Props = {
    localeContent: {
        title:string;
        subtitle:string;
        projects:LocalizedProjectContent[];
        linkRepo:string;
        linkProject:string;
    } 
}


/* TYPES OF PROJECT FROM ./AllProjects */
type ShowCaseImage = {
   id:number;
   image_src:string; 
}

export type Project = {
    id: number;
    name: string;
    description: string;
    topics: string[];
    repo_link: string;
    project_link: string;
    image_src: string;
    showcase:ShowCaseImage[]
}

export default function Projects({localeContent}:Props) {

    //console.log('localeContent: ', localeContent)

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

        <section className="relative bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 overflow-clip min-h-[700px]">

            <div>
                <p className="font-bold text-lg">
                    {localeContent.title}
                </p>

                <p className="font-light">
                    <a href="https://github.com/leobez?tab=repositories" target="_blank" className="hover:text-color04 duration-200">
                        {localeContent.subtitle}
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
                            selectedProjectLocalizedContent={localeContent.projects[currentProject.id-1]}
                        />
                    }
                </div>

            </div>

        </section>
    )
}
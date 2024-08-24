'use client'

import { useEffect, useState } from "react"
import { AllProjects } from "./AllProjects"
import ProjectComponent from "./ProjectComponent"
import SelectedProject from "./SelectedProject"
import { LocaleProps, Project } from "./types"

// Reversing AllProjects array
for (let a=0; a<AllProjects.length; a++) {

    let ia = a
    let ib = AllProjects.length-1-a

    if (ia >= ib) {
        break;
    }

    let ela = AllProjects[ia]
    let elb = AllProjects[ib]

    AllProjects[ia] = elb
    AllProjects[ib] = ela
}

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

    const handleClick = (e:any):void => {
        e.preventDefault()

        const id = e.currentTarget.id
        if (!id) return;

        const numberId = Number(id.replace('project_', ''))
        
        //console.log('numberId: ', numberId)

        setCurrentProject(AllProjects[numberId])

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

        <section className="relative bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 overflow-clip min-h-[700px] justify-center">

            <div>
                <p className="font-bold text-lg">
                    {l_title}
                </p>

                <p className="font-light">
                    <a href="https://github.com/leobez?tab=repositories" target="_blank" className="hover:text-color04 duration-200">
                        {l_subtitle}
                    </a>
                </p> 
            </div>
            
            <div>

                {/* Projects cards */}
                <div className="md:flex md:flex-wrap grid sm:grid-cols-2 md:gap-0 gap-2 grid-cols-1 relative">

                    {AllProjects && AllProjects.map((project:Project) => {

                            return (
                                <ProjectComponent
                                key={project.id}
                                clickFunc={handleClick}
                                imgSrc={project.image_src}
                                name={project.name}
                                id={`project_${project.id}`}
                                />
                            )
                        })
                    }

                </div>

                <div className="absolute h-full w-full p-1 left-0 top-0 bg-color03 rounded-lg flex flex-col projects_details_in hidden scroll-mt-[630px] sm:scroll-mt-[450px]" id="project_detail">
                    {currentProject &&

                        <SelectedProject 
                            closeFunc={handleClose} 
                            selectedProject={currentProject} 
                            localizedProps={{
                                l_linkProject,
                                l_linkRepo,
                                l_project: l_projects[Number(currentProject.id)]
                            }}
                        />

                    }
                </div>

            </div>

        </section>
    )
}
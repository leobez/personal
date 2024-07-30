'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'

import { AllProjects } from "./AllProjects"

export default function Projects() {

    const [mounted, setMounted] = useState<boolean>(false)
    const [currentProject, setCurrentProject] = useState<any>(null)

    useEffect(() => {
        setMounted(true)
    }, [])  

    const handleClick = (e:any):void => {
        e.preventDefault()

        const currentElement = e.currentTarget
        const copy = currentElement.cloneNode(true)
        const id = e.currentTarget.id
        const numberId = id.replace('project_', '')
        if (!id) return;

        setCurrentProject(AllProjects[numberId-1])

        const projectDetail = document.querySelector('#project_detail')
        projectDetail?.classList.remove("projects_details_out")
        projectDetail?.classList.remove("hidden")

        const projectDetailSelectedCard = document.querySelector('#project_detail_selected_card')
        copy.classList.add('w-full')
        projectDetailSelectedCard?.appendChild(copy)
    }

    const handleClose = ():void => {
        const projectDetailSelectedCard = document.querySelector('#project_detail_selected_card')
        if (!projectDetailSelectedCard) return;
        projectDetailSelectedCard.innerHTML = ''
        setCurrentProject(null)

        const projectDetail = document.querySelector('#project_detail')
        projectDetail?.classList.add("projects_details_out")
    }

    if (!mounted) return;

    return (
        <section className="bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 scroll-mt-[100px]" id='projects'>

            <div>
                <p className="font-bold text-lg">Projetos</p>
                <p className="font-light"><a href="https://github.com/leobez?tab=repositories" target="_blank" className="hover:text-color04 duration-200">Repositórios do github</a></p> 
            </div>
            
            <div className="relative overflow-clip">

                {/* SELECTION */}
                <div className="md:flex md:flex-wrap grid sm:grid-cols-2 grid-cols-1 relative">

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_01"
                    >
                        <div className="h-full w-full relative">
                            <Image 
                                src={`/media-collection.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                media-collection
                            </p>
                        </div>
                    </div>

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_02"
                    >
                        <div className="h-full w-full relative">
                            <Image 
                                src={`/divulgacampo.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                divulgacampo
                            </p>
                        </div>
                    </div>

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_03"
                    >
                        <div className="h-full w-full relative">
                            <Image 
                                src={`/seo-comparison.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                seo-comparison
                            </p>
                        </div>
                    </div>

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_04"
                    >
                        <div className="h-full w-full relative">
                            <Image 
                                src={`/medidas-dispersao.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                ads-projects
                            </p>
                        </div>
                    </div>

                </div>
                
                {/* RESULT */}
                <div className="h-[700px] bg-color03 rounded-lg w-full flex flex-col absolute top-0 projects_details_in hidden" id="project_detail">

                    {/* Close button */}
                    <div className="w-full p-3 flex justify-end items-center bg-color04">
                        <button className="h-12 w-12 bg-color01 rounded-lg hover:opacity-50 duration-200 text-lg font-bold" onClick={handleClose}>
                            X
                        </button>
                    </div>

                    {/* Information about project */}
                    <div className="flex gap-3 p-3 h-96 w-full">
                        <div className="w-1/2 h-full bg-color02 rounded-lg p-3 overflow-y-scroll">
                            {currentProject && 
                                <>
                                    <p className="font-bold text-lg py-3">
                                        {currentProject.name}
                                    </p>
                                    <p className="font-light text-justify py-3">
                                        {currentProject.description}
                                    </p>

                                    <p className="flex flex-col gap-1 pt-5">
                                        <span>Link para o repositório:</span>
                                        <a href={`${currentProject.repo_link}`} target="_blank" className="text-sm hover:opacity-50 duration-200">
                                            {currentProject.repo_link}
                                        </a>
                                    </p>

                                    {currentProject.project_link && 
                                    <p className="flex flex-col gap-1 pt-5">
                                        Link para o projeto hospedado:
                                        <a href={`${currentProject.project_link}`} target="_blank" className="text-sm hover:opacity-50 duration-200 break-words">
                                            {currentProject.project_link}
                                        </a>
                                    </p>
                                    }
                                </>
                            }
                        </div>
                        {/* Project card */}
                        <div className="w-1/2 bg-color02 rounded-lg p-3 grid place-items-center" id="project_detail_selected_card"/>

                    </div>
            
                </div>

            </div>

        </section>
    )
}
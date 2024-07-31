'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'

import { AllProjects } from "./AllProjects"

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

export default function Projects({content}:Props) {

    const [mounted, setMounted] = useState<boolean>(false)

    const [currentProject, setCurrentProject] = useState<{
        id: number,
        name: string,
        description: string,
        topics: string[],
        repo_link: string,
        project_link: string,
        image_src: string,
    }|null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])  

    const handleClick = (e:any):void => {
        e.preventDefault()

        const id = e.currentTarget.id
        const numberId = id.replace('project_', '')
        if (!id) return;

        setCurrentProject(AllProjects[numberId-1])

        const projectDetail = document.querySelector('#project_detail')
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
        <section className="bg-color01 p-3 rounded-lg shadow-lg flex flex-col gap-3 scroll-mt-[100px]:" id='projects'>

            <div>
                <p className="font-bold text-lg">{content.title}</p>
                <p className="font-light"><a href="https://github.com/leobez?tab=repositories" target="_blank" className="hover:text-color04 duration-200">{content.subtitle}</a></p> 
            </div>
            
            <div className="relative overflow-clip">

                {/* SELECTION */}
                <div className="md:flex md:flex-wrap grid sm:grid-cols-2 grid-cols-1 relative">

                    <div 
                    className="rounded-lg bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_01"
                    >
                        <div className="h-full w-full relative rounded-lg">
                            <Image 
                                src={`/images/media-collection.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center rounded-b-lg">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                media-collection
                            </p>
                        </div>
                    </div>

                    <div 
                    className="rounded-lg bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_02"
                    >
                        <div className="h-full w-full relative">
                            <Image 
                                src={`/images/divulgacampo.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center rounded-b-lg">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                divulgacampo
                            </p>
                        </div>
                    </div>

                    <div 
                    className="rounded-lg bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_03"
                    >
                        <div className="h-full w-full relative">
                            <Image 
                                src={`/images/seo-comparison.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center rounded-b-lg">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                seo-comparison
                            </p>
                        </div>
                    </div>

                    <div 
                    className="rounded-lg bg-color03 hover:opacity-50 border-2 border-color01 h-60 md:w-1/3 w-full duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_04"
                    >
                        <div className="h-full w-full relative">
                            <Image 
                                src={`/images/medidas-dispersao.png`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}
                            />
                        </div>
                        <div className="h-12 w-full px-3 bg-color03 flex items-center rounded-b-lg">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                ads-projects
                            </p>
                        </div>
                    </div>

                </div>
                
                {/* RESULT */}
                <div className="h-full bg-color03 rounded-lg w-full flex flex-col absolute top-0 projects_details_in hidden" id="project_detail">

                    {/* Close button */}
                    <div className="w-full p-3 flex justify-end items-center bg-color04 rounded-t-lg">
                        <button className="h-12 w-12 bg-color01 rounded-lg hover:opacity-50 duration-200 text-lg font-bold" onClick={handleClose}>
                            X
                        </button>
                    </div>

                    {/* Information about project */}
                    {currentProject && 
                        <div className="flex md:flex-row flex-col-reverse gap-3 p-3 h-full w-full overflow-y-scroll">

                            <div className="md:w-1/2 w-full h-full bg-color02 rounded-lg p-3">
                                <p className="font-bold text-lg py-3">
                                    {currentProject.name}
                                </p>
                                <p className="font-light text-justify py-3">
                                    {/* @ts-expect-error -- Too lazy rn to fix this properly */}
                                    {content.projects[Number(currentProject.id)].desc}
                                </p>

                                <p className="flex flex-col gap-1 pt-5">
                                    <span>{content.linkRepo}</span>
                                    <a href={`${currentProject.repo_link}`} target="_blank" className="text-sm hover:opacity-50 duration-200">
                                        {currentProject.repo_link}
                                    </a>
                                </p>

                                {currentProject.project_link && 
                                <p className="flex flex-col gap-1 pt-5">
                                    <span>{content.linkProject}</span>
                                    <a href={`${currentProject.project_link}`} target="_blank" className="text-sm hover:opacity-50 duration-200 break-words">
                                        {currentProject.project_link}
                                    </a>
                                </p>
                                }
                            </div>
    
                            {/* Project card */}
                            <div className="md:w-1/2 w-full h-full bg-color02 rounded-lg p-3 grid place-items-center" id="project_detail_selected_card">
                                <div 
                                    className="bg-color03 border-2 border-color04 md:h-64 h-96 w-full flex flex-col" 
                                    id="project_01"
                                    >
                                    <div className="h-full w-full relative">
                                        <Image 
                                            src={`${currentProject.image_src}`} 
                                            alt='photo' 
                                            fill={true} 
                                            style={{objectFit: "cover", objectPosition: 'center'}}
                                        />
                                    </div>
                                    <div className="h-12 w-full px-3 bg-color03 flex items-center">
                                        <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                            {currentProject.name}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </section>
    )
}
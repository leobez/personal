'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'

export default function Projects() {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])  

    const handleClick = (e:any):void => {
        e.preventDefault()

        const currentElement = e.currentTarget
        const copy = currentElement.cloneNode(true)
        const id = e.currentTarget.id
        console.log(id)

        if (!id) return;

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

        const projectDetail = document.querySelector('#project_detail')
        projectDetail?.classList.add("projects_details_out")
    }

    if (!mounted) return;

    return (
        <section className="bg-color01 p-5 rounded-lg shadow-lg flex flex-col gap-5 scroll-mt-[100px]" id='projects'>

            <div>
                <p className="font-bold text-lg">Projetos</p>
                <p className="font-light"><a href="https://github.com/leobez?tab=repositories" target="_blank" className="hover:text-color04 duration-200">Repositórios do github</a></p> 
            </div>
            
            <div className="relative overflow-clip">

                {/* SELECTION */}
                <div className="flex flex-wrap relative">

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 w-1/3 duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_01"
                    >
                        <div className="h-full w-full relative">
                            <Image src={`/media-collection.png`} alt='photo' fill={true} style={{objectFit: "cover", objectPosition: 'center'}}/>
                        </div>
                        <div className="h-12 w-full px-3 bg-color02 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                media-collection
                            </p>
                        </div>
                    </div>

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 w-1/3 duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_02"
                    >
                        <div className="h-full w-full relative">
                            <Image src={`/divulgacampo.png`} alt='photo' fill={true} style={{objectFit: "cover", objectPosition: 'center'}}/>
                        </div>
                        <div className="h-12 w-full px-3 bg-color02 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                divulgacampo
                            </p>
                        </div>
                    </div>

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 w-1/3 duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_03"
                    >
                        <div className="h-full w-full relative">
                            <Image src={`/seo-comparison.png`} alt='photo' fill={true} style={{objectFit: "cover", objectPosition: 'center'}}/>
                        </div>
                        <div className="h-12 w-full px-3 bg-color02 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                seo-comparison
                            </p>
                        </div>
                    </div>

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 w-1/3 duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_04"
                    >
                        <div className="h-full w-full relative">
                            <Image src={`/medidas-dispersao.png`} alt='photo' fill={true} style={{objectFit: "cover", objectPosition: 'center'}}/>
                        </div>
                        <div className="h-12 w-full px-3 bg-color02 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                medidas-dispersao
                            </p>
                        </div>
                    </div>

                    <div 
                    className="bg-color03 hover:opacity-50 border-2 border-color01 h-60 w-1/3 duration-200 cursor-pointer flex flex-col" 
                    onClick={handleClick} 
                    id="project_05"
                    >
                        <div className="h-full w-full relative">
                            <Image src={`/chat-mqtt.png`} alt='photo' fill={true} style={{objectFit: "cover", objectPosition: 'center'}}/>
                        </div>
                        <div className="h-12 w-full px-3 bg-color02 flex items-center">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                chat-mqtt
                            </p>
                        </div>
                    </div>

                </div>
                
                {/* RESULT */}
                <div className="h-[600px] bg-color01 rounded-lg w-full border-2 border-color04 flex flex-col absolute top-0 projects_details_in hidden" id="project_detail">

                    {/* Close button */}
                    <div className="w-full p-5 flex justify-end items-center bg-color04">
                        <button className="h-12 w-12 bg-color01 rounded-lg hover:opacity-50 duration-200" onClick={handleClose}>
                            X
                        </button>
                    </div>

                    <div className="flex gap-5 p-5 h-full w-full">
                        {/* Information about project - readme from github? */}
                        <div className="w-3/5 bg-color02 rounded-lg p-5">
                            Info
                        </div>
                        {/* Project card */}
                        <div className="w-2/5 bg-color02 rounded-lg p-5" id="project_detail_selected_card">
                        </div>
                    </div>

            
            </div>


            </div>

        </section>
    )
}
import React from 'react'
import { ProjectTYPE } from "./ProjectData"
import Image from 'next/image';

type Props = {
    project: ProjectTYPE;
}

const Project = ({project}: Props) => {

  return (

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
  )
}

export default Project
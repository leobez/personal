import React from 'react'
import { ProjectTYPE } from "./ProjectData"
import Image from 'next/image';

type Props = {
    project: ProjectTYPE;
    description: string;
}

const Project = ({project, description}: Props) => {

  return (

    <div className="border border-color04 rounded-lg gap-1 bg-color03 h-fit md:h-[360px] flex flex-col md:flex-row">

        {/* IMAGEM */}
        <div className="w-full md:w-2/3 h-64 md:h-full relative">
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
        <div className="w-full md:w-1/3 p-3 h-fit md:h-full overflow-y-auto">

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
                    {description}
                </p>
            </div>

        </div>

    </div>
  )
}

export default Project
import Image from "next/image"
import { Project } from "./Projects";

type Props = {
    closeFunc:()=>void;
    selectedProject:Project;
    content:any;
}

export default function SelectedProject({closeFunc, selectedProject, content}:Props) {

    return (

        <>
            {/* CLOSE BUTTON */}
            <div className="w-full p-3 flex justify-end items-center bg-color04 rounded-t-lg">
                <button className="h-12 w-12 bg-color01 rounded-lg hover:opacity-50 duration-200 text-lg font-bold" onClick={closeFunc}>
                    X
                </button>
            </div>

            <div className="flex md:flex-row flex-col gap-3 p-3 h-full w-full overflow-y-scroll">

                <div className="md:w-1/2 w-full md:h-full bg-color02 rounded-lg shadow-lg p-3 grid place-items-center" id="project_detail_selected_card">
                    <div className="bg-color03 md:h-full h-96 w-full flex flex-col" id="project_01">
                        <div 
                            className="h-full w-full relative">
                            <Image 
                                src={`${selectedProject.image_src}`} 
                                alt='photo' 
                                fill={true} 
                                style={{objectFit: "cover", objectPosition: 'center', borderRadius: '0.5rem'}}
                            />
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 w-full bg-color02 rounded-lg p-3">

                    <p className="font-bold text-lg py-3">
                        {selectedProject.name}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {selectedProject.topics.map((topic:string, index:number) => (
                            <div key={index} className="text-sm py-1 px-2 rounded-xl shadow-lg bg-color04">
                                {topic}
                            </div>
                        ))}
                    </div>

                    <p className="font-light text-justify py-3">
                        {content.projects[Number(selectedProject.id)].desc}
                    </p>

                    <p className="flex flex-col gap-1 pt-5">
                        <span>{content.linkRepo}</span>
                        <a href={`${selectedProject.repo_link}`} target="_blank" className="text-sm hover:opacity-50 duration-200">
                            {selectedProject.repo_link}
                        </a>
                    </p>

                    {selectedProject.project_link && 
                        <p className="flex flex-col gap-1 pt-5">
                            <span>{content.linkProject}</span>
                            <a href={`${selectedProject.project_link}`} target="_blank" className="text-sm hover:opacity-50 duration-200 break-words">
                                {selectedProject.project_link}
                            </a>
                        </p>
                    }
                    
                </div>

            </div>
        </>
    )


}
import Image from "next/image"
import { Project } from "./Projects";
import ProjectShowcase from "./ProjectShowcase";

type Props = {
    closeFunc:()=>void;
    selectedProject:Project;
    content:any;
}

export default function SelectedProject({closeFunc, selectedProject, content}:Props) {

    return (

        <div className="h-fit overflow-y-scroll">
            {/* CLOSE BUTTON */}
            <div className="absolute top-0 w-full flex justify-end items-center rounded-t-lg">
                <button className="h-12 w-12 mt-4 mr-5 bg-color01 rounded-lg hover:bg-color04 text-colorText duration-200 text-2xl font-extralight z-30" onClick={closeFunc}>
                    X
                </button>
            </div>

            <div className="flex flex-col min-h-full h-fit w-full">

                <div className="w-full h-[400px] bg-color02 rounded-t-lg shadow-lg grid place-items-center" id="project_detail_selected_card">
                    <div className="bg-color03 h-full w-full flex flex-col" id="project_01">
                        <ProjectShowcase selectedProject={selectedProject}/>
                    </div>
                </div>

                <div className="w-full h-fit flex-grow bg-color02 rounded-b-lg p-3">

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
        </div>
    )


}
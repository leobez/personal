import Image from "next/image"
import { LocalizedProjectContent, Project, ShowCaseDesc } from "./types";
import ProjectShowcase from "./ProjectShowcase";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
    closeFunc:()=>void;
    selectedProject:Project;
    localizedProps:{
        l_project:LocalizedProjectContent,
        l_linkRepo:string,
        l_linkProject:string,
    };
}

export default function SelectedProject({
    closeFunc, 
    selectedProject, 
    localizedProps,
}:Props) {

    return (

        <div className="h-fit overflow-y-scroll">

            {/* CLOSE BUTTON */}
            <div className="absolute top-0 w-full flex justify-end items-center rounded-t-lg">
                <button className="h-12 w-12 mt-4 mr-10 border-2 border-black rounded-lg bg-color04 text-colorText duration-200 text-2xl font-extralight z-30 grid place-items-center" onClick={closeFunc}>
                    <IoCloseOutline size={40}/>
                </button>
            </div>

            {/* PROJECT CONTENT */}
            <div className="flex flex-col min-h-full h-fit w-full">

                <div className="w-full h-[400px] bg-color02 rounded-t-lg shadow-lg grid place-items-center" id="project_detail_selected_card">
                    <div className="bg-color03 h-full w-full flex flex-col" id="project_01">
                        <ProjectShowcase 
                            selectedProject={selectedProject}
                            showcaseContent={localizedProps.l_project.showcaseDesc}
                        />
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
                        {localizedProps.l_project.projectDesc}
                    </p>

                    <p className="flex flex-col gap-1 pt-5">
                        <span>{localizedProps.l_linkRepo}</span>
                        <a href={`${selectedProject.repo_link}`} target="_blank" className="text-sm hover:opacity-50 duration-200">
                            {selectedProject.repo_link}
                        </a>
                    </p>

                    {selectedProject.project_link && 
                        <p className="flex flex-col gap-1 pt-5">
                            <span>{localizedProps.l_linkProject}</span>
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
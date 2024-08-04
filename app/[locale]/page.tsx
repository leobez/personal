import AboutMe from "@/components/home/AboutMe/AboutMe";
import Contact from "@/components/home/Contact";
import Curriculum from "@/components/home/Curriculum";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Competences from "@/components/home/Competences/Competences";
import ProjectsEntry from "@/components/home/Projects/ProjectsEntry";

export default function Home() {

  return (
    <div className="bg-color02 p-3 rounded-lg shadow-lg min-h-screen flex flex-col gap-3">

{/* <div>
        <AboutMe/>
      </div> */}

      <div>
        <Competences/>
      </div>

{/*       <div>
        <Education/>
      </div> */}

{/*       <div>
        <Experience/>
      </div> */}

{/*       <div>
        <ProjectsEntry/>
      </div> */}

{/*       <div>
        <Curriculum/>
      </div> */}

{/*       <div>
        <Contact/>
      </div> */}

    </div>
  ); 
}

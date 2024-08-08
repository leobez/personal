import AboutMe from "@/components/home/AboutMe/AboutMe";
import Contact from "@/components/home/Contact";
import Curriculum from "@/components/home/Curriculum";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Competences from "@/components/home/Competences/Competences";
import ProjectsEntry from "@/components/home/Projects/ProjectsEntry";

export default function Home() {

  return (
    <div className="bg-color02 p-3 rounded-lg shadow-lg min-h-screen flex flex-col gap-3" id="section_root">

{/*       <div id="about_me" className="h-fit section scroll-mt-24">
        <AboutMe/>
      </div>

      <div id="competence" className="h-fit section scroll-mt-24">
        <Competences/>
      </div>

      <div id="education" className="h-fit section scroll-mt-24">
        <Education/>
      </div> */}

{/*       <div>
        <Experience/>
      </div> */}

      <div id="projects" className="h-fit section scroll-mt-24">
        <ProjectsEntry/>
      </div>

{/*       <div id="curriculum" className="h-fit section scroll-mt-24">
        <Curriculum/>
      </div> */} 

{/*       <div>
        <Contact/>
      </div> */}

    </div>
  ); 
}

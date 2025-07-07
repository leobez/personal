import AboutMe from "@/components/home/AboutMe/AboutMe";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Competences from "@/components/home/Competences/Competences";

export default function Home() {

  return (

    <div className="bg-white text-black min-h-screen flex flex-col py-2 gap-2">

      <AboutMe/>
    


      {/* <div id="about_me" className="h-fit section scroll-mt-24">
      </div>

      <div id="competence" className="h-fit section scroll-mt-24"> 
        <Competences/>
      </div> */}

      {/* <div id="projects" className="h-fit section scroll-mt-24">
        <ProjectsEntry/>
      </div> */}

      {/* <div id="education" className="h-fit section scroll-mt-24"> 
        <Education/>
      </div> */}

{/*   <div id="experience" className="h-fit section scroll-mt-24">
        <Experience/>
      </div> */}

{/*   <div>
        <Contact/>
      </div> */} 

    </div>
  ); 
}

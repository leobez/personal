import AboutMe from "@/components/home/AboutMe/AboutMe";
import Contact from "@/components/home/Contact";
import Curriculum from "@/components/home/Curriculum";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects/Projects";
import Competences from "@/components/home/Competences/Competences";

export default function Home() {

  return (
    <div className="bg-color02 p-5 rounded-lg shadow-lg min-h-screen flex flex-col gap-5">

{/*       <div className="animate-fade-right">
        <AboutMe/>
      </div>

      <div className="animate-fade-left">
        <Competences/>
      </div>

      <div>
        <Education/>
      </div>

      <div>
        <Experience/>
      </div> */}

      <div>
        <Projects/>
      </div>

{/*       <div>
        <Curriculum/>
      </div>

      <div>
        <Contact/>
      </div> */}

    </div>
  ); 
}

import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/Contact";
import Curriculum from "@/components/home/Curriculum";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Technologies from "@/components/home/Technologies";

export default function Home() {

  return (
    <div className="bg-color02 p-5 rounded-lg shadow-lg min-h-screen flex flex-col gap-5">
      <AboutMe/>

      <Education/>

      <Technologies/>

      <Experience/>

      <Projects/>

      <Curriculum/>

      <Contact/>

    </div>
  ); 
}

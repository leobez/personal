import AboutMe from "@/components/home/AboutMe/AboutMe";
import Education from "@/components/home/Education/Education";
import Experience from "@/components/home/Experience/Experience";
import Competences from "@/components/home/Competences/Competences";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {

  return (

    <div className="min-h-screen flex flex-col py-2">
      <AboutMe/>
      <SectionDivider/>
      <Competences/>
      <SectionDivider/>
      <Experience/>
      <SectionDivider/>
      <Education/>
    </div>
    
  ); 
}

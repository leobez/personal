'use client'

import AboutMe from "@/components/home/AboutMe/AboutMe";
import Education from "@/components/home/Education/Education";
import Experience from "@/components/home/Experience/Experience";
import Competences from "@/components/home/Competences/Competences";
import SectionDivider from "@/components/SectionDivider";
import { ThemeMap, useThemeStore } from "@/store/useThemeStore";

export default function Home() {

  const { theme } = useThemeStore()

  return (

    <div 
      className="min-h-screen flex flex-col py-2 duration-500 ease-in-out"
      style={{ backgroundColor: ThemeMap[theme].mainBg }}
      >
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

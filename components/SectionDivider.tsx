'use client'

import { ThemeMap, useThemeStore } from "@/store/useThemeStore";
import { HiMiniComputerDesktop } from "react-icons/hi2";

export default function SectionDivider() {

  const {theme} = useThemeStore()

  return (
    <div className="relative flex items-center justify-center">
      
      <div 
        style={{
          backgroundColor: ThemeMap[theme].mainFont
        }}
        className="absolute w-full h-[2px] transition-colors duration-500 ease-in-out" />

      <div 
        style={{
          backgroundColor: ThemeMap[theme].mainBg,
          color: ThemeMap[theme].sectionFont,
        }}
        className="relative px-4 text-sm flex items-center gap-2 transition-colors duration-500 ease-in-out">

        <HiMiniComputerDesktop/>
        Léo B.
        <HiMiniComputerDesktop/>
      </div>

    </div>
  )
}

'use client'

import { ThemeMap, useThemeStore } from "@/store/useThemeStore"

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = "", id }: Props) {

  const {theme} = useThemeStore()
  
  return (
    <section
      style={{ 
        backgroundColor: ThemeMap[theme].sectionBg,
        color: ThemeMap[theme].sectionFont
      }}  
      id={id}
      className={`
        transition-colors duration-500 ease-in-out
        w-full
        p-6
        flex flex-col gap-6
        scroll-mt-24
        rounded-xl
        my-10
        ${className}
      `}
    >
      <div className="max-w-4xl w-full mx-auto">
        {children}
      </div>
    </section>
  )
}

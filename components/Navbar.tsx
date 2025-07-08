"use client";

import { FaUser, FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";
import { Theme, ThemeMap, ThemesOptions, useThemeStore } from "@/store/useThemeStore";

type NavItem = {
  id: string;
  label: string;
  icon: IconType;
};

const navItems: NavItem[] = [
  { id: "about", label: "Sobre", icon: FaUser },
  { id: "competences", label: "Competências", icon: FaCode },
  { id: "experience", label: "Experiência", icon: FaBriefcase },
  { id: "education", label: "Educação", icon: FaGraduationCap },
];

export default function Navbar() {

  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, setTheme } = useThemeStore();
  
  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          const middle = scrollY + window.innerHeight / 2;
          if (middle >= offsetTop && middle < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [popupOpen, setPopupOpen] = useState(false);

  function handleClick(color: string) {
    console.log("Tema selecionado:", color);
    setTheme(color as Theme)
  }

  return (
    <nav className="gap-2 items-center relative md:flex hidden">

      {/* NAV ITEMS */}
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = activeSection === id;
        return (
          <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            key={id}
            href={`#${id}`}
            style={{
              backgroundColor: ThemeMap[theme].mainBg,
              color: ThemeMap[theme].mainFont,
            }}
            className={`group flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-full transition-all`}>

            <Icon className="text-xl" />

            <span
              style={{
                transitionDuration: isActive || hovered ? "200ms" : "800ms",
              }}
              className={`
                transition-all ease-in-out transform
                overflow-hidden whitespace-nowrap
                ${isActive ? "opacity-100 max-w-xs scale-100" : "opacity-0 max-w-0 scale-95"}
                group-hover:opacity-100 group-hover:max-w-xs group-hover:scale-100
              `}
            >
              {label}
            </span>

          </a>
        );
      })}

      <button
        onClick={() => setPopupOpen(!popupOpen)}
        key={'theme'}
        className={`
          group flex items-center gap-2 text-sm px-3 py-2 rounded-full transition-all
          text-white hover:text-black hover:bg-white hover:bg-white"}
        `}
        >
        <IoIosColorPalette className="text-xl" />

      </button>

      {popupOpen && (

        <div
          onMouseLeave={() => setPopupOpen(false)}
          style={{
            backgroundColor: ThemeMap[theme].sectionBg
          }}
          className="absolute -right-16 -top-2 mt-2 rounded-xl shadow-xl p-4 flex flex-col gap-4 z-50 transition-all duration-200"
        >
          {ThemesOptions.map(({ name, icon }) => {
            const isActive = name === theme;
            return (
              <button
                key={name}
                onClick={() => handleClick(name)}
                title={name}
                className={`w-7 h-7 rounded-full border-2 relative transition-all duration-300
                  ${isActive ? 'ring-2 ring-offset-2 ring-black dark:ring-white' : 'border-gray-300'}
                  hover:scale-110 hover:ring-1 hover:ring-offset-1`}
                style={{ backgroundColor: icon }}
              >
                {isActive && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

    </nav>
  );
}


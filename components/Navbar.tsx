"use client";

import { FaUser, FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";
import { Theme, ThemeMap, ThemesOptions, useThemeStore } from "@/store/useThemeStore";
import ThemeToggle from "./ThemeToggle";

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

  const [ hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme } = useThemeStore();
  
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
            className={`
              group
              grid grid-cols-[auto,0fr] items-center
              text-sm px-3 py-2 rounded-full transition-all
              duration-300 ease-in-out
              hover:grid-cols-[auto,1fr]
              ${isActive ? "grid-cols-[auto,1fr]" : ""}
            `}
          >
            <Icon className="text-xl justify-self-center" />

            <span
              className={`
                overflow-hidden whitespace-nowrap
                opacity-0 scale-95 transition-all duration-300 ease-in-out
                group-hover:opacity-100 group-hover:scale-100
                ${isActive ? "opacity-100 scale-100" : ""}
                ml-2
              `}
            >
              {label}
            </span>
          </a>
        );
      })}

      <ThemeToggle />

    </nav>
  );
}


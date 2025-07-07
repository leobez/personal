"use client";

import { FaUser, FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";

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

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          const middle = scrollY + window.innerHeight / 2;
          if (middle >= offsetTop && middle < offsetTop + offsetHeight) {
            console.log('item.id: ', item.id)
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
    <nav className="bg-black text-white flex gap-2 items-center">
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = activeSection === id;
        return (
          <a
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            key={id}
            href={`#${id}`}
            className={`
              group flex items-center gap-2 text-sm px-3 py-2 rounded-full transition-all
              ${isActive ? "bg-white text-black font-medium" : "text-white hover:text-black hover:bg-white"}
            `}
          >
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
    </nav>
  );
}


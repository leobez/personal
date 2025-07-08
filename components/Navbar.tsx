"use client";

import { FaUser, FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import { IoIosColorPalette } from "react-icons/io";

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
  { id: "theme", label: "Tema", icon: IoIosColorPalette },
];

const themes = [
  { name: "Azul", color: "#3b82f6" },
  { name: "Vermelho", color: "#ef4444" },
  { name: "Verde", color: "#22c55e" },
  { name: "Amarelo", color: "#eab308" },
  { name: "Roxo", color: "#8b5cf6" },
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

  const [popupOpen, setPopupOpen] = useState(false);

  // Função exemplo para lidar com clique da cor
  function handleClick(color: string) {
    console.log("Tema selecionado:", color);
    // Aqui você pode disparar alteração real de tema (contexto, CSS, etc)
    setPopupOpen(false); // fecha o popup
  }

  return (
    <nav className="bg-black text-white flex gap-2 items-center">

      {/* NAV ITEMS */}
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = activeSection === id;
        return (
          <>
            {id === "theme" ? (
              <button
                onMouseEnter={() => setPopupOpen(true)}
                onMouseLeave={() => setPopupOpen(false)}
                key={id}
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

              </button>
            ) : (
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
            )}
          </>

        );
      })}

      {/* Popup de seleção de cores */}
      {popupOpen && (
        <div 
        className="absolute right-0 bg-black text-white rounded-md shadow-lg p-3 flex gap-3 z-50">
          {themes.map(({ name, color }) => (
            <button
              key={name}
              onClick={() => handleClick(color)}
              title={name}
              className="w-8 h-8 rounded-full border border-gray-300 hover:ring-2 hover:ring-offset-1"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}


    </nav>
  );
}


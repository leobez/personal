import { useState } from "react";

export function NavItem({ label, icon: Icon, isActive }: any) {
  const [hovered, setHovered] = useState(false);

  const shouldUseQuickExit = !isActive && !hovered;

  return (
    <a
      href={`#${label.toLowerCase()}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-center gap-2"
    >
      <Icon className="text-xl" />
      <span
        className={`
          transition-text
          overflow-hidden whitespace-nowrap
          ${isActive ? "opacity-100 max-w-xs scale-100" : "opacity-0 max-w-0 scale-95"}
          ${shouldUseQuickExit ? "quick-exit" : ""}
        `}
      >
        {label}
      </span>
    </a>
  );
}

import { House, User, FolderCode } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  section: string;
}

const NAV_LIST: NavItem[] = [
  { icon: House, label: "Home", section: "home" },
  { icon: User, label: "About", section: "about" },
  { icon: FolderCode, label: "Projects", section: "projects" },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (targetId: string) => {
    const section = (document.getElementById(targetId) as HTMLElement) || null;
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={` ${
        showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } bg-[#1a1a1a] text-[#F6F6F6]
        md:fixed md:bottom-4 md:left-1/2 md:-translate-x-1/2
        z-10 md:w-auto w-full md:h-auto h-10
        flex md:justify-between items-center
        md:border border-[#F6F6F6] md:rounded-3xl
        nav-shadow duration-500 md:px-2 px-0 md:py-2
      `}
    >
      <ul className="flex flex-row md:items-center w-full md:w-auto">
        {NAV_LIST.map(({ icon: Icon, label, section }, id) => (
          <li key={id} className="w-full md:w-auto">
            <button
              className="
                relative flex md:flex-col flex-row items-center justify-center
                w-full md:w-auto md:px-4 md:py-2 cursor-pointer md:rounded-3xl
                hover:bg-[#F6F6F6] hover:text-[#1a1a1a] duration-200 group
                h-10
              "
              onClick={() => handleScroll(section)}
            >
              <Icon className="md:w-5 md:h-5 w-6 h-6" />

              {/* Tooltip na md+ */}
              <span
                className="
                  hidden md:absolute md:bottom-full md:mb-1 md:left-1/2 md:-translate-x-1/2
                  md:text-[#1a1a1a] md:bg-[#F6F6F6] md:rounded-3xl md:whitespace-nowrap 
                  md:font-medium md:text-[0.775rem] md:px-2 md:py-1 md:group-hover:block
                "
              >
                {label}
              </span>

              {/* Label na md- */}
              <span className="md:hidden ml-2 font-medium">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

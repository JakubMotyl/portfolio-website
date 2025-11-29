import { House, User, FolderCode, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  section: string;
}

const NAV_LIST: NavItem[] = [
  { icon: House, label: "Home", section: "home" },
  { icon: Code, label: "Stack", section: "skills" },
  { icon: User, label: "About", section: "about" },
  { icon: FolderCode, label: "Projects", section: "projects" },
];

export default function Navbar() {
  const handleScroll = (targetId: string) => {
    const section = (document.getElementById(targetId) as HTMLElement) || null;
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-center md:py-5 md:h-24 h-10">
      <div
        className={` bg-background text-text-main
      md:w-fit w-full flex md:justify-between items-center
      md:border border-border hover:border-border-hover muted md:rounded-2xl
      nav-shadow duration-300 md:px-2 px-0 md:py-2
    `}
      >
        <ul className="flex flex-row md:items-center w-full md:w-auto">
          {NAV_LIST.map(({ icon: Icon, label, section }, id) => (
            <li key={id} className="w-full md:w-auto">
              <button
                className="
              relative flex md:flex-col flex-row items-center justify-center
              w-full md:w-auto md:px-4 md:py-2 cursor-pointer md:rounded-2xl
              hover:bg-text-main hover:text-background duration-200 group
              h-10
            "
                onClick={() => handleScroll(section)}
              >
                <Icon className="h-5 w-5" />

                {/* Tooltip na md+ */}
                <span
                  className="
                hidden md:absolute md:-bottom-8 md:mb-1 md:left-1/2 md:-translate-x-1/2
                md:text-background md:bg-text-main md:rounded-3xl md:whitespace-nowrap 
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
      </div>
    </nav>
  );
}

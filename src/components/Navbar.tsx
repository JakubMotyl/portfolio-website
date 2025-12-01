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
    <nav className="flex justify-center py-5 h-24">
      <div
        className={` bg-background text-text-main
      w-fit flex justify-between items-center
      border border-border hover:border-border-hover muted rounded-2xl
      nav-shadow duration-300 px-2 py-2
    `}
      >
        <ul className="flex flex-row items-center w-auto">
          {NAV_LIST.map(({ icon: Icon, label, section }, id) => (
            <li key={id} className="w-full md:w-auto">
              <button
                className="
              relative flex flex-col items-center justify-center
              w-auto px-4 py-2 cursor-pointer rounded-2xl
              hover:bg-text-main hover:text-background duration-200 group
              h-10
            "
                onClick={() => handleScroll(section)}
              >
                <Icon className="h-5 w-5" />
                <span
                  className="
                    hidden absolute -bottom-8 mb-1 left-1/2 -translate-x-1/2
                    text-background bg-text-main rounded-3xl whitespace-nowrap 
                    font-medium text-[0.775rem] px-2 py-1 group-hover:block
                  "
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

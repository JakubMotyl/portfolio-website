import { House, User, Code2, FolderCode } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
}

const NAV_LIST: NavItem[] = [
  { icon: House, label: "Home" },
  { icon: User, label: "About" },
  { icon: Code2, label: "Skills" },
  { icon: FolderCode, label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10 px-2 py-2 flex items-center justify-between bg-[#1a1a1a] text-[#F6F6F6] border border-[#F6F6F6] rounded-3xl nav-shadow">
      <ul className="flex items-center">
        {NAV_LIST.map(({ icon: Icon, label }, id) => (
          <li key={id}>
            <button className="relative flex items-center gap-2 px-5 py-2 cursor-pointer rounded-3xl hover:bg-[#F6F6F6] hover:text-[#1a1a1a] duration-200 group">
              <Icon className="md:w-5 md:h-5 w-4 h-4" />
              <span className="absolute hidden bottom-full mb-1 left-1/2 -translate-x-1/2 text-[#1a1a1a] bg-[#F6F6F6] rounded-3xl whitespace-nowrap font-medium text-[0.775rem] px-2 py-1 group-hover:block cursor-auto">
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

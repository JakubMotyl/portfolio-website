import {
  SiJavascript,
  SiReact,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import type { SkillsProps } from "../types";

export const SKILLS: SkillsProps[] = [
  {
    icon: SiReact,
    label: "React",
    color: "#61DAFB",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    color: "#3178C6",
  },
  {
    icon: SiJavascript,
    label: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    icon: SiHtml5,
    label: "HTML5",
    color: "#E34F26",
  },
  {
    icon: SiCss3,
    label: "CSS3",
    color: "#1572B6",
  },
  {
    icon: SiGit,
    label: "Git",
    color: "#F05032",
  },
  {
    icon: SiVite,
    label: "Vite",
    color: "#646CFF",
  },
];

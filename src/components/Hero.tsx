import {
  SiJavascript,
  SiReact,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface SkillsProps {
  icon: IconType;
  label: string;
  color: string;
}

const SKILLS: SkillsProps[] = [
  {
    icon: SiReact,
    label: "React",
    color: "#61DAFB",
  },
  {
    icon: SiTypescript,
    label: "Typescript",
    color: "#3178C6",
  },
  {
    icon: SiJavascript,
    label: "Javascript",
    color: "#F7DF1E",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwindcss",
    color: "#06B6D4",
  },
  {
    icon: SiHtml5,
    label: "HTML",
    color: "#E34F26",
  },
  {
    icon: SiCss3,
    label: "CSS",
    color: "#1572B6",
  },
  {
    icon: SiGit,
    label: "Git",
    color: "#F05032",
  },
];

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-between md:justify-start items-center
      md:h-screen h-[calc(100vh-2.5rem)] text-[#F6F6F6] 
      2xl:gap-20 md:gap-10 2xl:px-20 2xl:py-20 md:px-10 md:py-10 p-7"
    >
      <div className="inline-block md:text-[2.25rem] text-[1.6rem]">
        <p className="typed">Hey, I'm Jakub 👋</p>
      </div>
      <div>
        <p className="md:text-[5.5rem] text-[4rem] font-semibold text-center leading-tight tracking-wide">
          <span className="bg-linear-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Frontend
          </span>{" "}
          <br />
          <span className="text-white">React Developer</span>
        </p>
      </div>
      <div>
        <p className="md:text-[1.25rem] text-[0.95rem] font-light text-center max-w-xl mx-auto text-[#d8d8d8]">
          Passionate Frontend React Developer, building sleek and interactive
          apps - based in{" "}
          <span className="bg-linear-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            {" "}
            Warsaw
          </span>{" "}
          📍
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <span className="md:text-[1.35rem] text-[1rem] text-[#F6F6F6] whitespace-nowrap">
          Tech Stack:
        </span>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {SKILLS.map(({ icon: Icon, label, color }, id) => (
            <div key={id} className="flex items-center flex-col space-y-1.5">
              <Icon className="tech" style={{ color }} />
              <span className="text-[#F6F6F6] font-bold md:text-[0.775rem] text-[0.7rem]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

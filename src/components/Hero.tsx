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
import { useEffect, useState } from "react";

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
    label: "Tailwind CSS",
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
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirst(true);
    }, 1500);
    const timer2 = setTimeout(() => {
      setShowSecond(true);
    }, 2000);
    const timer3 = setTimeout(() => {
      setShowThird(true);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section
      className="flex flex-col justify-between md:justify-start items-center
      md:h-screen h-[calc(100vh-2.5rem)] text-[#F6F6F6] 
      2xl:gap-20 md:gap-10 section-p"
      id="home"
    >
      <div className="inline-block md:text-[2.25rem] text-[1.6rem]">
        <p className="typed">Hey, I'm Jakub 👋</p>
      </div>
      <div>
        <p
          className={`md:text-[5.5rem] text-[4rem] font-semibold text-center leading-tight tracking-wide duration-500
                    ${
                      showFirst
                        ? " opacity-100 translate-y-0"
                        : " opacity-0 translate-y-3"
                    }
        `}
        >
          <span className="bg-linear-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Frontend
          </span>{" "}
          <br />
          <span className="text-white">React Developer</span>
        </p>
      </div>
      <div>
        <p
          className={`md:text-[1.25rem] text-[0.95rem] font-light text-center md:max-w-xl max-w-lg mx-auto text-[#d8d8d8] duration-500
                      ${
                        showSecond
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-3"
                      } duration-200`}
        >
          Passionate Frontend React Developer, building sleek and interactive
          apps - based in <span className="custom-text">Warsaw</span>,{" "}
          <span className="custom-text">Poland</span> 📍
        </p>
      </div>
      <div
        className={`flex flex-col gap-6 items-center ${
          showThird ? "opacity-100" : "opacity-0"
        } duration-500`}
      >
        <span className="md:text-[1.35rem] text-[1rem] text-[#F6F6F6] whitespace-nowrap">
          Technical Skills:
        </span>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {SKILLS.map(({ icon: Icon, label, color }, id) => (
            <div key={id} className="flex items-center flex-col space-y-1.5">
              <Icon className="tech" style={{ color }} />
              <span className="tech-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

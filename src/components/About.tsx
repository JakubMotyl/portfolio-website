import AboutImg from "../assets/about.svg";
import { SiGithub, SiLinkedin } from "react-icons/si";
import type { IconType } from "react-icons";

type LinksProps = {
  icon: IconType;
  label: string;
  color: string;
  link: string;
};

const SOCIALS: LinksProps[] = [
  {
    icon: SiGithub,
    label: "Github",
    color: "#FFF",
    link: "https://github.com/JakubMotyl",
  },
  {
    icon: SiLinkedin,
    label: "Linkedin",
    color: "#0A66C2",
    link: "https://www.linkedin.com/in/jakub-motyl-141b13253/",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center text-text-main section-p 2xl:gap-20 gap-10"
    >
      <div>
        <p className="text-[3rem] font-semibold">About me</p>
      </div>
      <div className="flex items-center md:flex-row flex-col md:gap-10 gap-20 w-full max-w-6xl mx-auto">
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <p className="2xl:text-[1.15rem] md:text-[1.05rem] text-[0.95rem] leading-relaxed text-text-muted">
            Hey, I'm Jakub! I'm a third-year Computer Science student and{" "}
            <span className="font-bold text-text-main">Frontend Developer</span>{" "}
            who specializes in building responsive interfaces using{" "}
            <span className="text-text-main font-medium">React</span>,{" "}
            <span className="text-text-main font-medium">TypeScript</span>, and{" "}
            <span className="text-text-main font-medium">Tailwind CSS</span>,
            with a strong focus on User Experience.
            <br className="block mt-2" />
            Beyond coding, I maintain an active lifestyle through sports and
            unwind with video games.
          </p>
          <div className="flex items-center justify-between md:flex-row flex-col gap-6">
            <div className="flex items-center gap-6">
              {SOCIALS.map(({ icon: Icon, label, color, link }, id) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-y-1 group"
                >
                  <Icon
                    className="2xl:w-10 2xl:h-10 md:w-9 md:h-9 h-8 w-8 cursor-pointer"
                    style={{ color }}
                  />
                  <span className="tech-label group-hover:underline">
                    {label}
                  </span>
                </a>
              ))}
            </div>
            <div className="flex gap-6">
              <button className="btn-cv nav-shadow font-bold md:text-[0.825rem] text-[0.75rem]">
                Download <span className="custom-text">CV</span> [PL]
              </button>
              <button className="btn-cv nav-shadow font-bold md:text-[0.825rem] text-[0.75rem]">
                Download <span className="custom-text">CV</span> [EN]
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={AboutImg}
            alt="About_Image"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

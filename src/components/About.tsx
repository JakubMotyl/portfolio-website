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
      className="flex flex-col items-center text-[#F6F6F6] section-p 2xl:gap-20 gap-10"
    >
      <div>
        <p className="text-[3rem] text-[#FFF] font-semibold">About me</p>
      </div>
      <div className="flex items-center md:flex-row flex-col md:gap-10 gap-20 w-full max-w-6xl mx-auto">
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <p className="2xl:text-[1.15rem] md:text-[1.05rem] text-[0.95rem]leading-relaxed">
            I'm a third-year Computer Science student and a Junior Frontend
            Developer with strong skills in{" "}
            <span className="custom-text">React</span>,{" "}
            <span className="custom-text">Tailwind CSS</span>,{" "}
            <span className="custom-text">JavaScript</span> and experience with{" "}
            <span className="custom-text">TypeScript</span>. <br /> I focus on
            creating responsive and modern web applications with a strong on
            user experience. I enjoy building and improving my skills through
            hands-on projects.
          </p>
          <div className="flex gap-6 justify-center">
            {SOCIALS.map(({ icon: Icon, label, color, link }, id) => (
              <a key={id} href={link} target="_blink" className="space-y-1">
                <Icon className="tech" style={{ color }} />
                <span className="tech-label">{label}</span>
              </a>
            ))}
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

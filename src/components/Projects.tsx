import FitCoreImg from "../assets/images/fitcore.png";
import FilmZoneImg from "../assets/images/filmzone.png";
import CryptoTradeImg from "../assets/images/cryptotrade.png";
import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";

const ProjectBox = ({ details }: { details: projectDetailsProps }) => {
  const { title, desc, github, techStack, liveDemo, image } = details;

  return (
    <div className="flex w-full items-center gap-6 md:flex-row flex-col">
      <div className="md:w-1/2 w-full flex flex-col items-center gap-6">
        <span className="font-bold md:text-[1.35rem] text-[1.25rem]">
          {title}
        </span>
        <p className="leading-relaxed md:text-[0.9rem] text-[0.85rem] text-center max-w-lg">
          {desc}
        </p>
        <ul className="flex items-center gap-4 flex-wrap">
          {techStack.map((stack, id) => (
            <li key={id}>
              <span
                className="bg-transparent px-4 py-2 rounded-3xl
                text-center text-[#F6F6F6] border border-[#F6F6F6] 
                font-bold md:text-[0.825rem] text-[0.75rem]"
              >
                {stack}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-1 group"
          >
            <SiGithub className="tech md:w-6 md:h-6 w-5 h-5" />
            <span className="tech-label group-hover:underline">Github</span>
          </a>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-1 group"
          >
            <MdOpenInNew className="tech md:w-6 md:h-6 w-5 h-5" />
            <span className="tech-label group-hover:underline">Live</span>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg img-shadow"
        />
      </div>
    </div>
  );
};

type projectDetailsProps = {
  title: string;
  desc: string;
  github: string;
  techStack: string[];
  liveDemo: string;
  image: string;
};

const projectDetails: projectDetailsProps[] = [
  {
    title: "CryptoTrade",
    desc: "A cryptocurrency dashboard built with TypeScript, React, and Tailwind CSS. It provides real-time market data, dynamic charts, and an intuitive UI for tracking coin prices and performance.",
    github: "https://github.com/JakubMotyl/crypto-dashbord",
    techStack: ["Typescript", "React", "Tailwind CSS", "REST API", "Chart JS"],
    liveDemo: "https://crypto-dashbord-alpha.vercel.app",
    image: CryptoTradeImg,
  },
  {
    title: "FilmZone",
    desc: "A movie discovery app where users can search for films, browse by category, and save favorites. Built with React, React Router, and Tailwind CSS, integrating an external API for dynamic content.",
    github: "https://github.com/JakubMotyl/Movie-search",
    techStack: ["React", "React Router", "Tailwind CSS", "REST API"],
    liveDemo: "https://movie-search-lyart-five.vercel.app",
    image: FilmZoneImg,
  },
  {
    title: "FitCore",
    desc: "A modern fitness app focused on clean UI and engaging user experience. Includes a sign-up page and smooth navigation between workout sections. Built with React, React Router, and Tailwind CSS.",
    github: "https://github.com/JakubMotyl/Gym-app",
    techStack: ["React", "React Router", "Tailwind CSS"],
    liveDemo: "https://gym-app-pink-beta.vercel.app",
    image: FitCoreImg,
  },
];

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center text-[#F6F6F6] section-p 2xl:gap-20 gap-10"
      id="projects"
    >
      <div className="max-w-6xl w-full mx-auto space-y-2">
        <p className="text-[3rem] text-[#FFF] text-center font-semibold">
          Projects
        </p>
        <p
          className="text-center md:text-[1.5rem] text-[1.25rem]  font-medium"
          style={{
            fontFamily: `"Courier New", Courier, monospace`,
          }}
        >
          Things I've built and learned from
        </p>
      </div>
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:space-y-20 space-y-15">
          {projectDetails.map((details, id) => (
            <ProjectBox key={id} details={details} />
          ))}
        </div>
      </div>
    </section>
  );
}

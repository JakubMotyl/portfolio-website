import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
import { projectDetails } from "../data/projects";
import type { projectDetailsProps } from "../types";

const ProjectBox = ({ details }: { details: projectDetailsProps }) => {
  const { id, title, desc, github, techStack, liveDemo, image } = details;

  const isReversed = id % 2 === 0;

  return (
    <div
      className={`flex w-full items-center md:gap-10 gap-20 ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row "
      } flex-col`}
    >
      <div className="md:w-1/2 w-full flex flex-col items-center gap-6">
        <span className="font-bold md:text-[1.35rem] text-[1.25rem] text-text-main">
          {title}
        </span>
        <p className="leading-relaxed md:text-[0.9rem] text-[0.85rem] text-center max-w-lg text-text-muted">
          {desc}
        </p>
        <ul className="flex items-center justify-center gap-4 flex-wrap">
          {techStack.map((stack, id) => (
            <li key={id}>
              <span
                className="bg-transparent px-4 py-2 rounded-2xl
                text-center text-text-main border-2 border-border
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
            className="gap-2 group flex flex-col items-center"
          >
            <SiGithub className="tech md:w-6 md:h-6 w-5 h-5" />
            <span className="tech-label group-hover:underline">Github</span>
          </a>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 group flex flex-col items-center"
          >
            <MdOpenInNew className="tech md:w-6 md:h-6 w-5 h-5" />
            <span className="tech-label group-hover:underline">Live</span>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative overflow-hidden transition-all duration-300 ease-out rounded-2xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group border-2 border-border hover:border-border-hover">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-all duration-300 brightness-80 group-hover:brightness-100"
        />
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center text-text-main section-p 2xl:gap-20 gap-10"
      id="projects"
    >
      <div className="space-y-2">
        <p className="text-[3rem] text-center font-semibold">Projects</p>
        <p className="text-center text-text-muted md:text-[1.5rem] text-[1.25rem] font-light">
          Things I've built and learned from
        </p>
      </div>
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:space-y-20 space-y-15">
          {projectDetails.map((details) => (
            <ProjectBox key={details.id} details={details} />
          ))}
        </div>
      </div>
    </section>
  );
}

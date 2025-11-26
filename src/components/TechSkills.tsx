import { SKILLS } from "../data/techskills";

export default function TechSkills() {
  return (
    <section
      className="text-text-main section-p flex flex-col items-center 2xl:gap-20 gap-10"
      id="skills"
    >
      <div className="max-w-6xl w-full mx-auto space-y-2 text-center">
        <p className="text-[3rem] font-semibold">Skills & Technologies</p>
        <p className="text-center text-text-muted md:text-[1.5rem] text-[1.25rem] font-light">
          The tools I use to bring{" "}
          <span className="custom-text font-medium">ideas to life</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center max-w-6xl mx-auto">
        {SKILLS.map(({ icon: Icon, label, color }, id) => (
          <div
            key={id}
            className="relative group flex items-center bg-surface flex-col gap-4 md:p-8 p-4 border-2 rounded-2xl border-border hover:border-border-hover duration-200 ease-out tech-hover 2xl:w-34 2xl:h-34 md:w-32 md:h-32 h-30 w-30"
          >
            <Icon className="tech h-full w-full" style={{ color }} />
            <span className="font-bold text-text-main md:absolute -top-7 md:text-base text-xs md:hidden block group-hover:block">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

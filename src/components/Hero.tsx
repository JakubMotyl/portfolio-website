import { CiMail } from "react-icons/ci";
import { SiLinkedin } from "react-icons/si";

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-between items-center text-text-main flex-1 2xl:gap-20 md:gap-10 section-p"
      id="home"
    >
      <div className="md:text-[2.25rem] text-[1.6rem]">
        <p>Hello, I'm Jakub 👋</p>
      </div>
      <div>
        <p
          className={`md:text-[5.5rem] text-[4rem] font-semibold text-center leading-tight tracking-wide duration-500`}
        >
          <span className="custom-text">Frontend</span> <br />
          <span>Developer</span>
        </p>
      </div>
      <div>
        <p
          className={`md:text-[1.25rem] text-[0.95rem] font-light text-center md:max-w-xl max-w-lg mx-auto text-[#9CA3AF] duration-500`}
        >
          Frontend Developer specializing in{" "}
          <span className="font-medium text-text-main">React</span> &{" "}
          <span className="font-medium text-text-main">TypeScript</span> to
          build scalable modern web applications. Based in{" "}
          <span className="font-medium text-text-main">Warsaw</span>,{" "}
          <span className="font-medium text-text-main">Poland</span> 📍
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <SiLinkedin className="2xl:w-10 2xl:h-10 md:w-9 md:h-9 h-8 w-8 text-[#0A66C2]" />
          <a
            href="https://www.linkedin.com/in/jakub-motyl-141b13253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:underline duration-200"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-2">
          <CiMail className="2xl:w-10 2xl:h-10 md:w-9 md:h-9 h-8 w-8 text-[#FFF]" />
          <a
            href="mailto:&#x6b;&#x75;&#x62;&#x61;&#x6d;&#x6f;&#x74;&#x79;&#x6c;&#x31;&#x36;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;"
            className="text-text-muted hover:underline duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

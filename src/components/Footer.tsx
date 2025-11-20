import { CiMail } from "react-icons/ci";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="md:text-sm text-xs section-p py-7  flex items-center justify-between max-w-6xl w-full mx-auto">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <SiLinkedin className="md:w-5 md:h-5 w-4 h-4 text-[#0A66C2]" />
          <a
            href="https://www.linkedin.com/in/jakub-motyl-141b13253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d8d8d8] hover:underline duration-200"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-1">
          <CiMail className="md:w-5 md:h-5 w-4 h-4 text-[#FFF]" />
          <a
            href="mailto:&#x6b;&#x75;&#x62;&#x61;&#x6d;&#x6f;&#x74;&#x79;&#x6c;&#x31;&#x36;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;"
            className="text-[#d8d8d8] hover:underline duration-200"
          >
            &#x6b;&#x75;&#x62;&#x61;&#x6d;&#x6f;&#x74;&#x79;&#x6c;&#x31;&#x36;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;
          </a>
        </div>
      </div>
      <p className="text-[#d8d8d8]">© 2025 Jakub Motyl</p>
    </footer>
  );
}

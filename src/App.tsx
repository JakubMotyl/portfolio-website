import IntroOverlay from "./components/IntroOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechSkills from "./components/TechSkills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
        <main className="flex flex-col h-screen relative animation-fade-in">
          <Navbar />
          <Hero />
        </main>
      )}
      <TechSkills />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

import { useEffect, useState } from "react";

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [text, setText] = useState("hello");
  const [fadeState, setFadeState] = useState("opacity-0 translate-y-4");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeState("opacity-100 translate-y-0");
    }, 100);

    const timer2 = setTimeout(() => {
      setFadeState("opacity-0 -translate-y-4");
    }, 1000);

    const timer3 = setTimeout(() => {
      setText("I'm Jakub");
      setFadeState("opacity-100 translate-y-0");
    }, 1500);

    const timer4 = setTimeout(() => {
      setFadeState("opacity-0 -translate-y-4");
    }, 2500);

    const timer5 = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <section className="h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col text-center">
        <h1
          className={`text-text-main md:text-[5rem] text-[4rem] transition-all duration-500 ${fadeState}
          ${text === "hello" ? "font-sac" : "font-inter"}`}
        >
          {text}
        </h1>
      </div>
    </section>
  );
}

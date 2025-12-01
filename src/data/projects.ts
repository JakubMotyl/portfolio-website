import FitCoreImg from "../assets/images/fitcore.png";
import FilmZoneImg from "../assets/images/filmzone.png";
import CryptoTradeImg from "../assets/images/cryptotrade.png";
import QuizAppImg from "../assets/images/quiz-app.png";
import type { projectDetailsProps } from "../types";

export const projectDetails: projectDetailsProps[] = [
  {
    id: 1,
    title: "CryptoTrade",
    desc: "A cryptocurrency dashboard built with TypeScript, React, and Tailwind CSS. It provides real-time market data, dynamic charts, and an intuitive UI for tracking coin prices and performance.",
    github: "https://github.com/JakubMotyl/crypto-dashboard",
    techStack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "CoinGecko API",
      "Chart.js",
    ],
    liveDemo: "https://crypto-dashbord-alpha.vercel.app",
    image: CryptoTradeImg,
  },
  {
    id: 2,
    title: "FilmZone",
    desc: "A movie discovery app where users can search for films, browse by category, and save favorites. Built with React, React Router, and Tailwind CSS, integrating an external API for dynamic content.",
    github: "https://github.com/JakubMotyl/Movie-search",
    techStack: ["React", "Vite", "React Router", "Tailwind CSS", "TMDB API"],
    liveDemo: "https://movie-search-lyart-five.vercel.app",
    image: FilmZoneImg,
  },
  {
    id: 3,
    title: "FitCore",
    desc: "A modern fitness app focused on clean UI and engaging user experience. Includes a sign-up page and smooth navigation between workout sections. Built with React, React Router, and Tailwind CSS.",
    github: "https://github.com/JakubMotyl/Gym-app",
    techStack: ["React", "Vite", "React Router", "Tailwind CSS"],
    liveDemo: "https://gym-app-pink-beta.vercel.app",
    image: FitCoreImg,
  },
  {
    id: 4,
    title: "Quiz App",
    desc: "An interactive quiz application built with vanilla JavaScript, HTML, and CSS. Features include randomized question shuffling, a countdown timer, score tracking, Local Storage integration, and unit tests for randomization logic using Vitest.",
    github: "https://github.com/JakubMotyl/QuizApp-Js",
    techStack: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Vitest"],
    liveDemo: "https://quiz-app-js-alpha.vercel.app/",
    image: QuizAppImg,
  },
];

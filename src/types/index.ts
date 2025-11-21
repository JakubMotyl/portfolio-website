import type { IconType } from "react-icons";

export type projectDetailsProps = {
  id: number;
  title: string;
  desc: string;
  github: string;
  techStack: string[];
  liveDemo: string;
  image: string;
};

export interface SkillsProps {
  icon: IconType;
  label: string;
  color: string;
}

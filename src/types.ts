export interface Member {
  name: string;
  img: string;
  github?: string;
  linkedin?: string;
}

export const PROJECT_CATEGORIES = [
  "Backend",
  "Frontend",
  "Fullstack",
  "IoT",
  "AI Integration",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  categories: ProjectCategory[];
  github: string;
  webapp?: string;
  member?: Member[];
}

export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills?: string[];
}

export interface Education {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export interface SkillGroup {
  title: string;
  skills: { name: string; image: string }[];
}

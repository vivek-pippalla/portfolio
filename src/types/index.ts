export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'programming' | 'dataScience' | 'devOps' | 'database';
}
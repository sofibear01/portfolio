export type SkillCategoryKey = 'frontend' | 'backend' | 'devops' | 'quality' | 'softSkills';

export interface Skill {
  name: string;
  level: number;
  categoryKey: SkillCategoryKey;
}

export interface ProjectStatic {
  id: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface SocialLink {
  key: 'github' | 'linkedin' | 'twitter';
  url: string;
  icon: string;
}

export const PORTFOLIO_STATIC = {
  name: 'Sofia Bearzotti',
  email: 'sofia88837utn@gmail.com',
  highlights: ['Angular', 'TypeScript', 'Node.js', 'Cloud'],
  skills: [
    { name: 'Angular', level: 95, categoryKey: 'frontend' },
    { name: 'TypeScript', level: 92, categoryKey: 'frontend' },
    { name: 'RxJS', level: 88, categoryKey: 'frontend' },
    { name: 'Node.js', level: 85, categoryKey: 'backend' },
    { name: 'REST APIs', level: 90, categoryKey: 'backend' },
    { name: 'PostgreSQL', level: 80, categoryKey: 'backend' },
    { name: 'Docker', level: 78, categoryKey: 'devops' },
    { name: 'Git / CI-CD', level: 88, categoryKey: 'devops' },
    { name: 'Unit Testing', level: 85, categoryKey: 'quality' },
    { name: 'Agile / Scrum', level: 82, categoryKey: 'softSkills' },
  ] satisfies Skill[],
  projects: [
    {
      id: 'ecommerce',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 'taskManager',
      tags: ['Angular', 'Firebase', 'Material Design'],
      github: 'https://github.com',
      featured: true,
    },
    {
      id: 'analytics',
      tags: ['Angular', 'D3.js', 'REST API'],
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 'portfolio',
      tags: ['Angular', 'SCSS', 'Angular Material'],
      github: 'https://github.com',
    },
    {
      id: 'weather',
      tags: ['Angular', 'PWA', 'OpenWeather API'],
      github: 'https://github.com',
    },
    {
      id: 'blogCms',
      tags: ['Angular', 'NestJS', 'MongoDB'],
      github: 'https://github.com',
    },
  ] satisfies ProjectStatic[],
  socialLinks: [
    { key: 'github', url: 'https://github.com/sofibear01', icon: 'code' },
    { key: 'linkedin', url: 'https://www.linkedin.com/in/sofia-bearzotti-2a86b424b/', icon: 'work' },
  ] satisfies SocialLink[],
  navIds: ['home', 'about', 'skills', 'projects', 'contact'] as const,
};

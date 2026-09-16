export type SkillCategoryKey = 'frontend' | 'backend' | 'database' | 'tools' | 'softSkills';

export interface Skill {
  name: string;
  /** File name inside public/icons/tech, without extension. */
  icon?: string;
  categoryKey: SkillCategoryKey;
}

export interface ProjectStatic {
  id: 'fitbyjeny' | 'portfolio';
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export type ContactKey = 'whatsapp' | 'linkedin' | 'github' | 'email';

export interface ContactChannel {
  key: ContactKey;
  label: string;
  handle: string;
  url: string;
  icon: string;
}

export const NAV_IDS = ['about', 'education', 'skills', 'projects', 'contact'] as const;
export type NavId = (typeof NAV_IDS)[number];

export const PORTFOLIO_STATIC = {
  name: 'Sofia Bearzotti',
  firstName: 'Sofia',
  lastName: 'Bearzotti',
  skillCategories: ['frontend', 'backend', 'database', 'tools', 'softSkills'] satisfies SkillCategoryKey[],
  skills: [
    { name: 'Angular', icon: 'angular', categoryKey: 'frontend' },
    { name: 'React', icon: 'react', categoryKey: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', categoryKey: 'frontend' },
    { name: 'Bootstrap', icon: 'bootstrap', categoryKey: 'frontend' },
    { name: 'Angular Material', categoryKey: 'frontend' },

    { name: '.NET Framework', icon: 'dot-net', categoryKey: 'backend' },
    { name: '.NET Core', icon: 'dotnetcore', categoryKey: 'backend' },
    { name: 'C#', icon: 'csharp', categoryKey: 'backend' },
    { name: 'Node.js', icon: 'nodejs', categoryKey: 'backend' },
    { name: 'REST APIs', categoryKey: 'backend' },

    { name: 'SQL Server', icon: 'microsoftsqlserver', categoryKey: 'database' },
    { name: 'PostgreSQL', icon: 'postgresql', categoryKey: 'database' },

    { name: 'Git', icon: 'git', categoryKey: 'tools' },
    { name: 'Postman', icon: 'postman', categoryKey: 'tools' },
    { name: 'Insomnia', icon: 'insomnia', categoryKey: 'tools' },
    { name: 'Figma', icon: 'figma', categoryKey: 'tools' },

    { name: 'Scrum', categoryKey: 'softSkills' },
    { name: 'Jira', categoryKey: 'softSkills' },
    { name: 'Azure DevOps', categoryKey: 'softSkills' },
    { name: 'Functional Analysis', categoryKey: 'softSkills' },
  ] satisfies Skill[],
  projects: [
    {
      id: 'fitbyjeny',
      tags: ['React', 'Node.js', 'Supabase', 'TypeScript'],
      demo: 'https://fitbyjeny.com.ar/',
      image: 'images/fitbyjeny.webp',
    },
    {
      id: 'portfolio',
      tags: ['Angular', 'SCSS', 'SSR'],
      github: 'https://github.com/sofibear01/portfolio',
    },
  ] satisfies ProjectStatic[],
  contact: [
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      handle: '+54 9 3564 35-8071',
      url: 'https://wa.me/5493564358071',
      icon: 'whatsapp-logo',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      handle: 'in/sofia-bearzotti',
      url: 'https://www.linkedin.com/in/sofia-bearzotti-2a86b424b/',
      icon: 'linkedin-logo',
    },
    {
      key: 'github',
      label: 'GitHub',
      handle: '@sofibear01',
      url: 'https://github.com/sofibear01',
      icon: 'github-logo',
    },
    {
      key: 'email',
      label: 'Email',
      handle: 'sofia88837utn@gmail.com',
      url: 'mailto:sofia88837utn@gmail.com',
      icon: 'envelope-simple',
    },
  ] satisfies ContactChannel[],
};

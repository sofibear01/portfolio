export type SkillCategoryKey = 'frontend' | 'backend' | 'database' | 'tools' | 'softSkills';

export interface Skill {
  name: string;
  /** File name inside public/icons/tech, without extension. */
  icon?: string;
  categoryKey: SkillCategoryKey;
}

export interface ProjectStatic {
  id: 'fitbyjeny' | 'store25' | 'portfolio';
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  /** Client work still being built; shown with a badge and a demo note. */
  inProgress?: boolean;
  /** Kept in the data but left out of the page until it's ready to show. */
  hidden?: boolean;
}

export type ContactKey = 'whatsapp' | 'linkedin' | 'github' | 'email';

export interface ContactChannel {
  key: ContactKey;
  label: string;
  handle: string;
  url: string;
  icon: string;
}

export interface JobStatic {
  id: 'oncity' | 'controlglobal' | 'arconsultores';
  company: string;
  stack: string[];
  current?: boolean;
}

export const NAV_IDS = ['about', 'experience', 'education', 'skills', 'projects', 'contact'] as const;
export type NavId = (typeof NAV_IDS)[number];

export const PORTFOLIO_STATIC = {
  name: 'Sofia Bearzotti',
  firstName: 'Sofia',
  lastName: 'Bearzotti',
  experience: [
    {
      id: 'oncity',
      company: 'On City',
      stack: ['Angular', '.NET', 'SQL', 'Azure DevOps'],
      current: true,
    },
    {
      id: 'controlglobal',
      company: 'Control Global',
      stack: ['.NET', 'SQL Server', 'Jira'],
    },
    {
      id: 'arconsultores',
      company: 'Ar Consultores',
      stack: ['.NET', 'Java', 'SQL'],
    },
  ] satisfies JobStatic[],
  skillCategories: ['frontend', 'backend', 'database', 'tools', 'softSkills'] satisfies SkillCategoryKey[],
  skills: [
    { name: 'Angular', icon: 'angular', categoryKey: 'frontend' },
    { name: 'React', icon: 'react', categoryKey: 'frontend' },
    { name: 'Next.js', icon: 'nextjs', categoryKey: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', categoryKey: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', categoryKey: 'frontend' },
    { name: 'Bootstrap', icon: 'bootstrap', categoryKey: 'frontend' },

    { name: '.NET', icon: 'dot-net', categoryKey: 'backend' },
    { name: 'C#', icon: 'csharp', categoryKey: 'backend' },
    { name: 'Node.js', icon: 'nodejs', categoryKey: 'backend' },
    { name: 'REST APIs', categoryKey: 'backend' },

    { name: 'SQL Server', icon: 'microsoftsqlserver', categoryKey: 'database' },
    { name: 'PostgreSQL', icon: 'postgresql', categoryKey: 'database' },
    { name: 'Supabase', categoryKey: 'database' },

    { name: 'Git', icon: 'git', categoryKey: 'tools' },
    { name: 'Postman', icon: 'postman', categoryKey: 'tools' },
    { name: 'Insomnia', icon: 'insomnia', categoryKey: 'tools' },
    { name: 'Figma', icon: 'figma', categoryKey: 'tools' },
    { name: 'Azure DevOps', icon: 'azuredevops', categoryKey: 'tools' },
    { name: 'Jira', icon: 'jira', categoryKey: 'tools' },

    { name: 'Scrum', categoryKey: 'softSkills' },
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
      id: 'store25',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://e-commerce-nine-smoky-45.vercel.app/',
      image: 'images/25store.webp',
      inProgress: true,
      hidden: true,
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

export type SkillCategoryKey = 'frontend' | 'backend' | 'database' | 'tools' | 'softSkills';

export interface Skill {
  name: string;
  icon?: string;
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
  key: 'github' | 'linkedin';
  url: string;
  icon: string;
}

export const PORTFOLIO_STATIC = {
  name: 'Sofia Bearzotti',
  email: 'sofia88837utn@gmail.com',
  highlights: ['Angular', 'TypeScript', 'Node.js'],
  skills: [
    // Frontend
    {
      name: 'Angular',
      icon: 'devicon-angularjs-plain',
      categoryKey: 'frontend'
    },
    {
      name: 'React',
      icon: 'devicon-react-original',
      categoryKey: 'frontend'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain',
      categoryKey: 'frontend'
    },
    {
      name: 'Bootstrap',
      icon: 'devicon-bootstrap-plain',
      categoryKey: 'frontend'
    },
    {
      name: 'Angular Material',
      icon: 'material-icons',
      categoryKey: 'frontend'
    },
  
    // Backend
    {
      name: '.NET Framework',
      icon: 'devicon-dot-net-plain',
      categoryKey: 'backend'
    },
    {
      name: '.NET Core',
      icon: 'devicon-dotnetcore-plain',
      categoryKey: 'backend'
    },
    {
      name: 'C#',
      icon: 'devicon-csharp-plain',
      categoryKey: 'backend'
    },
    {
      name: 'Node.js',
      icon: 'devicon-nodejs-plain',
      categoryKey: 'backend'
    },
    {
      name: 'REST APIs',
      categoryKey: 'backend'
    },
  
    // Database
    {
      name: 'SQL Server',
      icon: 'devicon-microsoftsqlserver-plain',
      categoryKey: 'database'
    },
    {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain',
      categoryKey: 'database'
    },
  
    // Tools
    {
      name: 'Git',
      icon: 'devicon-git-plain',
      categoryKey: 'tools'
    },
    {
      name: 'Postman',
      icon: 'devicon-postman-plain',
      categoryKey: 'tools'
    },
    {
      name: 'Insomnia',
      icon: 'devicon-insomnia-original',
      categoryKey: 'tools'
    },
    {
      name: 'Figma',
      icon: 'devicon-figma-plain',
      categoryKey: 'tools'
    },
  
    // Methodologies
    { name: 'Scrum', categoryKey: 'softSkills' },
    { name: 'Jira', categoryKey: 'softSkills' },
    { name: 'Azure DevOps', categoryKey: 'softSkills' },
    { name: 'Functional Analysis', categoryKey: 'softSkills' }
  ] satisfies Skill[],
  projects: [
    {
      id: 'fitbyjeny',
      tags: ['React', 'Node.js', 'Supabase', 'Typescript'],
      demo: 'https://fitbyjeny.com.ar/',
      featured: true,
    },
    {
      id: 'portfolio',
      tags: ['Angular', 'SCSS', 'Angular Material'],
      github: 'https://github.com/sofibear01/portfolio',
    },
  ] satisfies ProjectStatic[],
  socialLinks: [
    { key: 'github', url: 'https://github.com/sofibear01', icon: 'code' },
    { key: 'linkedin', url: 'https://www.linkedin.com/in/sofia-bearzotti-2a86b424b/', icon: 'work' },
  ] satisfies SocialLink[],
  navIds: ['home', 'about', 'skills', 'projects', 'contact'] as const,
};

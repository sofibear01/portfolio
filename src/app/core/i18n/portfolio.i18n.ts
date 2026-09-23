import type { JobStatic, NavId, ProjectStatic, SkillCategoryKey } from '../data/portfolio.data';

export type Language = 'es' | 'en';

export interface PortfolioTranslations {
  meta: { title: string; description: string };
  skipLink: string;
  nav: Record<NavId, string>;
  header: {
    logoAria: string;
    navAria: string;
    themeLight: string;
    themeDark: string;
    menuOpen: string;
    menuClose: string;
    languageAria: string;
  };
  hero: {
    role: string;
    tagline: string;
    viewProjects: string;
    getInTouch: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  experience: {
    title: string;
    current: string;
    items: Record<JobStatic['id'], { role: string; period: string; summary: string }>;
  };
  education: {
    title: string;
    subtitle: string;
    degree: string;
    university: string;
    graduation: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: Record<SkillCategoryKey, string>;
    /** Display names that differ from the static skill name, keyed by that name. */
    names?: Record<string, string>;
  };
  projects: {
    title: string;
    code: string;
    liveDemo: string;
    inProgress: string;
    items: Record<
      ProjectStatic['id'],
      { title: string; description: string; imageAlt?: string; note?: string }
    >;
  };
  contact: {
    title: string;
    heading: string;
    location: string;
  };
  footer: { tagline: string; rights: string };
}

export const PORTFOLIO_I18N: Record<Language, PortfolioTranslations> = {
  es: {
    meta: {
      title: 'Sofia Bearzotti | Full Stack Developer',
      description:
        'Portfolio de Sofia Bearzotti, Ingeniera en Sistemas y desarrolladora Full Stack. Desarrollo soluciones de software con distintas tecnologías, adaptadas a las necesidades de cada cliente.',
    },
    skipLink: 'Saltar al contenido',
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    header: {
      logoAria: 'Ir al inicio',
      navAria: 'Navegación principal',
      themeLight: 'Cambiar a modo claro',
      themeDark: 'Cambiar a modo oscuro',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      languageAria: 'Idioma',
    },
    hero: {
      role: 'Ingeniera en Sistemas | Full Stack Developer',
      tagline: 'Desarrollo soluciones de software con distintas tecnologías, adaptándome a las necesidades de cada cliente.',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Contáctame',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy Ingeniera en Sistemas y Desarrolladora Full Stack con experiencia en el desarrollo de aplicaciones trabajando con tecnologías como .NET, Angular, React y SQL Server, participando tanto en el desarrollo backend como frontend y colaborando en todas las etapas del ciclo de vida del software.',
        'Además del desarrollo, cuento con experiencia en análisis funcional, documentación técnica y metodologías ágiles. Disfruto trabajar en equipo, comprender las necesidades del negocio y transformarlas en soluciones tecnológicas que aporten valor real.',
      ],
      stats: [
        { value: '3+', label: 'Años de experiencia' },
        { value: 'C1', label: 'Inglés' },
      ],
    },
    experience: {
      title: 'Experiencia',
      current: 'Actualidad',
      items: {
        oncity: {
          role: 'Analista Desarrolladora de Software',
          period: 'Desde marzo 2025',
          summary:
            'En el área de Finanzas, desarrollo integraciones con entidades bancarias y soluciones internas de gestión financiera. Front-end en Angular y back-end en .NET, con bases de datos relacionales y seguimiento de tickets bajo Scrum.',
        },
        controlglobal: {
          role: 'Desarrolladora Fullstack',
          period: 'Mayo 2024 - Marzo 2025',
          summary:
            'Desarrollo back-end en .NET, con integraciones a billeteras virtuales y entidades financieras de varios países, como Mercado Pago, Nave y Yappy. Bases de datos en SQL Server y gestión de proyectos con Scrum y Jira.',
        },
        arconsultores: {
          role: 'Desarrolladora Fullstack',
          period: 'Mayo 2023 - Mayo 2024',
          summary:
            'Soluciones backend en .NET y Java, tanto para la consultora como para el sistema de facturación de un cliente externo. Análisis funcional e interpretación de requerimientos, además del manejo de bases de datos SQL.',
        },
      },
    },
    education: {
      title: 'Educación',
      subtitle: 'Formación académica y desarrollo profesional.',
      degree: 'Ingeniería en Sistemas de Información',
      university: 'Universidad Tecnológica Nacional, Facultad Regional Córdoba',
      graduation: 'Graduada en 2024',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de datos',
        tools: 'Herramientas',
        softSkills: 'Habilidades blandas',
      },
      names: { 'Functional Analysis': 'Análisis funcional' },
    },
    projects: {
      title: 'Proyectos',
      code: 'Código',
      liveDemo: 'Demo en vivo',
      inProgress: 'En desarrollo',
      items: {
        fitbyjeny: {
          title: 'Fit By Jeny',
          description:
            'Sitio web y plataforma desarrollada para una profesional del fitness con gestión de contenido, membresías y procesamiento de pagos.',
          imageAlt: 'Página de inicio de Fit By Jeny',
        },
        store25: {
          title: '25 Store',
          description:
            'Catálogo online para una tienda de tecnología. Muestra precios en pesos y en dólares según la cotización, calcula cuotas con interés, reúne la información de la tienda y deriva cada pedido a WhatsApp para confirmarlo.',
          imageAlt: 'Página de inicio de 25 Store',
          note: 'Proyecto en curso: la demo ya se puede recorrer. No se realizan compras; los pedidos se confirman por WhatsApp.',
        },
        portfolio: {
          title: 'Portfolio',
          description: 'Portfolio personal responsive con modo oscuro y animaciones.',
        },
      },
    },
    contact: {
      title: 'Contacto',
      heading: '¿Tenés un proyecto en mente o querés conectar?',
      location: 'Córdoba, Argentina',
    },
    footer: {
      tagline: 'Hecho con Angular',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    meta: {
      title: 'Sofia Bearzotti | Full Stack Developer',
      description:
        'Portfolio of Sofia Bearzotti, Systems Engineer and Full Stack Developer. I build software solutions with a range of technologies, tailored to the needs of each client.',
    },
    skipLink: 'Skip to content',
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: {
      logoAria: 'Go to top',
      navAria: 'Main navigation',
      themeLight: 'Switch to light mode',
      themeDark: 'Switch to dark mode',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      languageAria: 'Language',
    },
    hero: {
      role: 'Systems Engineer | Full Stack Developer',
      tagline: 'I build software solutions with a range of technologies, tailored to the needs of each client.',
      viewProjects: 'View projects',
      getInTouch: 'Get in touch',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'I am a Systems Engineer and Full Stack Developer with experience building software solutions with technologies such as .NET, Angular, React and SQL Server, contributing to both backend and frontend development while participating in the entire software development lifecycle.',
        'Beyond software development, I have experience in functional analysis, technical documentation, and agile methodologies. I enjoy collaborating with teams, understanding business needs, and turning them into valuable technological solutions.',
      ],
      stats: [
        { value: '3+', label: 'Years of experience' },
        { value: 'C1', label: 'English' },
      ],
    },
    experience: {
      title: 'Experience',
      current: 'Present',
      items: {
        oncity: {
          role: 'Software Development Analyst',
          period: 'Since March 2025',
          summary:
            'Within the Finance area, I build integrations with banking entities and internal financial management tools. Front-end in Angular and back-end in .NET, working with relational databases and support tickets under Scrum.',
        },
        controlglobal: {
          role: 'Fullstack Developer',
          period: 'May 2024 - March 2025',
          summary:
            'Back-end development in .NET, integrating digital wallets and financial entities across several countries, such as Mercado Pago, Nave and Yappy. SQL Server databases and project tracking with Scrum and Jira.',
        },
        arconsultores: {
          role: 'Fullstack Developer',
          period: 'May 2023 - May 2024',
          summary:
            'Backend solutions in .NET and Java, both for the consultancy and for an external client billing system. Functional analysis and requirement gathering, plus SQL database management.',
        },
      },
    },
    education: {
      title: 'Education',
      subtitle: 'Academic background and professional development.',
      degree: 'Information Systems Engineering',
      university: 'National Technological University, Córdoba Regional Faculty',
      graduation: 'Graduated in 2024',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools',
        softSkills: 'Soft Skills',
      },
    },
    projects: {
      title: 'Projects',
      code: 'Code',
      liveDemo: 'Live demo',
      inProgress: 'In progress',
      items: {
        fitbyjeny: {
          title: 'Fit By Jeny',
          description:
            'Web platform developed for a fitness professional. Features content management, training plans, user authentication and external service integrations built with React, Node.js, Supabase and TypeScript.',
          imageAlt: 'Fit By Jeny home page',
        },
        store25: {
          title: '25 Store',
          description:
            'Online catalog for a tech store. It shows prices in pesos and US dollars based on the exchange rate, calculates installments with interest, gathers the store information and sends every order to WhatsApp for confirmation.',
          imageAlt: '25 Store home page',
          note: 'Work in progress: the demo is already open to browse. No purchases are made; orders are confirmed over WhatsApp.',
        },
        portfolio: {
          title: 'Developer Portfolio',
          description: 'Responsive personal portfolio with dark mode and animations.',
        },
      },
    },
    contact: {
      title: 'Contact',
      heading: 'Have a project in mind or want to connect?',
      location: 'Córdoba, Argentina',
    },
    footer: {
      tagline: 'Built with Angular',
      rights: 'All rights reserved.',
    },
  },
};

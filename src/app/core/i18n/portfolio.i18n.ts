import type { SkillCategoryKey } from '../data/portfolio.data';

export type Language = 'es' | 'en';

export interface PortfolioTranslations {
  meta: {
    title: string;
    description: string;
  };
  nav: Record<'home' | 'about' | 'education' | 'skills' | 'projects' | 'contact', string>;
  header: {
    logoAria: string;
    navAria: string;
    mobileNavAria: string;
    themeLight: string;
    themeDark: string;
    menuToggle: string;
    languageAria: string;
  };
  home: {
    greeting: string;
    titlePrefix: string;
    viewProjects: string;
    getInTouch: string;
    codePassion: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
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
  };
  projects: {
    title: string;
    subtitle: string;
    featured: string;
    code: string;
    liveDemo: string;
    items: Record<
      string,
      {
        title: string;
        description: string;
      }
    >;
  };
  contact: {
    title: string;
    subtitle: string;
    intro: string;
    form: {
      name: string;
      namePlaceholder: string;
      nameRequired: string;
      email: string;
      emailPlaceholder: string;
      emailInvalid: string;
      message: string;
      messagePlaceholder: string;
      messageMinLength: string;
      submit: string;
    };
    successMessage: string;
    close: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  social: Record<'github' | 'linkedin' | 'twitter', string>;
  role: string;
  tagline: string;
  location: string;
}

export const PORTFOLIO_I18N: Record<Language, PortfolioTranslations> = {
  es: {
    meta: {
      title: 'Sofia Developer | Portfolio',
      description:
        'Portfolio de desarrolladora Full Stack — Angular, TypeScript y desarrollo web moderno.',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    header: {
      logoAria: 'Ir al inicio',
      navAria: 'Navegación principal',
      mobileNavAria: 'Navegación móvil',
      themeLight: 'Cambiar a modo claro',
      themeDark: 'Cambiar a modo oscuro',
      menuToggle: 'Abrir o cerrar menú',
      languageAria: 'Seleccionar idioma',
    },
    home: {
      greeting: '¡Hola!',
      titlePrefix: 'Soy',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Contáctame',
      codePassion: 'Crear software de calidad',
    },
    about: {
      title: 'Sobre mí',
      subtitle: '',
      paragraphs: [
        'Soy Ingeniera en Sistemas y Desarrolladora Full Stack con experiencia en el desarrollo de aplicaciones trabajando con tecnologías como .NET Framework, .NET Core, Angular y SQL Server, participando tanto en el desarrollo backend como frontend y colaborando en todas las etapas del ciclo de vida del software.',

        'Además del desarrollo, cuento con experiencia en análisis funcional, documentación técnica y metodologías ágiles. Disfruto trabajar en equipo, comprender las necesidades del negocio y transformarlas en soluciones tecnológicas que aporten valor real.'

      ],
      stats: [
        { value: '3+', label: 'Años de experiencia' },
        { value: 'C1', label: 'Inglés' }
      ],
    },
    education: {
      title: 'Educación',
      subtitle: 'Formación académica y desarrollo profesional.',
      degree: 'Ingeniería en Sistemas de Información',
      university: 'Universidad Tecnológica Nacional - Facultad Regional Córdoba',
      graduation: 'Graduada en 2024',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools',
        softSkills: 'Soft Skills',
      },
    },
    projects: {
      title: 'Proyectos',
      subtitle: '',
      featured: '',
      code: 'Código',
      liveDemo: 'Demo en vivo',
      items: {
        fitbyjeny: {
          title: 'Fit By Jeny',
          description:
            'Sitio web y plataforma desarrollada para una profesional del fitness con gestión de contenido, membresías y procesamiento de pagos.'
        },
        portfolio: {
          title: 'Portfolio',
          description:
            'Portfolio personal responsive con modo oscuro y animaciones.',
        },
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tenes un proyecto en mente o queres conectar?',
      intro:
        '',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        nameRequired: 'El nombre es obligatorio',
        email: 'Correo electrónico',
        emailPlaceholder: 'sofia88837utn@ejemplo.com',
        emailInvalid: 'Introduce un correo válido',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        messageMinLength: 'El mensaje debe tener al menos 10 caracteres',
        submit: 'Enviar mensaje',
      },
      successMessage: '¡Mensaje enviado! Te responderé pronto.',
      close: 'Cerrar',
    },
    footer: {
      tagline: 'Hecho con Angular y Material Design',
      rights: 'Todos los derechos reservados.',
    },
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
    },
    role: 'Ingeniera en Sistemas | Full Stack Developer',
    tagline:
      'Desarrollo soluciones de software utilizando .NET, Angular y tecnologías modernas.',
    location: 'Cordoba, Argentina',
  },
  en: {
    meta: {
      title: 'Sofia Developer | Portfolio',
      description:
        'Full Stack Developer portfolio — Angular, TypeScript, and modern web development.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: {
      logoAria: 'Go to home',
      navAria: 'Main navigation',
      mobileNavAria: 'Mobile navigation',
      themeLight: 'Switch to light mode',
      themeDark: 'Switch to dark mode',
      menuToggle: 'Toggle navigation menu',
      languageAria: 'Select language',
    },
    home: {
      greeting: 'Hello!',
      titlePrefix: "I'm",
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      codePassion: 'Building great software',
    },
    about: {
      title: 'About Me',
      subtitle: '',
      paragraphs: [
        'I am a Systems Engineer and Full Stack Developer with experience building software solutions with technologies such as .NET Framework, .NET Core, Angular, and SQL Server, contributing to both backend and frontend development while participating in the entire software development lifecycle.',

        'Beyond software development, I have experience in functional analysis, technical documentation, and agile methodologies. I enjoy collaborating with teams, understanding business needs, and turning them into valuable technological solutions.'

      ],
      stats: [
        { value: '3+', label: 'Years Experience' },
        { value: 'C1', label: 'English' }
      ],
    },
    education: {
      title: 'Education',
      subtitle: 'Academic background and professional development.',
      degree: 'Information Systems Engineering',
      university: 'National Technological University - Córdoba Regional Faculty',
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
      subtitle: '',
      featured: '',
      code: 'Code',
      liveDemo: 'Live Demo',
      items: {
        fitbyjeny: {
          title: 'Fit By Jeny',
          description:
            'Web platform developed for a fitness professional. Features content management, training plans, user authentication and external service integrations built with React, Node.js, Supabase and TypeScript.',
        },
        portfolio: {
          title: 'Developer Portfolio',
          description:
            'Responsive personal portfolio with dark mode and animations',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind or want to connect? Send me a message.',
      intro:
        "",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        nameRequired: 'Name is required',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        emailInvalid: 'Enter a valid email',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        messageMinLength: 'Message must be at least 10 characters',
        submit: 'Send Message',
      },
      successMessage: 'Message sent! I will get back to you soon.',
      close: 'Close',
    },
    footer: {
      tagline: 'Crafted with Angular & Material Design',
      rights: 'All rights reserved.',
    },
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
    },
    role: 'Systems Engineer | Full Stack Developer',
    tagline:
      'Building software solutions using .NET, Angular and modern technologies.',
    location: 'Cordoba, Argentina',
  },
};

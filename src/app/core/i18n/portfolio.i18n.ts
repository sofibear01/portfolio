import type { SkillCategoryKey } from '../data/portfolio.data';

export type Language = 'es' | 'en';

export interface PortfolioTranslations {
  meta: {
    title: string;
    description: string;
  };
  nav: Record<'home' | 'about' | 'skills' | 'projects' | 'contact', string>;
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
      greeting: '¡Hola, mundo!',
      titlePrefix: 'Soy',
      viewProjects: 'Ver proyectos',
      getInTouch: 'Contáctame',
      codePassion: 'Crear software de calidad',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Una breve introducción sobre quién soy y qué impulsa mi trabajo.',
      paragraphs: [
        'Soy una desarrolladora de software apasionada por crear aplicaciones limpias y escalables. Me encanta convertir problemas complejos en experiencias de usuario intuitivas.',
        'Con experiencia en todo el stack, me especializo en Angular, TypeScript y arquitecturas cloud-native. Creo en escribir código mantenible y colaborar estrechamente con equipos.',
        'Cuando no estoy programando, contribuyo a open source, exploro nuevos frameworks y comparto conocimiento a través de escritura técnica.',
      ],
      stats: [
        { value: '5+', label: 'Años de experiencia' },
        { value: '30+', label: 'Proyectos entregados' },
        { value: '15+', label: 'Tecnologías' },
      ],
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y herramientas que uso para dar vida a las ideas.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps',
        quality: 'Calidad',
        softSkills: 'Habilidades blandas',
      },
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Trabajos seleccionados que muestran mi enfoque al desarrollo de software.',
      featured: 'Destacado',
      code: 'Código',
      liveDemo: 'Demo en vivo',
      items: {
        ecommerce: {
          title: 'Plataforma E-Commerce',
          description:
            'Tienda online escalable con inventario en tiempo real, integración de pagos y panel de administración con Angular y Node.js.',
        },
        taskManager: {
          title: 'App de Gestión de Tareas',
          description:
            'Herramienta colaborativa de gestión de proyectos con tableros drag-and-drop, asignaciones de equipo y notificaciones en tiempo real.',
        },
        analytics: {
          title: 'Dashboard de Analítica',
          description:
            'Panel de visualización de datos interactivo con gráficos personalizados, filtros y exportación para business intelligence.',
        },
        portfolio: {
          title: 'Portfolio de Desarrolladora',
          description:
            'Portfolio personal responsive con modo oscuro, animaciones suaves y puntuaciones de rendimiento optimizadas.',
        },
        weather: {
          title: 'Cliente de API del Clima',
          description:
            'Aplicación de clima con geolocalización, pronóstico de 7 días y caché offline mediante service workers.',
        },
        blogCms: {
          title: 'CMS de Blog',
          description:
            'Sistema de gestión de contenido headless con editor markdown, optimización SEO y control de acceso por roles.',
        },
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente o quieres conectar? Envíame un mensaje.',
      intro:
        'Actualmente estoy abierta a nuevas oportunidades y colaboraciones. Tanto si tienes una pregunta como si solo quieres saludar, no dudes en escribirme.',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        nameRequired: 'El nombre es obligatorio',
        email: 'Correo electrónico',
        emailPlaceholder: 'tu@ejemplo.com',
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
    role: 'Desarrolladora Full Stack',
    tagline: 'Creando experiencias web elegantes y performantes con tecnologías modernas.',
    location: 'Disponible para trabajo remoto',
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
      greeting: 'Hello, World!',
      titlePrefix: "I'm",
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      codePassion: 'Building great software',
    },
    about: {
      title: 'About Me',
      subtitle: 'A brief introduction to who I am and what drives my work.',
      paragraphs: [
        'I am a passionate software developer focused on crafting clean, scalable applications. I enjoy turning complex problems into intuitive user experiences.',
        'With experience across the full stack, I specialize in Angular, TypeScript, and cloud-native architectures. I believe in writing maintainable code and collaborating closely with teams.',
        'When I am not coding, I contribute to open source, explore new frameworks, and share knowledge through technical writing.',
      ],
      stats: [
        { value: '5+', label: 'Years Experience' },
        { value: '30+', label: 'Projects Delivered' },
        { value: '15+', label: 'Technologies' },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I use to bring ideas to life.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps',
        quality: 'Quality',
        softSkills: 'Soft Skills',
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected work showcasing my approach to building software.',
      featured: 'Featured',
      code: 'Code',
      liveDemo: 'Live Demo',
      items: {
        ecommerce: {
          title: 'E-Commerce Platform',
          description:
            'A scalable online store with real-time inventory, payment integration, and an admin dashboard built with Angular and Node.js.',
        },
        taskManager: {
          title: 'Task Management App',
          description:
            'Collaborative project management tool with drag-and-drop boards, team assignments, and real-time notifications.',
        },
        analytics: {
          title: 'Analytics Dashboard',
          description:
            'Interactive data visualization dashboard with custom charts, filters, and export capabilities for business intelligence.',
        },
        portfolio: {
          title: 'Developer Portfolio',
          description:
            'Responsive personal portfolio with dark mode, smooth animations, and optimized performance scores.',
        },
        weather: {
          title: 'Weather API Client',
          description:
            'Clean weather application with geolocation, 7-day forecasts, and offline caching using service workers.',
        },
        blogCms: {
          title: 'Blog CMS',
          description:
            'Headless content management system with markdown editor, SEO optimization, and role-based access control.',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind or want to connect? Send me a message.',
      intro:
        "I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out.",
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
    role: 'Full Stack Developer',
    tagline: 'Building elegant, performant web experiences with modern technologies.',
    location: 'Available for remote work',
  },
};

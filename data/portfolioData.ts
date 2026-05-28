export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
  symbol?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface SkillItem {
  icon: string;
  name: string;
}

export interface AboutInfoItem {
  fieldName: string;
  fieldValue: string;
}

export interface AboutData {
  title: string;
  description: string;
  info: AboutInfoItem[];
}

export interface ResumeData {
  experience: {
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    description: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    description: string;
    skillList: SkillItem[];
  };
  about: AboutData;
}

export interface ProjectItem {
  title: string;
  desc: string;
  stacks: string[];
  images: string[];
  category: "web" | "mobile" | "design";
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  href: string;
}

export const personalInfo: PersonalInfo = {
  name: "Princi Rakotoarison",
  title: "Développeur Web Fullstack",
  description: "Spécialisé dans le développement de solutions techniques robustes et optimisées, je possède une solide maîtrise de plusieurs langages de programmation et environnements technologiques.",
  image: "/images/profil.png",
};

export const stats: StatItem[] = [
  { value: "3", label: "Années d'expérience" },
  { value: "21", label: "Projets terminés" },
  { value: "300", label: "Commits de code", symbol: "+" },
  { value: "8", label: "Technologies maîtrisées" },
];

export const resumeData: ResumeData = {
  experience: {
    title: "Mes expériences",
    description: "Voici un aperçu de mon parcours professionnel, mettant en avant mes projets et collaborations.",
    items: [
      {
        company: "RoadSignal",
        position: "Développeur Fullstack – Signalement routier (Web & Mobile)",
        duration: "déc. 2025 - fév. 2026",
        description: "Conception et développement d'une application de signalement d'incidents routiers, couplée à un dashboard d'administration. Synchro temps réel avec Firebase, cartographie avancée, et mode hors ligne pour une expérience fluide sur le terrain."
      },
      {
        company: "Alumni Platform (ITU Innovation Week)",
        position: "Développeur Fullstack – Hackathon",
        duration: "fév. 2026",
        description: "Participation à l'ITU Innovation Week : création d'une plateforme alumni en moins d'une semaine. Travail en équipe sous contrainte de temps, avec un framework Java propriétaire assurant la sécurité du backend et la génération du frontend."
      },
      {
        company: "TTOP m’ITantana",
        position: "Développeur Fullstack – Gestion achat/vente/stock",
        duration: "nov. 2025 - déc. 2025",
        description: "Réalisation d'une application web fullstack (Vue.js + Spring Boot) pour gérer les cycles d'achats, ventes et stocks. Tableaux de bord KPI, alertes de réapprovisionnement, et module d'analyse IA via Mistral."
      },
      {
        company: "MATECHMAD – Garage auto",
        position: "Développeur Laravel",
        duration: "sept. 2025 - oct. 2025",
        description: "Développement d'une application web de gestion pour un garage : suivi des stocks de pièces, ordres de réparation et ventes, avec traçabilité complète des mouvements."
      },
      {
        company: "Cuisine'Vital",
        position: "Développeur Fullstack (NestJS & React)",
        duration: "juin 2025 - juil. 2025",
        description: "Création d'une application de gestion complète pour un service de livraison de repas. Suivi en temps réel des commandes et livraisons, gestion des stocks, menus et utilisateurs avec contrôle d'accès par rôles."
      },
      {
        company: "Investissement Frontalière",
        position: "Développeur WordPress",
        duration: "juin 2025",
        description: "Optimisation des performances et refonte de la template d’un site vitrine afin d’améliorer l’expérience utilisateur et la rapidité d’affichage."
      },
      {
        company: "Projet académique – Prédiction immobilière",
        position: "Développeur Python / Django",
        duration: "déc. 2024",
        description: "Développement d’un modèle de régression linéaire pour estimer le loyer des maisons et le prix des surfaces à partir de fichiers CSV. Intégration d’une carte open source permettant une sélection interactive des lieux et une prédiction à la volée."
      },
      {
        company: "Guycom",
        position: "Développeur WordPress",
        duration: "déc. 2024 - mars 2025",
        description: "Déploiement du site sur un serveur en ligne, configuration complète de l’hébergement et mise en production pour assurer l’accessibilité aux utilisateurs."
      }
    ]
  },
  education: {
    title: "Mes études",
    description: "Mon parcours académique m'a permis d'acquérir des bases solides en informatique et développement.",
    items: [
      {
        institution: "IT University",
        degree: "Licence en Informatique",
        duration: "2023 - 2026",
        description: "Formation générale en développement web, bases de données, algorithmique et architecture logicielle."
      },
      {
        institution: "Bienheureuse Marie Assunta Fenoarivo",
        degree: "Baccalauréat",
        duration: "2022",
        description: "Baccalauréat de fin d'études secondaires, série scientifique."
      }
    ]
  },
  skills: {
    title: "Mes compétences",
    description: "Je maîtrise un ensemble d'outils et technologies modernes pour le développement web et mobile.",
    skillList: [
      { icon: "FaReact", name: "React.js" },
      { icon: "SiNextdotjs", name: "Next.js" },
      { icon: "FaVuejs", name: "Vue.js" },
      { icon: "SiTailwindcss", name: "Tailwind CSS" },
      { icon: "FaJs", name: "JavaScript" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "FaNodeJs", name: "Node.js" },
      { icon: "SiExpress", name: "Express.js" },
      { icon: "SiMysql", name: "MySQL" },
      { icon: "SiPostgresql", name: "PostgreSQL" },
      { icon: "SiMongodb", name: "MongoDB" },
      { icon: "SiFirebase", name: "Firebase" },
      { icon: "SiFirebase", name: "Firestore" },
      { icon: "FaWordpress", name: "WordPress" },
      { icon: "FaGitAlt", name: "Git" },
      { icon: "FaGithub", name: "GitHub" },
      { icon: "SiVercel", name: "Vercel" },
      { icon: "SiIonic", name: "Ionic" },
      { icon: "FaDocker", name: "Docker" }
    ]
  },
  about: {
    title: "À propos de moi",
    description: "Développeur Fullstack avec deux ans d'expérience, spécialisé dans la création de solutions web innovantes. Passionné par les nouvelles technologies, je combine compétences back-end et front-end pour offrir des expériences utilisateur optimales. Rigoureux, autonome et toujours en veille technologique, je m'adapte rapidement aux besoins spécifiques de chaque projet.",
    info: [
      { fieldName: "Nom", fieldValue: "Princi Rakotoarison" },
      { fieldName: "Téléphone", fieldValue: "(+261) 38 57 234 93" },
      { fieldName: "Expérience", fieldValue: "2+ Ans" },
      { fieldName: "Nationalité", fieldValue: "Malgache" },
      { fieldName: "Email", fieldValue: "princirakotoarison07@gmail.com" },
      { fieldName: "Freelance", fieldValue: "Disponible" },
      { fieldName: "Langues", fieldValue: "Français, Malagasy" },
      { fieldName: "Facebook", fieldValue: "Princi Rakotoarison" }
    ]
  }
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/princi-rakotoarison07" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/princi-rakotoarison-242218351/" },
  { name: "Facebook", href: "https://www.facebook.com/princi.rakotoarison" },
];

export const services: ServiceItem[] = [
  {
    num: "01",
    title: "Architecture d'API sécurisées",
    description: "Conception et développement d'API RESTful et GraphQL hautement sécurisées. Mise en place de systèmes d'authentification robuste (JWT, OAuth) et de rate limiting.",
    href: ""
  },
  {
    num: "02",
    title: "Ingénierie de bases de données",
    description: "Modélisation, déploiement et optimisation de bases de données relationnelles et NoSQL (PostgreSQL, MySQL, MongoDB) avec requêtes complexes et indexation.",
    href: ""
  },
  {
    num: "03",
    title: "Développement web fullstack",
    description: "Réalisation de sites web et applications sur mesure en utilisant les technologies modernes (React, Next.js, Node.js) pour des expériences utilisateurs fluides.",
    href: ""
  },
  {
    num: "04",
    title: "Optimisation des performances système",
    description: "Audit approfondi des applications existantes, analyse des goulots d'étranglement, mise en cache stratégique et refactoring de code pour optimiser le temps de chargement.",
    href: ""
  }
];

export const projectsList: ProjectItem[] = [
  {
    title: "SmartSaha",
    desc: "Application mobile intelligente de gestion agricole. Permet de suivre les activités, optimiser la productivité et intègre une place de marché pour les ventes et enchères.",
    stacks: ["React Native", "TypeScript", "NativeWind", "Django", "Supabase"],
    images: [
      "/img/projectsImg/smartSaha/1.jpg",
      "/img/projectsImg/smartSaha/2.jpg",
      "/img/projectsImg/smartSaha/3.jpg",
      "/img/projectsImg/smartSaha/4.jpg",
      "/img/projectsImg/smartSaha/5.jpg",
    ],
    category: "mobile",
  },
  {
    title: "E-Kaly",
    desc: "Application mobile de gestion de commandes de restaurant avec synchronisation en temps réel entre clients, cuisine et serveurs pour fluidifier les flux de travail.",
    stacks: ["React Native", "MongoDB", "Node.js"],
    images: [
      "/img/projectsImg/ekaly/2.png",
      "/img/projectsImg/ekaly/1.png",
      "/img/projectsImg/ekaly/3.png",
    ],
    category: "mobile",
  },
  {
    title: "Garazy",
    desc: "Système web de gestion de garage automobile gérant les rendez-vous, le suivi des réparations et améliorant la communication entre mécaniciens et clients.",
    stacks: ["Angular", "Express.js", "MongoDB"],
    images: [
      "/img/projectsImg/garazy/1.jpg",
    ],
    category: "web",
  },
  {
    title: "Gestionnaire de Matériels",
    desc: "Application interne de gestion de parc matériel développée pour le Ministère de la Pêche et de l'Économie Bleue pour optimiser le suivi et l'organisation des ressources.",
    stacks: ["React", "Node.js", "MongoDB"],
    images: [
      "/img/projectsImg/logistique/1.png",
      "/img/projectsImg/logistique/2.png",
    ],
    category: "web",
  },
  {
    title: "BioMada",
    desc: "Maquettes UI/UX d'une plateforme de gestion et place de marché agricole collaborative, mettant en avant un design épuré, intuitif et centré sur l'utilisateur.",
    stacks: ["Figma", "Adobe Illustrator"],
    images: [
      "/img/projectsImg/bioMada/1.png",
    ],
    category: "design",
  },
  {
    title: "FormaProd",
    desc: "Projet de design axé sur la création d'une interface esthétique et ergonomique pour une entreprise de décoration d'intérieur fictive.",
    stacks: ["Figma", "Adobe Illustrator"],
    images: [
      "/img/projectsImg/madeco/2.png",
      "/img/projectsImg/madeco/1.png",
    ],
    category: "design",
  },
  {
    title: "Design de Système Académique",
    desc: "Conception complète d'un portail éducatif moderne pour la gestion des cours, des devoirs et de l'administration scolaire pour les étudiants et enseignants.",
    stacks: ["Figma", "Adobe Illustrator"],
    images: [
      "/img/projectsImg/school/1.png",
    ],
    category: "design",
  },
];

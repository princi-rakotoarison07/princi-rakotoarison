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
  technologies?: string[];
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
  link?: string;
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
        company: "Signalement Routier",
        position: "Développeur Fullstack – Web & Mobile",
        duration: "déc. 2025 - fév. 2026",
        description: "J'ai conçu et développé un système de signalement d'incidents routiers, avec une application mobile (Ionic Vue) et un dashboard administratif (Angular) - synchronisation temps réel via Firebase, cartographie avancée et mode hors ligne intégré.",
        technologies: ["Ionic Vue", "Angular", "Firebase", "TypeScript", "HTML5/CSS3"]
      },
      {
        company: "ITU Innovation Week",
        position: "Développeur Fullstack – Hackathon Platform Alumni",
        duration: "fév. 2026",
        description: "J'ai participé à l'ITU Innovation Week, un hackathon universitaire autour de la conception d'une plateforme alumni - conception, développement et livraison sous contrainte de temps, en équipe, avec un framework Java propriétaire gérant le backend sécurisé et le frontend.",
        technologies: ["Java", "Framework Propriétaire", "Git", "Collaboration Agilité"]
      },
      {
        company: "TTOP m’ITantana",
        position: "Développeur Fullstack – Gestion Achat / Vente / Stock",
        duration: "nov. 2025 - déc. 2025",
        description: "J'ai conçu et développé une application web fullstack (Vue.js + Spring Boot) gérant les cycles achats, ventes et stock - avec tableaux de bord KPI, alertes de réapprovisionnement et un module d'analyse IA via Mistral.",
        technologies: ["Vue.js", "Spring Boot", "Mistral AI", "Java", "JavaScript", "MySQL"]
      },
      {
        company: "MATECHMAD",
        position: "Développeur Laravel",
        duration: "sept. 2025 - oct. 2025",
        description: "J'ai développé une application web de gestion couvrant le stock de pièces, les ordres de réparation et les ventes - avec traçabilité complète des mouvements.",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"]
      },
      {
        company: "Cuisine'Vital",
        position: "Développeur Fullstack (NestJS & React)",
        duration: "juin 2025 - juil. 2025",
        description: "En tant que Développeur Fullstack, j'ai conçu une application de gestion complète pour Cuisine'Vital, intégrant un suivi en temps réel des commandes et des livraisons, tout en assurant la gestion des stocks, menus et utilisateurs selon les rôles définis.",
        technologies: ["NestJS", "React", "Node.js", "PostgreSQL", "Tailwind CSS"]
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

import { projectsList } from './projects';
export { projectsList };

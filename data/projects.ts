import { ProjectItem } from './portfolioData';

export const projectsList: ProjectItem[] = [
  {
    title: "TTOP m’ITantana",
    desc: "Application web fullstack de gestion des ventes, achats et stocks de produits avec suivi en temps réel et tableaux de bord analytiques.",
    stacks: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    images: [
      "/img/projects/Achat-Vente-stock/1.png",
      "/img/projects/Achat-Vente-stock/2.png",
      "/img/projects/Achat-Vente-stock/3.jpg",
      "/img/projects/Achat-Vente-stock/4.jpg",
      "/img/projects/Achat-Vente-stock/5.png"
    ],
    category: "web"
  },
  {
    title: "Plateforme Alumni",
    desc: "Portail collaboratif d'annuaire et d'échange pour les anciens étudiants de l'IT University, développé lors de l'ITU Innovation Week avec un framework personnalisé en JAVA, PostgreSQL et le serveur WildFly 10.",
    stacks: ["Java", "PostgreSQL", "WildFly 10", "Java EE", "Framework Personnalisé"],
    images: [
      "/img/projects/Alumni/index.png",
      "/img/projects/Alumni/1.jpg",
      "/img/projects/Alumni/2.jpg"
    ],
    category: "web"
  },
  {
    title: "Application de Gestion Interne",
    desc: "Application d'administration de données d'entreprise facilitant le pilotage de l'activité commerciale et la génération automatique de rapports.",
    stacks: ["React", "Express.js", "MySQL", "Tailwind CSS", "Bootstrap"],
    images: [
      "/img/projects/App-Gestion/1.png",
      "/img/projects/App-Gestion/2.png",
      "/img/projects/App-Gestion/3.png",
      "/img/projects/App-Gestion/4.png",
      "/img/projects/App-Gestion/index.png"
    ],
    category: "web"
  },
  {
    title: "E-Villageois",
    desc: "Plateforme communautaire de gestion administrative villageoise et de communication directe entre les habitants et l'administration.",
    stacks: ["Laravel", "Blade", "MySQL", "Bootstrap", "JavaScript"],
    images: [
      "/img/projects/evillageois/1.png",
      "/img/projects/evillageois/2.png",
      "/img/projects/evillageois/index.png"
    ],
    category: "web",
    link: "https://evillageois.com/"
  },
  {
    title: "Investissement Frontalier",
    desc: "Optimisation, amélioration de l'ergonomie et intégration de nouveaux modules sur ce portail vitrine professionnel présentant les projets d'investissements frontaliers et de développement territorial.",
    stacks: ["WordPress", "PHP", "Elementor", "MySQL", "Custom CSS"],
    images: [
      "/img/projects/investissement-frontalier/1.png",
      "/img/projects/investissement-frontalier/2.png",
      "/img/projects/investissement-frontalier/index.png"
    ],
    category: "web",
    link: "http://investissement-frontalier.com/"
  },
  {
    title: "RoadSignal",
    desc: "Système de signalement d'incidents routiers en temps réel, comprenant un portail d'administration web et une application mobile.",
    stacks: ["React", "React Native", "TypeScript", "Tailwind CSS", "Node.js"],
    images: [
      "/img/projects/Routier/web.jpg",
      "/img/projects/Routier/mobile.jpg"
    ],
    category: "web"
  },
  {
    title: "RoadSignal Mobile",
    desc: "Application mobile géolocalisée pour le signalement des anomalies routières en temps réel, interconnectée avec la plateforme d'administration.",
    stacks: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Node.js"],
    images: [
      "/img/projects/Routier/mobile.jpg",
      "/img/projects/Routier/web.jpg"
    ],
    category: "mobile"
  },
  {
    title: "Maquette UI/UX Loopit",
    desc: "Conception complète de l'interface utilisateur interactive et de l'expérience utilisateur ergonomique pour l'application Loopit.",
    stacks: ["Figma", "UI/UX Design", "Wireframing", "Prototypage"],
    images: [
      "/img/projects/LoopitMaquette/1.png",
      "/img/projects/LoopitMaquette/2.png",
      "/img/projects/LoopitMaquette/3.png",
      "/img/projects/LoopitMaquette/4.png"
    ],
    category: "design"
  }
];

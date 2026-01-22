import React, { createContext, useContext, ReactNode } from 'react';

// Types
export interface HeroData {
  title: string;
  subtitle: string;
  available: string;
  yearsExp: string;
  cvLink: string;
}

export interface AboutData {
  text: string;
  stats: { label: string; value: string }[];
}

export interface JourneyItem {
  id: number;
  year: string;
  title: string;
  desc: string;
  icon?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  desc: string;
  tags: string;
  img: string;
  link: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface InterestItem {
  id: number;
  name: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
  usage: string;
}

export interface TechCategory {
  id: string;
  title: string;
  items: TechItem[];
}

export interface CertificationItem {
  id: number;
  type: 'certification' | 'attestation';
  name: string;
  date: string;
  image: string;
  link?: string;
  pdfUri?: string;
}

export interface ContactData {
  email: string;
  location: string;
  status: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    whatsapp?: string;
    instagram?: string;
  };
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  journey: JourneyItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  technologies: TechCategory[];
  interests: InterestItem[];
  certifications: CertificationItem[];
  contact: ContactData;
}

const defaultData: PortfolioData = {
  hero: {
    title: "Code. Données. Intelligence.",
    subtitle: "Étudiant en Data Engineering. Je conçois des expériences web immersives et des solutions intelligentes.",
    available: "Disponible pour des projets",
    yearsExp: "1+",
    cvLink: "CV Lidao.pdf",
  },
  about: {
    text: "Je suis un passionné d'informatique, spécialisé en IA et Big Data. Mon objectif est de créer des solutions innovantes qui allient performance technique et design futuriste. Toujours en quête de nouveaux défis.",
    stats: [
      { label: "Années d'Expérience", value: "1+" },
      { label: "Projets Réalisés", value: "5+" },
      { label: "Certifications", value: "15" },
      { label: "Passion", value: "∞" },
    ],
  },
  journey: [
    { id: 1, year: "2025", title: "Master IA & BigData", desc: "Spécialisation en Deep Learning et traitement de données massives.", icon: "ri-graduation-cap-fill" },
    { id: 2, year: "2024", title: "Stage Développeur Fullstack", desc: "Création d'applications web réactives et gestion de bases de données.", icon: "ri-code-box-fill" },
    { id: 3, year: "2023", title: "Licence Informatique", desc: "Acquisition des bases solides en algorithmique et développement logiciel.", icon: "ri-book-2-fill" },
  ],
  projects: [
    { id: 1, title: "Neural Network Viz", desc: "Visualisateur de réseaux de neurones en temps réel.", tags: "Python, TensorFlow, React", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 2, title: "E-Commerce AI", desc: "Plateforme de vente avec recommandation intelligente.", tags: "Node.js, MongoDB, AI", img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 3, title: "Data Pipeline", desc: "Système ETL automatisé pour le traitement de données massives.", tags: "Python, Spark, AWS", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 4, title: "ChatBot NLP", desc: "Assistant conversationnel basé sur le traitement du langage naturel.", tags: "Python, BERT, FastAPI", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 5, title: "Neural Network Viz", desc: "Visualisateur de réseaux de neurones en temps réel.", tags: "Python, TensorFlow, React", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 6, title: "E-Commerce AI", desc: "Plateforme de vente avec recommandation intelligente.", tags: "Node.js, MongoDB, AI", img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 7, title: "Data Pipeline", desc: "Système ETL automatisé pour le traitement de données massives.", tags: "Python, Spark, AWS", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 8, title: "ChatBot NLP", desc: "Assistant conversationnel basé sur le traitement du langage naturel.", tags: "Python, BERT, FastAPI", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000", link: "#" },
  ],
  skills: [
    {
      id: "data-engineering",
      title: "Ingénierie des données",
      icon: "ri-database-2-fill",
      skills: [
        "Conception et implémentation de pipelines de données (ETL / ELT)",
        "Collecte, transformation et validation de données hétérogènes",
        "Nettoyage, normalisation et structuration de données brutes",
        "Gestion de flux de données batch et quasi temps réel",
        "Optimisation des performances de traitement de données"
      ]
    },
    {
      id: "data-modeling",
      title: "Modélisation & gestion",
      icon: "ri-node-tree",
      skills: [
        "Modélisation de bases de données relationnelles",
        "Conception de schémas analytiques (étoile, flocon)",
        "Gestion de données structurées et semi-structurées",
        "Optimisation de requêtes SQL",
        "Gestion de la qualité et de l’intégrité des données"
      ]
    },
    {
      id: "automation",
      title: "Automatisation & systèmes",
      icon: "ri-settings-4-fill",
      skills: [
        "Automatisation de workflows de données",
        "Écriture de scripts de traitement en Python",
        "Gestion des dépendances et environnements",
        "Surveillance et fiabilité des pipelines",
        "Gestion des erreurs et reprise sur incident"
      ]
    },
    {
      id: "analytics",
      title: "Data Analytics & ML",
      icon: "ri-bar-chart-groupped-fill",
      skills: [
        "Préparation de datasets pour l’analyse et le ML",
        "Feature engineering",
        "Exploration et validation statistique des données",
        "Collaboration avec Data Scientists et Analystes"
      ]
    },
    {
      id: "software-engineering",
      title: "Ingénierie logicielle Data",
      icon: "ri-code-s-slash-fill",
      skills: [
        "Programmation orientée objet",
        "Versionnement du code et bonnes pratiques Git",
        "Structuration de projets data",
        "Documentation technique claire",
        "Tests basiques de pipelines et scripts"
      ]
    },
    {
      id: "security",
      title: "Sécurité & Gouvernance",
      icon: "ri-shield-keyhole-fill",
      skills: [
        "Gestion des accès aux données",
        "Sensibilisation à la confidentialité des données",
        "Séparation environnements (dev / test / prod)",
        "Principes de gouvernance des données"
      ]
    },
    {
      id: "soft-skills",
      title: "Compétences Transversales",
      icon: "ri-team-fill",
      skills: [
        "Raisonnement analytique et logique",
        "Capacité à traiter de gros volumes de données",
        "Rigueur et fiabilité",
        "Autonomie technique",
        "Capacité d’apprentissage rapide"
      ]
    }
  ],
  technologies: [
    {
      id: "languages",
      title: "Langages",
      items: [
        { name: "Python", icon: "ri-code-s-slash-line", usage: "Scripting, ETL, Analyse de données, APIs" },
        { name: "SQL", icon: "ri-database-2-line", usage: "Interrogation, Transformations complexes, Analytics" },
        { name: "Java", icon: "ri-java-line", usage: "Traitement de données, Backend" },
        { name: "Bash / Shell", icon: "ri-terminal-line", usage: "Automatisation système, Scripts" }
      ]
    },
    {
      id: "frameworks",
      title: "Data Engineering",
      items: [
        { name: "Apache Spark", icon: "ri-fire-fill", usage: "Traitement distribué Big Data" },
        { name: "Apache Airflow", icon: "ri-flow-chart", usage: "Orchestration de pipelines" },
        { name: "Apache Kafka", icon: "ri-arrow-left-right-line", usage: "Streaming de données temps réel" }
      ]
    },
    {
      id: "databases",
      title: "Bases de données",
      items: [
        { name: "PostgreSQL", icon: "ri-server-line", usage: "SGBD Relationnel, Data Warehousing" },
        { name: "MongoDB", icon: "ri-leaf-line", usage: "Stockage NoSQL documents" },
        { name: "SQLite", icon: "ri-database-line", usage: "Base légère, environnements de dev" }
      ]
    },
    {
      id: "processing",
      title: "Traitement & Analyse",
      items: [
        { name: "Pandas / NumPy", icon: "ri-table-line", usage: "Manipulation de données, Calcul numérique" },
        { name: "Jupyter", icon: "ri-book-read-line", usage: "Prototypage, Exploration, Storytelling" },
        { name: "Google Colab", icon: "ri-google-fill", usage: "Environnement Cloud Data Science" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & Big Data",
      items: [
        { name: "GCP BigQuery", icon: "ri-cloud-fill", usage: "Data Warehouse, Analytics massive" },
        { name: "Cloud Storage", icon: "ri-hard-drive-line", usage: "Stockage d'objets, Data Lake" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Outils",
      items: [
        { name: "Git / GitHub", icon: "ri-github-fill", usage: "Versionning, CI/CD, Collaboration" },
        { name: "Docker", icon: "ri-docker-line", usage: "Conteneurisation, Environnements isolés" },
        { name: "Linux", icon: "ri-ubuntu-line", usage: "Administration système, Serveurs" }
      ]
    },
    {
      id: "ml",
      title: "Ouverture ML",
      items: [
        { name: "TensorFlow", icon: "ri-brain-line", usage: "Création de modèles Deep Learning" },
        { name: "PyTorch", icon: "ri-fire-line", usage: "Recherche et développement ML" },
        { name: "Scikit-Learn", icon: "ri-mind-map", usage: "Algorithmes ML classiques" }
      ]
    }
  ],
  interests: [
    { id: 1, name: "Gaming", icon: "ri-gamepad-line" },
    { id: 2, name: "Voyage", icon: "ri-plane-line" },
    { id: 3, name: "Musique", icon: "ri-headphone-line" },
    { id: 4, name: "Lecture", icon: "ri-book-open-line" },
    { id: 5, name: "Sport", icon: "ri-sports-line" },
  ],
  certifications: [
    { id: 1, type: "certification", name: "AWS Cloud Practitioner", date: "2023", image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png", link: "https://aws.amazon.com/certification/" },
    { id: 2, type: "certification", name: "TensorFlow Developer", date: "2022", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", link: "" },
    { id: 3, type: "attestation", name: "Google Data Analytics", date: "2021", image: "https://images.credly.com/images/32f225eb-4581-42ab-8e0d-036128678083/logo.png", link: "" },
    { id: 4, type: "attestation", name: "Google Data Engineering", date: "2026", image: "https://images.credly.com/images/32f225eb-4581-42ab-8e0d-036128678083/logo.png", link: "" },
  ],
  contact: {
    email: "lidxo.dev@gmail.com",
    location: "Lomé, Togo",
    status: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/lidao-a-401799328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/LidXo",
      twitter: "https://x.com/abiyilidao6",
      whatsapp: "https://wa.me/22870289212",
      instagram: "https://www.instagram.com/lid_xo5?igsh=MW43d2ltbzk2Ym80Yg==",
    },
  },
};

interface PortfolioContextType {
  data: PortfolioData;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PortfolioContext.Provider value={{ data: defaultData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};

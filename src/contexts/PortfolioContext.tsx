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

export interface SkillItem {
  id: number;
  name: string;
  icon: string;
  level: number;
}

export interface InterestItem {
  id: number;
  name: string;
  icon: string;
}

export interface TechnologyItem {
  id: number;
  name: string;
  category: string;
  icon: string;
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
  skills: SkillItem[];
  technologies: TechnologyItem[];
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
    { id: 1, name: "HTML", icon: "ri-html5-fill", level: 95 },
    { id: 2, name: "CSS", icon: "ri-css3-fill", level: 40 },
    { id: 3, name: "JavaScript", icon: "ri-javascript-fill", level: 85 },
    { id: 4, name: "Python", icon: "ri-code-s-slash-line", level: 80 },
    { id: 5, name: "React", icon: "ri-reactjs-line", level: 5 },
    { id: 6, name: "Node.js", icon: "ri-nodejs-line", level: 2 },
    { id: 7, name: "Java", icon: "ri-java-line", level: 60 },
    { id: 8, name: "C++", icon: "ri-c-plus-plus-line", level: 30 },
  ],
  technologies: [
    { id: 1, name: "Python", category: "Langage principal", icon: "ri-code-s-slash-line" },
    { id: 2, name: "PyTorch", category: "Deep Learning", icon: "ri-brain-line" },
    { id: 3, name: "TensorFlow", category: "Framework ML", icon: "ri-flow-chart" },
    { id: 4, name: "SQL / NoSQL", category: "Bases de données", icon: "ri-database-2-line" },
    { id: 5, name: "Git", category: "Versionning", icon: "ri-git-branch-line" },
    { id: 6, name: "Pandas / NumPy", category: "Data Science", icon: "ri-bar-chart-box-line" },
    { id: 7, name: "Docker", category: "Conteneurisation", icon: "ri-server-line" },
    { id: 8, name: "Jupyter", category: "Environnement", icon: "ri-terminal-box-line" },
    { id: 9, name: "Google Colab", category: "Cloud Computing", icon: "ri-cloud-line" },
    { id: 10, name: "OpenCV", category: "Vision", icon: "ri-eye-line" },
    { id: 11, name: "NLTK / SpaCy", category: "NLP", icon: "ri-translate-2" },
    { id: 12, name: "Matplotlib", category: "Visualisation", icon: "ri-pie-chart-line" },
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

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
  image?: string;
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
    subtitle: "Étudiant en 2eme Année IA & BigData.",
    available: "",
    yearsExp: "0",
    cvLink: "/cv_lidao.pdf",
  },
  about: {
    text: "Étudiant en informatique spécialisé en IA et Big Data,  passionné par les données et le développement, je suis actuellement en phase d’apprentissage avancé pour devenir Data Engineer. Je m’intéresse à l’exploration de nouvelles technologies et à la réalisation de projets concrets qui renforcent mes compétences techniques et analytiques.",
    stats: [
      { label: "Années d'Expérience", value: "0" },
      { label: "Projets Réalisés", value: "En cours" },
      { label: "Certifications", value: "En cours" },
      { label: "Passion", value: "∞" },
    ],
  },
  journey: [
    { 
      id: 1, 
      year: "2025", 
      title: "Licence 2 En cours", 
      desc: "Spécialité : IA & Big Data", 
      icon: "ri-graduation-cap-fill" 
    },
    { 
      id: 2, 
      year: "2023", 
      title: "Baccalauréat 2", 
      desc: "Mention Assez-Bien", 
      icon: "ri-book-2-fill" 
    },
  ],
  projects: [
    { id: 1, title: "Système de Location de Cassette", desc: "Application Java de gestion d’un club de location de cassettes vidéo. Le système permet l’administration des abonnés, titres, catégories, cassettes et locations.", tags: "Java", img: "https://plus.unsplash.com/premium_photo-1729777215342-c1758de6dee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9jYXRpb24lMjBkZSUyMGNhc3NldHRlfGVufDB8fDB8fHww", link: "https://github.com/LidXo/Syst-me-de-Gestion-de-Location-de-Cassettes" },
    
],
  technologies: [
    {
      id: "languages",
      title: "Langages & Scripting",
      items: [
        { name: "Python", icon: "ri-code-s-slash-line", usage: "Backend" },
        { name: "SQL", icon: "ri-database-2-line", usage: "Analyses & Requêtes complexes" },
        { name: "Java", icon: "ri-java-line", usage: "Données" },
        { name: "C", icon: "ri-code-s-slash-fill", usage: "Bases" }
      ]
    },
    
    {
      id: "databases",
      title: "Bases de Données",
      items: [
        { name: "PostgreSQL", icon: "ri-database-line", usage: "Relationnel Avancé" },
        { name: "PHPMyAdmin", icon: "ri-leaf-line", usage: "NoSQL Document" },
        { name: "MySQL", icon: "ri-stack-line", usage: "SGBDR" }
      ]
    },
    {
      id: "basic-tools",
      title: "Outils de Base",
      items: [
        { name: "Git / GitHub", icon: "ri-git-branch-line", usage: "Version Control" },
        { name: "VS Code", icon: "ri-code-s-slash-line", usage: "IDE Principal" },
        { name: "Linux / Ubuntu", icon: "ri-ubuntu-line", usage: "Système d'exploitation" },
      ]
    },
  ],
  interests: [
    { id: 1, name: "Gaming", icon: "ri-gamepad-line" },
    { id: 2, name: "Voyage", icon: "ri-plane-line" },
    { id: 3, name: "Musique", icon: "ri-headphone-line" },
    { id: 4, name: "Lecture", icon: "ri-book-open-line" },
    { id: 5, name: "Football", icon: "ri-football-line" },
    { id: 6, name: "Cinéma", icon: "ri-movie-line" },
  ],
  certifications: [
    { id: 1, type: "attestation", name: "Networking Essentials CISCO", date: "2024", pdfUri: "/Networking_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_377680c8-b6ef-4768-ad6b-af42d2daf212.pdf", link: "" },
    { id: 2, type: "attestation", name: "Alumni Cybersecurity Essentials", date: "2024", pdfUri: "/Alumni_Cybersecurity_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_9e3d9e2b-3049-4fa2-96b8-8bc6c56afcc4.pdf", link: "" },
    { id: 3, type: "attestation", name: "Cybersecurity Essentials", date: "2024", pdfUri: "/Cybersecurity_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_264d6df7-b0c8-4bfa-929d-b76bbe13d134.pdf", link: "" },
    { id: 4, type: "attestation", name: "Get Connected", date: "2024", pdfUri: "/Get_Connected_certificate_lidao-abiyi-ipnetinstitute-com_6ba40525-6f4e-4555-98eb-9154ffd6441b.pdf", link: "" },
    { id: 5, type: "attestation", name: "NDG Linux Essentials", date: "2024", pdfUri: "/Partner-_NDG_Linux_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_4d00fb94-3d30-416f-98a5-d85420f9dfc9.pdf", link: "" },
    { id: 6, type: "attestation", name: "Présentation de l’engineering données dans Azure", date: "2026", pdfUri: "/Présentation de l'engineering données dans Azure.pdf", link: "" },
  ],
  contact: {
    email: "lidxo.dev@gmail.com",
    location: "Lomé, Togo",
    status: "Open to work",
    socials: {
      linkedin: "https://www.linkedin.com/in/abiyilidao/",
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

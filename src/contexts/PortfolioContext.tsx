import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

export interface CertificationItem {
  id: number;
  type: 'certification' | 'attestation';
  name: string;
  date: string;
  image: string;
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
  interests: InterestItem[];
  certifications: CertificationItem[];
  contact: ContactData;
}

const defaultData: PortfolioData = {
  hero: {
    title: "Code. Données. Intelligence.",
    subtitle: "Étudiant en Informatique IA & BigData. Je conçois des expériences web immersives et des solutions intelligentes.",
    available: "Disponible pour des projets",
    yearsExp: "3+",
    cvLink: "#",
  },
  about: {
    text: "Je suis un passionné d'informatique, spécialisé en IA et Big Data. Mon objectif est de créer des solutions innovantes qui allient performance technique et design futuriste. Toujours en quête de nouveaux défis.",
    stats: [
      { label: "Années d'Expérience", value: "3+" },
      { label: "Projets Réalisés", value: "15+" },
      { label: "Certifications", value: "5" },
      { label: "Passion", value: "∞" },
    ],
  },
  journey: [
    { id: 1, year: "2023", title: "Master IA & BigData", desc: "Spécialisation en Deep Learning et traitement de données massives.", icon: "ri-graduation-cap-fill" },
    { id: 2, year: "2021", title: "Stage Développeur Fullstack", desc: "Création d'applications web réactives et gestion de bases de données.", icon: "ri-code-box-fill" },
    { id: 3, year: "2020", title: "Licence Informatique", desc: "Acquisition des bases solides en algorithmique et développement logiciel.", icon: "ri-book-2-fill" },
  ],
  projects: [
    { id: 1, title: "Neural Network Viz", desc: "Visualisateur de réseaux de neurones en temps réel.", tags: "Python, TensorFlow, React", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 2, title: "E-Commerce AI", desc: "Plateforme de vente avec recommandation intelligente.", tags: "Node.js, MongoDB, AI", img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 3, title: "Data Pipeline", desc: "Système ETL automatisé pour le traitement de données massives.", tags: "Python, Spark, AWS", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000", link: "#" },
    { id: 4, title: "ChatBot NLP", desc: "Assistant conversationnel basé sur le traitement du langage naturel.", tags: "Python, BERT, FastAPI", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000", link: "#" },
  ],
  skills: [
    { id: 1, name: "HTML5", icon: "ri-html5-fill", level: 95 },
    { id: 2, name: "CSS3", icon: "ri-css3-fill", level: 90 },
    { id: 3, name: "JS / TS", icon: "ri-javascript-fill", level: 85 },
    { id: 4, name: "Python", icon: "ri-code-s-slash-line", level: 80 },
    { id: 5, name: "React", icon: "ri-reactjs-line", level: 75 },
    { id: 6, name: "Node.js", icon: "ri-nodejs-line", level: 70 },
  ],
  interests: [
    { id: 1, name: "Gaming", icon: "ri-gamepad-line" },
    { id: 2, name: "Voyage", icon: "ri-plane-line" },
    { id: 3, name: "Musique", icon: "ri-headphone-line" },
    { id: 4, name: "Lecture", icon: "ri-book-open-line" },
  ],
  certifications: [
    { id: 1, type: "certification", name: "AWS Cloud Practitioner", date: "2023", image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" },
    { id: 2, type: "certification", name: "TensorFlow Developer", date: "2022", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
    { id: 3, type: "attestation", name: "Google Data Analytics", date: "2021", image: "https://images.credly.com/images/32f225eb-4581-42ab-8e0d-036128678083/logo.png" },
  ],
  contact: {
    email: "contact@lidao.dev",
    location: "Paris, France",
    status: "Open to Work",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      whatsapp: "https://wa.me/22870289212",
      instagram: "https://instagram.com/user",
    },
  },
};

interface PortfolioContextType {
  data: PortfolioData;
  updateHero: (hero: HeroData) => void;
  updateAbout: (about: AboutData) => void;
  updateContact: (contact: ContactData) => void;
  
  // Journey
  addJourney: (item: Omit<JourneyItem, 'id'>) => void;
  updateJourney: (id: number, item: Partial<JourneyItem>) => void;
  deleteJourney: (id: number) => void;
  
  // Projects
  addProject: (item: Omit<ProjectItem, 'id'>) => void;
  updateProject: (id: number, item: Partial<ProjectItem>) => void;
  deleteProject: (id: number) => void;
  
  // Skills
  addSkill: (item: Omit<SkillItem, 'id'>) => void;
  updateSkill: (id: number, item: Partial<SkillItem>) => void;
  deleteSkill: (id: number) => void;
  
  // Interests
  addInterest: (item: Omit<InterestItem, 'id'>) => void;
  updateInterest: (id: number, item: Partial<InterestItem>) => void;
  deleteInterest: (id: number) => void;
  
  // Certifications
  addCertification: (item: Omit<CertificationItem, 'id'>) => void;
  updateCertification: (id: number, item: Partial<CertificationItem>) => void;
  deleteCertification: (id: number) => void;
  
  // Admin
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('portfolioData_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...defaultData, ...parsed };
      } catch {
        return defaultData;
      }
    }
    return defaultData;
  });
  
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolioData_v2', JSON.stringify(data));
  }, [data]);

  const updateHero = (hero: HeroData) => setData(prev => ({ ...prev, hero }));
  const updateAbout = (about: AboutData) => setData(prev => ({ ...prev, about }));
  const updateContact = (contact: ContactData) => setData(prev => ({ ...prev, contact }));

  // Journey CRUD
  const addJourney = (item: Omit<JourneyItem, 'id'>) => {
    setData(prev => ({
      ...prev,
      journey: [...prev.journey, { ...item, id: Date.now() }],
    }));
  };
  const updateJourney = (id: number, item: Partial<JourneyItem>) => {
    setData(prev => ({
      ...prev,
      journey: prev.journey.map(j => j.id === id ? { ...j, ...item } : j),
    }));
  };
  const deleteJourney = (id: number) => {
    setData(prev => ({
      ...prev,
      journey: prev.journey.filter(j => j.id !== id),
    }));
  };

  // Projects CRUD
  const addProject = (item: Omit<ProjectItem, 'id'>) => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, { ...item, id: Date.now() }],
    }));
  };
  const updateProject = (id: number, item: Partial<ProjectItem>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...item } : p),
    }));
  };
  const deleteProject = (id: number) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id),
    }));
  };

  // Skills CRUD
  const addSkill = (item: Omit<SkillItem, 'id'>) => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, { ...item, id: Date.now() }],
    }));
  };
  const updateSkill = (id: number, item: Partial<SkillItem>) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(s => s.id === id ? { ...s, ...item } : s),
    }));
  };
  const deleteSkill = (id: number) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id),
    }));
  };

  // Interests CRUD
  const addInterest = (item: Omit<InterestItem, 'id'>) => {
    setData(prev => ({
      ...prev,
      interests: [...prev.interests, { ...item, id: Date.now() }],
    }));
  };
  const updateInterest = (id: number, item: Partial<InterestItem>) => {
    setData(prev => ({
      ...prev,
      interests: prev.interests.map(i => i.id === id ? { ...i, ...item } : i),
    }));
  };
  const deleteInterest = (id: number) => {
    setData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i.id !== id),
    }));
  };

  // Certifications CRUD
  const addCertification = (item: Omit<CertificationItem, 'id'>) => {
    setData(prev => ({
      ...prev,
      certifications: [...prev.certifications, { ...item, id: Date.now() }],
    }));
  };
  const updateCertification = (id: number, item: Partial<CertificationItem>) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.map(c => c.id === id ? { ...c, ...item } : c),
    }));
  };
  const deleteCertification = (id: number) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c.id !== id),
    }));
  };

  return (
    <PortfolioContext.Provider value={{
      data,
      updateHero,
      updateAbout,
      updateContact,
      addJourney,
      updateJourney,
      deleteJourney,
      addProject,
      updateProject,
      deleteProject,
      addSkill,
      updateSkill,
      deleteSkill,
      addInterest,
      updateInterest,
      deleteInterest,
      addCertification,
      updateCertification,
      deleteCertification,
      isAdmin,
      setIsAdmin,
    }}>
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

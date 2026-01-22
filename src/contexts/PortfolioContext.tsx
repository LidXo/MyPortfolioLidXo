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
    { 
      id: 1, 
      year: "2025", 
      title: "Master IA & Big Data", 
      desc: "Spécialisation en Data Engineering et Architectures Distribuées. Focus sur le traitement de données massives, le Cloud Computing et les pipelines ML.", 
      icon: "ri-graduation-cap-fill" 
    },
    { 
      id: 2, 
      year: "2024", 
      title: "Stage & Projets Techniques", 
      desc: "Développement de solutions data-driven. Conception de bases de données, APIs et interfaces réactives. Premières mises en production.", 
      icon: "ri-code-box-fill" 
    },
    { 
      id: 3, 
      year: "2023", 
      title: "Licence Informatique", 
      desc: "Acquisition des fondements théoriques : Algorithmique complexe, Structures de données, Systèmes d'exploitation et Réseaux.", 
      icon: "ri-book-2-fill" 
    },
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
      id: "fundamentals",
      title: "Fondamentaux Data Engineering",
      icon: "ri-server-fill",
      skills: [
        "Compréhension approfondie des architectures data modernes",
        "Conception de pipelines de données robustes, scalables et maintenables",
        "Maîtrise des flux batch et streaming",
        "Gestion du cycle de vie de la donnée",
        "Garantir la qualité, la cohérence et la fiabilité des données",
        "Gestion de la volumétrie (Big Data)"
      ]
    },
    {
      id: "architecture",
      title: "Architecture & Platforms",
      icon: "ri-building-2-fill",
      skills: [
        "Conception d’architectures Data Warehouse & Data Lake",
        "Séparation compute / storage",
        "Architectures orientées événements",
        "Data Mesh (principes, gouvernance)",
        "Optimisation des coûts et des performances"
      ]
    },
    {
      id: "pipelines",
      title: "Pipelines & Orchestration",
      icon: "ri-flow-chart",
      skills: [
        "Ingestion de données multi-sources (API, fichiers, bases)",
        "Transformation de données (ETL / ELT)",
        "Orchestration de workflows data",
        "Gestion des dépendances et des erreurs",
        "Automatisation complète des pipelines"
      ]
    },
    {
      id: "processing",
      title: "Traitement des données",
      icon: "ri-cpu-line",
      skills: [
        "Nettoyage et normalisation des données",
        "Agrégation et enrichissement",
        "Partitionnement et indexation",
        "Optimisation des requêtes analytiques",
        "Traitement distribué"
      ]
    },
    {
      id: "databases",
      title: "Bases de données",
      icon: "ri-database-2-fill",
      skills: [
        "Modélisation relationnelle avancée",
        "Modélisation analytique (Star / Snowflake schema)",
        "Gestion OLTP et OLAP",
        "Stockage distribué",
        "Gestion de métadonnées"
      ]
    },
    {
      id: "sql-analytics",
      title: "SQL & Analytics",
      icon: "ri-code-box-line",
      skills: [
        "SQL avancé (CTE, window functions)",
        "Data transformations analytiques",
        "Construction de tables analytiques pour la BI",
        "Validation de modèles de données",
        "Documentation des datasets"
      ]
    },
    {
      id: "streaming",
      title: "Streaming & Temps réel",
      icon: "ri-pulse-line",
      skills: [
        "Conception de pipelines temps réel",
        "Traitement de flux continus",
        "Gestion de la latence et throughput",
        "Event-driven architectures"
      ]
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps Data",
      icon: "ri-cloud-windy-fill",
      skills: [
        "Déploiement Cloud (AWS, GCP, Azure)",
        "Infrastructure as Code (IaC)",
        "CI/CD pour pipelines data",
        "Monitoring et observabilité",
        "Sécurité des données (IAM, chiffrement)"
      ]
    },
    {
      id: "governance",
      title: "Qualité & Gouvernance",
      icon: "ri-shield-check-fill",
      skills: [
        "Data Quality checks",
        "Data validation automatisée",
        "Lineage et traçabilité",
        "Gouvernance et conformité (RGPD)",
        "Gestion des accès et permissions"
      ]
    },
    {
      id: "methodology",
      title: "Collaboration",
      icon: "ri-team-fill",
      skills: [
        "Travail en environnement Agile",
        "Collaboration avec Data Scientists",
        "Documentation technique claire",
        "Versionning et revues de code"
      ]
    }
  ],
  technologies: [
    {
      id: "languages",
      title: "Langages",
      items: [
        { name: "Python", icon: "ri-code-s-slash-line", usage: "Scripting, ETL, Analyse" },
        { name: "SQL", icon: "ri-database-2-line", usage: "Querying, Transformations" },
        { name: "Bash / Shell", icon: "ri-terminal-box-line", usage: "Automatisation système" },
        { name: "Java / Scala", icon: "ri-java-line", usage: "Performance, Big Data" }
      ]
    },
    {
      id: "databases-relational",
      title: "Bases sQL",
      items: [
        { name: "PostgreSQL", icon: "ri-database-line", usage: "SGBD Avancé" },
        { name: "MySQL", icon: "ri-database-2-line", usage: "SGBD Web" },
        { name: "Oracle", icon: "ri-server-line", usage: "Entreprise" }
      ]
    },
    {
      id: "databases-nosql",
      title: "NoSQL",
      items: [
        { name: "MongoDB", icon: "ri-leaf-line", usage: "Documents" },
        { name: "Redis", icon: "ri-stack-line", usage: "Caching, In-memory" },
        { name: "Cassandra", icon: "ri-table-alt-line", usage: "Wide-column store" }
      ]
    },
    {
      id: "bi-analytics",
      title: "Analytics & BI",
      items: [
        { name: "BigQuery", icon: "ri-google-fill", usage: "Data Warehouse Serverless" },
        { name: "Snowflake", icon: "ri-snowy-line", usage: "Cloud Data Platform" },
        { name: "Power BI", icon: "ri-bar-chart-fill", usage: "Business Intelligence" }
      ]
    },
    {
      id: "bigdata",
      title: "Big Data",
      items: [
        { name: "Apache Spark", icon: "ri-fire-fill", usage: "Processing in-memory" },
        { name: "Hadoop", icon: "ri-hard-drive-2-line", usage: "Stockage distribué" },
        { name: "Apache Flink", icon: "ri-flow-chart", usage: "Stateful computations" }
      ]
    },
    {
      id: "orchestration",
      title: "Orchestration",
      items: [
        { name: "Airflow", icon: "ri-windy-line", usage: "Workflows as Code" },
        { name: "dbt", icon: "ri-hammer-line", usage: "Transformations Analytics" },
        { name: "Dagster", icon: "ri-node-tree", usage: "Data Orchestrator" }
      ]
    },
    {
      id: "streaming",
      title: "Streaming",
      items: [
        { name: "Kafka", icon: "ri-arrow-left-right-line", usage: "Event Streaming" },
        { name: "RabbitMQ", icon: "ri-mail-send-line", usage: "Message Broker" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud Platforms",
      items: [
        { name: "GCP", icon: "ri-google-fill", usage: "BigQuery, GCS, Dataflow" },
        { name: "AWS", icon: "ri-amazon-fill", usage: "S3, Glue, Redshift, EMR" },
        { name: "Azure", icon: "ri-microsoft-fill", usage: "Data Factory, Synapse" }
      ]
    },
    {
      id: "devops",
      title: "DevOps",
      items: [
        { name: "Docker", icon: "ri-docker-line", usage: "Conteneurisation" },
        { name: "Kubernetes", icon: "ri-ship-line", usage: "Orchestration conteneurs" },
        { name: "Terraform", icon: "ri-cloud-line", usage: "Infrastructure as Code" }
      ]
    },
    {
      id: "quality",
      title: "Monitoring",
      items: [
        { name: "Grafana", icon: "ri-dashboard-line", usage: "Visualisation metrics" },
        { name: "Prometheus", icon: "ri-pulse-line", usage: "Monitoring system" },
        { name: "Great Expectations", icon: "ri-check-double-line", usage: "Data Quality" }
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

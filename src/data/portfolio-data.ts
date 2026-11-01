// === TYPES ===

export type SkillLevel = 'beginner' | 'intermediate' | 'operational' | 'advanced';

export interface HeroData {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  cvLink: string;
}

export interface AboutData {
  paragraphs: string[];
  objectives: string[];
  stats: { label: string; value: string; icon: string }[];
}

export interface JourneyItem {
  id: number;
  year: string;
  title: string;
  desc: string;
  icon: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'data-analysis' | 'backend' | 'web' | 'ai';
  status: 'completed' | 'in-progress' | 'experimental';
  tags: string[];
  img: string;
  githubLink: string;
  demoLink?: string;
  details?: ProjectDetails;
}

export interface ProjectDetails {
  context: string;
  problem: string;
  objectives: string[];
  methodology: string;
  steps: string[];
  results: string[];
  difficulties: string[];
  learnings: string[];
  limitations: string[];
}

export interface TechItem {
  name: string;
  icon: string;
  usage: string;
  level: SkillLevel;
}

export interface TechCategory {
  id: string;
  title: string;
  icon: string;
  items: TechItem[];
}

export interface CertificationItem {
  id: number;
  type: 'certification' | 'attestation';
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  pdfUri?: string;
  link?: string;
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
  };
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  journey: JourneyItem[];
  projects: ProjectItem[];
  technologies: TechCategory[];
  certifications: CertificationItem[];
  contact: ContactData;
}

// === DATA ===

export const portfolioData: PortfolioData = {
  hero: {
    firstName: "Lidao",
    lastName: "ABIYI",
    title: "Étudiant en Informatique | IA & Big Data | Futur Data Engineer",
    description: "Étudiant en troisième année d'informatique, spécialisé en Intelligence Artificielle et Big Data. Je développe mes compétences en programmation, traitement de données, bases de données et analyse exploratoire à travers des projets pratiques. Mon ambition est de concevoir des architectures de données fiables et de développer des solutions intelligentes.",
    cvLink: "/cv-Lidao.pdf",
  },

  about: {
    paragraphs: [
      "Étudiant en troisième année d'informatique à l'ESGIS (Togo), je me spécialise en Intelligence Artificielle et Big Data. Mon parcours m'a permis de développer des bases solides en programmation, en algorithmique et en gestion de données.",
      "Je m'intéresse particulièrement à l'ingénierie des données et aux systèmes d'intelligence artificielle. J'apprends Python et SQL de manière approfondie pour le traitement, la transformation et l'analyse de données. Mes projets pratiques me permettent de consolider progressivement ces compétences.",
      "Mon objectif est de devenir Data Engineer et d'évoluer vers l'AI Engineering. Je recherche activement des stages et des opportunités pour accélérer ma progression et contribuer à des projets concrets dans le domaine de la Data."
    ],
    objectives: [
      "Approfondir Python et SQL pour le traitement de données",
      "Développer des pipelines ETL",
      "Maîtriser les bases de données relationnelles",
      "Apprendre les architectures Big Data",
      "Construire des solutions basées sur le Machine Learning"
    ],
    stats: [
      { label: "Année d'études", value: "3ème", icon: "ri-graduation-cap-line" },
      { label: "Projets réalisés", value: "6", icon: "ri-folder-line" },
      { label: "Spécialisation", value: "IA & Big Data", icon: "ri-brain-line" },
      { label: "Disponibilité", value: "Stage", icon: "ri-briefcase-line" },
    ],
  },

  journey: [
    {
      id: 1,
      year: "2024 — 2027",
      title: "Licence en Informatique — IA & Big Data",
      desc: "ESGIS, Lomé — Spécialisation Intelligence Artificielle et Big Data. Formation en algorithmique, bases de données, programmation et Data Science.",
      icon: "ri-graduation-cap-fill",
    },
    {
      id: 2,
      year: "2023",
      title: "Baccalauréat Série D",
      desc: "Mention Assez-Bien — Formation scientifique (Mathématiques, Physique-Chimie, SVT).",
      icon: "ri-book-2-fill",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Analyse et Nettoyage d'un Jeu de Données de Ventes",
      shortDesc: "Projet de Data Analysis complet réalisé sur le dataset UCI Online Retail (541 909 lignes). Audit de qualité, nettoyage, préparation et analyse exploratoire des ventes avec visualisations statistiques.",
      fullDesc: "Projet de Data Analysis réalisé avec Python, Pandas et Matplotlib à partir du jeu de données UCI Online Retail. Il porte sur l'audit de qualité, le nettoyage et la préparation des données, suivis d'une analyse exploratoire des ventes : évolution du chiffre d'affaires, performance des produits, comportement des clients et répartition géographique du revenu.",
      category: "data-analysis",
      status: "completed",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter", "OpenPyXL", "Git"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
      githubLink: "https://github.com/LidXo/Analyse-et-Nettoyage-d-un-Jeu-de-Donn-es-de-Ventes",
      details: {
        context: "Projet académique de Data Analysis visant à mettre en pratique les compétences en nettoyage, transformation et analyse exploratoire de données. Le dataset utilisé est le UCI Online Retail Dataset, un jeu de données de ventes en ligne d'un commerce basé au Royaume-Uni.",
        problem: "Les données brutes contiennent des valeurs manquantes, des doublons, des transactions atypiques (retours, annulations, ajustements) et des incohérences qui nécessitent un traitement rigoureux avant toute analyse fiable.",
        objectives: [
          "Auditer la qualité des données brutes",
          "Nettoyer et préparer le jeu de données pour l'analyse",
          "Réaliser une analyse exploratoire complète des ventes",
          "Produire des visualisations statistiques pertinentes",
          "Exporter les résultats dans un format exploitable"
        ],
        methodology: "Approche structurée en phases : audit de qualité → identification des anomalies → nettoyage et transformation → analyse exploratoire → visualisation et export. Environnement : Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, OpenPyXL. Gestion de versions avec Git et GitHub.",
        steps: [
          "Audit de qualité des données (valeurs manquantes, types, distributions)",
          "Analyse et traitement des valeurs manquantes",
          "Détection et suppression des doublons",
          "Identification et catégorisation des transactions atypiques",
          "Analyse des quantités et des prix",
          "Préparation et standardisation des données",
          "Analyse temporelle (évolution CA, saisonnalité)",
          "Analyse des produits (top ventes, répartition)",
          "Analyse des clients (comportement, segmentation)",
          "Analyse géographique (répartition par pays)",
          "Production de visualisations statistiques",
          "Exportation des résultats consolidés"
        ],
        results: [
          "527 935 lignes de ventes standardisées",
          "19 778 factures analysées",
          "Chiffre d'affaires analysé : 10 279 232,92 £",
          "Quantité totale vendue : 5 577 280 unités",
          "Jeu de données consolidé : 532 618 lignes",
          "Données commerciales consolidées : 530 437 lignes"
        ],
        difficulties: [
          "Gestion de la volumétrie (541 909 lignes initiales)",
          "Classification des transactions atypiques (retours, ajustements, corrections)",
          "Rapprochement heuristique des transactions liées",
          "Interprétation des valeurs manquantes sans contexte métier complet"
        ],
        learnings: [
          "Maîtrise de Pandas pour la manipulation de données volumineuses",
          "Techniques de nettoyage et de validation de données",
          "Création de visualisations statistiques avec Matplotlib",
          "Importance de l'audit de qualité avant toute analyse",
          "Rigueur méthodologique dans le traitement des données"
        ],
        limitations: [
          "Les mouvements atypiques sont classifiés selon des critères d'analyse heuristiques",
          "Les rapprochements de transactions sont heuristiques et ne constituent pas une preuve comptable",
          "Les données manquantes ne doivent pas être interprétées automatiquement comme des erreurs",
          "L'analyse est limitée aux données disponibles dans le dataset UCI"
        ]
      }
    },
    {
      id: 2,
      title: "Système de Location de Cassettes",
      shortDesc: "Application Java de gestion d'un club de location de cassettes vidéo. Administration des abonnés, titres, catégories, cassettes et locations.",
      fullDesc: "Application Java de gestion d'un club de location de cassettes vidéo. Le système permet l'administration des abonnés, titres, catégories, cassettes et locations.",
      category: "backend",
      status: "completed",
      tags: ["Java"],
      img: "https://plus.unsplash.com/premium_photo-1729777215342-c1758de6dee5?w=600&auto=format&fit=crop&q=60",
      githubLink: "https://github.com/LidXo/Syst-me-de-Gestion-de-Location-de-Cassettes",
    },
    {
      id: 3,
      title: "Application de Gestion de Stock",
      shortDesc: "Application Java (Maven) de gestion de stock d'entreprise, sécurisée avec BCrypt et connectée à une base MySQL. Interface pour suivre produits, fournisseurs et commandes.",
      fullDesc: "Application Java (Maven) de gestion de stock d'entreprise. Sécurisée avec BCrypt et connectée à une base de données MySQL. Interface intuitive pour suivre les produits, fournisseurs, commandes et niveaux de stock en temps réel.",
      category: "backend",
      status: "completed",
      tags: ["Java", "MySQL", "Maven"],
      img: "https://plus.unsplash.com/premium_photo-1681426710520-7c56c9f563d2?q=80&w=1332&auto=format&fit=crop",
      githubLink: "https://github.com/LidXo/Gestion_Stock",
    },
    {
      id: 4,
      title: "Système de Gestion de Bibliothèque",
      shortDesc: "Système informatisé de gestion de ressources documentaires : catalogage, gestion adhérents, suivi emprunts/retours, pénalités, réservations et statistiques. Architecture MVC.",
      fullDesc: "Système informatisé de gestion des ressources documentaires et des opérations de prêt/retour. Fonctionnalités : catalogage, gestion adhérents, suivi emprunts/retours, calcul pénalités retard, réservations, recherche multicritère, statistiques. Architecture MVC, transactions ACID.",
      category: "backend",
      status: "completed",
      tags: ["Java"],
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
      githubLink: "https://github.com/LidXo/bibliotheque",
    },
    {
      id: 5,
      title: "Site E-Commerce",
      shortDesc: "Site e-commerce statique mono-fichier : catalogue filtrable, panier persistant (localStorage), gestion favoris, panel admin, checkout multi-étapes, responsive design.",
      fullDesc: "Site e-commerce statique mono-fichier — HTML5 / CSS3 / Vanilla JS. Catalogue filtrable, panier persistant (localStorage), gestion des favoris, panel admin intégré (ajout/suppression/activation produits), checkout multi-étapes, code promo, notifications toast, responsive design, accessibilité ARIA, zéro dépendance externe.",
      category: "web",
      status: "completed",
      tags: ["HTML5", "CSS3", "JavaScript"],
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
      githubLink: "https://github.com/LidXo/Site_E-Commerce",
    },
    {
      id: 6,
      title: "Face ID — Reconnaissance Faciale",
      shortDesc: "Système de reconnaissance faciale en Python capturant les visages en temps réel via webcam et envoyant les résultats à un bot Telegram pour notification.",
      fullDesc: "Système de reconnaissance faciale en Python capturant les visages en temps réel via webcam et les envoyant automatiquement à un bot Telegram pour traitement et notification. Intègre OpenCV pour la détection, face_recognition pour l'identification faciale, et l'API python-telegram-bot pour les notifications asynchrones instantanées.",
      category: "ai",
      status: "completed",
      tags: ["Python", "OpenCV", "Telegram API"],
      img: "https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.jpg?s=612x612&w=0&k=20&c=PYcoBVyeVF5CNR4m6BAWbteF3Cvo2DxOURHMYGglTx0=",
      githubLink: "https://github.com/LidXo/faceid",
    },
  ],

  technologies: [
    {
      id: "languages",
      title: "Langages de Programmation",
      icon: "ri-code-s-slash-line",
      items: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", usage: "Backend, Data Analysis, Scripts", level: "operational" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", usage: "Applications Backend, POO", level: "beginner" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", usage: "Frontend, Logique Web", level: "beginner" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", usage: "Structure Web", level: "operational" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", usage: "Design Web", level: "beginner" },
      ]
    },
    {
      id: "databases",
      title: "Bases de Données",
      icon: "ri-database-2-line",
      items: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", usage: "SGBDR, Requêtes SQL", level: "intermediate" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", usage: "SGBDR", level: "beginner" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", usage: "Base NoSQL", level: "beginner" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", usage: "Base NoSQL", level: "beginner" },
      
      ]
    },
    {
      id: "data-science",
      title: "Data Science & Analysis",
      icon: "ri-bar-chart-2-line",
      items: [
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", usage: "Manipulation et nettoyage de données", level: "intermediate" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", usage: "Calcul numérique, tableaux", level: "beginner" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", usage: "Visualisation de données", level: "intermediate" },
        { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg", usage: "Analyse interactive, documentation", level: "intermediate" },
      ]
    },
    {
      id: "devops-tools",
      title: "Outils & DevOps",
      icon: "ri-terminal-box-line",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", usage: "Gestion de versions", level: "intermediate" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", usage: "Collaboration, Hébergement de code", level: "intermediate" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", usage: "IDE Principal", level: "operational" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", usage: "Environnement de développement", level: "beginner" },
        
      ]
    },
  ],

  certifications: [
    { id: 1, type: "attestation", name: "Networking Essentials", issuer: "Cisco Networking Academy", date: "2024", skills: ["Réseaux", "TCP/IP", "Protocoles"], pdfUri: "/Networking_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_377680c8-b6ef-4768-ad6b-af42d2daf212.pdf" },
    { id: 2, type: "attestation", name: "Alumni Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "2024", skills: ["Cybersécurité", "Sécurité réseau"], pdfUri: "/Alumni_Cybersecurity_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_9e3d9e2b-3049-4fa2-96b8-8bc6c56afcc4.pdf" },
    { id: 3, type: "attestation", name: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "2024", skills: ["Cybersécurité", "Menaces", "Protection"], pdfUri: "/Cybersecurity_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_264d6df7-b0c8-4bfa-929d-b76bbe13d134.pdf" },
    { id: 4, type: "attestation", name: "Get Connected", issuer: "Cisco Networking Academy", date: "2024", skills: ["Fondamentaux IT", "Connectivité"], pdfUri: "/Get_Connected_certificate_lidao-abiyi-ipnetinstitute-com_6ba40525-6f4e-4555-98eb-9154ffd6441b.pdf" },
    { id: 5, type: "attestation", name: "NDG Linux Essentials", issuer: "Cisco Networking Academy / NDG", date: "2024", skills: ["Linux", "Ligne de commande", "Administration"], pdfUri: "/Partner-_NDG_Linux_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_4d00fb94-3d30-416f-98a5-d85420f9dfc9.pdf" },
    { id: 6, type: "attestation", name: "Présentation de l'engineering données dans Azure", issuer: "Microsoft", date: "2026", skills: ["Azure", "Data Engineering", "Cloud"], pdfUri: "/Presentation-engineering-donnees-Azure.pdf" },
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
    },
  },
};

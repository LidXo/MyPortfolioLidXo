
// ============================================================
// TYPES
// ============================================================

export type SkillLevel =
  | 'beginner'
  | 'intermediate'
  | 'operational'
  | 'advanced';

export interface HeroData {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  cvLink: string;
}

export interface AboutData {
  paragraphs: string[];
  stats: {
    label: string;
    value: string;
    icon: string;
    description?: string;
  }[];
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
  category: 'data-analysis' | 'database' | 'backend' | 'web' | 'ai';
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

// ============================================================
// DATA
// ============================================================

export const portfolioData: PortfolioData = {
  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------

  hero: {
    firstName: "Lidao",
    lastName: "ABIYI",
    title: "Étudiant en Informatique | IA & Big Data | Data Engineering",
    description:
      "Étudiant en troisième année d'informatique, spécialisé en Intelligence Artificielle et Big Data. Je développe mes compétences en Python, SQL, bases de données et traitement de données à travers des projets pratiques. Je m'intéresse particulièrement à la conception de bases de données, aux pipelines de données et aux architectures Data Engineering.",
    cvLink: "/cv-Lidao.pdf",
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------

  about: {
    paragraphs: [
      "Étudiant en troisième année d'informatique à l'ESGIS, à Lomé au Togo, je suis spécialisé en Intelligence Artificielle et Big Data. Ma formation me permet d'aborder différents domaines de l'informatique, notamment la programmation, les bases de données, les algorithmes et le traitement des données.",

      "À travers mes projets pratiques, je développe mes compétences en Python, SQL, manipulation de données et conception de bases de données relationnelles. Je m'intéresse également à la qualité des données, à l'automatisation des traitements et à la création d'outils d'analyse.",

      "Mon objectif professionnel est de devenir Data Engineer. Je souhaite approfondir progressivement mes compétences en conception de pipelines ETL/ELT, Data Warehousing, bases de données relationnelles et NoSQL, ainsi qu'en technologies Big Data."
    ],

    stats: [
      {
        label: "Formation en cours",
        value: "Licence 3",
        icon: "ri-graduation-cap-line",
        description: "ESGIS Lomé • IA & Big Data"
      },
      {
        label: "Réalisations concrètes",
        value: "8 Projets",
        icon: "ri-folder-check-line",
        description: "Data, SQL, Backend, Web & IA"
      },
      {
        label: "Domaine d'intérêt",
        value: "Data Engineering",
        icon: "ri-database-2-line",
        description: "Data, bases de données & pipelines"
      },
      {
        label: "Disponibilité",
        value: "Stage",
        icon: "ri-briefcase-line",
        description: "Ouvert aux opportunités de stage"
      }
    ]
  },

  // ----------------------------------------------------------
  // PARCOURS
  // ----------------------------------------------------------

  journey: [
    {
      id: 1,
      year: "2024 — 2027",
      title: "Licence en Informatique — IA & Big Data",
      desc:
        "ESGIS, Lomé — Formation en Intelligence Artificielle et Big Data : programmation, algorithmique, bases de données, traitement et analyse de données.",
      icon: "ri-graduation-cap-fill"
    },
    {
      id: 2,
      year: "2023",
      title: "Baccalauréat Série D",
      desc:
        "Mention Assez-Bien — Formation scientifique en mathématiques, physique-chimie et sciences de la vie et de la terre.",
      icon: "ri-book-2-fill"
    }
  ],

  // ----------------------------------------------------------
  // PROJETS
  // ----------------------------------------------------------

  projects: [
    // --------------------------------------------------------
    // PROJET 1
    // --------------------------------------------------------

    {
      id: 1,
      title: "Analyse et Nettoyage d'un Jeu de Données de Ventes",

      shortDesc:
        "Audit de qualité, identification des anomalies et analyse exploratoire du jeu de données UCI Online Retail avec Python, Pandas et Matplotlib.",

      fullDesc:
        "Projet de Data Analysis réalisé à partir du jeu de données UCI Online Retail. Le travail porte sur l'audit de qualité des données, l'identification des valeurs manquantes, des doublons et des transactions atypiques, ainsi que l'analyse exploratoire des ventes selon plusieurs dimensions : temporelle, produits, clients et géographique.",

      category: "data-analysis",
      status: "completed",

      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Jupyter",
        "OpenPyXL",
        "Git"
      ],

      img:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",

      githubLink:
        "https://github.com/LidXo/Analyse-et-Nettoyage-d-un-Jeu-de-Donn-es-de-Ventes",

      details: {
        context:
          "Projet d'analyse de données réalisé à partir du jeu de données public UCI Online Retail. Ce jeu contient 541 909 lignes de transactions commerciales et 8 variables décrivant notamment les factures, les produits, les quantités, les dates, les prix unitaires, les clients et les pays.",

        problem:
          "Les données commerciales brutes peuvent contenir des valeurs manquantes, des doublons, des quantités négatives, des prix nuls et des opérations particulières. Ces éléments peuvent fausser les analyses s'ils ne sont pas identifiés et interprétés avant le calcul des indicateurs commerciaux.",

        objectives: [
          "Découvrir et comprendre la structure du jeu de données UCI Online Retail",
          "Évaluer la qualité et la cohérence des données",
          "Identifier et quantifier les valeurs manquantes",
          "Détecter les doublons exacts et étudier leur impact potentiel",
          "Analyser les quantités négatives, les prix nuls et les transactions atypiques",
          "Étudier les annulations commerciales et certaines opérations particulières",
          "Définir des règles de traitement adaptées aux anomalies observées",
          "Réaliser une analyse exploratoire des ventes",
          "Produire des indicateurs, tableaux et visualisations pour faciliter l'interprétation des données"
        ],

        methodology:
          "La démarche repose sur une analyse exploratoire structurée : chargement des données → inspection de la structure → audit de qualité → identification et classification des anomalies → étude des opérations commerciales particulières → préparation des données pour l'analyse → analyse exploratoire → visualisation et interprétation des résultats. Les anomalies sont étudiées avant toute décision de traitement afin d'éviter la suppression injustifiée d'informations potentiellement utiles.",

        steps: [
          "Chargement du fichier Excel Online Retail avec Pandas et OpenPyXL",
          "Inspection du nombre de lignes, des colonnes, des types de données et des premières observations",
          "Analyse des valeurs manquantes et de leur répartition",
          "Détection et quantification des doublons exacts",
          "Analyse des quantités négatives et des prix unitaires nuls",
          "Identification des factures d'annulation à partir du préfixe C de InvoiceNo",
          "Étude des factures particulières et des ajustements comptables",
          "Recherche de correspondances candidates entre certaines ventes et leurs annulations",
          "Analyse exploratoire des ventes par période, produit, client et pays",
          "Construction de tableaux récapitulatifs et de visualisations",
          "Documentation des observations, des règles de traitement et des limites de l'analyse"
        ],

        results: [
          "541 909 lignes et 8 colonnes analysées",
          "5 268 doublons exacts détectés dans le jeu de données",
          "1 336 mouvements avec quantité négative hors annulations commerciales identifiés ; ces mouvements présentent un prix unitaire nul et un identifiant client manquant",
          "43 rapprochements candidats identifiés, correspondant à 35 paires de factures distinctes",
          "Identification des factures d'annulation, des ajustements comptables et d'autres opérations atypiques",
          "Analyse de la qualité des données : valeurs manquantes, doublons, transactions atypiques et incohérences",
          "Analyse exploratoire des ventes selon les dimensions temporelle, produits, clients et géographique",
          "Production de tableaux et de visualisations pour faciliter l'interprétation des données"
        ],

        difficulties: [
          "Interprétation des quantités négatives sans les confondre systématiquement avec des erreurs",
          "Distinction entre les annulations commerciales et les autres mouvements particuliers",
          "Analyse des doublons exacts sans identifiant unique permettant de confirmer qu'ils représentent des transactions répétées",
          "Identification des ajustements comptables et des opérations atypiques",
          "Recherche de correspondances entre factures de vente et factures d'annulation",
          "Définition de règles de traitement qui préservent autant que possible l'information utile"
        ],

        learnings: [
          "Utilisation de Pandas pour charger, inspecter et analyser un jeu de données volumineux",
          "Application de techniques d'audit de qualité des données",
          "Identification et analyse des valeurs manquantes et des doublons",
          "Manipulation des colonnes numériques, textuelles et temporelles",
          "Compréhension des particularités des données transactionnelles commerciales",
          "Utilisation de NumPy et Pandas pour les traitements analytiques",
          "Création de visualisations avec Matplotlib",
          "Interprétation des indicateurs et communication des résultats d'une analyse exploratoire"
        ],

        limitations: [
          "Les 5 268 doublons exacts ont été détectés, mais leur suppression ne peut pas être considérée comme systématiquement justifiée sans validation métier.",
          "Les 43 rapprochements identifiés sont des correspondances candidates fondées sur des critères d'analyse ; ils ne constituent pas une confirmation automatique de chaque annulation.",
          "Les identifiants clients manquants limitent certaines analyses au niveau individuel.",
          "Le jeu de données ne fournit pas les coûts d'achat des produits ni l'ensemble des charges de l'entreprise ; le bénéfice et la marge réelle ne peuvent donc pas être calculés.",
          "Les résultats dépendent de la qualité et de la période couverte par le jeu de données UCI Online Retail.",
          "Certaines opérations particulières nécessitent une validation métier avant toute exclusion ou correction."
        ]
      }
    },

    // --------------------------------------------------------
    // PROJET 2
    // --------------------------------------------------------

    {
      id: 2,
      title: "Base de Données de Gestion Commerciale",

      shortDesc:
        "Conception et développement d'une base de données relationnelle SQLite composée de 7 tables. Le projet couvre la modélisation des données, les contraintes d'intégrité, l'insertion de données et les vérifications avec Python et pytest.",

      fullDesc:
        "Conception et développement d'une base de données relationnelle pour une entreprise fictive de vente d'équipements informatiques (TechStore). Le projet consiste à structurer les données relatives aux clients, fournisseurs, catégories, produits, commandes et paiements dans une base SQLite de 7 tables. Des contraintes d'intégrité sont mises en place et des tests avec Python et pytest permettent de vérifier la connexion, la structure et l'intégrité référentielle de la base.",

      category: "database",
      status: "completed",

      tags: [
        "Python",
        "SQL",
        "SQLite",
        "Database Design",
        "Pytest",
        "Git"
      ],

      img:
        "https://plus.unsplash.com/premium_photo-1661454577337-7738fd3dd478?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

      githubLink: "https://github.com/LidXo/gestion-commerciale",

      details: {
        context:
          "Projet de conception et d'implémentation d'une base de données relationnelle pour une entreprise fictive de vente d'équipements informatiques et électroniques (TechStore). L'objectif est de structurer et de centraliser les informations commerciales dans une base de données cohérente.",

        problem:
          "La gestion des clients, fournisseurs, produits, commandes et paiements nécessite une organisation structurée des données. Sans modèle relationnel adapté ni contraintes d'intégrité, des incohérences peuvent apparaître dans les enregistrements et les relations entre les différentes entités.",

        objectives: [
          "Analyser les besoins d'une activité de gestion commerciale",
          "Identifier les entités et leurs relations",
          "Concevoir une structure relationnelle adaptée",
          "Créer les tables et leurs contraintes SQL",
          "Garantir la cohérence des relations entre les tables",
          "Insérer des données de test",
          "Connecter la base SQLite à Python",
          "Vérifier le fonctionnement et l'intégrité de la base avec pytest"
        ],

        methodology:
          "Démarche de conception et d'implémentation en plusieurs phases : analyse des besoins métier → identification des entités et des relations → conception du schéma relationnel → création des tables et des contraintes SQL → insertion des données de test → connexion avec Python et SQLite → vérification de la structure et de l'intégrité référentielle avec pytest et PRAGMA foreign_key_check.",

        steps: [
          "Analyse des besoins d'une entreprise de gestion commerciale",
          "Identification des entités : clients, fournisseurs, catégories, produits, commandes et paiements",
          "Conception du modèle relationnel et définition des relations entre les tables",
          "Création des 7 tables avec leurs clés primaires et étrangères",
          "Mise en place des contraintes d'intégrité : NOT NULL, UNIQUE et CHECK",
          "Création du script SQL de définition de la structure (schema.sql)",
          "Préparation et insertion des données de test (insert_data.sql)",
          "Connexion à la base SQLite avec Python et le module sqlite3",
          "Exécution des tests avec pytest",
          "Vérification de l'intégrité référentielle avec PRAGMA foreign_key_check"
        ],

        results: [
          "7 tables relationnelles créées : CLIENT, FOURNISSEUR, CATEGORIE, PRODUIT, COMMANDE, DETAIL_COMMANDE et PAIEMENT",
          "Contraintes d'intégrité référentielle vérifiées avec PRAGMA foreign_key_check",
          "Contraintes CHECK et UNIQUE mises en place pour contrôler les données",
          "Base SQLite créée pour structurer les informations relatives aux clients, produits, commandes et paiements",
          "Tests automatisés réussis pour vérifier la connexion, la structure et l'intégrité de la base"
        ],

        difficulties: [
          "Organisation cohérente des entités et de leurs relations",
          "Gestion des relations entre commandes et produits à travers la table DETAIL_COMMANDE",
          "Définition des contraintes nécessaires à la cohérence des données",
          "Activation et vérification des clés étrangères dans SQLite",
          "Validation de la structure et des relations entre les tables"
        ],

        learnings: [
          "Compréhension de la modélisation des bases de données relationnelles",
          "Pratique de la création de tables avec SQL DDL",
          "Utilisation des clés primaires et étrangères",
          "Mise en place de contraintes d'intégrité avec CHECK et UNIQUE",
          "Manipulation d'une base SQLite avec Python et sqlite3",
          "Utilisation de pytest pour tester une base de données",
          "Vérification de l'intégrité référentielle avec les commandes PRAGMA de SQLite"
        ],

        limitations: [
          "La base utilise SQLite et fonctionne dans un environnement local mono-fichier.",
          "Aucune interface graphique utilisateur n'a été développée.",
          "Les opérations de mise à jour et de suppression ne sont pas encore entièrement implémentées.",
          "L'automatisation de la gestion des stocks n'est pas encore développée.",
          "Le projet ne constitue pas encore une application commerciale complète."
        ]
      }
    },

    // --------------------------------------------------------
    // PROJET 3
    // --------------------------------------------------------

    {
      id: 3,
      title: "Tableau de bord décisionnel des ventes",

      shortDesc:
        "Développement d'un tableau de bord interactif avec Python et Streamlit pour analyser les ventes, suivre les indicateurs clés de performance (KPI) et explorer les résultats par période, produit, client et pays.",

      fullDesc:
        "Conception et déploiement d'une application décisionnelle interactive à partir du jeu de données UCI Online Retail (541 909 lignes). Le projet utilise Python, Pandas et Plotly pour transformer les données commerciales, calculer des indicateurs de performance et présenter les résultats dans une interface Streamlit avec filtres temporels et géographiques.",

      category: "data-analysis",
      status: "completed",

      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Streamlit",
        "Plotly",
        "OpenPyXL",
        "Git",
        "GitHub"
      ],

      img:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",

      githubLink: "https://github.com/LidXo/tableau-de-bord-ventes",

      demoLink:
        "https://tableau-de-bord-ventes-lidao.streamlit.app/",

      details: {
        context:
          "Projet de Data Analysis et de Business Intelligence réalisé à partir du jeu de données UCI Online Retail. L'objectif est de transformer des données transactionnelles en indicateurs et visualisations facilitant le suivi de l'activité commerciale.",

        problem:
          "Les données brutes ne fournissent pas directement une vision synthétique de la performance commerciale. Il est nécessaire de préparer les transactions, de distinguer les ventes des annulations et de construire des indicateurs cohérents pour analyser les résultats.",

        objectives: [
          "Charger et préparer un jeu de données de 541 909 lignes",
          "Identifier et classifier les différents types de transactions",
          "Calculer les principaux indicateurs de performance commerciale",
          "Analyser l'évolution du chiffre d'affaires dans le temps",
          "Comparer les performances des produits, des clients et des pays",
          "Développer une interface interactive avec des filtres",
          "Déployer l'application et rendre le tableau de bord accessible en ligne"
        ],

        methodology:
          "Démarche organisée en plusieurs phases : chargement des données → préparation et classification des transactions → calcul des KPI → analyses métier → visualisations interactives → déploiement. Le code est structuré en modules Python distincts pour le chargement, le traitement, le calcul des indicateurs et les analyses.",

        steps: [
          "Chargement du jeu de données UCI Online Retail",
          "Préparation et classification des transactions commerciales",
          "Calcul du chiffre d'affaires brut, des annulations et du chiffre d'affaires net provisoire",
          "Calcul des indicateurs de ventes, de clients et de quantités",
          "Analyse mensuelle du chiffre d'affaires",
          "Analyse des performances par produit",
          "Analyse des performances par client identifié",
          "Analyse géographique des ventes par pays",
          "Développement du tableau de bord avec Streamlit",
          "Création de graphiques interactifs avec Plotly",
          "Ajout de filtres par période et par pays",
          "Publication du code sur GitHub et déploiement sur Streamlit Community Cloud"
        ],

        results: [
          "541 909 lignes de données exploitées",
          "Chiffre d'affaires brut : 10 574 813,18 unités monétaires",
          "Annulations commerciales : -514 746,44 unités monétaires",
          "Chiffre d'affaires net provisoire : 10 060 066,74 unités monétaires",
          "19 866 factures de vente et 3 638 factures d'annulation",
          "5 581 150 unités vendues",
          "4 335 clients identifiés",
          "3 918 références de marchandises identifiées, hors références de frais et services DOT/POST",
          "Le Royaume-Uni représente environ 84,46 % du chiffre d'affaires net provisoire",
          "Tableau de bord interactif déployé et accessible en ligne"
        ],

        difficulties: [
          "Classification des transactions atypiques, notamment les annulations, les mouvements non commerciaux et les opérations manuelles",
          "Prise en compte des valeurs manquantes dans l'identification des clients",
          "Distinction entre chiffre d'affaires brut, annulations et chiffre d'affaires net provisoire",
          "Organisation du code en modules réutilisables",
          "Gestion des dépendances et résolution des problèmes d'importation lors du déploiement"
        ],

        learnings: [
          "Manipulation et transformation de données avec Pandas et NumPy",
          "Conception d'indicateurs de performance commerciale",
          "Structuration d'un projet Python en modules",
          "Création de visualisations interactives avec Plotly",
          "Développement d'une application de données avec Streamlit",
          "Utilisation de Git et GitHub pour le versionnement",
          "Déploiement d'une application sur Streamlit Community Cloud"
        ],

        limitations: [
          "Le jeu de données ne contient pas les coûts d'achat des produits ni les charges de l'entreprise : le bénéfice et la marge ne peuvent donc pas être calculés.",
          "Le chiffre d'affaires net est un indicateur analytique provisoire, et non un chiffre comptable audité.",
          "Les données de décembre 2010 et décembre 2011 couvrent des périodes partielles.",
          "Les transactions sans identifiant client ne peuvent pas être intégrées aux analyses individuelles des clients.",
          "Les classifications de certaines transactions atypiques reposent sur des règles d'analyse et les informations disponibles dans le jeu de données.",
          "La devise du jeu de données n'est pas explicitement confirmée dans les résultats présentés ; les montants sont donc exprimés en unités monétaires."
        ]
      }
    },

    // --------------------------------------------------------
    // PROJET 4
    // --------------------------------------------------------

    {
      id: 4,
      title: "Système de Location de Cassettes",

      shortDesc:
        "Application Java de gestion d'un club de location de cassettes vidéo : gestion des abonnés, des titres, des catégories, des cassettes et des locations.",

      fullDesc:
        "Application Java consacrée à la gestion d'un club de location de cassettes vidéo. Le projet porte sur l'organisation des informations relatives aux abonnés, aux titres disponibles, aux catégories, aux cassettes et aux opérations de location.",

      category: "backend",
      status: "completed",

      tags: ["Java"],

      img:
        "https://plus.unsplash.com/premium_photo-1729777215342-c1758de6dee5?w=600&auto=format&fit=crop&q=60",

      githubLink:
        "https://github.com/LidXo/Syst-me-de-Gestion-de-Location-de-Cassettes"
    },

    // --------------------------------------------------------
    // PROJET 5
    // --------------------------------------------------------

    {
      id: 5,
      title: "Application de Gestion de Stock",

      shortDesc:
        "Application Java de gestion de stock avec Maven, connexion à une base de données MySQL et gestion des produits, fournisseurs et commandes.",

      fullDesc:
        "Application de gestion de stock développée en Java avec Maven et connectée à une base de données MySQL. Le projet aborde la gestion des produits, des fournisseurs et des commandes, ainsi que l'authentification avec BCrypt.",

      category: "backend",
      status: "completed",

      tags: [
        "Java",
        "MySQL",
        "Maven",
        "BCrypt"
      ],

      img:
        "https://plus.unsplash.com/premium_photo-1681426710520-7c56c9f563d2?q=80&w=1332&auto=format&fit=crop",

      githubLink: "https://github.com/LidXo/Gestion_Stock"
    },

    // --------------------------------------------------------
    // PROJET 6
    // --------------------------------------------------------

    {
      id: 6,
      title: "Système de Gestion de Bibliothèque",

      shortDesc:
        "Application de gestion de bibliothèque pour organiser les ressources documentaires, les adhérents et les opérations d'emprunt et de retour.",

      fullDesc:
        "Système informatisé de gestion de ressources documentaires. Le projet porte sur le catalogage, la gestion des adhérents, le suivi des emprunts et des retours, les réservations, la recherche multicritère et les pénalités de retard. L'application est présentée avec une architecture MVC.",

      category: "backend",
      status: "completed",

      tags: [
        "Java",
        "Architecture MVC",
        "Gestion de données"
      ],

      img:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",

      githubLink: "https://github.com/LidXo/bibliotheque"
    },

    // --------------------------------------------------------
    // PROJET 7
    // --------------------------------------------------------

    {
      id: 7,
      title: "Site E-Commerce",

      shortDesc:
        "Site e-commerce statique développé en HTML, CSS et JavaScript, avec catalogue filtrable, panier persistant, favoris et interface d'administration.",

      fullDesc:
        "Site e-commerce statique développé avec HTML5, CSS3 et JavaScript natif. Le projet comprend un catalogue filtrable, un panier persistant avec localStorage, une gestion des favoris, un espace d'administration, un parcours de commande en plusieurs étapes, des notifications et une interface responsive.",

      category: "web",
      status: "completed",

      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "localStorage"
      ],

      img:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",

      githubLink: "https://github.com/LidXo/Site_E-Commerce"
    },

    // --------------------------------------------------------
    // PROJET 8
    // --------------------------------------------------------

    {
      id: 8,
      title: "Face ID — Reconnaissance Faciale",

      shortDesc:
        "Projet Python de reconnaissance faciale utilisant une webcam, OpenCV, face_recognition et des notifications via Telegram.",

      fullDesc:
        "Système de reconnaissance faciale développé en Python. Le projet utilise une webcam pour capturer des images, OpenCV pour le traitement et la détection des visages, face_recognition pour l'identification faciale et l'API Telegram pour transmettre des notifications.",

      category: "ai",
      status: "completed",

      tags: [
        "Python",
        "OpenCV",
        "face_recognition",
        "Telegram API"
      ],

      img:
        "https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.jpg?s=612x612&w=0&k=20&c=PYcoBVyeVF5CNR4m6BAWbteF3Cvo2DxOURHMYGglTx0=",

      githubLink: "https://github.com/LidXo/faceid"
    }
  ],

  // ----------------------------------------------------------
  // TECHNOLOGIES ET COMPÉTENCES
  // ----------------------------------------------------------

  technologies: [
    {
      id: "languages",
      title: "Langages de Programmation",
      icon: "ri-code-s-slash-line",

      items: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          usage: "Scripts, manipulation et analyse de données",
          level: "beginner"
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          usage: "Programmation orientée objet et applications",
          level: "beginner"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          usage: "Développement web et logique côté client",
          level: "beginner"
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          usage: "Structure des pages web",
          level: "intermediate"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          usage: "Mise en forme et présentation web",
          level: "beginner"
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          usage: "Requêtes et manipulation de bases relationnelles",
          level: "beginner"
        }
      ]
    },

    {
      id: "databases",
      title: "Bases de Données",
      icon: "ri-database-2-line",

      items: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          usage: "SGBDR et requêtes SQL",
          level: "beginner"
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          usage: "Système de gestion de bases de données relationnelles",
          level: "beginner"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          usage: "Découverte des bases de données NoSQL",
          level: "beginner"
        },
        {
          name: "SQLite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
          usage: "Base de données relationnelle embarquée",
          level: "beginner"
        }
      ]
    },

    {
      id: "data-science",
      title: "Data Analysis & Visualisation",
      icon: "ri-bar-chart-2-line",

      items: [
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
          usage: "Manipulation, exploration et nettoyage de données",
          level: "intermediate"
        },
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
          usage: "Calcul numérique et manipulation de tableaux",
          level: "beginner"
        },
        {
          name: "Matplotlib",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
          usage: "Visualisation de données",
          level: "beginner"
        },
        {
          name: "Jupyter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
          usage: "Analyse interactive et documentation",
          level: "intermediate"
        },
        {
          name: "Streamlit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
          usage: "Création de tableaux de bord interactifs",
          level: "beginner"
        },
        {
          name: "Plotly",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg",
          usage: "Visualisations interactives",
          level: "beginner"
        },
        {
          name: "OpenPyXL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          usage: "Lecture et manipulation de fichiers Excel avec Python",
          level: "beginner"
        }
      ]
    },

    {
      id: "devops-tools",
      title: "Outils & Environnement de Développement",
      icon: "ri-terminal-box-line",

      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          usage: "Gestion de versions du code",
          level: "intermediate"
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          usage: "Hébergement et gestion de dépôts de code",
          level: "intermediate"
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          usage: "Environnement de développement",
          level: "operational"
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
          usage: "Découverte de l'environnement Linux et de la ligne de commande",
          level: "beginner"
        },
        {
          name: "Pytest",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
          usage: "Tests automatisés en Python",
          level: "beginner"
        },
        {
          name: "Maven",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
          usage: "Gestion de projets et dépendances Java",
          level: "beginner"
        }
      ]
    }
  ],

  // ----------------------------------------------------------
  // CERTIFICATIONS ET ATTESTATIONS
  // ----------------------------------------------------------

  certifications: [
    {
      id: 1,
      type: "attestation",
      name: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "2024",
      skills: [
        "Réseaux",
        "TCP/IP",
        "Protocoles"
      ],
      pdfUri:
        "/Networking_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_377680c8-b6ef-4768-ad6b-af42d2daf212.pdf"
    },
    {
      id: 2,
      type: "attestation",
      name: "Alumni Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "2024",
      skills: [
        "Cybersécurité",
        "Sécurité réseau"
      ],
      pdfUri:
        "/Alumni_Cybersecurity_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_9e3d9e2b-3049-4fa2-96b8-8bc6c56afcc4.pdf"
    },
    {
      id: 3,
      type: "attestation",
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "2024",
      skills: [
        "Cybersécurité",
        "Menaces",
        "Protection"
      ],
      pdfUri:
        "/Cybersecurity_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_264d6df7-b0c8-4bfa-929d-b76bbe13d134.pdf"
    },
    {
      id: 4,
      type: "attestation",
      name: "Get Connected",
      issuer: "Cisco Networking Academy",
      date: "2024",
      skills: [
        "Fondamentaux IT",
        "Connectivité"
      ],
      pdfUri:
        "/Get_Connected_certificate_lidao-abiyi-ipnetinstitute-com_6ba40525-6f4e-4555-98eb-9154ffd6441b.pdf"
    },
    {
      id: 5,
      type: "attestation",
      name: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy / NDG",
      date: "2024",
      skills: [
        "Linux",
        "Ligne de commande",
        "Administration"
      ],
      pdfUri:
        "/Partner-_NDG_Linux_Essentials_certificate_lidao-abiyi-ipnetinstitute-com_4d00fb94-3d30-416f-98a5-d85420f9dfc9.pdf"
    },
    {
      id: 6,
      type: "attestation",
      name: "Présentation de l'engineering données dans Azure",
      issuer: "Microsoft",
      date: "2026",
      skills: [
        "Azure",
        "Data Engineering",
        "Cloud"
      ],
      pdfUri: "/Presentation-engineering-donnees-Azure.pdf"
    }
  ],

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------

  contact: {
    email: "lidxo.dev@gmail.com",
    location: "Lomé, Togo",
    status: "Open to work",

    socials: {
      linkedin: "https://www.linkedin.com/in/abiyilidao/",
      github: "https://github.com/LidXo",
      twitter: "https://x.com/abiyilidao6",
      whatsapp: "https://wa.me/22870289212"
    }
  }
};





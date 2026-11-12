
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
        value: "9 Projets",
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
        "Audit de qualité, nettoyage, validation et analyse exploratoire de 9 994 enregistrements commerciaux avec Python, Pandas et Matplotlib.",

      fullDesc:
        "Projet de Data Analysis réalisé à partir du jeu de données Sample Superstore. Le travail comprend une exploration initiale, un audit approfondi de la qualité des données, la définition et l'application de règles de nettoyage, la validation des données transformées et une analyse exploratoire des performances commerciales. Plusieurs dimensions sont étudiées : temporelle, géographique, produits et clients.",

      category: "data-analysis",
      status: "completed",

      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Jupyter Notebook",
        "Data Cleaning",
        "Data Quality",
        "EDA",
        "Git",
        "GitHub"
      ],

      img:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",

      githubLink:
        "https://github.com/LidXo/Analyse-et-Nettoyage-d-un-Jeu-de-Donn-es-de-Ventes",

      details: {
        context:
          "Projet d'analyse de données réalisé à partir du jeu de données Sample Superstore, fourni au format CSV. Le jeu contient 9 994 enregistrements et 21 colonnes décrivant les commandes, les clients, les produits, les régions, les ventes, les quantités, les remises et les bénéfices. La provenance exacte du fichier n'a pas été retrouvée.",

        problem:
          "Les données commerciales peuvent présenter des problèmes de qualité tels que des incohérences de format, des doublons, des valeurs extrêmes ou des relations incohérentes entre certaines variables. Une analyse réalisée sans vérification préalable de ces éléments risque de produire des indicateurs peu fiables et des interprétations erronées.",

        objectives: [
          "Explorer et comprendre la structure du jeu de données Sample Superstore",
          "Évaluer la qualité et la cohérence des données commerciales",
          "Identifier les valeurs manquantes et les doublons",
          "Détecter les incohérences dans les identifiants et les noms de produits",
          "Analyser les valeurs extrêmes des ventes et des bénéfices",
          "Définir des règles de nettoyage adaptées aux anomalies observées",
          "Nettoyer les données en préservant les informations potentiellement utiles",
          "Valider la cohérence des données après transformation",
          "Réaliser une analyse exploratoire des performances commerciales",
          "Calculer des indicateurs de ventes, de bénéfices et de rentabilité",
          "Produire des tableaux et des visualisations pour communiquer les résultats"
        ],

        methodology:
          "La démarche repose sur un processus structuré de préparation et d'analyse des données : chargement → exploration initiale → audit de qualité → définition des règles de nettoyage → transformation des données → validation → analyse exploratoire → visualisation et interprétation. Chaque anomalie est étudiée avant toute décision de traitement afin de distinguer les erreurs avérées des particularités commerciales qui doivent être conservées.",

        steps: [
          "Chargement du fichier CSV avec Pandas",
          "Inspection des dimensions, des colonnes, des types de données et des premières observations",
          "Analyse statistique descriptive des variables numériques",
          "Recherche des valeurs manquantes et des doublons exacts",
          "Détection des répétitions suspectes au niveau des commandes et des produits",
          "Analyse des incohérences entre identifiants et noms de produits",
          "Étude des dates, des quantités, des remises, des ventes et des bénéfices",
          "Identification et analyse des valeurs extrêmes avec la méthode IQR",
          "Définition et documentation des règles de nettoyage",
          "Normalisation des noms de produits et conversion des types de données",
          "Exportation du jeu de données nettoyé au format CSV",
          "Validation des dimensions, des types, des valeurs et des relations entre variables",
          "Analyse des ventes et des bénéfices selon les dimensions temporelle, géographique et commerciale",
          "Étude de la rentabilité par catégorie, sous-catégorie, segment, client et produit",
          "Création de 20 visualisations avec Matplotlib",
          "Documentation des résultats, des décisions de traitement et des limites de l'analyse"
        ],

        results: [
          "9 994 lignes et 21 colonnes analysées",
          "Aucune valeur manquante détectée",
          "Aucun doublon exact détecté",
          "16 lignes présentant des espaces périphériques dans les noms de produits corrigées",
          "32 lignes présentant des espaces multiples dans les noms de produits normalisées",
          "Deux colonnes de dates converties au format datetime",
          "Codes postaux convertis en chaînes de caractères pour préserver leur nature catégorielle",
          "Un doublon métier suspect constitué de deux lignes conservé et documenté faute de preuve suffisante pour le supprimer",
          "1 167 valeurs extrêmes hautes identifiées dans les ventes et 1 881 valeurs extrêmes dans les bénéfices, conservées après analyse",
          "Chiffre d'affaires total : 2 297 200,86 $",
          "Bénéfice total : 286 397,02 $",
          "Marge bénéficiaire globale : 12,47 %",
          "5 009 commandes, 793 clients et 1 862 produits identifiés",
          "Identification de trois sous-catégories présentant un bénéfice agrégé négatif : Tables, Bookcases et Supplies",
          "Production de 20 graphiques pour analyser les performances commerciales",
          "Validation réussie du jeu de données nettoyé : 9 994 lignes, 21 colonnes et aucune valeur manquante"
        ],

        difficulties: [
          "Distinguer les doublons exacts des répétitions commerciales légitimes",
          "Identifier les incohérences entre les identifiants et les noms de produits sans référentiel externe fiable",
          "Déterminer les règles de nettoyage sans supprimer des informations potentiellement utiles",
          "Interpréter les valeurs extrêmes sans les considérer automatiquement comme des erreurs",
          "Préserver les bénéfices négatifs qui peuvent représenter des pertes commerciales réelles",
          "Vérifier la cohérence des dates et des relations entre les différentes variables",
          "Interpréter les indicateurs de rentabilité sans disposer de toutes les informations sur les coûts opérationnels"
        ],

        learnings: [
          "Manipulation et exploration de jeux de données avec Pandas",
          "Utilisation de NumPy pour les opérations numériques",
          "Application de techniques d'audit de qualité des données",
          "Détection et interprétation des doublons et des anomalies",
          "Nettoyage et normalisation des données textuelles",
          "Conversion et manipulation des types de données temporels et catégoriels",
          "Détection des valeurs extrêmes avec la méthode IQR",
          "Définition de règles de nettoyage justifiées et documentées",
          "Mise en place de contrôles de validation après transformation",
          "Calcul et interprétation des indicateurs commerciaux et financiers",
          "Création de visualisations avec Matplotlib",
          "Documentation et gestion d'un projet avec Git et GitHub"
        ],

        limitations: [
          "La provenance exacte du fichier Sample Superstore utilisé n'a pas été retrouvée.",
          "Le doublon métier suspect constitué de deux lignes a été conservé, car les informations disponibles ne permettent pas de confirmer qu'il s'agit d'une erreur.",
          "Certaines incohérences entre les identifiants et les noms de produits nécessiteraient un référentiel externe pour être résolues de manière fiable.",
          "Les valeurs extrêmes ont été conservées ; leur présence peut influencer certaines statistiques et interprétations.",
          "Les bénéfices négatifs sont conservés, car ils peuvent représenter des pertes commerciales réelles.",
          "Les remises élevées sont associées à des marges plus faibles dans certaines observations, mais cette relation ne démontre pas une causalité.",
          "Les données ne fournissent pas l'ensemble des coûts opérationnels et logistiques nécessaires pour évaluer intégralement la rentabilité de l'entreprise.",
          "L'analyse repose uniquement sur les variables disponibles dans le jeu de données et ne permet pas de confirmer toutes les causes des performances commerciales observées."
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
        "Conception et déploiement d'un tableau de bord interactif avec Python, Pandas, Streamlit et Plotly pour analyser les performances commerciales, suivre les KPI et explorer les ventes, les profits et la rentabilité par période, catégorie, région et segment client.",

      fullDesc:
        "Développement d'une application décisionnelle interactive à partir du jeu de données Sample Superstore (9 994 lignes). Le projet mobilise Python, Pandas et Plotly pour préparer les données commerciales, calculer les indicateurs clés de performance (KPI), analyser les ventes et les profits, puis restituer les résultats dans une interface interactive développée avec Streamlit. L'application propose des analyses temporelles, géographiques et commerciales ainsi que des filtres dynamiques.",

      category: "data-analysis",
      status: "completed",

      tags: [
        "Python",
        "Pandas",
        "Streamlit",
        "Plotly",
        "Pytest",
        "Git",
        "GitHub"
      ],

      img:
        "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

      githubLink:
        "https://github.com/LidXo/tableau-de-bord-ventes",

      demoLink:
        "https://tableau-de-bord-ventes-lidao.streamlit.app/",

      details: {
        context:
          "Projet de Data Analysis et de Business Intelligence réalisé à partir du jeu de données Sample Superstore. L'objectif est de transformer des données commerciales en indicateurs de performance et en visualisations interactives afin de faciliter le suivi et l'analyse de l'activité commerciale.",

        problem:
          "Les données transactionnelles brutes ne fournissent pas directement une vision synthétique des performances commerciales. Il est nécessaire de préparer les données, de structurer les analyses et de calculer des indicateurs cohérents pour identifier les tendances de ventes, évaluer la rentabilité et comparer les performances selon différentes dimensions commerciales et géographiques.",

        objectives: [
          "Charger et préparer le jeu de données Sample Superstore de 9 994 lignes",
          "Explorer et contrôler la structure et la qualité des données commerciales",
          "Calculer les principaux indicateurs de performance commerciale",
          "Analyser l'évolution temporelle du chiffre d'affaires",
          "Comparer les performances par catégorie et sous-catégorie de produits",
          "Analyser les ventes et les profits par région et segment client",
          "Identifier les produits les plus et les moins rentables",
          "Développer un tableau de bord interactif avec Streamlit",
          "Créer des visualisations interactives avec Plotly",
          "Tester les fonctionnalités analytiques et publier l'application en ligne"
        ],

        methodology:
          "Démarche organisée en plusieurs phases : exploration des données → préparation et structuration → calcul des KPI → analyses commerciales et temporelles → création des visualisations → intégration dans une application Streamlit → tests automatisés → versionnement et déploiement. Le code est organisé en modules Python dédiés aux calculs des indicateurs, aux analyses et aux visualisations.",

        steps: [
          "Chargement et exploration du jeu de données Sample Superstore",
          "Inspection des variables, des types de données et de la qualité des données",
          "Préparation des données et conversion des variables temporelles",
          "Calcul du chiffre d'affaires, du profit et des quantités vendues",
          "Calcul du nombre de commandes, de la marge bénéficiaire et du panier moyen",
          "Analyse de l'évolution mensuelle du chiffre d'affaires",
          "Analyse des ventes par catégorie et sous-catégorie",
          "Comparaison des performances commerciales par région",
          "Analyse des ventes par segment client",
          "Étude de la rentabilité des produits",
          "Création de six visualisations interactives avec Plotly",
          "Développement de l'interface décisionnelle avec Streamlit",
          "Intégration des KPI et des filtres interactifs",
          "Organisation du code en modules Python réutilisables",
          "Création et exécution de tests automatisés avec Pytest",
          "Publication du code sur GitHub et déploiement sur Streamlit Community Cloud"
        ],

        results: [
          "9 994 lignes de données commerciales exploitées",
          "Chiffre d'affaires total : 2 297 200,86 $",
          "Nombre de commandes : 5 009",
          "Quantités vendues : 37 873",
          "Profit total : 286 397,02 $",
          "Marge bénéficiaire : 12,47 %",
          "Panier moyen : 458,61 $",
          "Six visualisations interactives générées avec Plotly",
          "Analyses disponibles par période, catégorie, sous-catégorie, région et segment client",
          "Application décisionnelle développée avec Streamlit et accessible publiquement en ligne",
          "Sept tests automatisés réussis"
        ],

        difficulties: [
          "Préparation et structuration des données commerciales pour les analyses",
          "Gestion des variables temporelles et analyse de l'évolution des ventes",
          "Cohérence du calcul des indicateurs commerciaux et financiers",
          "Analyse de la rentabilité des produits à partir des ventes et des profits",
          "Organisation du code en modules Python réutilisables",
          "Conception de visualisations interactives adaptées aux analyses métier",
          "Gestion des dépendances et résolution des problèmes d'importation lors du déploiement"
        ],

        learnings: [
          "Manipulation, préparation et agrégation de données avec Pandas",
          "Calcul et interprétation des indicateurs clés de performance commerciale",
          "Analyse exploratoire et analyse multidimensionnelle des ventes",
          "Analyse de la rentabilité et des performances des produits",
          "Création de visualisations interactives avec Plotly",
          "Développement d'applications de Business Intelligence avec Streamlit",
          "Structuration d'un projet Python en modules réutilisables",
          "Écriture et exécution de tests automatisés avec Pytest",
          "Gestion de versions avec Git et GitHub",
          "Déploiement d'une application de données sur Streamlit Community Cloud"
        ],

        limitations: [
          "Les résultats sont dépendants du périmètre et de la qualité du jeu de données Sample Superstore.",
          "Le profit et la marge bénéficiaire sont calculés à partir des champs Sales et Profit fournis dans le jeu de données ; ils ne représentent pas nécessairement une rentabilité comptable complète.",
          "Le jeu de données ne couvre qu'un périmètre commercial et géographique limité et ne permet pas de généraliser les résultats à toutes les entreprises.",
          "Les analyses temporelles dépendent des dates de commande et des périodes effectivement présentes dans les données.",
          "Le panier moyen est calculé à partir du chiffre d'affaires total et du nombre de commandes, sans distinction supplémentaire des conditions commerciales."
        ]
      }
    },



    // --------------------------------------------------------
    // PROJET 4
    // --------------------------------------------------------

    {
      id: 4,
      title: "Outil de Contrôle de la Qualité des Données",

      shortDesc:
        "Développement d'un outil Python de contrôle et de profilage de la qualité des données. Le système analyse des fichiers CSV et Excel, mesure la complétude, détecte les anomalies à travers 11 règles de validation et génère des rapports aux formats JSON et CSV.",

      fullDesc:
        "Développement d'un outil de contrôle de la qualité des données avec Python, Pandas et NumPy. Le projet vise à automatiser plusieurs vérifications sur des jeux de données tabulaires : profilage, mesure de la complétude, détection des valeurs manquantes, doublons, incohérences et valeurs non valides. L'outil repose sur 11 règles de validation documentées, une architecture modulaire et des tests automatisés avec Pytest. Les résultats sont exportés sous forme de rapports JSON et CSV.",

      category: "data-analysis",
      status: "completed",

      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Pytest",
        "Data Quality",
        "Data Validation",
        "Data Profiling",
        "CSV",
        "Excel",
        "Git",
        "GitHub"
      ],

      img:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

      githubLink:
        "https://github.com/LidXo/outil-controle-qualite-donnees",

      details: {
        context:
          "Projet de développement d'un outil Python de contrôle de la qualité des données. Le système est expérimenté sur un jeu de données synthétique de 1 000 transactions commerciales réparties sur 8 colonnes. L'objectif est de mettre en place des contrôles réutilisables permettant d'évaluer la qualité d'un jeu de données avant son exploitation.",

        problem:
          "Les données issues de différentes sources peuvent contenir des valeurs manquantes, des doublons, des incohérences numériques ou des formats invalides. Sans contrôles systématiques, ces problèmes peuvent affecter la fiabilité des analyses et des traitements de données. Il est donc nécessaire de disposer d'un outil capable de détecter et de documenter ces anomalies.",

        objectives: [
          "Développer un outil modulaire de contrôle de la qualité des données avec Python",
          "Charger des fichiers de données aux formats CSV et Excel",
          "Profiler automatiquement les jeux de données",
          "Mesurer la complétude des données",
          "Détecter les valeurs manquantes et les doublons",
          "Contrôler la validité des données numériques et temporelles",
          "Vérifier la cohérence entre plusieurs colonnes",
          "Centraliser les règles de validation dans une structure dédiée",
          "Générer des rapports d'anomalies aux formats JSON et CSV",
          "Automatiser les vérifications avec des tests Pytest",
          "Documenter l'architecture, les règles et les limites de l'outil"
        ],

        methodology:
          "La démarche repose sur une architecture modulaire : chargement des données → profilage → calcul des métriques de qualité → application des règles de validation → centralisation des anomalies → génération des rapports. Les contrôles sont indépendants et testés individuellement afin de faciliter leur maintenance et leur évolution.",

        steps: [
          "Initialisation de l'environnement Python et installation des dépendances",
          "Création d'un jeu de données synthétique de 1 000 transactions",
          "Développement du module de chargement des fichiers CSV et Excel",
          "Développement du module de profilage des données",
          "Calcul des métriques de qualité, notamment la complétude",
          "Définition et centralisation des règles de validation",
          "Développement des contrôles de détection des anomalies",
          "Gestion des valeurs manquantes, des doublons et des valeurs non finies",
          "Vérification de la cohérence entre quantité, prix unitaire et montant total",
          "Génération des rapports JSON et CSV",
          "Développement des tests unitaires et fonctionnels avec Pytest",
          "Audit des cas limites, notamment les valeurs infinies",
          "Documentation de l'architecture et des règles de qualité",
          "Versionnement du projet avec Git et publication sur GitHub"
        ],

        results: [
          "1 000 lignes et 8 colonnes analysées",
          "11 règles de contrôle de la qualité des données implémentées",
          "12 anomalies détectées sur le jeu de démonstration",
          "Taux de complétude calculé : 99,98 %",
          "Rapport de qualité généré au format JSON",
          "Rapport détaillé des anomalies généré au format CSV",
          "Architecture Python organisée en modules réutilisables",
          "50 tests automatisés réussis sur 50 avec Pytest",
          "Projet documenté et publié sur GitHub"
        ],

        difficulties: [
          "Concevoir des règles de validation suffisamment précises pour limiter les détections incorrectes",
          "Distinguer les valeurs manquantes des valeurs non numériques et non finies",
          "Détecter les doublons sans confondre les occurrences avec les anomalies indépendantes",
          "Vérifier la cohérence entre plusieurs variables numériques",
          "Gérer les cas limites liés aux valeurs infinies et aux types de données",
          "Structurer les anomalies dans un format homogène exploitable par plusieurs modules",
          "Concevoir des tests couvrant les comportements normaux et les situations limites"
        ],

        learnings: [
          "Manipulation et validation de données avec Pandas",
          "Utilisation de NumPy pour les contrôles numériques",
          "Conception de règles de validation de données",
          "Détection des valeurs manquantes, doublons et incohérences",
          "Calcul d'indicateurs de qualité et de complétude",
          "Conception d'une architecture Python modulaire",
          "Génération de rapports structurés avec JSON et CSV",
          "Écriture de tests automatisés avec Pytest",
          "Gestion des cas limites dans les traitements de données",
          "Documentation et versionnement d'un projet avec Git et GitHub"
        ],

        limitations: [
          "Le projet utilise un jeu de données synthétique de démonstration et n'a pas encore été évalué sur des données métier réelles.",
          "Les règles actuelles sont adaptées à la structure du jeu de données utilisé et nécessitent une configuration pour d'autres schémas.",
          "La vérification des identifiants clients repose sur la détection des valeurs manquantes et ne nécessite pas encore de référentiel externe.",
          "L'outil détecte les anomalies mais ne réalise pas de correction automatique des données.",
          "Le système fonctionne localement et ne dispose pas encore d'une interface graphique ou d'une API.",
          "Les contrôles ne couvrent pas encore toutes les dimensions possibles de la qualité des données, notamment l'unicité métier, la fraîcheur et la cohérence avec des référentiels externes."
        ]
      }
    },

    // --------------------------------------------------------
    // PROJET 5
    // --------------------------------------------------------

    {
      id: 5,
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
    // PROJET 6
    // --------------------------------------------------------

    {
      id: 6,
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
    // PROJET 7
    // --------------------------------------------------------

    {
      id: 7,
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
    // PROJET 8
    // --------------------------------------------------------

    {
      id: 8,
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
    // PROJET 9
    // --------------------------------------------------------

    {
      id: 9,
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





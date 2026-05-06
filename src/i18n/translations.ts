// Translations dictionary. FR is the source of truth — EN/DE start as null
// and gracefully fall back to FR until contents are validated.

export type Locale = "fr" | "en" | "de";

export const LOCALES: Locale[] = ["fr", "en", "de"];

type Dict = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    expertise: string;
    realisations: string;
    parcours: string;
    formation: string;
    mobility: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    pitch: string;
    contactCta: string;
    pdfCta: string;
    availability: string;
  };
  about: {
    title: string;
    body: string[];
  };
  expertise: {
    title: string;
    items: { title: string; body: string }[];
  };
  realisations: {
    title: string;
    intro: string;
    items: { challenge: string; context: string; action: string; result: string }[];
  };
  parcours: {
    title: string;
    current: string;
    detailed: { period: string; company: string; role: string; location: string; bullets: string[] }[];
    earlyTitle: string;
    earlyBody: string;
  };
  formation: {
    title: string;
    items: { year: string; title: string; org: string }[];
    devTitle: string;
    devBody: string;
  };
  mobility: {
    title: string;
    intro: string;
    languagesTitle: string;
    languages: { name: string; level: string }[];
    zoneTitle: string;
    zoneBody: string;
    swissTitle: string;
    swissBody: string;
    availabilityTitle: string;
    availabilityBody: string;
    mapHint: string;
    cities: string[];
  };
  recommendations: {
    title: string;
    placeholder: string;
  };
  contact: {
    title: string;
    intro: string;
    confidential: string;
    name: string;
    email: string;
    function: string;
    message: string;
    send: string;
    or: string;
    phone: string;
    linkedin: string;
  };
  footer: {
    rights: string;
    repByline: string;
  };
};

const fr: Dict = {
  meta: {
    title: "Hervé Monrique — Cutover Leader & Chef de Projet senior industrie",
    description:
      "30 ans d'expérience industrielle. Pilotage de cut-over ERP, transformation digitale et coordination cross-fonctionnelle pour grands groupes industriels et énergie.",
  },
  nav: {
    about: "Profil",
    expertise: "Expertises",
    realisations: "Réalisations",
    parcours: "Parcours",
    formation: "Formation",
    mobility: "Mobilité",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Cutover Leader · PMO industriel · Migration SI",
    name: "Hervé Monrique",
    role: "Chef de Projet senior — Industrie, Énergie, SI",
    pitch:
      "Trente ans à faire converger ingénierie, IT et opérations pour réussir des bascules industrielles à fort enjeu — sans rupture pour la production.",
    contactCta: "Me contacter",
    pdfCta: "Télécharger le CV (PDF)",
    availability: "30 ans d'expérience — Industrie · Énergie · Migration ERP · Disponible 01/07/2026",
  },
  about: {
    title: "Profil exécutif",
    body: [
      "Ingénieur Génie Mécanique (UTC), je pilote depuis trente ans des projets industriels complexes mêlant transformation digitale, migration de systèmes et coordination de fonctions souvent cloisonnées — métier, IT, production, supply chain et finance.",
      "Pendant cinq ans, j'ai dirigé une équipe internationale de dix chefs de projets sur le développement de vingt-huit produits mécatroniques chez un constructeur automobile majeur. J'interviens aujourd'hui en mission de Cutover Leader chez General Electric Vernova, sur la bascule ERP de la chaîne de consolidation des données numériques.",
      "Mon positionnement est celui d'un profil hybride rare : ingénieur produit, chef de projet IT, manager R&D et expert mécatronique. Cela me permet de dialoguer aussi bien avec les équipes terrain qu'avec les directions métier et les DSI, et de tenir des engagements Qualité, Coûts et Délais sur des périmètres exigeants.",
    ],
  },
  expertise: {
    title: "Expertises clés",
    items: [
      {
        title: "Pilotage de Cut-Over et migration ERP",
        body: "Plan de bascule détaillé, scénarios de contingence, coordination métier/IT/production, gestion d'incidents et stabilisation post-go-live.",
      },
      {
        title: "PMO industriel et transformation digitale",
        body: "Gouvernance projet, méthodes APQP, cycle en V et Agile, reporting management et sécurisation des engagements QCD.",
      },
      {
        title: "Management d'équipes pluridisciplinaires",
        body: "Cinq ans à la tête d'une équipe internationale de dix chefs de projets — coaching, négociation, gestion de portefeuille produit.",
      },
      {
        title: "AMOA et systèmes d'information industriels",
        body: "Refonte d'applications de pilotage de production, systèmes décisionnels qualité véhicules, planification S&OP — Oracle, SQL, Power BI.",
      },
      {
        title: "Qualité, méthodes et résolution de problèmes",
        body: "ISO 9002, AMDEC, 8D, A3, PSW-PPAP, IMDS — culture industrielle solide, du procédé de fabrication au contrôle qualité.",
      },
    ],
  },
  realisations: {
    title: "Réalisations marquantes",
    intro:
      "Quatre projets représentatifs, choisis pour leur impact et leur exigence cross-fonctionnelle.",
    items: [
      {
        challenge: "Cutover ERP — General Electric Vernova",
        context:
          "Bascule de la chaîne de consolidation des données numériques (du stock à la consolidation comptable) sur un site industriel énergie en exploitation continue.",
        action:
          "Plan de bascule détaillé, animation des instances de pilotage, coordination métier/IT/production/logistique/finance, plans de contingence et gestion des incidents.",
        result:
          "Cut-Over réalisé avec un retard de deux jours non bloquant ; phase de stabilisation post go-live menée sans rupture de production.",
      },
      {
        challenge: "Direction d'une équipe R&D internationale — Stellantis",
        context:
          "Pilotage du portefeuille Écrans Tactiles et Vision Tête Haute pour les véhicules du groupe ; équipe distribuée sur plusieurs pays.",
        action:
          "Management hiérarchique de dix chefs de projets, coaching APQP, négociation des changements vie série, supervision des réclamations clients.",
        result:
          "Vingt-huit produits développés et industrialisés sur cinq ans, dans le respect des engagements Qualité-Coûts-Délais et avec montée en compétences mesurable de l'équipe.",
      },
      {
        challenge: "Refonte des applications de pilotage de production — Stellantis",
        context:
          "Multiples applications historiques de pilotage de lignes, hétérogènes, rendant la maintenance et l'évolution coûteuses.",
        action:
          "Pilotage de la refonte en application web transversale unique, AMOA, conduite du changement, jalonnement strict pour préserver la production.",
        result:
          "Migration menée sans aucune perte de production sur les lignes concernées ; socle technique unifié pour les évolutions ultérieures.",
      },
      {
        challenge: "Système décisionnel qualité véhicules — Stellantis",
        context:
          "Absence de vision transversale et chiffrée sur la qualité véhicules à l'échelle du site, ralentissant les décisions correctives.",
        action:
          "Conception et mise en œuvre d'un système décisionnel Oracle / SQL / PL-SQL : modèle de données, flux d'alimentation, indicateurs transversaux.",
        result:
          "Mise à disposition d'un référentiel KPI commun aux équipes qualité et production, supportant les décisions d'amélioration continue pendant plus d'une décennie.",
      },
    ],
  },
  parcours: {
    title: "Parcours professionnel",
    current: "Mission en cours",
    detailed: [
      {
        period: "05/2025 — 06/2026",
        company: "General Electric Vernova",
        role: "Cutover Leader (Consultant)",
        location: "Bourogne (90)",
        bullets: [
          "Pilotage du Cut-Over ERP sur la chaîne de consolidation des données numériques.",
          "Coordination cross-fonctionnelle métier, IT, production, logistique et finance.",
          "Animation des instances de pilotage, plans de contingence, gestion des incidents.",
          "Stabilisation post go-live et formalisation des retours d'expérience.",
        ],
      },
      {
        period: "02/2020 — 03/2025",
        company: "Stellantis",
        role: "Responsable d'Équipe R&D",
        location: "Sochaux",
        bullets: [
          "Management hiérarchique d'une équipe internationale de dix chefs de projets.",
          "Pilotage du développement de 28 produits Écrans Tactiles et Vision Tête Haute.",
          "Coaching APQP, négociation des changements vie série, supervision réclamations clients.",
          "Sécurisation des engagements Qualité-Coûts-Délais sur l'ensemble du portefeuille.",
        ],
      },
      {
        period: "08/2015 — 01/2020",
        company: "Stellantis",
        role: "Chef de Projet — Mécatronique",
        location: "Sochaux",
        bullets: [
          "Pilotage de projets innovants Écrans Tactiles, VTH lame et VTH parebrise.",
          "Mise en œuvre APQP, PLM, AMDEC, eBOM, IMDS, PSW-PPAP.",
          "Interface industrialisation, qualité et fournisseurs.",
        ],
      },
      {
        period: "01/2013 — 07/2015",
        company: "Stellantis",
        role: "Chef de Projet IT — Supply Chain",
        location: "Sochaux",
        bullets: [
          "Création d'une application de planification de production moyen et long terme.",
          "AMOA, méthode Agile, S&OP, MPS, rédaction de user stories.",
          "Pilotage des déploiements et de la conduite du changement.",
        ],
      },
    ],
    earlyTitle: "Premières expériences (1995 — 2013)",
    earlyBody:
      "De 2000 à 2013, Chef de Projet IT chez Stellantis (Sochaux) — pilotage production puis qualité véhicules : refonte d'applications de pilotage de lignes en application web transversale (migration sans perte de production) et création d'un système décisionnel qualité véhicules sous Oracle / SQL / PL-SQL. Auparavant, de 1995 à 2000, Responsable Qualité chez Grandjean SA (Sainte-Suzanne) : création et déploiement du système qualité ISO 9002.",
  },
  formation: {
    title: "Formation et développement",
    items: [
      {
        year: "1991 — 1994",
        title: "Ingénieur en Génie Mécanique",
        org: "Université de Technologie de Compiègne — campus Sévenans (Belfort)",
      },
    ],
    devTitle: "Développement professionnel continu",
    devBody:
      "Méthodologies APQP, Agile et cycle en V appliquées sur missions successives ; pratique régulière de la résolution de problèmes (8D, A3, AMDEC) ; outils PLM, Power BI, Oracle / SQL ; conduite du changement sur projets de migration ERP et refonte d'applications industrielles.",
  },
  mobility: {
    title: "Langues et mobilité",
    intro:
      "Disponible à partir du 1er juillet 2026 — bassin d'emploi Belfort / Montbéliard, élargi à une heure de trajet routier réaliste autour de Montbéliard.",
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "B2 — professionnel" },
    ],
    zoneTitle: "Zone de mobilité",
    zoneBody:
      "Une heure de trajet en voiture autour de Montbéliard couvre les bassins de Belfort, Mulhouse, Besançon, Vesoul, le nord du Doubs, le sud des Vosges et de l'Alsace, ainsi que la frontière suisse proche.",
    swissTitle: "Ouverture à la Suisse",
    swissBody:
      "Ouvert aux opportunités en Suisse — canton du Jura, Bâle-Ville et Bâle-Campagne. Éligible au statut de travailleur frontalier.",
    availabilityTitle: "Modalités",
    availabilityBody:
      "Présentiel, hybride ou télétravail partiel selon le contexte. Disponible à partir du 01/07/2026.",
    mapHint: "Polygone indicatif d'un trajet routier d'environ 1 heure autour de Montbéliard.",
    cities: ["Montbéliard", "Belfort", "Mulhouse", "Besançon", "Vesoul", "Bâle"],
  },
  recommendations: {
    title: "Recommandations",
    placeholder: "Références de dirigeants et clients communiquées sur demande, dans le respect des règles de confidentialité.",
  },
  contact: {
    title: "Contact",
    intro: "Échanges confidentiels — pour discuter d'une mission, d'un poste ou d'un mandat.",
    confidential: "Toute prise de contact est traitée de manière confidentielle.",
    name: "Nom",
    email: "Email",
    function: "Fonction",
    message: "Message",
    send: "Envoyer le message",
    or: "ou directement",
    phone: "Téléphone",
    linkedin: "LinkedIn",
  },
  footer: {
    rights: "Tous droits réservés.",
    repByline: "Profil propulsé par Aquantic (Zonova SARL) — Belfort.",
  },
};

// EN / DE — placeholders. Same structure, marked drafts to be validated.
const en: Dict = fr; // fallback to FR until validated
const de: Dict = fr;

export const translations: Record<Locale, Dict> = { fr, en, de };

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  de: "DE",
};

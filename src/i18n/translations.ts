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
    detailed: {
      period: string;
      company: string;
      role: string;
      location: string;
      bullets: string[];
    }[];
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
    success: string;
    errorPrefix: string;
    unknownError: string;
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
    availability:
      "30 ans d'expérience — Industrie · Énergie · Migration ERP · Disponible 01/07/2026",
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
    placeholder:
      "Références de dirigeants et clients communiquées sur demande, dans le respect des règles de confidentialité.",
  },
  contact: {
    title: "Contact",
    intro: "Échanges confidentiels — pour discuter d'une mission, d'un poste ou d'un mandat.",
    confidential: "Toute prise de contact est traitée de manière confidentielle.",
    success: "Merci, votre message a bien été transmis.",
    errorPrefix: "Erreur",
    unknownError: "Erreur inconnue",
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

const en: Dict = {
  meta: {
    title: "Hervé Monrique — Cutover Leader & Senior Project Manager (Industry)",
    description:
      "30 years of industrial experience. ERP cut-over leadership, digital transformation and cross-functional coordination for major industrial and energy groups.",
  },
  nav: {
    about: "Profile",
    expertise: "Expertise",
    realisations: "Achievements",
    parcours: "Career",
    formation: "Education",
    mobility: "Mobility",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Cutover Leader · Industrial PMO · IS Migration",
    name: "Hervé Monrique",
    role: "Senior Project Manager — Industry, Energy, IS",
    pitch:
      "Thirty years bringing engineering, IT and operations together to deliver high-stakes industrial cutovers — without disrupting production.",
    contactCta: "Get in touch",
    pdfCta: "Download CV (PDF)",
    availability:
      "30 years of experience — Industry · Energy · ERP migration · Available 07/01/2026",
  },
  about: {
    title: "Executive profile",
    body: [
      "A Mechanical Engineer (UTC), I have spent thirty years leading complex industrial projects that combine digital transformation, system migration and the coordination of often-siloed functions — business, IT, production, supply chain and finance.",
      "For five years, I led an international team of ten project managers developing twenty-eight mechatronic products for a major automotive OEM. I am currently engaged as Cutover Leader at General Electric Vernova, on the ERP cut-over of the digital data consolidation chain.",
      "My positioning is that of a rare hybrid profile: product engineer, IT project manager, R&D manager and mechatronics expert. This allows me to engage equally with shop-floor teams, business leadership and IT departments, and to deliver on Quality, Cost and Delivery commitments in demanding environments.",
    ],
  },
  expertise: {
    title: "Core expertise",
    items: [
      {
        title: "Cut-over leadership and ERP migration",
        body: "Detailed cutover plans, contingency scenarios, business/IT/production coordination, incident management and post-go-live stabilisation.",
      },
      {
        title: "Industrial PMO and digital transformation",
        body: "Project governance, APQP methods, V-cycle and Agile, management reporting and securing QCD commitments.",
      },
      {
        title: "Cross-disciplinary team management",
        body: "Five years leading an international team of ten project managers — coaching, negotiation, product portfolio management.",
      },
      {
        title: "Business analysis and industrial information systems",
        body: "Re-engineering of production control applications, vehicle-quality decision systems, S&OP planning — Oracle, SQL, Power BI.",
      },
      {
        title: "Quality, methods and problem solving",
        body: "ISO 9002, FMEA, 8D, A3, PSW-PPAP, IMDS — solid industrial culture, from manufacturing process to quality control.",
      },
    ],
  },
  realisations: {
    title: "Key achievements",
    intro: "Four representative projects, chosen for their impact and cross-functional demands.",
    items: [
      {
        challenge: "ERP Cutover — General Electric Vernova",
        context:
          "Cutover of the digital data consolidation chain (from inventory to financial consolidation) on a continuously operating energy industrial site.",
        action:
          "Detailed cutover plan, steering committee facilitation, business/IT/production/logistics/finance coordination, contingency planning and incident management.",
        result:
          "Cutover delivered with a non-blocking two-day delay; post-go-live stabilisation completed without production disruption.",
      },
      {
        challenge: "Leading an international R&D team — Stellantis",
        context:
          "Portfolio management of Touch Screens and Head-Up Display products for the group's vehicles; team distributed across multiple countries.",
        action:
          "Hierarchical management of ten project managers, APQP coaching, negotiation of serial-life changes, oversight of customer claims.",
        result:
          "Twenty-eight products developed and industrialised over five years, meeting Quality-Cost-Delivery commitments with measurable team skills growth.",
      },
      {
        challenge: "Re-engineering of production control applications — Stellantis",
        context:
          "Multiple legacy line-control applications, heterogeneous, making maintenance and evolution costly.",
        action:
          "Leadership of the migration to a single transversal web application, business analysis, change management, strict milestoning to protect production.",
        result:
          "Migration completed without any production loss on the affected lines; unified technical foundation for further evolutions.",
      },
      {
        challenge: "Vehicle quality decision system — Stellantis",
        context:
          "No transversal, quantified view of vehicle quality at site level, slowing corrective decisions.",
        action:
          "Design and implementation of an Oracle / SQL / PL-SQL decision system: data model, ingestion flows, transversal indicators.",
        result:
          "Common KPI reference made available to quality and production teams, supporting continuous improvement decisions for over a decade.",
      },
    ],
  },
  parcours: {
    title: "Career path",
    current: "Current engagement",
    detailed: [
      {
        period: "05/2025 — 06/2026",
        company: "General Electric Vernova",
        role: "Cutover Leader (Consultant)",
        location: "Bourogne (90), France",
        bullets: [
          "Leading the ERP cutover on the digital data consolidation chain.",
          "Cross-functional coordination across business, IT, production, logistics and finance.",
          "Steering committee facilitation, contingency plans, incident management.",
          "Post-go-live stabilisation and lessons-learned formalisation.",
        ],
      },
      {
        period: "02/2020 — 03/2025",
        company: "Stellantis",
        role: "R&D Team Manager",
        location: "Sochaux, France",
        bullets: [
          "Hierarchical management of an international team of ten project managers.",
          "Leading the development of 28 Touch Screen and Head-Up Display products.",
          "APQP coaching, serial-life change negotiation, customer claims oversight.",
          "Securing Quality-Cost-Delivery commitments across the entire portfolio.",
        ],
      },
      {
        period: "08/2015 — 01/2020",
        company: "Stellantis",
        role: "Project Manager — Mechatronics",
        location: "Sochaux, France",
        bullets: [
          "Leading innovative Touch Screen, blade and windshield HUD projects.",
          "Implementation of APQP, PLM, FMEA, eBOM, IMDS, PSW-PPAP.",
          "Interface with industrialisation, quality and suppliers.",
        ],
      },
      {
        period: "01/2013 — 07/2015",
        company: "Stellantis",
        role: "IT Project Manager — Supply Chain",
        location: "Sochaux, France",
        bullets: [
          "Creation of a medium and long-term production planning application.",
          "Business analysis, Agile methodology, S&OP, MPS, user story authoring.",
          "Leading deployments and change management.",
        ],
      },
    ],
    earlyTitle: "Earlier experience (1995 — 2013)",
    earlyBody:
      "From 2000 to 2013, IT Project Manager at Stellantis (Sochaux) — production then vehicle quality: re-engineering line-control applications into a single transversal web application (migration without production loss) and creation of a vehicle quality decision system on Oracle / SQL / PL-SQL. Previously, from 1995 to 2000, Quality Manager at Grandjean SA (Sainte-Suzanne): design and rollout of the ISO 9002 quality system.",
  },
  formation: {
    title: "Education and development",
    items: [
      {
        year: "1991 — 1994",
        title: "Mechanical Engineering Degree",
        org: "University of Technology of Compiègne — Sévenans campus (Belfort)",
      },
    ],
    devTitle: "Continuous professional development",
    devBody:
      "APQP, Agile and V-cycle methodologies applied across successive engagements; regular practice of problem-solving (8D, A3, FMEA); PLM, Power BI, Oracle / SQL tooling; change management on ERP migration projects and re-engineering of industrial applications.",
  },
  mobility: {
    title: "Languages and mobility",
    intro:
      "Available from July 1st, 2026 — Belfort / Montbéliard employment area, extended to a realistic one-hour drive around Montbéliard.",
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "B2 — professional" },
    ],
    zoneTitle: "Mobility zone",
    zoneBody:
      "A one-hour drive around Montbéliard covers the Belfort, Mulhouse, Besançon, Vesoul areas, northern Doubs, the south of the Vosges and Alsace regions, as well as the nearby Swiss border.",
    swissTitle: "Open to Switzerland",
    swissBody:
      "Open to opportunities in Switzerland — Canton of Jura, Basel-City and Basel-Country. Eligible for cross-border worker status.",
    availabilityTitle: "Working modes",
    availabilityBody:
      "On-site, hybrid or partial remote depending on the context. Available from 07/01/2026.",
    mapHint: "Indicative polygon of an approximately one-hour drive around Montbéliard.",
    cities: ["Montbéliard", "Belfort", "Mulhouse", "Besançon", "Vesoul", "Basel"],
  },
  recommendations: {
    title: "References",
    placeholder:
      "Executive and client references shared upon request, in compliance with confidentiality rules.",
  },
  contact: {
    title: "Contact",
    intro: "Confidential conversations — to discuss an engagement, a position or a mandate.",
    confidential: "Every contact is handled confidentially.",
    success: "Thank you, your message has been delivered.",
    errorPrefix: "Error",
    unknownError: "Unknown error",
    name: "Name",
    email: "Email",
    function: "Role",
    message: "Message",
    send: "Send message",
    or: "or directly",
    phone: "Phone",
    linkedin: "LinkedIn",
  },
  footer: {
    rights: "All rights reserved.",
    repByline: "Profile powered by Aquantic (Zonova SARL) — Belfort.",
  },
};

const de: Dict = {
  meta: {
    title: "Hervé Monrique — Cutover Leader & Senior Projektleiter Industrie",
    description:
      "30 Jahre Industrieerfahrung. ERP-Cutover-Leitung, digitale Transformation und bereichsübergreifende Koordination für große Industrie- und Energiekonzerne.",
  },
  nav: {
    about: "Profil",
    expertise: "Kompetenzen",
    realisations: "Referenzen",
    parcours: "Werdegang",
    formation: "Ausbildung",
    mobility: "Mobilität",
    contact: "Kontakt",
  },
  hero: {
    eyebrow: "Cutover Leader · Industrie-PMO · IS-Migration",
    name: "Hervé Monrique",
    role: "Senior Projektleiter — Industrie, Energie, IS",
    pitch:
      "Dreißig Jahre Erfahrung im Zusammenführen von Engineering, IT und Betrieb für anspruchsvolle Industrie-Cutover — ohne Produktionsunterbrechung.",
    contactCta: "Kontakt aufnehmen",
    pdfCta: "Lebenslauf herunterladen (PDF)",
    availability:
      "30 Jahre Erfahrung — Industrie · Energie · ERP-Migration · Verfügbar ab 01.07.2026",
  },
  about: {
    title: "Executive-Profil",
    body: [
      "Als Maschinenbauingenieur (UTC) leite ich seit dreißig Jahren komplexe Industrieprojekte an der Schnittstelle von digitaler Transformation, Systemmigration und Koordination häufig getrennter Funktionen — Fachbereich, IT, Produktion, Supply Chain und Finanzen.",
      "Fünf Jahre lang habe ich ein internationales Team von zehn Projektleitern für die Entwicklung von achtundzwanzig mechatronischen Produkten bei einem großen Automobilhersteller geführt. Aktuell bin ich als Cutover Leader bei General Electric Vernova für die ERP-Umstellung der digitalen Daten-Konsolidierungskette tätig.",
      "Mein Profil ist hybrid und selten: Produktingenieur, IT-Projektleiter, F&E-Manager und Mechatronik-Experte. So kann ich gleichermaßen mit den operativen Teams, der Geschäftsleitung und den IT-Abteilungen kommunizieren und Qualitäts-, Kosten- und Termintreue auch in anspruchsvollen Umfeldern sicherstellen.",
    ],
  },
  expertise: {
    title: "Kernkompetenzen",
    items: [
      {
        title: "Cut-over-Leitung und ERP-Migration",
        body: "Detaillierte Cutover-Pläne, Notfallszenarien, Koordination Fachbereich/IT/Produktion, Incident-Management und Stabilisierung nach Go-Live.",
      },
      {
        title: "Industrie-PMO und digitale Transformation",
        body: "Projekt-Governance, APQP-Methoden, V-Modell und Agile, Management-Reporting und Absicherung der QKL-Verpflichtungen.",
      },
      {
        title: "Führung interdisziplinärer Teams",
        body: "Fünf Jahre Leitung eines internationalen Teams von zehn Projektleitern — Coaching, Verhandlung, Produktportfolio-Management.",
      },
      {
        title: "Business-Analyse und industrielle Informationssysteme",
        body: "Neugestaltung von Produktionssteuerungs-Applikationen, Entscheidungssystemen für Fahrzeugqualität, S&OP-Planung — Oracle, SQL, Power BI.",
      },
      {
        title: "Qualität, Methoden und Problemlösung",
        body: "ISO 9002, FMEA, 8D, A3, PSW-PPAP, IMDS — solide Industriekultur, vom Fertigungsprozess bis zur Qualitätskontrolle.",
      },
    ],
  },
  realisations: {
    title: "Wichtige Erfolge",
    intro:
      "Vier repräsentative Projekte, ausgewählt nach Wirkung und bereichsübergreifendem Anspruch.",
    items: [
      {
        challenge: "ERP-Cutover — General Electric Vernova",
        context:
          "Umstellung der digitalen Daten-Konsolidierungskette (vom Bestand bis zur Konzernkonsolidierung) an einem durchgängig betriebenen Energie-Industriestandort.",
        action:
          "Detaillierter Cutover-Plan, Moderation der Steering Committees, Koordination Fachbereich/IT/Produktion/Logistik/Finanzen, Notfallpläne und Incident-Management.",
        result:
          "Cutover mit einer nicht blockierenden Verzögerung von zwei Tagen umgesetzt; Stabilisierungsphase ohne Produktionsunterbrechung abgeschlossen.",
      },
      {
        challenge: "Leitung eines internationalen F&E-Teams — Stellantis",
        context:
          "Portfolio-Steuerung der Produkte Touchscreen und Head-Up Display für die Konzernfahrzeuge; Team auf mehrere Länder verteilt.",
        action:
          "Hierarchische Führung von zehn Projektleitern, APQP-Coaching, Verhandlung von Serienänderungen, Überwachung von Kundenreklamationen.",
        result:
          "Achtundzwanzig Produkte über fünf Jahre entwickelt und industrialisiert, unter Einhaltung der QKL-Ziele und mit messbarem Kompetenzaufbau im Team.",
      },
      {
        challenge: "Neugestaltung der Produktionssteuerungs-Applikationen — Stellantis",
        context:
          "Mehrere historisch gewachsene, heterogene Applikationen zur Liniensteuerung mit hohen Wartungs- und Weiterentwicklungskosten.",
        action:
          "Leitung der Migration in eine einzige übergreifende Web-Anwendung, Business-Analyse, Change-Management, strikte Meilensteinsteuerung zum Schutz der Produktion.",
        result:
          "Migration ohne jeden Produktionsausfall auf den betroffenen Linien; einheitliche technische Basis für künftige Weiterentwicklungen.",
      },
      {
        challenge: "Entscheidungssystem Fahrzeugqualität — Stellantis",
        context:
          "Fehlende übergreifende, quantifizierte Sicht auf die Fahrzeugqualität auf Standortebene, was Korrekturentscheidungen verzögerte.",
        action:
          "Konzeption und Umsetzung eines Entscheidungssystems auf Oracle / SQL / PL-SQL: Datenmodell, Ladeflüsse, übergreifende Kennzahlen.",
        result:
          "Bereitstellung eines gemeinsamen KPI-Referenzsystems für Qualität und Produktion, das Entscheidungen zur kontinuierlichen Verbesserung über mehr als ein Jahrzehnt unterstützt.",
      },
    ],
  },
  parcours: {
    title: "Beruflicher Werdegang",
    current: "Aktuelles Mandat",
    detailed: [
      {
        period: "05/2025 — 06/2026",
        company: "General Electric Vernova",
        role: "Cutover Leader (Berater)",
        location: "Bourogne (90), Frankreich",
        bullets: [
          "Leitung des ERP-Cutovers für die digitale Daten-Konsolidierungskette.",
          "Bereichsübergreifende Koordination von Fachbereich, IT, Produktion, Logistik und Finanzen.",
          "Moderation der Steering Committees, Notfallpläne, Incident-Management.",
          "Stabilisierung nach Go-Live und Formalisierung der Lessons Learned.",
        ],
      },
      {
        period: "02/2020 — 03/2025",
        company: "Stellantis",
        role: "F&E-Teamleiter",
        location: "Sochaux, Frankreich",
        bullets: [
          "Hierarchische Führung eines internationalen Teams von zehn Projektleitern.",
          "Steuerung der Entwicklung von 28 Produkten Touchscreen und Head-Up Display.",
          "APQP-Coaching, Verhandlung von Serienänderungen, Überwachung der Kundenreklamationen.",
          "Absicherung der QKL-Verpflichtungen über das gesamte Portfolio.",
        ],
      },
      {
        period: "08/2015 — 01/2020",
        company: "Stellantis",
        role: "Projektleiter — Mechatronik",
        location: "Sochaux, Frankreich",
        bullets: [
          "Steuerung innovativer Projekte Touchscreen, Lamellen- und Windschutzscheiben-HUD.",
          "Umsetzung von APQP, PLM, FMEA, eBOM, IMDS, PSW-PPAP.",
          "Schnittstelle zu Industrialisierung, Qualität und Lieferanten.",
        ],
      },
      {
        period: "01/2013 — 07/2015",
        company: "Stellantis",
        role: "IT-Projektleiter — Supply Chain",
        location: "Sochaux, Frankreich",
        bullets: [
          "Aufbau einer Anwendung zur mittel- und langfristigen Produktionsplanung.",
          "Business-Analyse, Agile-Methodik, S&OP, MPS, Erstellung von User Stories.",
          "Steuerung der Rollouts und Change-Management.",
        ],
      },
    ],
    earlyTitle: "Frühere Stationen (1995 — 2013)",
    earlyBody:
      "Von 2000 bis 2013 IT-Projektleiter bei Stellantis (Sochaux) — zunächst Produktion, dann Fahrzeugqualität: Neugestaltung der Linien-Steuerungsanwendungen in eine übergreifende Web-Anwendung (Migration ohne Produktionsausfall) und Aufbau eines Entscheidungssystems Fahrzeugqualität auf Oracle / SQL / PL-SQL. Davor von 1995 bis 2000 Qualitätsverantwortlicher bei Grandjean SA (Sainte-Suzanne): Aufbau und Einführung des ISO-9002-Qualitätssystems.",
  },
  formation: {
    title: "Ausbildung und Entwicklung",
    items: [
      {
        year: "1991 — 1994",
        title: "Diplom-Ingenieur Maschinenbau",
        org: "Université de Technologie de Compiègne — Campus Sévenans (Belfort)",
      },
    ],
    devTitle: "Kontinuierliche berufliche Weiterbildung",
    devBody:
      "APQP-, Agile- und V-Modell-Methoden in aufeinanderfolgenden Mandaten angewandt; regelmäßige Praxis der Problemlösung (8D, A3, FMEA); PLM-, Power-BI- und Oracle/SQL-Tools; Change-Management bei ERP-Migrationen und der Neugestaltung industrieller Anwendungen.",
  },
  mobility: {
    title: "Sprachen und Mobilität",
    intro:
      "Verfügbar ab dem 1. Juli 2026 — Beschäftigungsraum Belfort / Montbéliard, erweitert auf eine realistische einstündige Fahrt rund um Montbéliard.",
    languagesTitle: "Sprachen",
    languages: [
      { name: "Französisch", level: "Muttersprache" },
      { name: "Englisch", level: "B2 — beruflich" },
    ],
    zoneTitle: "Mobilitätszone",
    zoneBody:
      "Eine einstündige Autofahrt rund um Montbéliard deckt die Räume Belfort, Mulhouse, Besançon, Vesoul, den Norden des Doubs, den Süden der Vogesen und des Elsass sowie die nahe Schweizer Grenze ab.",
    swissTitle: "Offen für die Schweiz",
    swissBody:
      "Offen für Möglichkeiten in der Schweiz — Kanton Jura, Basel-Stadt und Basel-Landschaft. Berechtigung zum Status als Grenzgänger.",
    availabilityTitle: "Arbeitsmodelle",
    availabilityBody:
      "Vor Ort, hybrid oder teilweise remote, je nach Kontext. Verfügbar ab dem 01.07.2026.",
    mapHint: "Hinweisendes Polygon einer rund einstündigen Autofahrt rund um Montbéliard.",
    cities: ["Montbéliard", "Belfort", "Mulhouse", "Besançon", "Vesoul", "Basel"],
  },
  recommendations: {
    title: "Referenzen",
    placeholder:
      "Referenzen von Führungskräften und Kunden auf Anfrage, unter Wahrung der Vertraulichkeit.",
  },
  contact: {
    title: "Kontakt",
    intro: "Vertrauliche Gespräche — über ein Mandat, eine Position oder einen Auftrag.",
    confidential: "Jede Kontaktaufnahme wird vertraulich behandelt.",
    success: "Vielen Dank, Ihre Nachricht wurde übermittelt.",
    errorPrefix: "Fehler",
    unknownError: "Unbekannter Fehler",
    name: "Name",
    email: "E-Mail",
    function: "Funktion",
    message: "Nachricht",
    send: "Nachricht senden",
    or: "oder direkt",
    phone: "Telefon",
    linkedin: "LinkedIn",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    repByline: "Profil bereitgestellt von Aquantic (Zonova SARL) — Belfort.",
  },
};

export const translations: Record<Locale, Dict> = { fr, en, de };

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  de: "DE",
};

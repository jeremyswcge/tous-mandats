export const company = {
  name: "Tous Mandats",
  tagline: "Fiscalité · Immobilier · Gestion administrative",
  promise: "Optimisez votre fiscalité, gérez vos démarches, valorisez votre patrimoine.",
  city: "Genève (Perly)",
  founded: "Cabinet genevois indépendant",
  phones: ["+41 78 604 25 03", "+41 78 806 84 81"],
  email: "info@tous-mandats.ch",
  address: {
    street: "Route de St-Julien 299B",
    zip: "1258",
    city: "Perly",
    canton: "Genève, Suisse",
  },
};

export const team = [
  {
    name: "Claude Buclin",
    role: "Directeur",
    initials: "CB",
    linkedin: "https://www.linkedin.com/in/claude-buclin-481429111/",
    bio: "Stratégie fiscale, négociation avec les autorités, ruling immobilier.",
  },
  {
    name: "Anabelle Buclin",
    role: "Responsable administrative",
    initials: "AB",
    linkedin: "https://www.linkedin.com/in/anabelle-buclin-39151783/",
    bio: "Pilotage des dossiers, coordination notaires & régies, suivi clients.",
  },
  {
    name: "Jessica Buclin",
    role: "Assistante administrative",
    initials: "JB",
    linkedin: null,
    bio: "Préparation des déclarations, gestion documentaire, relances.",
  },
  {
    name: "Igor Loubet",
    role: "Mandataire immobilier",
    initials: "IL",
    linkedin: null,
    email: "igor@loubet.ch",
    bio: "Recherche, valorisation et mise en marché des biens du portefeuille.",
  },
];

export const services = [
  {
    n: "01",
    title: "Déclarations fiscales",
    body: "Particuliers et entreprises — Genève et tous cantons. Déductions, prévoyance, quasi-résidence, contrôle.",
  },
  {
    n: "02",
    title: "Fiscalité immobilière",
    body: "IBGI, gain immobilier, durée de détention, opposition AFCI, ruling avant compromis.",
  },
  {
    n: "03",
    title: "Taxe LALAT",
    body: "Déclassement de terrain, calcul d'impact, négociation et représentation devant les autorités genevoises.",
  },
  {
    n: "04",
    title: "Comptabilité d'entreprise",
    body: "Tenue de comptes, bouclement, TVA, acomptes, gouvernance financière des sociétés patrimoniales.",
  },
  {
    n: "05",
    title: "Courtage hypothécaire",
    body: "Mise en concurrence des établissements, prêts, refinancement, structuration de l'amortissement.",
  },
  {
    n: "06",
    title: "Transaction immobilière",
    body: "Achat et vente — appui stratégique de bout en bout, du dossier à l'acte notarié.",
  },
  {
    n: "07",
    title: "Gestion locative",
    body: "Baux, indexations, conformité, litiges, relations régies & locataires. Gestion de A à Z.",
  },
  {
    n: "08",
    title: "Succession & donation",
    body: "Préparation patrimoniale, transmission de biens, coordination notaires et autorités fiscales.",
  },
];

export const fiscalSegments = [
  {
    label: "Particuliers",
    n: "I",
    color: "ink",
    items: [
      "Déclarations fiscales à Genève",
      "Déductions et prévoyance (3e pilier, transport)",
      "Retraite, donation, succession",
      "Rectification à la source & quasi-résidence",
      "Assistance en cas de contrôle fiscal",
    ],
  },
  {
    label: "Entreprises",
    n: "II",
    color: "verdigris",
    items: [
      "Déclarations sociétés & indépendants",
      "Rémunération, dividendes, frais déductibles",
      "Acomptes, TVA, obligations légales",
      "Création, transmission ou fermeture",
      "Suivi des contrôles et réclamations fiscales",
    ],
  },
  {
    label: "Immobilier",
    n: "III",
    color: "copper",
    items: [
      "Impôt sur le gain immobilier (IBGI)",
      "Achat, vente, location, détention",
      "Déductions : travaux, intérêts, entretien",
      "Estimation fiscale du bien",
      "Relations avec l'AFC et autorités fiscales",
    ],
  },
];

export const expertises = [
  {
    title: "Impôt sur le bénéfice et le gain immobilier",
    code: "IBGI",
    points: [
      "Calcul du gain imposable",
      "Estimation de la déduction pour durée de détention",
      "Conseil avant la signature d'un compromis",
      "Opposition ou négociation avec l'AFCI",
    ],
  },
  {
    title: "Optimisation de la détention immobilière",
    code: "OPT",
    points: [
      "Analyse des revenus locatifs imposables",
      "Déductions des intérêts, travaux, charges réelles",
      "Fiscalité des biens en copropriété ou hérités",
    ],
  },
  {
    title: "Avant achat, vente, transmission",
    code: "TRX",
    points: [
      "Simulation d'impact fiscal",
      "Préparation à la succession ou donation",
      "Coordination avec notaires, régies et autorités",
    ],
  },
];

export const properties = [
  {
    slug: "deux-villas-mitoyennes",
    title: "Deux villas mitoyennes",
    subtitle: "Construction neuve · Genève",
    status: "À vendre",
    type: "Villa moderne",
    location: "Genève · 1201",
    priceCHF: 740000,
    pricePerSqmCHF: 800,
    year: 2005,
    publishedAt: "2024-06-24",
    author: "Igor",
    surfaces: [
      { label: "Villa 1", habitable: 142, jardin: 393 },
      { label: "Villa 2", habitable: 140, jardin: 425 },
    ],
    layout: {
      ground: [
        "Hall d'entrée",
        "Salle de bain douche",
        "Séjour 36 m²",
        "Cuisine ouverte",
        "Réduit / buanderie",
      ],
      first: [
        "3 chambres à coucher",
        "1 grande chambre parentale",
        "Salle de bain avec baignoire",
      ],
      outside: [
        "Jardin avec terrasse dallée",
        "1 place de parc",
        "1 couvert à voiture",
      ],
    },
    info: {
      construction: "Neuve et de qualité",
      heating: "Pompe à chaleur air/eau",
    },
    features: ["Balcon", "Bibliothèque", "Buanderie"],
    images: [
      "https://tous-mandats.ch/wp-content/uploads/2024/06/stc3.png",
      "https://tous-mandats.ch/wp-content/uploads/2024/06/stc1.png",
      "https://tous-mandats.ch/wp-content/uploads/2024/06/stc2.png",
      "https://tous-mandats.ch/wp-content/uploads/2024/06/iStock-1848596991350-scaled-1.jpg",
    ],
  },
];

export const propertyTypes = [
  { name: "Villa moderne", count: 1, slug: "villa-moderne" },
  { name: "Maison familiale", count: 0, slug: "maison-familiale" },
  { name: "Appartement", count: 0, slug: "appartement" },
  { name: "Maison de ville", count: 0, slug: "maison-de-ville" },
  { name: "Copropriété", count: 0, slug: "copropriete" },
  { name: "Maison de ferme", count: 0, slug: "maison-de-ferme" },
];

export const stats = [
  { value: "20+", label: "années d'expérience cumulées" },
  { value: "100%", label: "dossiers fiscaux suisses" },
  { value: "GE", label: "spécialistes du droit genevois" },
  { value: "1258", label: "Perly · canton de Genève" },
];

export const principles = [
  {
    n: "I",
    title: "Conseil stratégique",
    body: "Chaque dossier est traité à la mesure du patrimoine — jamais au volume.",
  },
  {
    n: "II",
    title: "Langage clair",
    body: "Pas de jargon technique. Vous comprenez ce que vous signez.",
  },
  {
    n: "III",
    title: "Rigueur d'exécution",
    body: "Les démarches sont menées au calendrier — pas après.",
  },
  {
    n: "IV",
    title: "Jusqu'au dernier centime",
    body: "Optimisation fiscale conduite jusqu'à son terme légal.",
  },
];

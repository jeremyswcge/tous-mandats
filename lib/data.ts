export const company = {
  name: "Tous Mandats",
  tagline: "Fiscalité · Immobilier · Gestion administrative",
  promise: "Optimisez votre fiscalité, gérez vos démarches, valorisez votre patrimoine.",
  city: "Genève (Perly)",
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
  { icon: "tax", title: "Déclarations fiscales", body: "Particuliers et entreprises — Genève et tous cantons." },
  { icon: "house", title: "Fiscalité immobilière", body: "IBGI, gain immobilier, durée de détention, opposition AFCI." },
  { icon: "land", title: "Taxe LALAT", body: "Déclassement de terrain, calcul, négociation et représentation." },
  { icon: "building", title: "Comptabilité d'entreprise", body: "Tenue, bouclement, TVA, acomptes, gouvernance financière." },
  { icon: "key", title: "Courtage hypothécaire", body: "Mise en concurrence, prêts, refinancement, amortissement." },
  { icon: "exchange", title: "Transaction immobilière", body: "Achat et vente — appui stratégique de bout en bout." },
  { icon: "calendar", title: "Gestion locative", body: "Baux, indexations, conformité, litiges, régies & locataires." },
  { icon: "scroll", title: "Succession & donation", body: "Préparation patrimoniale, transmission, coordination notaires." },
];

export const transactions = [
  {
    label: "Acheter",
    body: "Recherche ciblée, analyse fiscale et négociation. Vous achetez en sachant exactement ce que vous payez.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    href: "/contact",
  },
  {
    label: "Vendre",
    body: "Estimation, optimisation du gain immobilier, mise en marché. Une vente bien préparée, c'est moins d'impôt.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    href: "/contact",
  },
  {
    label: "Louer",
    body: "Mise en location, sélection des candidats, rédaction des baux. Conformité genevoise garantie.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    href: "/contact",
  },
];

export const fiscalSegments = [
  {
    label: "Particuliers",
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
    code: "Détention",
    points: [
      "Analyse des revenus locatifs imposables",
      "Déductions des intérêts, travaux, charges réelles",
      "Fiscalité des biens en copropriété ou hérités",
    ],
  },
  {
    title: "Avant achat, vente, transmission",
    code: "Conseil",
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
      ground: ["Hall d'entrée", "Salle de bain douche", "Séjour 36 m²", "Cuisine ouverte", "Réduit / buanderie"],
      first: ["3 chambres à coucher", "1 grande chambre parentale", "Salle de bain avec baignoire"],
      outside: ["Jardin avec terrasse dallée", "1 place de parc", "1 couvert à voiture"],
    },
    info: { construction: "Neuve et de qualité", heating: "Pompe à chaleur air/eau" },
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
  { name: "Villa moderne", count: 1, slug: "villa-moderne", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=75" },
  { name: "Maison familiale", count: 0, slug: "maison-familiale", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=75" },
  { name: "Appartement", count: 0, slug: "appartement", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=75" },
  { name: "Maison de ville", count: 0, slug: "maison-de-ville", image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=75" },
  { name: "Copropriété", count: 0, slug: "copropriete", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=75" },
  { name: "Maison de ferme", count: 0, slug: "maison-de-ferme", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=75" },
];

export const stats = [
  { value: "20+", label: "années d'expérience" },
  { value: "100%", label: "dossiers suisses" },
  { value: "GE", label: "spécialistes droit genevois" },
  { value: "24h", label: "délai de réponse" },
];

export const principles = [
  { title: "Conseil stratégique et personnalisé", body: "Chaque dossier est traité à la mesure du patrimoine — jamais au volume." },
  { title: "Communication claire, sans jargon", body: "Vous comprenez ce que vous signez, étape par étape." },
  { title: "Gestion rigoureuse des démarches", body: "Les échéances fiscales sont anticipées, jamais subies." },
  { title: "Maîtrise du projet jusqu'au dernier centime", body: "Optimisation fiscale conduite jusqu'à son terme légal." },
];

// Hero / about images
export const media = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80",
  contact: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
};

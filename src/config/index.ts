export const config = {
  site: {
    title: "Bestmed360",
    // Default Page description
    description: "Bestmed360",
    basePath: "/",
    defaultLang: "de",
  },
  organization: {
    name: "Bestmed360",
    telephone: "0308913040",
    email: "info@bestmed360.com",
    addressLocality: "Berlin",
    postalCode: "10117",
    streetAddress: "Kurfürstendamm 106",
  },
};

export const menu = [
  {
    title: "Leistungen",
    path: "#",
  },
  {
    title: "Referenzen",
    path: "#",
  },
  {
    title: "Über uns",
    path: "/ueber-uns",
  },
];

export const footerMenu = [
  {
    title: "Leistungen",
    children: [],
  },
  {
    title: "Ressourcen",
    children: [
      {
        title: "Häufige Fragen",
        path: "/gefaehrdungsbeurteilung-psychischer-belastung-faq-bestmed360",
      },
      {
        title: "Downloads",
        path: "#",
      },
      {
        title: "Videos",
        path: "#",
      },
    ],
  },
  {
    title: "Rechtliches",
    children: [
      {
        title: "Impressum",
        path: "/impressum",
      },
      {
        title: "Datenschutz",
        path: "/datenschutz",
      },
      {
        title: "AGB",
        path: "/agb",
      },
    ],
  },
];

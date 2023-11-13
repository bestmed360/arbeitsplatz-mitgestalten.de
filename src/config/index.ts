export const config = {
  site: {
    title: "Bestmed360",
    // Default Page description
    description: "Bestmed360",
    basePath: "/",
    defaultLang: "de",
    googleSiteVerificationId: "menno",
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
    path: "/unsere-leistungen",
  },
  //   {
  //     title: "Referenzen",
  //     path: "#",
  //   },
  {
    title: "Über uns",
    path: "/ueber-uns",
  },
];

export const footerMenu = [
  {
    title: "Leistungen",
    children: [
      {
        title: "GBU Psyche",
        path: "/unsere-leistungen/gefaehrdungsbeurteilung-psyche",
      },
      {
        title: "BGM",
        path: "/unsere-leistungen/betriebliches-gesundheitsmanagement",
      },
      {
        title: "Beratung & Support",
        path: "/unsere-leistungen/beratung-und-support",
      },
      {
        title: "Arbeitsmedizin",
        path: "/unsere-leistungen/arbeitsmedizin",
      },
      {
        title: "Schulungen",
        path: "/unsere-leistungen/schulungen",
      },
      {
        title: "Telemedizin",
        path: "/unsere-leistungen/telemedizin",
      },
      {
        title: "Arbeitsschutzorganisation",
        path: "/unsere-leistungen/arbeitsschutzorganisation",
      },
    ],
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
        path: "/ressourcen/downloads",
      },
      //   {
      //     title: "Videos",
      //     path: "#",
      //   },
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
      //   {
      //     title: "AGB",
      //     path: "/agb",
      //   },
    ],
  },
];

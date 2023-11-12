# Arbeitsplatz mitgestalten

[![Netlify Status](https://api.netlify.com/api/v1/badges/d08627b4-575c-4ee0-b70e-199b2766ccdc/deploy-status)](https://app.netlify.com/sites/arbeitsplatz-mitgestalten/deploys)

Die GBU Psyche Webseite von Bestmed360 bietet eine informative Plattform rund um das Thema "Gefährdungsbeurteilung Psychische Belastung am Arbeitsplatz" (GBU Psyche). Die Webseite ermöglicht es Besuchern, Einblicke in die Bedeutung der GBU Psyche zu gewinnen und wie sie die psychische Gesundheit am Arbeitsplatz positiv beeinflussen können. Die Gestaltung der Webseite basiert auf Tailwind CSS für ein benutzerfreundliches und ansprechendes Design, während Astro.js als Frontend-Framework für eine optimale Performance sorgt.

## Techstack

- Tailwind CSS: Ein leistungsstarkes CSS-Framework, das eine moderne und individuelle Gestaltung der Webseite ermöglicht, um die Informationen zum Thema GBU Psyche ansprechend zu präsentieren.
- Astro.js: Ein modernes Frontend-Framework, das auf den neuesten Webstandards basiert. Es gewährleistet eine effiziente Entwicklung, optimierte Ladezeiten und eine reibungslose Benutzererfahrung für Besucher der GBU Psyche Webseite.

## Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver mit Hot Reload starten
npm run dev

# Für Produktion bauen
npm run build
```

Mit `npm run dev` kann die Seite mit einem lokalen Dev-Server gestartet werden. `npm run build` erstellt die optimierte Produktionsversion im `dist/` Ordner.

## Struktur

- `src/assets/` - Statische Assets
- `src/pages/` - Astro Seiten
- `src/config/` - Konfigurationsdateien
- `src/content` - Inhalte der Webseite
- `src/components/` - Wiederverwendbare Komponenten
- `src/layouts/` - Layout Komponenten
- `src/utils/` - Hilfsfunktionen
- `public/` - Statische Dateien

### Assets

Bilder und andere Assets liegen im `public/` sowie `src/assets/` Ordner. Dieser wird bei Build automatisch kopiert.

## Deployment

Die Seite wird via Netlify gehostet und deployt. Das Deployment erfolgt automatisch bei Push auf den main Branch.
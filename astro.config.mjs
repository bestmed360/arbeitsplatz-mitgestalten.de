import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://arbeitsplatz-mitgestalten.de",
  integrations: [tailwind(), sitemap()],
  output: "static",
  adapter: netlify(),
});

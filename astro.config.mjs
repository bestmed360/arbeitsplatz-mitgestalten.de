import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://arbeitsplatz-mitgestalten.de",
  integrations: [tailwind()],
  output: "server",
  adapter: netlify()
});
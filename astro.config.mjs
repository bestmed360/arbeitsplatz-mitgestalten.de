import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://arbeitsplatz-mitgestalten.de",
  integrations: [tailwind(), sitemap(), alpinejs()],
  output: "static"
  //   adapter: netlify(),
});
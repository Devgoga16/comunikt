// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Cambiar por el dominio definitivo antes de publicar (se usa en canonical, Open Graph y sitemap)
const SITE_URL = "https://www.comunikt.pe";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: { inlineStylesheets: "always" },
  devToolbar: { enabled: false },
});

// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.proactivasas.com",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "monthly",
    }),
  ],
  image: { responsiveStyles: true },
  // Scripts siempre como archivos externos: permite una CSP sin unsafe-inline.
  vite: { build: { assetsInlineLimit: 0 } },
});

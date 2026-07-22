import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://rotarobotik.com",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});

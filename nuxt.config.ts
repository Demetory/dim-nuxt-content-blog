import { dirname, resolve } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  srcDir: "src",

  ssr: true,

  app: {
    rootId: "app",
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      link: [
        { rel: "author", href: "/humans.txt" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "stylesheet", href: "/css/reset.css" },
        { rel: "stylesheet", href: "/css/noscript.css" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "", as: "style" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
          as: "style",
        },
      ],
    },
  },

  css: ["@/assets/scss/_core/_index.scss", "@/assets/scss/theme/style.theme.scss"],

  modules: ["@nuxt/content", "@vueuse/nuxt", "@pinia/nuxt"],

  vite: {
    logLevel: "info",

    plugins: [
      VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json")],
      }),
    ],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "./src/assets/scss/theme/var.colors.scss" as colors;
            @use "./src/assets/scss/theme/var.grid.scss" as grid;
            @import "./src/assets/scss/theme/var.mixins.scss";
         `,
        },
      },
    },
  },
});

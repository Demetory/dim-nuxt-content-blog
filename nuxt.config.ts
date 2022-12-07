import { dirname, resolve } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  srcDir: "src",

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["@/assets/scss/index.scss"],

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
          @use "./src/assets/scss/_vars/var.colors.scss" as colors;
          @use "./src/assets/scss/_vars/var.grid.scss" as grid;
          @import "./src/assets/scss/_vars/var.mixins.scss";
         `,
        },
      },
    },
  },
});

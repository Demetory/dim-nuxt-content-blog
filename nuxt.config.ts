import { dirname, resolve } from "node:path";
import { fileURLToPath } from "url";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

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
      vueI18n({
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

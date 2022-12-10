// Module
import { createI18n } from "vue-i18n";

// Locales
import en from "../locales/en.json";
import de from "../locales/de.json";
import ru from "../locales/ru.json";

// I18n Plugin
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    langDir: "locales/",
    lazy: true,
    fallbackLocale: "en",
    availableLocales: ["en", "de", "ru"],
    enableInSFC: true,
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    messages: {
      en,
      de,
      ru,
    },
  });

  vueApp.use(i18n);
});

// Core
import { computed } from "vue";

// Modules
import { useI18n } from "vue-i18n";
import { useRoute } from "@nuxtjs";

// Data
const route = useRoute();
const { t } = useI18n();
const siteTitle = "Dim Nuxt 3 Template";

const useMyTitle = computed(() => {
  // const translate = route.meta.title ? t(`${route.meta.title}`) : null;
  // const result = translate ? `${siteTitle} | ${translate}` : siteTitle;
  const result = "Fuck";
  return result;
});

// Export
export { useMyTitle };

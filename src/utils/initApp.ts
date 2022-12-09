// Modules
import { useI18n } from "vue-i18n";
import { computed } from "vue";

// Runs by application start
const InitApp = () => {
  const route = useRoute();
  const { t } = useI18n();
  const siteTitle = "Dim Nuxt 3 Template";

  const title = computed(() => {
    const translate = route.meta.title ? t(`${route.meta.title}`) : null;
    const result = translate ? `${siteTitle} | ${translate}` : siteTitle;
    return result;
  });

  useHead({
    title: title,
    link: [
      {
        rel: "stylesheet",
        href: "/css/reset.css",
      },
      {
        rel: "stylesheet",
        href: "/css/noscript.css",
      },
      {
        rel: "author",
        href: "/humans.txt",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  });

  useConsoleImage(exampleLogo);
};

// Export
export { InitApp };

<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";
import { useExamplePiniaStore } from "@/store/examplePinia";

// Types
import IError from "@/types/IError";

// Props
defineProps({
  error: {
    type: Object as () => IError,
    required: true,
  },
});

// Data
const { locale, t } = useI18n();
const examplePiniaStore = useExamplePiniaStore();
const route = useRoute();
const siteTitle = t("common.siteTitle");

// Computed Properties
const getColorMode = computed(() => {
  if (typeof examplePiniaStore.colorMode === "string") {
    let result = examplePiniaStore.colorMode.toLocaleLowerCase();
    return `mode-${result}`;
  }
});

const getSiteTitle = computed(() => {
  const translate = route.meta.title ? t(`${route.meta.title}`) : null;
  const result = translate ? `${siteTitle} | ${translate}` : siteTitle;
  return result;
});

// Methods
InitApp();

useHead({ title: getSiteTitle });

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <Html :lang="locale" :class="getColorMode">
    <Body>
      <NoScript>
        <section class="noscript">
          <img alt="Fatality" src="/images/fatality.svg" />
          <div>
            <h1>Easy, Tiger</h1>
            <p>Turn JavaScript on, dont be so paraniod.</p>
          </div>
        </section>
      </NoScript>

      <NuxtLoadingIndicator />

      <div class="page">
        <TemplateSiteHeader />
        <main class="page-container page-404">
          <h1>{{ $t("pages.error.title") }}</h1>
          <p>{{ $t("pages.error.body.code") }}: {{ error.statusCode }}</p>
          <p>{{ $t("pages.error.body.message") }}: {{ error.statusMessage }}</p>
          <p>
            <a @click.stop="handleError">{{ $t("pages.error.body.back") }}</a>
          </p>
        </main>
      </div>
    </Body>
  </Html>
</template>

<style scoped lang="scss">
.page-404 {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: grid.$gap;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin: 1rem 0;
  }
  a {
    cursor: pointer;
  }
}
</style>

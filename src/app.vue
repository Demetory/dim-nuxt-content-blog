<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";

// Data
const { locale, t } = useI18n();
const route = useRoute();
const siteTitle = t("common.siteTitle");

// Computed Properties
const getSiteTitle = computed(() => {
  const translate = route.meta.title ? t(`${route.meta.title}`) : null;
  const result = translate ? `${siteTitle} | ${translate}` : siteTitle;
  return result;
});

// Methods
InitApp();

useHead({ title: getSiteTitle });
</script>

<template>
  <Html :lang="locale">
    <Body>
      <NoScript>
        <section class="noscript">
          <img alt="Fatality" src="/images/deco/fatality.svg" />
          <div>
            <h1>Easy, Tiger</h1>
            <p>Turn JavaScript on, dont be so paraniod.</p>
          </div>
        </section>
      </NoScript>

      <NuxtLoadingIndicator />

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

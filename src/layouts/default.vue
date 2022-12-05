<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";

// Data
const route = useRoute();
const { t } = useI18n();
const siteTitle = "Dim Nuxt 3 Template";

// Computed Properties
const title = computed(() => {
  const translate = route.meta.title ? t(`${route.meta.title}`) : null;
  const result = translate ? `${siteTitle} | ${translate}` : siteTitle;
  return result;
});
</script>

<template>
  <Html :lang="$i18n.locale">
    <Head>
      <Title>{{ title }}</Title>
    </Head>

    <Body>
      <NoScript>
        <section class="noscript">
          <img src="/images/fatality.svg" />
          <div>
            <h1>Easy, Tiger</h1>
            <p>Turn JavaScript on, don`t be so paraniod.</p>
          </div>
        </section>
      </NoScript>

      <div class="page-container">
        <TemplateHeader />
        <main>
          <slot />
        </main>
      </div>
    </Body>
  </Html>
</template>

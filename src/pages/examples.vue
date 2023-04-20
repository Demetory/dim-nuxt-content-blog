<script setup lang="ts">
// Methods
definePageMeta({
  title: "common.siteNavi.example",
});

useHead({
  meta: [{ name: "description", content: "Nuxt Content Starter Template" }],
});
</script>

<template>
  <article>
    <OrganismExampleVueUse />
    <OrganismExampleUseFetch />
    <OrganismExamplePinia />
  </article>
</template>

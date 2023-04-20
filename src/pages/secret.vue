<script setup lang="ts">
// Methods
definePageMeta({
  title: "common.siteNavi.secret",
  middleware: "auth",
});

useHead({
  meta: [{ name: "description", content: "Nuxt Content Starter Template" }],
});
</script>

<template>
  <article>
    <h1>{{ $t("pages.secret.body") }}</h1>
  </article>
</template>

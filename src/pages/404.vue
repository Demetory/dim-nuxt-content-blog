<script setup lang="ts">
// Methods
definePageMeta({
  title: "pages.error.404",
});

useHead({
  meta: [{ name: "description", content: "Nuxt Content Starter Template" }],
});

const handleError = () => {
  clearError();
  navigateTo("/");
};
</script>

<template>
  <article>
    <h1>{{ $t("pages.error.404") }}</h1>
    <p>
      <a @click.stop="handleError">{{ $t("pages.error.body.back") }}</a>
    </p>
  </article>
</template>

<style scoped lang="scss">
h1 {
  margin-bottom: grid.$gap;
}

a {
  cursor: pointer;
}
</style>

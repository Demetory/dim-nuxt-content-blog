<script setup lang="ts">
// Data
const route = useRoute();

// Methods
useHead({
  title: `Articles by tag: ${String(route.params.slug)}`,
});
definePageMeta({
  type: "blog",
});
</script>

<template>
  <div class="page-wrapper">
    <TemplateBlogList :filter="route.params.slug" />
  </div>
</template>

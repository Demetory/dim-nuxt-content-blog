<script setup lang="ts">
// Data
const route = useRoute();

// Methods
useHead({
  title: `Articles by tag: ${String(route.params.slug)}`,
  meta: [{ name: "description", content: "NuxtContent Starter Template" }],
});
</script>

<template>
  <div class="page-wrapper">
    <OrganismBlogTags />
    <TemplateBlogList :filter="route.params.slug" />
  </div>
</template>

<script setup lang="ts">
// Methods
definePageMeta({
  title: "common.siteNavi.blog",
});

useHead({
  meta: [{ name: "description", content: "Nuxt Content Starter Template" }],
});
</script>

<template>
  <div class="page-wrapper">
    <OrganismBlogTags />
    <TemplateBlogList />
  </div>
</template>

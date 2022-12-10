<script setup lang="ts">
// Data
const {
  query: { tags },
} = useRoute();

// @ts-expect-error: not exist in type
const filter = ref(tags?.split(","));

// Hooks
definePageMeta({
  title: "common.siteNavi.blog",
});
</script>

<template>
  <TemplateBlogList :filter="filter" />
</template>

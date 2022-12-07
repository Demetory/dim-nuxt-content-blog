<script setup lang="ts">
// Data
const {
  query: { tags },
} = useRoute();

// @ts-expect-error: not exist in type
const filter = ref(tags?.split(","));

// Hooks
useHead({
  title: "navi.blog",
});
</script>

<template>
  <TemplateBlogList :filter="filter" />
</template>

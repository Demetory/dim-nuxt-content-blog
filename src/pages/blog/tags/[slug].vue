<script setup>
// Data
const {
  params: { slug },
} = useRoute();

// @ts-expect-error: not exist in type
const filter = ref(slug?.split(","));

// Hooks
useHead({
  title: `Articles by tag: ${slug}`,
});
</script>

<template>
  <TemplateBlogList :filter="filter" />
</template>

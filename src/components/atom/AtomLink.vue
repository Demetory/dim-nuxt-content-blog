<script setup lang="ts">
// Types
import type ILink from "@/types/ILink";

// Props
defineProps({
  link: {
    type: Object as () => ILink,
    required: true,
  },
});
</script>

<template>
  <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
</template>

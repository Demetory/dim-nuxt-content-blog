<script setup lang="ts">
// Types
import type ILink from "@/types/ILink";

// Props
defineProps({
  params: {
    type: Object as () => ILink,
    required: true,
  },
});
</script>

<template>
  <a :href="params.url" target="_blank" rel="noopener noreferrer">{{ params.text }}</a>
</template>

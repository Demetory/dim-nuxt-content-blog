<script setup lang="ts">
// Props
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>I am content-component, and have to say: {{ msg }}</div>
</template>

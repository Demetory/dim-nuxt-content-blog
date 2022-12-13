<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <nav>
    <NuxtLink v-for="(link, index) in examplePiniaStore.navi" :key="`navi-${index}`" :to="link.path">
      {{ $t(`${link.translate}`) }}
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0 1rem;

  a:not(:last-child) {
    margin-right: grid.$gap;
  }
}
</style>

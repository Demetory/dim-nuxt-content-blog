<script setup lang="ts">
// Modules
import { useLocalStorage, useMouse } from "@vueuse/core";

// Data
const { x, y } = useMouse();
const localStore = useLocalStorage("my-storage", {
  name: "Apple",
  color: "red",
});
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIconModule />
    </template>
    <template #heading> UseUse Example </template>
    <template #content>
      <p>Mouse Position: {{ x }} + {{ y }}</p>
      <p>Local Store: {{ localStore }}</p>
      <p>VueUse <a href="https://vueuse.org/guide/" target="_blank" rel="noopener">official documentation</a></p>
    </template>
  </TemplateSlot>
</template>

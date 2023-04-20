<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";
import { useLocalStorage, useMouse } from "@vueuse/core";

// Data
const examplePiniaStore = useExamplePiniaStore();
const localStore = useLocalStorage("my-storage", {
  name: "Apple",
  color: "red",
});
const { x, y } = useMouse();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="module" />
    </template>
    <template #heading>UseUse Example</template>
    <template #content>
      <p>Mouse Position: {{ x }} + {{ y }}</p>
      <p>Local Storage: {{ localStore }}</p>
      <p>Official documentation: <AtomLink :link="examplePiniaStore.getLink('link-utils')" /></p>
    </template>
  </TemplateSlot>
</template>

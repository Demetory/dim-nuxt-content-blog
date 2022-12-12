<script setup lang="ts">
// Modules
import { useMouse } from "@vueuse/core";
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
const { x, y } = useMouse();

// Computed Properties
const colorMode = computed(() => {
  return examplePiniaStore.colorMode;
});
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconModule class="icon" />
    </template>
    <template #heading> UseUse Example </template>
    <template #content>
      <p>
        Mouse Position: <ClientOnly>{{ x }} + {{ y }}</ClientOnly>
      </p>
      <p>
        Local Store: <ClientOnly>{{ colorMode }}</ClientOnly>
      </p>
      <p>VueUse <a href="https://vueuse.org/guide/" target="_blank" rel="noopener">official documentation</a></p>
    </template>
  </AtomSlot>
</template>

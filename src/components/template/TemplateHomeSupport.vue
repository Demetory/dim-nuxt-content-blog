<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();

// Methods
const getLinkUrl = (value: string) => {
  return examplePiniaStore.getCopyrightUrl(value);
};
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIconSupport />
    </template>
    <template #heading> Support </template>
    <template #content>
      <p>
        Visit my
        <a :href="getLinkUrl('homepage')" target="_blank" rel="noopener">homepage</a>
        and this
        <a :href="getLinkUrl('repo')" target="_blank" rel="noopener">template repo</a>
      </p>
    </template>
  </TemplateSlot>
</template>

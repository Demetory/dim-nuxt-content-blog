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
  <AtomSlot>
    <template #icon>
      <IconSupport class="icon" />
    </template>
    <template #heading> Support </template>
    <template #content>
      <p>
        Visit my <a :href="getLinkUrl('homepage')" target="_blank" rel="noopener">Homepage</a> and check this
        <a :href="getLinkUrl('repo')" target="_blank" rel="noopener">project repo</a>
      </p>
    </template>
  </AtomSlot>
</template>

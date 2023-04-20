<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="module" />
    </template>
    <template #heading>Installed Modules</template>
    <template #content>
      <ul>
        <li>Storage: <AtomLink :link="examplePiniaStore.getLink('link-storage')" /></li>
        <li>Utilities: <AtomLink :link="examplePiniaStore.getLink('link-utils')" /></li>
        <li>Internationalization: <AtomLink :link="examplePiniaStore.getLink('link-i18')" /></li>
        <li>CSS Preprocessor: <AtomLink :link="examplePiniaStore.getLink('link-sass')" /></li>
        <li>
          Code quality:
          <AtomLink :link="examplePiniaStore.getLink('link-eslint')" />
          +
          <AtomLink :link="examplePiniaStore.getLink('link-prettier')" />
        </li>
      </ul>
    </template>
  </TemplateSlot>
</template>

<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconModule class="icon" />
    </template>
    <template #heading> Installed Modules </template>
    <template #content>
      <ul>
        <li>Vue Store: <AtomLink :params="examplePiniaStore.links.pinia" /></li>
        <li>Vue Composition Utilities: <AtomLink :params="examplePiniaStore.links.vueuse" /></li>
        <li>Internationalization framework: <AtomLink :params="examplePiniaStore.links.i18n" /></li>
        <li>CSS Preprocessor: <AtomLink :params="examplePiniaStore.links.scss" /></li>
        <li>
          Code quality:
          <AtomLink :params="examplePiniaStore.links.eslint" /> +
          <AtomLink :params="examplePiniaStore.links.prettier" />
        </li>
      </ul>
    </template>
  </AtomSlot>
</template>

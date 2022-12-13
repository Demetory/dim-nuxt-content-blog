<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconTooling class="icon" />
    </template>
    <template #heading> Tooling </template>
    <template #content>
      <ul>
        <li>
          Recommended IDE: <AtomLink :params="examplePiniaStore.links.vscode" /> +
          <AtomLink :params="examplePiniaStore.links.volar" /> +
          <AtomLink :params="examplePiniaStore.links.devtools" />
        </li>
        <li>End-to-End testing framework: <AtomLink :params="examplePiniaStore.links.cypress" /></li>
        <li>Unit testing framework: <AtomLink :params="examplePiniaStore.links.vitest" /></li>
      </ul>
    </template>
  </AtomSlot>
</template>

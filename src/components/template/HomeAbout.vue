<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconDocumentation class="icon" />
    </template>
    <template #heading> What`s this about </template>
    <template #content>
      <ul>
        <li>
          Based on <AtomLink :params="examplePiniaStore.links.nuxt" /> framework with
          <AtomLink :params="examplePiniaStore.links.nuxtcontent" /> module.
        </li>
        <li>Uses <AtomLink :params="examplePiniaStore.links.vite" /> as project build tool.</li>
        <li>
          Built on <AtomLink :params="examplePiniaStore.links.nuxttemplate" /> with full
          <AtomLink :params="examplePiniaStore.links.typescript" /> support, used
          <AtomLink :params="examplePiniaStore.links.atomic" /> and
          <AtomLink :params="examplePiniaStore.links.sfc" />
        </li>
      </ul>
    </template>
  </AtomSlot>
</template>

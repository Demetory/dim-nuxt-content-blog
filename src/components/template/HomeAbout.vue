<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="documentation" />
    </template>
    <template #heading>Nuxt Content 2 + Vite 4 Starter Template</template>
    <template #content>
      <p>
        This project is served and bundled with <AtomLink :link="examplePiniaStore.getLink('link-vite')" />, uses
        <AtomLink :link="examplePiniaStore.getLink('link-ts')" /> for strong typing and
        <AtomLink :link="examplePiniaStore.getLink('link-sfc')" />. Designed with
        <AtomLink :link="examplePiniaStore.getLink('link-pattern')" />.
      </p>
      <p>
        Official documentation of <AtomLink :link="examplePiniaStore.getLink('link-vue')" />,
        <AtomLink :link="examplePiniaStore.getLink('link-nuxt')" /> and
        <AtomLink :link="examplePiniaStore.getLink('link-nuxtcontent')" /> provides you with all information you need to
        get started.
      </p>
    </template>
  </TemplateSlot>
</template>

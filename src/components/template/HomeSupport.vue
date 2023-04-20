<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="support" />
    </template>
    <template #heading>Support</template>
    <template #content>
      <p>
        Visit my homepage <AtomLink :link="examplePiniaStore.getLink('link-homepage')" /> and this project repo on
        <AtomLink :link="examplePiniaStore.getLink('link-repo')" />
      </p>
    </template>
  </TemplateSlot>
</template>

<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconSupport class="icon" />
    </template>
    <template #heading> Support </template>
    <template #content>
      <p>
        Visit my homepage <AtomLink :params="examplePiniaStore.links.demetory" /> and check this
        <AtomLink :params="examplePiniaStore.links.projectrepo" />
      </p>
    </template>
  </AtomSlot>
</template>

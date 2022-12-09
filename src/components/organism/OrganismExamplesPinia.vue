<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <IconModule class="icon" />
    </template>
    <template #heading> Pinia Example </template>
    <template #content>
      <p>
        Count: <client-only>{{ examplePiniaStore.examples.counter }}</client-only> | Input:
        <client-only>{{ examplePiniaStore.examples.textfield }}</client-only> | Mode:
        <client-only>{{ examplePiniaStore.colorMode }}</client-only>
      </p>
      <p>
        <AtomButton @click.stop="examplePiniaStore.increment()">Increment</AtomButton>
        <AtomButton @click.stop="examplePiniaStore.decrement()">Decrement</AtomButton>
        <AtomInput v-model="examplePiniaStore.examples.textfield" />
      </p>
      <p>
        Pinia
        <a href="https://pinia.vuejs.org/introduction.html" target="_blank" rel="noopener">official documentation</a>
      </p>
    </template>
  </TemplateSlot>
</template>

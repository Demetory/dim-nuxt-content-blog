<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
const examples = examplePiniaStore.examples;
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconModule class="icon" />
    </template>
    <template #heading> Pinia Example </template>
    <template #content>
      <p>
        Count: <ClientOnly>{{ examples.counter }}</ClientOnly> | Input:
        <ClientOnly>{{ examples.textfield }}</ClientOnly> | Mode:
        <ClientOnly>{{ examplePiniaStore.colorMode }}</ClientOnly>
      </p>
      <p>
        <AtomButton @click.stop="examplePiniaStore.increment()">Increment</AtomButton>
        <AtomButton @click.stop="examplePiniaStore.decrement()">Decrement</AtomButton>
        <AtomInput v-model="examples.textfield" />
      </p>
      <p>
        Pinia
        <a href="https://pinia.vuejs.org/introduction.html" target="_blank" rel="noopener">official documentation</a>
      </p>
    </template>
  </AtomSlot>
</template>

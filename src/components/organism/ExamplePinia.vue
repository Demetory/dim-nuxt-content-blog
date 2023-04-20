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
    <template #heading>Pinia Example</template>
    <template #content>
      <ClientOnly>
        <p>Count: {{ examplePiniaStore.count }} | Input: {{ examplePiniaStore.input }}</p>
        <p class="buttons">
          <AtomButton label="Increment" @click="examplePiniaStore.doIncrement()" />
          <AtomButton label="Decrement" @click="examplePiniaStore.doDecrement()" />
          <AtomInput label="Enter data" v-model="examplePiniaStore.input" />
        </p>
      </ClientOnly>
      <p>Official documentation: <AtomLink :link="examplePiniaStore.getLink('link-storage')" /></p>
    </template>
  </TemplateSlot>
</template>

<style scoped lang="scss">
p:not(:last-of-type) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &.buttons {
    margin-top: calc(grid.$gap / 2);
  }

  .atom-button {
    margin-right: calc(grid.$gap / 2);
    margin-bottom: calc(grid.$gap / 2);
  }

  .atom-input {
    width: 180px;
    min-width: 180px;
    max-width: 180px;
    margin-bottom: calc(grid.$gap / 2);
  }

  /*
  @media screen and (max-width: 540px) {
      margin-top: calc(grid.$gap / 2);
    }
*/
}
</style>

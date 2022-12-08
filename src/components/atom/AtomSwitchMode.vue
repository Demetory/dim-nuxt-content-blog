<script setup lang="ts">
// Modules
import { useStorage } from "@vueuse/core";
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
const colorModes = ["Light", "Dark"];
const colorMode = useStorage("colorMode", colorModes[0]);
examplePiniaStore.colorMode = colorMode;
</script>

<template>
  <form class="modes">
    <label for="modes-select" class="modes__label">Mode</label>
    <select id="modes-select" v-model="colorMode" class="modes__select">
      <option v-for="mode in colorModes" :key="mode" :value="mode">
        {{ mode }}
      </option>
    </select>
  </form>
</template>

<style scoped lang="scss">
.modes {
  display: flex;
  flex: 0 1 auto;
  margin: 2rem 0;
  align-items: center;
  font-size: 1.6rem;
  margin-left: grid.$gap;

  &__label {
    margin-right: 1rem;
  }

  &__select {
    padding: 0.6rem 1.2rem;
    color: colors.$font-black;
    background-color: transparent;
    border: grid.$border-solid colors.$link-main;
    border-radius: grid.$border-radius;
    transition: border-color grid.$transition;
    cursor: pointer;
    outline: 0;

    &:hover,
    &:focus {
      border-color: colors.$font-black;
    }
  }
}
</style>

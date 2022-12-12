<script setup lang="ts">
// Modules
import { useStorage } from "@vueuse/core";
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
const options = ["Light", "Dark"];
const model = useStorage("colorMode", options[0]);
examplePiniaStore.colorMode = model;

const data = {
  id: "color",
  modelValue: model,
  options: options,
  label: "common.siteSwitcher.mode.title",
  translate: "mode",
};
</script>

<template>
  <AtomSelect :params="data" v-model="model" />
</template>

<style scoped lang="scss"></style>

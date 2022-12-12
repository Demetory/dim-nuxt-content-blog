<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";
import { useStorage } from "@vueuse/core";
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const { availableLocales, locale } = useI18n();
const examplePiniaStore = useExamplePiniaStore();
const options = availableLocales;
const model = useStorage("language", locale);
examplePiniaStore.language = model;

const data = {
  id: "lang",
  modelValue: model,
  options: options,
  label: "common.siteSwitcher.lang.title",
};
</script>

<template>
  <AtomSelect :params="data" v-model="model" />
</template>

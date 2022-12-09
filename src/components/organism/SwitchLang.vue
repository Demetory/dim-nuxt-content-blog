<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";

// Data
const { availableLocales, locale } = useI18n();

const data = {
  id: "lang",
  modelValue: locale,
  options: availableLocales,
  label: "Lang:",
};
</script>

<template>
  <AtomSelect :params="data" v-model="locale" />
</template>

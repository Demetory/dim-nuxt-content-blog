<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
const date: Date = new Date();
const dateTZ: Date = useDateTZ(date, "Asia/Jakarta");

// Computed Properties
const getYear = computed(() => {
  return new String(useDateToRoman(dateTZ.getFullYear()));
});

const getCopyright = computed(() => {
  return examplePiniaStore.copyright;
});
</script>

<template>
  <p class="copyright">
    {{ getYear }} &copy;

    <template v-for="(item, index) in getCopyright" :key="`link-${index}`">
      <AtomLink :params="item" />
      <span v-if="index !== Object.keys(getCopyright).length - 1"> | </span>
    </template>
  </p>
</template>

<style scoped lang="scss">
.copyright {
  margin-top: 1rem;
  text-align: center;
}
</style>

<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
const date: Date = new Date();
const dateTZ: Date = useDateTZ(date, "Asia/Jakarta");
const copyright = examplePiniaStore.copyright;

// Computed Properties
const getYear = computed(() => {
  return new String(useDateToRoman(dateTZ.getFullYear()));
});

const isLast = computed(() => (index: number, data: Object) => {
  return index !== Object.keys(data).length - 1;
});
</script>

<template>
  <p class="copyright">
    {{ getYear }} &copy;
    <template v-for="(item, index) in copyright" :key="`link-${index}`">
      <AtomLink :params="item" />
      <span v-if="isLast(index, copyright)"> | </span>
    </template>
  </p>
</template>

<style scoped lang="scss">
.copyright {
  margin-top: 1rem;
  text-align: center;
}
</style>

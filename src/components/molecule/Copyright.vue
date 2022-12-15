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
</script>

<template>
  <p class="copyright">
    {{ getYear }} &copy; <AtomLink :params="examplePiniaStore.links.demetory" /> |
    <AtomLink :params="examplePiniaStore.links.projectrepo" />
  </p>
</template>

<style scoped lang="scss">
.copyright {
  margin-top: 2rem;
  text-align: center;
}
</style>

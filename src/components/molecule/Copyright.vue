<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "~/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();
const dateTZ: Date = useDateTZ(new Date(), "Asia/Jakarta");

// Computed properties
const computedYear = computed(() => {
  return new String(useDateToRoman(dateTZ.getFullYear()));
});
</script>

<template>
  <p class="copyright">
    {{ computedYear }} &copy; <AtomLink :link="examplePiniaStore.getLink('link-homepage')" /> |
    <AtomLink :link="examplePiniaStore.getLink('link-repo')" />
  </p>
</template>

<style scoped lang="scss">
.copyright {
  margin-top: 1rem;
  text-align: center;
}
</style>

<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();

// Computed properties
const computedUserInfo = computed(() => {
  return examplePiniaStore.userInfo;
});

const computedLoading = computed(() => {
  return examplePiniaStore.loading;
});

const computedError = computed(() => {
  return examplePiniaStore.errorMsg;
});
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="module" />
    </template>
    <template #heading>UseFetch Example</template>
    <template #content>
      <p>
        <AtomButton
          v-if="!computedUserInfo"
          :loading="computedLoading"
          label="Get Data"
          @click="examplePiniaStore.getUserInfo"
        />
        <AtomButton v-else :loading="computedLoading" label="Clear Data" @click="examplePiniaStore.clearUserInfo" />
      </p>
      <p v-if="computedLoading">Loading</p>
      <p v-if="computedUserInfo">{{ computedUserInfo }}</p>
      <p v-if="computedError" class="error">{{ computedError }}</p>
      <p>Official documentation: <AtomLink :link="examplePiniaStore.getLink('link-usefetch')" /></p>
    </template>
  </TemplateSlot>
</template>

<style scoped lang="scss">
p:not(:last-of-type) {
  margin-bottom: calc(grid.$gap / 2);
  .atom-button {
    min-width: 110px;
  }
}
</style>

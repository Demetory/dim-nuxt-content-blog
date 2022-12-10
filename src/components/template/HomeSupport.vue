<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const examplePiniaStore = useExamplePiniaStore();

// Methods
const getLinkUrl = (value: string) => {
  return examplePiniaStore.getCopyrightUrl(value);
};
</script>

<template>
  <AtomSlot>
    <template #icon>
      <IconSupport class="icon" />
    </template>
    <template #heading> {{ $t(`pages.home.support.title`) }} </template>
    <template #content>
      <i18n-t keypath="pages.home.support.body[0]" tag="p" scope="global">
        <template #Homepage>
          <a :href="getLinkUrl('homepage')" target="_blank" rel="noopener">Demetory</a>
        </template>
        <template #Repo>
          <a :href="getLinkUrl('repo')" target="_blank" rel="noopener">Dim-Nuxt-Content-Blog</a>
        </template>
      </i18n-t>
    </template>
  </AtomSlot>
</template>

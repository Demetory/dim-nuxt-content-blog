<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";
import { useExamplePiniaStore } from "@/store/examplePinia";

// Data
const { locale } = useI18n();
const examplePiniaStore = useExamplePiniaStore();

// Computed Properties
const colorMode = computed(() => {
  if (typeof examplePiniaStore.colorMode === "string") {
    let result = examplePiniaStore.colorMode.toLocaleLowerCase();
    return `mode-${result}`;
  }
});
</script>

<template>
  <Html :lang="locale" :class="colorMode">
    <Body>
      <NoScript>
        <section class="noscript">
          <img src="/images/fatality.svg" />
          <div>
            <h1>Easy, Tiger</h1>
            <p>Turn JavaScript on, dont be so paraniod.</p>
          </div>
        </section>
      </NoScript>

      <div class="page-container">
        <TemplateSiteHeader />
        <main>
          <slot />
        </main>
      </div>
    </Body>
  </Html>
</template>

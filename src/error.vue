<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";
import { useExamplePiniaStore } from "@/store/examplePinia";

// Types
import IError from "@/types/IError";

// Props
defineProps({
  error: {
    type: Object as () => IError,
    required: true,
  },
});

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

// Methods
InitApp();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <Html :lang="$i18n.locale" :class="colorMode">
    <Body>
      <NoScript>
        <section class="noscript">
          <img src="/images/fatality.svg" />
          <div>
            <h1>Easy, Tiger</h1>
            <p>Turn JavaScript on, don`t be so paraniod.</p>
          </div>
        </section>
      </NoScript>

      <NuxtLayout>
        <section class="page-error">
          <h1>{{ $t("pages.error.title") }}</h1>
          <p>{{ $t("pages.error.body.code") }}: {{ error.statusCode }}</p>
          <p>{{ $t("pages.error.body.message") }}: {{ error.statusMessage }}</p>
          <p>
            <a @click.stop="handleError">{{ $t("pages.error.body.back") }}</a>
          </p>
        </section>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style scoped lang="scss">
.page-error {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: grid.$gap;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin: 1rem 0;
  }
  a {
    cursor: pointer;
  }
}
</style>

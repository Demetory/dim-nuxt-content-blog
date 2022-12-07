<!-- ./components/content/InfoBox.vue -->

<script setup>
// define props in <script>
const props = defineProps(["type"]);
</script>

<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div class="info-box not-prose" :class="[type]">
    <!-- Conditionally render icons based on prop -->

    <details>
      <summary>
        <!-- Unamed Slot to render component content -->
        <slot />
      </summary>
      <div class="details pt-2">
        <!-- Named markdown component to render rich-text -->
        <ContentSlot :use="$slots.details" unwrap="p"></ContentSlot>
      </div>
    </details>
  </div>
</template>

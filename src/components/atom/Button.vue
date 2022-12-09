<script setup lang="ts">
// Props
const props = defineProps<{
  type?: string;
}>();

// Computed Properties
const getType = computed(() => {
  return props.type ? `btn-${props.type}` : null;
});
</script>

<template>
  <button :class="['btn', getType]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  margin: 0.6rem 0;
  padding: 0.6rem 1.2rem;
  border-radius: grid.$border-radius;
  border: grid.$border-solid colors.$link-main;
  transition: color grid.$transition, background-color grid.$transition, opacity grid.$transition;
  opacity: 1;

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

.mode-dark .btn {
  color: colors.$font-black;
  background-color: colors.$link-main;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.75;
  }
}

.mode-light .btn {
  color: colors.$font-black;
  background-color: transparent;

  &:hover,
  &:active,
  &:focus {
    color: colors.$white;
    background-color: colors.$link-main;
  }
}
</style>

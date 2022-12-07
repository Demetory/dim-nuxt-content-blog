<script setup lang="ts">
// Props
defineProps({ modelValue: {} });
const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <input class="input-text" :value="modelValue" @input="updateValue" />
</template>

<style scoped lang="scss">
.input-text {
  margin: 0.6rem 0;
  padding: 0.6rem 1.2rem;
  max-width: 150px;
  color: colors.$font-black;
  background-color: transparent;
  border: grid.$border-solid colors.$link-main;
  border-radius: grid.$border-radius;
  transition: color grid.$transition, background-color grid.$transition;
  outline: 0;

  &:hover,
  &:active,
  &:focus {
    border: grid.$border-solid colors.$link-main-hover;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>

<script setup lang="ts">
// Props
const props = defineProps<{
  type?: string;
  modelValue: string;
}>();

// Data
const emit = defineEmits(["update:modelValue"]);

// Computed Properties
const getType = computed(() => {
  return props.type ? `input-${props.type}` : null;
});

// Methods
const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <input :value="modelValue" @input="updateValue" :class="['input', getType]" />
</template>

<style scoped lang="scss">
.input {
  margin: 0.6rem 0;
  padding: 0.6rem 1.2rem;
  max-width: 150px;
  border: grid.$border-solid colors.$link-main;
  border-radius: grid.$border-radius;
  transition: color grid.$transition, background-color grid.$transition;

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

.mode-dark .input {
  color: colors.$font-black;
  background-color: colors.$input-bg-dark;

  &:hover,
  &:active,
  &:focus {
    background-color: colors.$input-bg-dark-hover;
  }
}

.mode-light .input {
  color: colors.$font-black;
  background-color: transparent;

  &:hover,
  &:active,
  &:focus {
    background-color: colors.$font-white;
  }
}
</style>

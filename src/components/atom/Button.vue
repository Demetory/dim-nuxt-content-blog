<script setup lang="ts">
// Props
const props = defineProps({
  label: String,
  preset: {
    type: String,
    default: "primary",
    validator(preset: string) {
      return ["primary", "secondary"].includes(preset);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(size: string) {
      return ["small", "medium"].includes(size);
    },
  },
  disabled: Boolean,
  loading: Boolean,
});

// Emitter
const emit = defineEmits(["click"]);

const onClick = (e: Event) => {
  emit("click", (e.target as HTMLInputElement).value);
};

// Computed properties
const computedClasses = computed(() => {
  return {
    "atom-button": true,
    [`atom-button--${props.preset}`]: true,
    [`atom-button--${props.size}`]: true,
    "atom-button--loading": props.loading,
  };
});

const computedDisable = computed(() => {
  return props.loading || props.disabled;
});
</script>

<template>
  <button type="button" :class="computedClasses" @click.stop="onClick" :disabled="computedDisable">
    <AtomSpinner v-if="loading" :preset="preset" :size="size" />
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.atom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: grid.$border-radius;
  transition: all grid.$transition;
  cursor: pointer;
  outline: 0;
  user-select: none;

  &--primary:not(:disabled) {
    color: colors.$white;
    background-color: colors.$link-main;

    &:hover {
      background-color: colors.$link-main-hover;
    }
    &:active {
      background-color: colors.$link-main-active;
    }
  }

  &--medium {
    @include font(1.4rem, 1.4rem, 400);
    padding: 12px 14px;
  }

  &--small {
    @include font(1.4rem, 1.4rem, 400);
    padding: 9px 12px;
  }

  &--loading {
    cursor: default;
  }

  &--medium.atom-button--loading {
    padding: 10px 14px;
  }
  &--small.atom-button--loading {
    padding: 8px 12px;
  }

  &:disabled {
    color: colors.$white;
    background-color: colors.$grey;
    cursor: default;
  }

  .atom-icon,
  .atom-spinner {
    margin-right: 8px;
  }
}

.theme-dark {
  .atom-button {
    &--primary:not(:disabled) {
      color: colors.$black;
    }
  }
}
</style>

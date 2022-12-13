<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";

// Types
import type ISelect from "@/types/ISelect";

// Props
const props = defineProps({
  params: {
    type: Object as () => ISelect,
    required: true,
  },
});

// Data
const emit = defineEmits(["update:modelValue"]);
const { t } = useI18n();
const model = props.params.modelValue;

// Computed Properties
const getType = computed(() => {
  return props.params.type ? `select-${props.params.type}` : null;
});

const getOption = computed(() => (option: string) => {
  if (props.params.translate) {
    return t(`common.siteSwitcher.${props.params.translate}.body.` + option.toLowerCase());
  } else if (props.params.id === "lang") {
    return option.toLocaleUpperCase();
  } else {
    return option;
  }
});

// Methods
const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div :class="['select', getType]">
    <label v-if="params.label" :for="`select-${params.id}`" class="select__label">{{ $t(params.label) }}</label>
    <select :id="`select-${params.id}`" v-model="model" @change="updateValue" class="select__itself">
      <option v-for="option in params.options" :key="option" :value="option">
        {{ getOption(option) }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.select {
  display: flex;
  flex: 0 1 auto;
  margin: 2rem 0;
  align-items: center;
  font-size: 1.6rem;

  &__label {
    margin-right: 1rem;
  }

  &__itself {
    padding: 0.6rem 1.2rem;
    border: grid.$border-solid colors.$link-main;
    border-radius: grid.$border-radius;
    transition: background-color grid.$transition;
  }
}
.mode-dark {
  .select {
    &__itself {
      color: colors.$font-black;
      background-color: colors.$input-bg-dark;

      &:hover,
      &:active {
        background-color: colors.$input-bg-dark-hover;
      }
    }
  }
}

.mode-light {
  .select {
    &__itself {
      color: colors.$font-black;
      background-color: transparent;

      &:hover,
      &:active {
        background-color: colors.$font-white;
      }
    }
  }
}
</style>

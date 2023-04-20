<script setup lang="ts">
// Props
const props = defineProps({
  type: {
    type: String,
    default: "text",
    validator(type: string) {
      return ["text", "password"].includes(type);
    },
  },
  label: {
    type: String,
    required: true,
    default: "Forgotten label",
    validator(label: string) {
      return label.length > 3;
    },
  },
  modelValue: {
    type: String,
    required: true,
    default: "",
  },
  maxLength: {
    type: Number,
    default: 15,
  },
  rules: {
    type: Array,
  },
});

// Data
const isError = ref(false);
const errorMsg = ref("");

// Emitter
const emit = defineEmits(["update:modelValue", "isError"]);

const updateValue = (e: Event) => {
  let value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", value);

  if (typeof props.rules === "object") {
    for (let i = 0; i < props.rules.length; i++) {
      let rule = props.rules[i] as Function;
      if (typeof rule !== "function") {
        throw Error("Rule is not a Function");
      }

      let result = rule(value);
      if (result !== true) {
        isError.value = true;
        errorMsg.value = result;
        emit("isError", isError.value);
        return false;
      } else {
        isError.value = false;
        errorMsg.value = "";
        emit("isError", isError.value);
      }
    }
  }
};

// Computed properties
const computedClasses = computed(() => {
  return {
    "atom-input": true,
    [`atom-input--${props.type}`]: true,
    "atom-input--error": isError.value,
  };
});

const computedLabel = computed(() => {
  return isError.value ? `${props.label}: ${errorMsg.value}` : props.label;
});
</script>

<template>
  <div :class="computedClasses">
    <input :type="type" placeholder=" " :value="modelValue" @input="updateValue" :maxlength="maxLength" />
    <label>{{ computedLabel }}</label>
  </div>
</template>

<style scoped lang="scss">
$height: 36px;

.atom-input {
  position: relative;
  display: flex;
  top: 1px;
  flex: 1;
  height: $height;
  max-height: $height;
  box-sizing: border-box;

  input[type="text"],
  input[type="password"] {
    z-index: 2;
    position: relative;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
    height: $height;
    max-height: $height;
    @include font(1.4rem, 1.6rem, 400);
    border: none;
    border-radius: grid.$border-radius;
    color: colors.$black;
    outline: 0;
    background: transparent;
    box-shadow: 0px 0px 0px 1px colors.$link-main;
    transition: box-shadow 0.3s ease, padding 0.3s ease;

    &:focus {
      box-shadow: 0px 0px 0px 2px colors.$link-main;
    }

    &:focus,
    &:not(:placeholder-shown) {
      padding: 14px 16px 0px 16px;
    }
  }

  label {
    z-index: 1;
    position: absolute;
    top: calc(50% - 0.7rem);
    padding: 0 16px;
    line-height: $height;
    @include font(1.4rem, 1.4rem, 400);
    color: colors.$grey;
    transition: all grid.$transition;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 3px;
    @include font(1.2rem, 1.2rem, 400);
  }

  &--error {
    input[type="text"],
    input[type="password"] {
      color: colors.$red;
      box-shadow: 0px 0px 0px 1px colors.$red;

      &:focus {
        box-shadow: 0px 0px 0px 2px colors.$red;
      }
    }

    label {
      color: colors.$red;
    }
  }
}

.theme-dark {
  .atom-input {
    input[type="text"],
    input[type="password"] {
      color: colors.$white;
    }
  }
}
</style>

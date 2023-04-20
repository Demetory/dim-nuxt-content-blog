<script setup lang="ts">
// Props
const props = defineProps({
  preset: {
    type: String,
    default: "primary",
    validator(preset: string) {
      return ["primary", "secondary", "tertiary"].includes(preset);
    },
  },
  mode: {
    type: String,
    default: "simple",
    validator(mode: string) {
      return ["simple", "progressive"].includes(mode);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(size: string) {
      return ["large", "medium", "small"].includes(size);
    },
  },
});

// Computed properties
const classes = computed(() => {
  return {
    "atom-spinner": true,
    [`atom-spinner--${props.preset}`]: true,
    [`atom-spinner--${props.mode}`]: true,
    [`atom-spinner--${props.size}`]: true,
  };
});
</script>

<template>
  <span :class="classes"></span>
</template>

<style scoped lang="scss">
.atom-spinner {
  position: relative;
  display: flex;
  box-sizing: border-box;
  border-radius: 50%;
  user-select: none;

  &--simple {
    border-bottom-color: transparent !important;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  &--simple.atom-spinner--primary {
    border: 2px solid colors.$white;
  }

  &--simple.atom-spinner--secondary {
    border: 2px solid colors.$black;
  }

  &--progressive {
    animation: rotation 1s linear infinite;

    &::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      animation: prixClipFix 2s linear infinite;
    }
  }

  &--primary:not(.atom-spinner--simple)::before {
    border: 2px solid colors.$white;
  }

  &--secondary:not(.atom-spinner--simple)::before {
    border: 2px solid colors.$black;
  }

  &--large {
    width: 64px;
    height: 64px;
    border-width: 10px !important;
  }

  &--medium {
    width: 18px;
    height: 18px;
  }

  &--small {
    width: 16px;
    height: 16px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

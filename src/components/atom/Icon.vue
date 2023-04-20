<script setup lang="ts">
// Props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "medium",
    validator(size: string) {
      return ["small", "medium", "large", "responsive"].includes(size);
    },
  },
  color: {
    type: String,
    default: "primary",
    validator(color: string) {
      return ["primary", "secondary"].includes(color);
    },
  },
});

// Computed properties
const computedClasses = computed(() => {
  return {
    "atom-icon": true,
    [`atom-icon--${props.color}`]: true,
    [`atom-icon--${props.size}`]: true,
  };
});

const computedIcon = computed(() => {
  const icon = iconsUI[props.name as keyof typeof iconsUI];

  if (!icon || typeof icon !== "object") {
    throw Error(`Invalid required prop "icon" (${props.name} given)`);
  }

  return icon;
});
</script>

<template>
  <i :class="computedClasses">
    <component :is="computedIcon" />
  </i>
</template>

<style scoped lang="scss">
.atom-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  &--large {
    width: 32px;
    height: 32px;
  }
  &--medium {
    width: 24px;
    height: 24px;
  }
  &--small {
    width: 18px;
    height: 18px;
  }
  &--responsive {
    width: 100%;
    height: 100%;
  }

  :deep(svg) {
    display: inline-flex;
    width: 100%;
    height: 100%;
    will-change: fill;

    path {
      transition: fill grid.$transition;
    }
  }

  &--primary {
    :deep(svg) {
      path {
        fill: colors.$black;
      }
    }

    &:hover {
      :deep(svg path) {
        fill: colors.$black;
      }
    }
  }

  &--secondary {
    :deep(svg) {
      path {
        fill: colors.$grey;
      }
    }
  }
}

.theme-dark {
  .atom-icon {
    &--primary {
      :deep(svg) {
        path {
          fill: colors.$grey;
        }
      }
    }
  }
}
</style>

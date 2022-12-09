<script setup lang="ts">
// Props
const props = defineProps<{
  tag: string;
  type?: string;
}>();

// Computed Properties
const getType = computed(() => {
  return props.type ? `tag-${props.type}` : null;
});
</script>

<template>
  <span :class="['tag', getType]">
    <NuxtLink :to="`/blog/tags/${tag}`"> {{ tag }} </NuxtLink>
  </span>
</template>

<style scoped lang="scss">
.tag {
  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  a {
    display: inline-block;
    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

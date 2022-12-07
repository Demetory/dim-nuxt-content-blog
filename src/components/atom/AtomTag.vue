<script setup>
// Props
defineProps({
  tag: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="tag">
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

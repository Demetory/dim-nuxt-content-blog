<script setup lang="ts">
// Props
defineProps({
  prev: Object,
  next: Object,
});
</script>

<template>
  <section class="post-surround">
    <span v-if="prev" class="prev">
      &larr; <NuxtLink :to="prev._path">{{ prev.title }}</NuxtLink>
    </span>
    <span v-if="next" class="next">
      <NuxtLink :to="next._path">{{ next.title }}</NuxtLink> &rarr;
    </span>
  </section>
</template>

<style scoped lang="scss">
.post-surround {
  display: flex;
  margin: grid.$gap;
  padding: grid.$gap;

  .next {
    margin-left: auto;
  }
}

.mode-dark .post-surround {
  background-color: colors.$black;
}

.mode-light .post-surround {
  background-color: colors.$bg-border-app;
}
</style>

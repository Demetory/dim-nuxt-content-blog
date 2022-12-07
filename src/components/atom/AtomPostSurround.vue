<script setup>
// Props
defineProps(["prev", "next"]);
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
  background-color: colors.$bg-border-app;

  .next {
    margin-left: auto;
  }
}
</style>

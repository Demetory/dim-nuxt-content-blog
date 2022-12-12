<script setup lang="ts">
// Data
const { data } = reactive(await useAsyncData("tags", () => queryContent("blog").only(["tags"]).find()));
const _data = [...Array.from(new Set(data))];
let tags: string[] = [];

for (const iterator of _data) {
  iterator.tags.forEach((element: string) => {
    tags.push(element);
  });
}

tags = [...new Set(tags)];
</script>

<template>
  <section class="tags">
    <p>
      <b>Select by Tag: </b>
      <AtomTag v-for="(item, index) in tags" :key="`tag-${index}`" :tag="item" />
    </p>
  </section>
</template>

<style scoped lang="scss">
.tags {
  display: flex;
  padding: grid.$gap;
}

.mode-dark .tags {
  background-color: colors.$black;
}

.mode-light .tags {
  background-color: colors.$bg-border-app;
}
</style>

<script setup lang="ts">
// Data
const { data } = await useAsyncData("tags", () => queryContent("blog").only(["tags"]).find());
const tags: any = [...Array.from(new Set(flattenTags(data.value, "tags")))];

// Methods
function flattenTags(tags: any, key: any) {
  let _tags = tags
    .map((tag: any) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flattenTags(tag[key], null);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);

  return _tags;
}
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

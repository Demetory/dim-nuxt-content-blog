<script setup>
// Data
const { data } = await useAsyncData("tags", () => queryContent("blog").only(["tags"]).find());
const tags = [...new Set(flattenTags(data.value, "tags"))];

// Methods
function flattenTags(tags, key) {
  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flattenTags(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);

  return _tags;
}
</script>

<template>
  <header class="tags">
    <p>
      <b>Select by Tag: </b>
      <AtomTag v-for="(item, index) in tags" :key="`tag-${index}`" :tag="item" />
    </p>
  </header>
</template>

<style scoped lang="scss">
.tags {
  display: flex;
  padding: grid.$gap;
  background-color: colors.$bg-border-app;
}
</style>

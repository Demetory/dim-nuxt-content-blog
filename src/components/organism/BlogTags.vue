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
  <AtomTag v-for="(item, index) in tags" :key="`tag-${index}`" :tag="item" />
</template>

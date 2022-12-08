<script setup>
// Data
const { path } = useRoute();
const { data } = await useAsyncData(`content-${removeSlash(path)}`, async () => {
  let article = queryContent()
    .where({ _path: removeSlash(path) })
    .findOne();
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(removeSlash(path));

  return {
    article: await article,
    surround: await surround,
  };
});

// Hooks
useHead({
  title: data.value.article.title,
});

// Computed Properties
const getSurround = computed(() => (param) => {
  const [prev, next] = data.value.surround;
  return param === "prev" ? prev : next;
});

const getArticle = computed(() => {
  return data.value.article;
});

// Methods
function removeSlash(path) {
  return path.replace(/\/+$/, "");
}
</script>

<template>
  <section class="blog-page">
    <TemplateBlogPost :article="getArticle" type="page" />
    <AtomPostSurround :prev="getSurround('prev')" :next="getSurround('next')" />
  </section>
</template>

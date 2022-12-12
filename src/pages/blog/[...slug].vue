<script setup lang="ts">
// Data
const { path } = useRoute();
const { data } = reactive(
  await useAsyncData(`content-${removeSlash(path)}`, async () => {
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
  })
);

// Hooks
useHead({
  title: data!.article.title,
});

// Computed Properties
const getSurround = computed(() => (param: string) => {
  const [prev, next] = data!.surround;
  return param === "prev" ? prev : next;
});

const getArticle = computed(() => {
  return data!.article;
});

// Methods
function removeSlash(path: string) {
  return path.replace(/\/+$/, "");
}
</script>

<template>
  <section class="blog-page">
    <TemplateBlogPost :article="getArticle" type="page" />
    <MoleculePostSurround :prev="getSurround('prev')" :next="getSurround('next')" />
  </section>
</template>

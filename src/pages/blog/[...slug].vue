<script setup>
// Data
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();
  let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});

const [prev, next] = data.value.surround;

// Hooks
useHead({
  title: data.value.article.title,
});
</script>

<template>
  <section class="blog-page">
    <TemplateBlogPost :article="data.article" :surround="data.surround" type="page" />
    <AtomPostSurround :prev="prev" :next="next" />
  </section>
</template>

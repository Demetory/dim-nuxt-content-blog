<script setup lang="ts">
// Data
const route = useRoute();
const path = route.path.replace(/\/+$/, "");

const article = await queryContent("blog").where({ _path: path }).findOne();
const [prev, next] = await queryContent("blog").only(["_path", "title"]).sort({ date: 1 }).findSurround(path);

// Methods
useHead({
  title: article.title,
  meta: [{ name: "description", content: "NuxtContent Starter Template" }],
});
</script>

<template>
  <div class="blog">
    <OrganismBlogTags />
    <TemplateBlogPost :article="article" type="page" />
    <MoleculePostSurround :prev="prev" :next="next" />
  </div>
</template>

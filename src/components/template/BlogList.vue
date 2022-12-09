<script setup>
// Props
defineProps({
  filter: {
    type: (Array, Object, undefined),
    required: true,
  },
});
</script>

<template>
  <article class="blog">
    <header class="blog__tags">
      <p><b>Select by Tag:</b> <OrganismBlogTags /></p>
    </header>

    <main class="blog__body">
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <template v-slot="{ list }">
          <TemplateBlogPost v-for="article in list" :key="article._path" :article="article" type="entry" />
        </template>

        <template #not-found class="blog__empty">
          <p class="empty">No articles found.</p>
        </template>
      </ContentList>
    </main>
  </article>
</template>

<style scoped lang="scss">
.blog {
  &__tags {
    display: flex;
    padding: grid.$gap;
    background-color: colors.$bg-border-app;
  }
  &__body {
    margin-top: grid.$gap;
    overflow: auto;

    .empty {
      display: flex;
      margin-top: auto;
      margin-bottom: auto;
      align-self: center;
      font-weight: 700;
      font-size: 3rem;
    }
  }
}
</style>

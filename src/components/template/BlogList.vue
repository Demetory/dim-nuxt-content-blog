<script setup lang="ts">
// Modules
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

// Props
const props = defineProps<{
  filter?: string | string[];
}>();

// Data
const query: QueryBuilderParams = {
  path: "/blog",
  only: ["title", "description", "tags", "_path", "img"],
  // @ts-expect-error: not exist in type
  where: { tags: { $contains: props.filter } },
};
</script>

<template>
  <div class="blog">
    <ContentList :query="query">
      <template v-slot="{ list }">
        <TemplateBlogPost v-for="article in list" :key="article._path" :article="article" type="entry" />
      </template>

      <template #not-found class="blog__empty">
        <p class="empty">No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>

<style scoped lang="scss">
.blog {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: grid.$gap;

  .empty {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    align-self: center;
    font-weight: 700;
    font-size: 3rem;
  }
}
</style>

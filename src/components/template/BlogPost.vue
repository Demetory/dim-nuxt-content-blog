<script setup lang="ts">
// Modules
import { useImage } from "@vueuse/core";

// Props
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

// Data
const imageOptions = ref({ src: `/${props.article.img}` });
const { isLoading, error } = useImage(imageOptions, { delay: 250 });
</script>

<template>
  <section :class="[`post`, `post-${type}`]">
    <header class="post__header">
      <h1 class="post__title">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      </h1>
    </header>

    <article class="post__body">
      <div class="post__cover">
        <NuxtLink :to="article._path">
          <span v-if="isLoading">Loading...</span>
          <span v-else-if="error">Failed</span>
          <img v-else :alt="`Dim NuxtContent Template | ${article.title}`" :src="imageOptions.src" />
        </NuxtLink>
      </div>
      <div v-if="type === 'page'" class="post__content">
        <ContentRenderer :value="article">
          <ContentRendererMarkdown :value="article" />

          <ContentSlot :value="article" />

          <template #empty>
            <p class="empty">No post found.</p>
          </template>
        </ContentRenderer>
      </div>
      <div v-else>
        {{ article.description }}
      </div>
    </article>

    <footer :class="[`post__footer`, `post__footer-${type}`]">
      <span>Tags:</span>
      <AtomTag v-for="(tag, index) in article.tags" :key="`tag-${index}`" :tag="tag" />
    </footer>
  </section>
</template>

<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  padding: grid.$gap;

  &:not(:last-of-type) {
    margin-bottom: grid.$gap;
  }

  &__header {
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
  }

  &__cover {
    display: flex;
    flex: 1;
    margin-bottom: 2rem;

    img {
      width: 100%;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 0;
  }

  &__content {
    .empty {
      font-weight: 700;
      font-size: 3rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin-bottom: 1.5rem;

      &:not(:first-child) {
        margin-top: 3rem;
      }
    }

    p,
    code {
      line-height: 2.2rem;
      margin-bottom: 1rem;
    }

    blockquote {
      display: inline-flex;
      flex-direction: column;
      margin-bottom: 1rem;
      padding: grid.$gap;

      P:last-of-type {
        margin: 0;
      }
    }

    pre {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      code {
        display: inline-block;
        display: inline-flex;
        flex-direction: column;
        padding: grid.$gap;
        border-radius: grid.$border-radius;
      }
    }

    ul {
      li {
        margin-left: 1.6rem;
        line-height: 2.2rem;
      }
    }
  }

  &__footer {
    &-entry {
      margin-top: 1rem;
    }

    &-page {
      margin-top: grid.$gap;
      padding: grid.$gap;
    }

    span {
      &:first-of-type {
        font-weight: 700;
      }
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }
}

.mode-dark .post {
  &-entry {
    background-color: colors.$black;
  }

  &__content {
    blockquote {
      border-left: solid 4px colors.$grey;
      background-color: colors.$black;
    }

    pre {
      code {
        background-color: colors.$black;
      }
    }
  }

  &__footer {
    &-page {
      background-color: colors.$black;
    }
  }
}

.mode-light .post {
  &-entry {
    background-color: colors.$bg-border-app;
  }

  &__content {
    blockquote {
      border-left: solid 4px colors.$grey;
      background-color: colors.$bg-border-app;
    }

    pre {
      code {
        background-color: colors.$bg-border-app;
      }
    }
  }

  &__footer {
    &-page {
      background-color: colors.$bg-border-app;
    }
  }
}
</style>

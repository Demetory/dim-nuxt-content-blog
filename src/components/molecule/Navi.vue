<script setup lang="ts">
// Data
const data = [
  { path: "/", translate: "common.siteNavi.home" },
  { path: "/examples", translate: "common.siteNavi.example" },
  { path: "/blog", translate: "common.siteNavi.blog" },
];
</script>

<template>
  <nav>
    <NuxtLink v-for="(link, index) in data" :key="`navi-${index}`" :to="link.path">
      {{ $t(`${link.translate}`) }}
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0 1rem;

  a:not(:last-child) {
    margin-right: grid.$gap;
  }
}
</style>

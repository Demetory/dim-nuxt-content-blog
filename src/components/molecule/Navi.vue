<script setup lang="ts">
// Data
const data = [
  { path: "/", translate: "home" },
  { path: "/examples", translate: "examples" },
];
</script>

<template>
  <nav>
    <p>
      <NuxtLink v-for="(link, index) in data" :key="`navi-${index}`" :to="link.path">
        {{ $t(`navi.${link.translate}`) }}
      </NuxtLink>
    </p>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;

  a:not(:last-child) {
    margin-right: grid.$gap;
  }
}
</style>

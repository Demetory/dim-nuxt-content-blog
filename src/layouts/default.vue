<template>
  <MoleculeHeader />
  <main :class="['page', `page-${String($route.name)}`]">
    <NuxtPage />
  </main>
</template>

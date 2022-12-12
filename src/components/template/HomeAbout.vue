<template>
  <AtomSlot>
    <template #icon>
      <IconDocumentation class="icon" />
    </template>
    <template #heading> What`s this about </template>
    <template #content>
      <ul>
        <li>
          Based on <a href="https://nuxt.com/" target="_blank" rel="noopener">Nuxt 3</a> framework with
          <a href="https://content.nuxtjs.org/" target="_blank" rel="noopener">NuxtContent 2</a> module.
        </li>
        <li>Used <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> as project build tool.</li>
        <li>
          Built on
          <a href="https://github.com/Demetory/dim-nuxt3-template" target="_blank" rel="noopener">
            Dim-Nuxt3-Template
          </a>
          with full <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a> support,
          used <a href="https://vuefront.com/develop/" target="_blank" rel="noopener">Atomic Design Pattern</a> and
          <a href="https://vuejs.org/api/sfc-script-setup.html" target="_blank" rel="noopener">Script Setup SFC</a>
        </li>
      </ul>
    </template>
  </AtomSlot>
</template>

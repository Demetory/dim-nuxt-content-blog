<template>
  <AtomSlot>
    <template #icon>
      <IconModule class="icon" />
    </template>
    <template #heading> Installed Modules </template>
    <template #content>
      <ul>
        <li>
          Vue Store:
          <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
        </li>
        <li>
          Vue Composition Utilities:
          <a href="https://vueuse.org/" target="_blank" rel="noopener">VueUse</a>
        </li>
        <li>
          Internationalization framework:
          <a href="https://v8.i18n.nuxtjs.org/" target="_blank" rel="noopener">Nuxt i18n</a>
        </li>
        <li>
          CSS Preprocessor:
          <a href="https://sass-lang.com/" target="_blank" rel="noopener">Sass</a>
        </li>
        <li>
          Code quality:
          <a href="https://eslint.org/" target="_blank" rel="noopener">ESLint</a>
          +
          <a href="https://prettier.io/" target="_blank" rel="noopener">Prettier</a>
        </li>
      </ul>
    </template>
  </AtomSlot>
</template>

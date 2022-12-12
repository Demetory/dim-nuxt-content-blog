<template>
  <AtomSlot>
    <template #icon>
      <IconTooling class="icon" />
    </template>
    <template #heading> Tooling </template>
    <template #content>
      <ul>
        <li>
          Recommended IDE: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a> +
          <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>
        </li>
        <li>
          End-to-End testing framework: <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
        </li>
        <li>Unit testing framework: <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a></li>
      </ul>
    </template>
  </AtomSlot>
</template>

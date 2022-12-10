<template>
  <AtomSlot>
    <template #icon>
      <IconTooling class="icon" />
    </template>
    <template #heading> {{ $t(`pages.home.tooling.title`) }} </template>
    <template #content>
      <ul>
        <i18n-t keypath="pages.home.tooling.body[0]" tag="li" scope="global">
          <template #VSCode>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
          </template>
          <template #Volar>
            <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>
          </template>
          <template #VueDevTools>
            <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>
          </template>
        </i18n-t>

        <i18n-t keypath="pages.home.tooling.body[1]" tag="li" scope="global">
          <template #Cypress>
            <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
          </template>
        </i18n-t>

        <i18n-t keypath="pages.home.tooling.body[2]" tag="li" scope="global">
          <template #Vitest>
            <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>
          </template>
        </i18n-t>
      </ul>
    </template>
  </AtomSlot>
</template>

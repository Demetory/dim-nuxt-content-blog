<template>
  <AtomSlot>
    <template #icon>
      <IconDocumentation class="icon" />
    </template>
    <template #heading> {{ $t(`pages.home.about.title`) }} </template>
    <template #content>
      <ul>
        <i18n-t keypath="pages.home.about.body[0]" tag="li" scope="global">
          <template #Nuxt>
            <a href="https://nuxt.com/" target="_blank" rel="noopener">Nuxt 3</a>
          </template>
          <template #NuxtContent>
            <a href="https://content.nuxtjs.org/" target="_blank" rel="noopener">NuxtContent 2</a>
          </template>
          <template #Vite>
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
          </template>
        </i18n-t>

        <i18n-t keypath="pages.home.about.body[1]" tag="li" scope="global">
          <template #Vite>
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
          </template>
        </i18n-t>

        <i18n-t keypath="pages.home.about.body[2]" tag="li" scope="global">
          <template #DimNuxtTemplate>
            <a href="https://github.com/Demetory/dim-nuxt3-template" target="_blank" rel="noopener"
              >Dim-Nuxt3-Template</a
            >
          </template>
          <template #Atomic>
            <a href="https://vuefront.com/develop/" target="_blank" rel="noopener">Atomic Design Pattern</a>
          </template>
          <template #TypeScript>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a>
          </template>
          <template #SFC>
            <a href="https://vuejs.org/api/sfc-script-setup.html" target="_blank" rel="noopener">Script Setup SFC</a>
          </template>
        </i18n-t>
      </ul>
    </template>
  </AtomSlot>
</template>

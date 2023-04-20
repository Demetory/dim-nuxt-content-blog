<template>
  <header>
    <section class="head-logo">
      <AtomCube />
      <h1 class="heading">Dim Nuxt Content 2 Template</h1>
      <MoleculeNavi />

      <ClientOnly>
        <OrganismSwitchColor />
        <OrganismSwitchLang />
      </ClientOnly>
    </section>

    <MoleculeCopyright />
  </header>
</template>

<style scoped lang="scss">
header {
  top: grid.$gap;
  position: sticky;
  display: flex;
  flex-direction: column;
  flex: 0 1 33%;
  padding: grid.$gap;
  max-height: calc(100vh - (grid.$gap * 2 + 8px));

  .head-logo {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto auto;
  }
  .switcher {
    margin: 48px 0 32px;
  }
  .heading {
    margin: 1rem 0;
    text-align: center;
  }
}
</style>

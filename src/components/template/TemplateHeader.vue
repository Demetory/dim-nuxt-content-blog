<template>
  <header>
    <div class="wrapper">
      <section class="head-logo">
        <AtomCube />
        <h1 class="heading">Dim Nuxt&nbsp;3 + NuxtContent&nbsp;2 Template</h1>
        <AtomNavi />
        <div class="selectors">
          <AtomSwitchLang />
          <AtomSwitchMode />
        </div>
      </section>

      <OrganismCopyright />
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 33%;
  padding: grid.$gap;

  .wrapper {
    position: sticky;
    top: calc(50vh - 295px / 2);
    display: flex;
    flex-direction: column;
  }

  .head-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .heading {
    margin: 1rem 0;
    text-align: center;
  }

  .selectors {
    display: flex;
    flex-direction: row;
  }
}
</style>

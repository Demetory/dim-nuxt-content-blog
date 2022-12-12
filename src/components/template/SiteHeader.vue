<template>
  <header class="header">
    <div class="header__wrap">
      <section class="header__logo">
        <AtomCube />
        <h1 class="header__title">
          NuxtContent<br />
          Blog Starter Template
        </h1>
        <MoleculeNavi />
        <div class="header__switchers">
          <ClientOnly>
            <OrganismSwitchLang />
            <OrganismSwitchColor />
          </ClientOnly>
        </div>
      </section>
      <MoleculeCopyright />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 33%;
  padding: grid.$gap;

  &__wrap {
    position: sticky;
    top: calc(50vh - 295px / 2);
    display: flex;
    flex-direction: column;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  &__title {
    margin: 1rem 0;
    line-height: 120%;
    text-align: center;
  }

  &__switchers {
    display: flex;
    flex-direction: row;

    .select:first-child {
      margin-right: 2rem;
    }
  }
}
</style>

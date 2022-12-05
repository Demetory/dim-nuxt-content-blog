<template>
  <form class="locales">
    <label for="locale-select" class="locales__label">{{ $t("language") }}: </label>
    <select id="locale-select" v-model="$i18n.locale" class="locales__select">
      <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </form>
</template>

<style scoped lang="scss">
.locales {
  display: flex;
  flex: 0 1 auto;
  margin: 2rem 0;
  align-items: center;
  font-size: 1.6rem;

  &__label {
    margin-right: 1rem;
  }

  &__select {
    padding: 0.6rem 1.2rem;
    color: colors.$font-black;
    background-color: transparent;
    border: grid.$border-solid colors.$link-main;
    border-radius: grid.$border-radius;
    transition: border-color grid.$transition;
    outline: 0;

    &:hover,
    &:focus {
      border-color: colors.$font-black;
    }
  }
}
</style>

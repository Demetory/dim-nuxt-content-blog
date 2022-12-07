<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  margin: 0.6rem 0;
  padding: 0.6rem 1.2rem;
  color: colors.$font-black;
  background-color: transparent;
  border: grid.$border-solid colors.$link-main;
  border-radius: grid.$border-radius;
  transition: color grid.$transition, background-color grid.$transition;
  outline: 0;
  cursor: pointer;

  &:hover {
    color: colors.$white;
    background-color: colors.$link-main;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>

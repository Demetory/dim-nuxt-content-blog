<script setup lang="ts">
// Data
const html = ref<HTMLHtmlElement>();
const daytime = ref<string>("");

// Methods
const getDayTime = () => {
  html.value = document.getElementsByTagName("html")[0];

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours >= 10 && minutes >= 0 && hours < 22 && minutes <= 59) {
    daytime.value = "light";
  } else {
    daytime.value = "dark";
  }

  setTheme();
};

const setTheme = () => {
  html.value!.className = " ";
  html.value!.classList.add(`theme-${daytime.value}`);
};

const switchTheme = () => {
  daytime.value = daytime.value === "light" ? "dark" : "light";
  setTheme();
};

// Here we go
void getDayTime();
</script>

<template>
  <section class="switcher switcher-color" @click.stop="switchTheme()">
    <span>{{ $t("common.siteSwitcher.mode.title") }}</span>
    <span class="btn">
      <img alt="Site Theme" :src="useImage(`switch-${daytime}.svg`)" />
    </span>
  </section>
</template>

<style scoped lang="scss">
.switcher-color {
  display: flex;
  align-items: center;
  cursor: pointer;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;

    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script setup lang="ts">
// Props
withDefaults(defineProps<{ url?: string }>(), { url: "/" });

// Data
const edges = [
  { id: 1, name: "front", img: "logo-black.svg" },
  { id: 2, name: "back", img: "logo-black.svg" },
  { id: 3, name: "right", img: "logo-white.svg" },
  { id: 4, name: "left", img: "logo-white.svg" },
  { id: 5, name: "top", img: "logo-black.svg" },
  { id: 6, name: "bottom", img: "logo-white.svg" },
];
</script>

<template>
  <div class="cube">
    <router-link :to="url">
      <figure class="cube__figure">
        <span v-for="(edge, index) in edges" :key="`edge-${index}`" :class="['cube__edge', `cube__edge-${edge.name}`]">
          <img alt="Demetory" :src="useImage(edge.img)" />
        </span>
      </figure>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
$cube-size: 100px;
$cube-bg-color: #000;
$cube-duration: 60s;

$rotate-default: (
  "front": rotateY(0deg),
  "right": rotateY(90deg),
  "back": rotateY(180deg),
  "left": rotateY(-90deg),
  "top": rotateX(90deg),
  "bottom": rotateX(-90deg),
);

$rotate-animaton: (
  0%: rotateY(0deg),
  16.6%: rotateX(90deg),
  33.2%: rotateY(-90deg),
  49.8%: rotateY(-180deg),
  65.4%: rotateX(-90deg),
  82%: rotateY(90deg),
  100%: rotateY(0deg),
);

.cube {
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $cube-size;
  height: $cube-size;

  &__figure {
    position: relative;
    width: $cube-size;
    height: $cube-size;
    transition: transform 1s;
    transform: translateZ(calc($cube-size/2));
    transform-style: preserve-3d;
    transform-origin: center;
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: $cube-duration;
  }

  &__edge {
    position: absolute;
    width: $cube-size;
    height: $cube-size;
    line-height: $cube-size;
    text-align: center;
    background-color: $cube-bg-color;

    @each $name, $rotate in $rotate-default {
      &-#{$name} {
        transform: $rotate translateZ(calc($cube-size/2));
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@keyframes spincube {
  @each $percent, $rotate in $rotate-animaton {
    #{$percent} {
      transform: translateZ(calc($cube-size/2)) $rotate;
    }
  }
}
</style>

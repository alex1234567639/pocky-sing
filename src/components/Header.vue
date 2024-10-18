<template>
  <div class="header-wrapper">
    <img class="logo" src="/src/assets/img/logo.webp" alt="">
    <img class="marker pc" src="/src/assets/img/marker.webp" alt="">
    <img v-if="route.path !== '/'" class="marker mobile" src="/src/assets/img/marker.webp" alt="">
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.header-wrapper {
  @apply w-full flex justify-between items-start absolute top-0 left-0 z-10;
  padding: 0 2.11vw;
  & .logo {
    width: 7.93vw;
    margin: 2.11vw 0 0;
  }
  & .marker {
    width: 7.93vw;
    margin: 2.11vw 0 0;
  }
}

@media (max-width: 768px) {
  .header-wrapper {
    padding: 0 2.66vw 0 5.33vw;
    & .logo {
      width: 21.33vw;
      margin: 5.33vw 0 0;
    }
    & .marker {
      width: 13.33vw;
      margin: 2.11vw 0 0;
    }
  }
}
</style>

<template>
  <div class="popup-title">
    <div :style="`color: ${props.data.color}`">{{ props.data.title }}</div>
    <div :style="`background-color: ${props.data.pockyColor}`" class="pocky">
      <div class="short"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object }
})
</script>

<style lang="scss" scoped>
.popup-title {
  @apply flex flex-col items-center font-bold text-[#6A3906];
  font-size: 7.46vw;
  .pocky {
    @apply rounded-full;
    width: 4.18vw;
    height: 1.06vw;
    margin: 0.8vw 0 0;
    .short {
      @apply rounded-full h-full float-end;
      background-color: #F5B668;
      width: 1.45vw;
      transform: translateX(2px);
    }
  }
}
</style>

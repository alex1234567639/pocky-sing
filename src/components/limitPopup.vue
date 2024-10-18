<template>
  <div v-if="visible" class="limit-popup">
    <img class="cross" src="/src/assets/img/xmark.webp" @click="visible = false" alt="">
    <div class="popup-content">
      <div class="title">今日已達製作上限</div>
      <div class="btn" @click="handleShare">
        <div class="btn-text">分享好友抽好禮</div>
        <img src="/src/assets/img/btn-m.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const visible = ref(true)
const emit = defineEmits(['handleShare'])
const handleShare = () => {
  visible.value = false
  emit('handleShare')
}
</script>

<style lang="scss" scoped>
.limit-popup {
  @apply fixed left-0 top-0 z-50 w-full h-full flex flex-col justify-center items-center;
  background-color: rgba(0, 0, 0, 0.7);
  .cross {
    width: 5.33vw;
    margin: 0 0 5.33vw;
  }
  .popup-content {
    @apply flex flex-col items-center bg-white;
    width: 85.06vw;
    padding: 6.4vw 4.8vw;
    border-radius: 5.33vw;
    .title {
      @apply font-bold text-[#6A3906];
      font-size: 6.4vw;
      margin: 0 0 5.33vw;
    }
    .btn {
      @apply relative;
      width: 74.4vw;
      .btn-text {
        @apply absolute top-[3vw] left-0 text-[#E10414] w-full flex justify-center items-center font-bold tracking-wider;
        font-size: 5.33vw;
      }
      img {
        @apply w-full;
      }
    }
  }
}
</style>

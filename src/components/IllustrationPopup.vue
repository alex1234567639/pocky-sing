<template>
  <div class="illustration-popup" @click="props.closeIllustration">
    <div class="content-container scroll-disable" @click.stop>
      <PopupTitle :data="titleInfo"/>

      <div class="step-flow scroll">
        <div class="step">Step 1.</div>
        <div>進入和朋友的對話視窗</div>
        <div class="step">Step 2.</div>
        <div>點選右上角<span style="color: #E10414">【三】</span>><span style="color: #E10414">【設定】</span>><span style="color: #E10414">【傳送聊天記錄】</span></div>
        <div class="step">Step 3.</div>
        <div>選擇將聊天記錄傳送至<span style="color: #E10414">【備忘錄】</span>中</div>
        <img src="/src/assets/img/illustrate-img.png" @click="isShowBigImg = true" alt="">
        <div class="step">Step 4.</div>
        <div>點開<span style="color: #E10414">【備忘錄】</span>中的聊天記錄 複製想選取的段落</div>
        <div class="step">Step 5.</div>
        <div>把聊天內文貼進歌曲製作框送出</div>
      </div>

      <div class="btn" @click="goGeneratePage">
        <div class="btn-text">下一步</div>
        <img src="/src/assets/img/btn-m.webp" alt="">
      </div>
    </div>

    <div v-if="isShowBigImg" @click="isShowBigImg = false" class="big-img-pop">
      <img class="big-img" src="/src/assets/img/illustrate-img.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import PopupTitle from './PopupTitle.vue'

const props = defineProps({
  closeIllustration: Function
})

// 標題
const titleInfo = ref({
  title: '遊戲說明',
  color: '#6A3906',
  pockyColor: '#723600',
})

const isShowBigImg = ref(false)

const emit = defineEmits(['goGeneratePage'])
const goGeneratePage = () => {
  emit('goGeneratePage')
}
</script>

<style lang="scss" scoped>
.illustration-popup {
  @apply fixed left-0 top-0 z-50 w-full h-full flex justify-center items-center;
  background-color: rgba(0, 0, 0, 0.7);
  .content-container {
    @apply bg-white text-center;
    width: 85vw;
    max-height: 90vh;
    border-radius: 5.33vw;
    padding: 6.4vw 4.26vw;
    .step-flow {
      @apply w-full text-[#6A3906];
      height: 100vw;
      margin: 1.6vw 0 3.8vw;
      font-size: 3.5vw;
      .step {
        @apply font-bold text-[#6A3906] bg-[#FFF4D7] inline-block rounded-full;
        font-size: 3.2vw;
        font-family: 'Century-Gothic', serif;
        margin: 2.08vw 0 0.53vw;
        padding: 1.04vw;
      }
      img {
        @apply w-full mt-[2vw];
      }
    }
    .btn {
      @apply relative;
      width: 74.4vw;
      margin: 0 auto;
      .btn-text {
        @apply absolute top-[3vw] left-0 text-[#E10414] w-full flex justify-center items-center font-bold tracking-wider;
        font-size: 5.33vw;
      }
      img {
        @apply w-full;
      }
    }
  }

  .big-img-pop {
    @apply fixed top-0 left-0 w-full h-full flex items-center overflow-x-scroll;
    background-color: rgba(0, 0, 0, 0.7);
    & .big-img {
      max-width: unset;
      width: 300vw;
    }
  }
}
</style>

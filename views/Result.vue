<template>
  <div class="result-wrapper">
    <!-- 音符 -->
    <img class="note-1" src="/src/assets/img/note1.webp" alt="">
    <img class="note-3" src="/src/assets/img/note3.webp" alt="">
    <img class="note-4" src="/src/assets/img/note4.webp" alt="">

    <div class="video">
      <img class="mask" src="/src/assets/img/video-mask1.webp" alt="">
      <img class="play" src="/src/assets/img/play.webp" alt="">
    </div>

    <div class="text-content">
      有了專屬 Pocky 之歌，<br>
      怎能少了 Pocky 的陪伴? 趕快分享歌曲，<br>
      就能抽走好禮哦！
    </div>
    <div class="btn-box">
      <template v-if="isOwner">
        <div class="btn">
          <div class="btn-text">下載Pocky之歌</div>
          <img src="/src/assets/img/btn-s.webp" alt="">
        </div>
        <div class="btn">
          <div class="btn-text">分享抽好禮</div>
          <img src="/src/assets/img/btn-s.webp" alt="">
        </div>
      </template>
      <template v-else>
        <router-link to="/" class="attend-btn">
          <div class="btn-text">開始製作</div>
          <img src="/src/assets/img/btn-b.webp" alt="">
        </router-link>
      </template>
    </div>

    <div class="triangle-container">
      <div class="triangle first"></div>
      <div class="triangle second"></div>
      <div class="triangle third"></div>
    </div>

    <div class="pocky-day-gift">
      <Firework class="firework-1" :color="'#5FD56E'"/>
      <Firework v-if="showFirework2" class="firework-2" :color="'#FF67BF'"/>
      <img class="title" src="/src/assets/img/pocky-day-gift.webp" alt="">
      <div class="prize-container">
        <img class="gift" src="/src/assets/img/gift.webp" alt="">
        <div class="prize-list">
          <div v-for="item in prizeList" :key="item">
            <div class="prize-item">{{ item }}</div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <img class="share-happiness"
           data-aos="zoom-in"
           src="/src/assets/img/share-happiness.webp"
           alt="">
      <img class="bottom-pocky"
           data-aos="fade-up"
           src="/src/assets/img/bottom-pocky.webp"
           alt="">
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Firework from '/src/components/Firework.vue'
import { useLiffStore } from '/src/stores/liffStore'
const liffStore = useLiffStore()
import { useSongApi } from '/src/stores/songApi.js'
const storeSong = useSongApi()
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const prizeList = ref([
  'iPhone 16', 'Pocky 買1送1券', 'LINE 禮物', 'LINE POINTS', 'Pocky 一卡通'
])

const showFirework2 = ref(false)
const video = ref('')
const isOwner = ref(false)
onMounted(() => {
  AOS.init()
  setTimeout(() => {
    showFirework2.value = true
  }, 800)

  // if (route.params.id) {
  //   const params = {
  //     id: route.params.id
  //   }
  //   storeSong.getMember(params).then((res) => {
  //     if (res.data.length === 0) {
  //       // 無資料則反回首頁
  //       router.push('/')
  //     } else if (!res.data[0].video_url) {
  //       // 無影片
  //       router.push('/')
  //     } else {
  //       video.value = res.data[0].video_url
  //       // 是影片作者
  //       if (liffStore.isLoggedIn && liffStore.userProfile.userId === res.data[0].line_user_id) {
  //         isOwner.value = true
  //       }
  //     }
  //   })
  // } else {
  //   router.push('/')
  // }
  // isOwner.value = true
})
</script>

<style lang="scss" scoped>
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

.result-wrapper {
  @apply relative w-full bg-[#E10414] overflow-hidden;
  padding: 24vw 0 0;
  & .note-1 {
    @apply absolute;
    top: 102.24vw;
    left: 84.8vw;
    width: 12.35vw;
    animation: bounce 3s infinite linear;
  }
  & .note-3 {
    @apply absolute;
    top: 107.46vw;
    left: 5.86vw;
    width: 4.01vw;
    animation: bounce 3.2s infinite linear;
  }
  & .note-4 {
    @apply absolute;
    top: 93.06vw;
    left: 9.06vw;
    width: 6.19vw;
    animation: bounce 3.4s infinite linear;
  }
  .video {
    @apply relative flex justify-center items-center border;
    width: 58.66vw;
    height: 88vw;
    margin: 0 auto;
    border: 2.13vw solid #F7D55A;
    border-radius: 2.13vw;
    .mask {
      @apply absolute left-0 top-0 w-full;
    }
    .play {
      width: 18.86vw;
      margin: 10vw 0 0;
    }
  }
  .text-content {
    @apply text-white text-center leading-[7vw] tracking-wider;
    font-size: 4.26vw;
    margin: 5.33vw 0;
  }
  .btn-box {
    @apply flex justify-between;
    width: 89.06vw;
    margin: 0 auto;
    .btn {
      @apply relative;
      width: 44vw;
      .btn-text {
        @apply absolute top-[3.2vw] left-0 w-full flex justify-center items-center font-bold tracking-wide;
        color: #DE0C15;
        font-size: 4.8vw;
      }
      img {
        @apply w-full;
      }
    }
    .attend-btn {
      @apply relative;
      width: 89.33vw;
      margin: 0 auto;
      .btn-text {
        @apply absolute top-[3vw] left-0 w-full flex justify-center items-center font-bold tracking-wider;
        color: #DE0C15;
        font-size: 5.33vw;
      }
      img {
        @apply w-full;
      }
    }
  }
  .triangle-container {
    @apply flex flex-col justify-center items-center;
    margin: 4vw 0 5.33vw;
    .triangle {
      width: 0;
      height: 0;
      border-left: 3.2vw solid transparent;
      border-right: 3.2vw solid transparent;
      border-top: 2.4vw solid white;
      margin: 0 0 1vw;
      opacity: 0.7; /* 初始透明度 */
      animation: triangle-animation 1.5s infinite;
    }
    /* 第一個三角形 */
    .first {
      opacity: 1;
      animation-delay: 0s;
    }
    /* 第二個三角形 */
    .second {
      opacity: 0.7;
      animation-delay: 0.5s;
    }
    /* 第三個三角形 */
    .third {
      opacity: 0.5;
      animation-delay: 1s;
    }
    @keyframes triangle-animation {
      0% {
        opacity: 0.5;
        border-bottom-color: white;
      }
      50% {
        opacity: 1;
        border-bottom-color: rgba(255, 0, 0, 0.7);
      }
      100% {
        opacity: 0.5;
        border-bottom-color: white;
      }
    }
  }
  .pocky-day-gift {
    @apply relative bg-[#F7D55A];
    padding: 13.33vw 0 0;
    .firework-1 {
      @apply absolute;
      top: 5.33vw;
      left: -5.33vw;
    }
    .firework-2 {
      @apply absolute;
      top: 22.93vw;
      right: 0;
      transform: scale(0.9);
    }
    .prize-container {
      @apply relative;
      width: 89.33vw;
      margin: 0 auto;
      .gift {
        @apply w-full;
      }
      .prize-list {
        @apply absolute;
        top: 33vw;
        left: 18.785vw;
        width: 51.76vw;
        & .prize-item {
          @apply text-white text-center;
          font-size: 5.33vw;
          margin: 3.2vw 0 1vw;
        }
        & .line {
          @apply bg-[#F7D55A] rounded-full;
          height: 1.45vw;
        }
      }
    }
    .title {
      width: 53.33vw;
      margin: 0 auto 8.63vw;
    }
    .share-happiness {
      width: 48vw;
      margin: 7.54vw auto 1.83vw;
    }
    .bottom-pocky {
      @apply w-full;
    }
  }
}
</style>

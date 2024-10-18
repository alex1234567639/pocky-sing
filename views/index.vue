<template>
  <div class="index-wrapper">
    <Kv v-if="isShowKv"/>

    <!-- 音符 -->
    <img class="note-1 pc" src="/src/assets/img/note1.webp" alt="">
    <img class="note-2" src="/src/assets/img/note3.webp" alt="">
    <img class="note-3" src="/src/assets/img/note4.webp" alt="">
    <img class="note-4" src="/src/assets/img/note5.webp" alt="">
    <img class="note-5" src="/src/assets/img/note4.webp" alt="">

    <img class="pocky-1 pc" src="/src/assets/img/pocky1.webp" alt="">
    <img class="pocky-1 mobile" src="/src/assets/img/pocky5.webp" alt="">
    <img class="pocky-2" src="/src/assets/img/pocky2.webp" alt="">
    <img class="pocky-3" src="/src/assets/img/pocky3.webp" alt="">
    <img class="pocky-4" src="/src/assets/img/pocky4.webp" alt="">

    <img class="title" src="/src/assets/img/main_title.webp" alt="">

    <div class="main-section">
      <div>
        <div class="date pc">2024. 11. 01 - 11. 30</div>
        <div class="content pc">
          這裡是由 Pocky 打造的奇幻領域，<br>
          會透過 AI 重新演繹日常生活對話把你和家人/朋友之間的快樂時刻，<br class="pc">
          變成獨一無二的 Pocky 之歌！準備好製作你們的專屬歌曲了嗎？
        </div>
        <div class="content mobile">
          <div class="typing1">歡迎來到由 Pocky 和 AI 聯手打造的空間</div>
          <div class="typing2">在這裡，你們的聊天對話將變身成奇幻的歌曲</div>
          <div class="typing3">一場專屬你和親朋好友的音樂歌聚 即將啟程…</div>
        </div>
      </div>

      <div class="bottom-section">
        <SoundWave />
        <SoundWaveMb />
        <div class="qr-code pc">
          <img src="/src/assets/img/QRcode.webp" alt="">
        </div>
        <img class="marker mobile" src="/src/assets/img/marker.webp" alt="">
        <SoundWave style="transform: rotate(180deg)" />
        <SoundWaveMb style="transform: rotate(180deg)" />
      </div>

      <div class="date mobile">2024. 11. 01 - 11. 30</div>
    </div>

    <div class="scan-notice pc">
      <div class="triangle"></div>
      <div>請掃描 QR CODE 開始製作！</div>
    </div>

    <div class="lets-go mobile">
      <div class="btn" @click="showAgree">
        <div class="btn-text"> 開始製作 Pocky之歌</div>
        <img src="/src/assets/img/btn-b.webp" alt="">
      </div>
      <div class="event-rule">活動辦法</div>
    </div>

    <transition name="fade">
      <AgreePopup v-if="isShowAgree" :closeAgree="closeAgree" @showIllustration="showIllustration"/>
    </transition>
    <transition name="fade">
      <IllustrationPopup v-if="isShowIllustration" :closeIllustration="closeIllustration" @goGeneratePage="goGeneratePage"/>
    </transition>
  </div>
</template>

<script setup>
import SoundWave from '/src/components/SoundWave.vue'
import SoundWaveMb from '/src/components/SoundWaveMb.vue'
import Kv from '/src/components/Kv.vue'
import AgreePopup from '/src/components/AgreePopup.vue'
import IllustrationPopup from '/src/components/IllustrationPopup.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import liff from '@line/liff'
import { useLiffStore } from '/src/stores/liffStore'
const liffStore = useLiffStore()
import { useSongApi } from '/src/stores/songApi.js'
const storeSong = useSongApi()

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

// kv
const isShowKv = ref(false)

const isShowAgree = ref(false)
const isShowIllustration = ref(false)

const showAgree = async () => {
  try {
    // 使用 liff.getFriendship() 檢查是否已加入官方帳號
    const friendship = await liff.getFriendship()

    if (!friendship.friendFlag) {
      // 未加入好友，可以顯示提示或跳轉到加入好友頁面
      alert('請先加入我們的官方帳號')
      // 或者可以跳轉到官方帳號的加好友頁面
      window.location.href = import.meta.env.VITE_APP_LINE_ACCOUNT
    } else {
      // 已加入好友
      isShowAgree.value = true
      // 保存狀態到 URL 中
      await router.push({ query: { step: 'agree' } })
    }
  } catch (error) {
    console.error('檢查好友狀態時發生錯誤', error);
    if (error.message.includes('access token revoked')) {
      liff.logout()
    }
  }
}

const closeAgree = () => {
  isShowAgree.value = false
  // 返回上一個歷史狀態
  router.back()
}

const showIllustration = () => {
  isShowAgree.value = false
  isShowIllustration.value = true
  // 保存狀態到 URL 中
  router.push({ query: {} })
}

const closeIllustration = () => {
  isShowIllustration.value = false
  // 返回上一個歷史狀態
  router.back()
}

// 監聽路由變化，根據 step 參數顯示對應的彈窗
watch(route, (newRoute) => {
  const step = newRoute.query.step
  if (step === 'agree') {
    isShowAgree.value = true
    isShowIllustration.value = false
  }
})

const goGeneratePage = () => {
  isShowIllustration.value = false
  router.push('/generate')
}

onMounted(async() => {
  if (import.meta.env.VITE_APP_ENV === 'local') {
    isShowKv.value = true
    setTimeout(() => {
      isShowKv.value = false

      const step = route.query.step
      if (step === 'agree') {
        isShowAgree.value = true
        isShowIllustration.value = false
      }
    }, 3500)
  } else {
    if (window.innerWidth < 768) {
      isShowKv.value = true
      // 確保 LIFF 已初始化
      if (!liffStore.isLiffInitialized) {
        await liffStore.initLiff()
      }

      // 檢查是否已登入
      if (!liffStore.isLoggedIn) {
        const redirectUri = import.meta.env.VITE_APP_BASE_URL // 當前頁面 URL
        liff.login({redirectUri}) // 未登入則跳轉到 LINE 登入頁面
      } else {
        // 若已登入則檢查使用者狀態
        const params = {
          line_user_id: liffStore.userProfile.userId
        }
        storeSong.getMember(params).then((res) => {
          if (res.data[0].status === 'processing') {
            // 歌曲製作中
            router.push('/waiting')
          } else if (res.data[0].status === 'completed' && !res.data[0].shared && !res.data[0].downloaded) {
            // 歌曲製作完成(沒有點擊 '分享' '下載' 按鈕)
            router.push(`/result?id=${res.data[0].id}`)
          }
        })
      }

      setTimeout(() => {
        isShowKv.value = false

        const step = route.query.step
        if (step === 'agree') {
          isShowAgree.value = true
          isShowIllustration.value = false
        }
      }, 3500)
    }
  }
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
@keyframes small-bounce {
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
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
@keyframes typing {
  from {
    width: 0;
    border-right: 3px solid;
    padding: 0 1vw 0 0;
  }
  to {
    width: 100%; /* 完成打字效果 */
    border-right: none; /* 動畫結束後隱藏光標 */
    padding: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent
  }
}

.index-wrapper {
  @apply relative w-full bg-[#E10414];
  height: 64.94vw;
  padding: 5.55vw 0 0;
  & .note-1 {
    @apply absolute;
    top: 31.08vw;
    left: 17.92vw;
    width: 6.74vw;
    animation: bounce 3s infinite linear;
  }
  & .note-2 {
    @apply absolute;
    top: 6.67vw;
    left: 27.97vw;
    width: 2.19vw;
    animation: bounce 3.2s infinite linear;
  }
  & .note-3 {
    @apply absolute;
    top: 4.1vw;
    left: 65.21vw;
    width: 4.87vw;
    animation: bounce 3s infinite linear;
  }
  & .note-4 {
    @apply absolute;
    top: 10.91vw;
    left: 69.64vw;
    width: 3.65vw;
    animation: bounce 2.8s infinite linear;
  }
  & .note-5 {
    @apply absolute;
    top: 31.08vw;
    left: 90.6vw;
    width: 4.87vw;
    animation: bounce 3.2s infinite linear;
  }
  & .pocky-1 {
    @apply absolute;
    top: 24vw;
    left: 3.83vw;
    width: 10.58vw;
    animation: bounce 3.2s infinite linear;
  }
  & .pocky-2 {
    @apply absolute;
    top: 8.26vw;
    left: 10.51vw;
    width: 11.04vw;
    animation: bounce 3.4s infinite linear;
  }
  & .pocky-3 {
    @apply absolute;
    top: 4.89vw;
    left: 75.06vw;
    width: 7.59vw;
    animation: bounce 3s infinite linear;
  }
  & .pocky-4 {
    @apply absolute;
    top: 18.58vw;
    left: 81.41vw;
    width: 8.51vw;
    animation: bounce 2.6s infinite linear;
  }


  & .title {
    @apply block;
    width: 45vw;
    margin: 0 auto 1.35vw;
  }
  & .main-section {
    @apply flex flex-col-reverse md:flex-col;
  }
  & .date {
    @apply text-white font-bold text-center;
    font-family: 'Century-Gothic',serif;
    font-size: 1.85vw;
  }
  & .content {
    @apply text-white text-center tracking-widest leading-[2.2vw];
    font-size: 1.19vw;
    margin: 1vw 0;
  }
  & .bottom-section {
    @apply flex justify-between items-center;
    & .qr-code {
      @apply flex justify-center items-center bg-white;
      border: 0.4vw solid #F7D55A;
      width: 13.22vw;
      height: 13.22vw;
      border-radius: 1.32vw;
      & img {
        width: 9.92vw;
      }
    }
  }
  & .scan-notice {
    @apply flex flex-col items-center font-bold tracking-wider;
    font-size: 1.58vw;
    color: #F7D55A;
    & .triangle {
      width: 0;
      height: 0;
      border-left: 0.53vw solid transparent;
      border-right: 0.53vw solid transparent;
      border-bottom: 1vw solid #F7D55A;
      margin: 0 0 0.5vw;
      animation: small-bounce 2s infinite linear;
    }
  }
}

@media (max-width: 768px) {
  .index-wrapper {
    height: auto;
    min-height: 100svh;
    padding: 27.2vw 0 0;
    & .note-2 {
      @apply absolute;
      top: 20.26vw;
      left: 63.2vw;
      width: 2.4vw;
    }
    & .note-3 {
      @apply absolute;
      top: 21.86vw;
      left: 5.6vw;
      width: 6.19vw;
    }
    & .note-4 {
      @apply absolute;
      top: 28vw;
      left: 88.26vw;
      width: 6.7vw;
    }
    & .note-5 {
      @apply absolute;
      top: 18.13vw;
      left: 83.2vw;
      width: 6.19vw;
    }
    & .pocky-1 {
      @apply absolute;
      top: 30.66vw;
      left: 9.6vw;
      width: 7.96vw;
      animation: bounce 3.2s infinite linear;
    }
    & .pocky-2 {
      @apply absolute;
      top: 19.2vw;
      left: 19.73vw;
      width: 11.58vw;
      animation: bounce 3.4s infinite linear;
    }
    & .pocky-3 {
      @apply absolute;
      top: 18.93vw;
      left: 70.13vw;
      width: 7.97vw;
      animation: bounce 3s infinite linear;
    }
    & .pocky-4 {
      @apply absolute;
      top: 30.66vw;
      left: 79.2vw;
      width: 8.93vw;
      animation: bounce 2.6s infinite linear;
    }

    & .title {
      width: 80vw;
      margin: 0 auto 4.49vw;
    }
    & .date {
      font-size: 5.33vw;
      margin: 0 0 5.33vw;
    }
    & .content {
      @apply tracking-wider leading-[5.8vw];
      font-size: 3.73vw;
      width: 88.26vw;
      margin: 3vw auto 0;
      & .typing1 {
        @apply inline-block;
        width: 0;
        animation: typing 2.5s steps(22) forwards, blink .5s step-end infinite alternate;
        animation-delay: 2.5s;
        overflow: hidden;
        white-space: nowrap;
      }
      & .typing2 {
        @apply inline-block;
        width: 0;
        animation: typing 2.5s steps(22) forwards, blink .5s step-end infinite alternate;
        animation-delay: 5s;
        overflow: hidden;
        white-space: nowrap;
      }
      & .typing3 {
        @apply inline-block;
        width: 0;
        animation: typing 2.5s steps(22) forwards, blink .5s step-end infinite alternate;
        animation-delay: 7.5s;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    & .bottom-section {
      & .marker {
        width: 21.33vw;
      }
    }
    .lets-go {
      @apply flex-col items-center;
      display: flex !important;
      padding: 10vw 0;
      .btn {
        @apply relative;
        width: 89.33vw;
        .btn-text {
          @apply absolute top-[3vw] left-0 w-full flex justify-center items-center font-bold tracking-wider;
          color: #DE0C15;
          font-size: 5.33vw;
          font-weight: 900;
        }
        img {
          @apply w-full;
        }
      }
      .event-rule {
        @apply underline decoration-[#F5B668] tracking-wider;
        color: #F7D55A;
        font-size: 3.73vw;
        margin: 3.2vw 0 0;
      }
    }
  }
}
</style>

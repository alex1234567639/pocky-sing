<template>
  <div class="waiting-wrapper">
    <img class="generating-note-3" src="/src/assets/img/note3.webp" alt="">
    <img class="generating-note-4" src="/src/assets/img/note4.webp" alt="">
    <img class="generating-note-5" src="/src/assets/img/note5.webp" alt="">
    <GeneratingWave/>
    <div class="generating-text">
      AI創作中，大約需要5-10分鐘，請稍候<br>
      把 Pocky 之歌分享給好友抽 iPhone 16<br>
      等待期間，先吃個 Pocky 休息一下再回來吧！
    </div>
    <div class="btn" @click="closeLiff">
      <div class="btn-text">Pocky之歌完成再通知我</div>
      <img src="/src/assets/img/btn-b.webp" alt="">
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import GeneratingWave from '/src/components/GeneratingWave.vue'
import liff from '@line/liff'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useLiffStore } from '/src/stores/liffStore'
const liffStore = useLiffStore()
import { useSongApi } from '/src/stores/songApi.js'
const storeSong = useSongApi()

const closeLiff = () => {
  // 檢查是否在 LINE LIFF 的瀏覽器中
  if (liff.isInClient()) {
    // 在 LINE 客戶端中，關閉 LIFF 瀏覽器
    liff.closeWindow()
  } else {
    // 不在 LINE 客戶端，重定向到官方帳號聊天室
    window.location.href = import.meta.env.VITE_APP_LINE_ACCOUNT
  }
}

const checkStatus = () => {
  const params = {
    line_user_id: liffStore.userProfile.userId
  }
  storeSong.getMember(params).then((res) => {
    if (res.data.length === 0) {
      router.push('/')
    } else if (res.data[0].status === 'failed') {
      alert('製作歌曲失敗，請重新再試')
      router.push('/')
    } else if (res.data[0].status === 'completed') {
      router.push(`/result?id=${res.data[0].id}`)
    } else {
      setTimeout(checkStatus, 60000) // 一分鐘後重新呼叫
    }
  })
}

onMounted(() => {
  checkStatus()
})
</script>

<style lang="scss" scoped>
@keyframes bounce {
  0% {
    transform: translateY(0) scale(1, 1) rotate(-5deg);
  }
  50% {
    transform: translateY(-6px) scale(1.2, 1.2) rotate(5deg);
  }
  100% {
    transform: translateY(0) scale(1, 1) rotate(-5deg);
  }
}
@keyframes bounce2 {
  0% {
    transform: rotate(20deg);
  }
  50% {
    transform: translateY(-6px) rotate(0deg);
  }
  100% {
    transform: rotate(20deg);
  }
}

.waiting-wrapper {
  @apply relative w-full bg-[#E10414];
  min-height: 100svh;
  padding: 24vw 0 10vw;
  .generating-note-3 {
    @apply absolute;
    top: 37.6vw;
    left: 13.86vw;
    width: 4.01vw;
    animation: bounce 0.6s infinite linear;
  }
  .generating-note-4 {
    @apply absolute;
    top: 38.39vw;
    left: 81.06vw;
    width: 6.19vw;
    animation: bounce2 0.5s infinite linear;
  }
  .generating-note-5 {
    @apply absolute;
    top: 24vw;
    left: 29.06vw;
    width: 6.7vw;
    animation: bounce 0.5s infinite linear;
  }
  .generating-text {
    @apply text-white font-bold text-center leading-[7vw] tracking-wider;
    font-size: 3.73vw;
    margin: 10.84vw 0 14.66vw;
  }
  .btn {
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
</style>

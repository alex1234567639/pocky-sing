<template>
  <div class="generate-wrapper">
    <!-- 填入歌詞 -->
    <img class="note-3" src="/src/assets/img/note3.webp" alt="">
    <img class="note-4" src="/src/assets/img/note4.webp" alt="">
    <img class="note-5" src="/src/assets/img/note5.webp" alt="">

    <div class="hello">嗨~{{ liffStore.userProfile?.displayName }}</div>
    <div class="title">
      按照前面教學的步驟，<br>
      貼上你和家人/朋友的日常對話吧！
    </div>

    <div class="lyrics-container">
      <div class="limit">文字限制: 500字</div>
      <textarea class="lyrics-input" v-model="lyrics" maxlength="500"></textarea>
    </div>

    <div class="situation-select-wrapper">
      <img class="arrow-red" src="/src/assets/img/arrow-yellow.png" alt="">
      <select v-model="situation" class="situation-select">
        <option disabled value="">聊天對話懶人包</option>
        <option v-for="(item, index) in situationList" :value="index" :key="item">{{ item.title }}</option>
      </select>
    </div>

    <div class="btn" @click="handleSendText">
      <div class="btn-text">送出</div>
      <img src="/src/assets/img/btn-b.webp" alt="">
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useLiffStore } from '/src/stores/liffStore'
const liffStore = useLiffStore()
import { useSongApi } from '/src/stores/songApi.js'
const storeSong = useSongApi()
import { useRouter } from 'vue-router'
const router = useRouter()


const situation = ref('')
const lyrics = ref('')
const handleSendText = () => {
  storeSong.createSong(liffStore.userProfile.userId, lyrics.value).then((res) => {
    router.push('/waiting')
  })
}

const situationList = ref([])
const getPromptTemplate = () => {
  storeSong.getPromptTemplate().then((res) => {
    situationList.value = res.data
  })
}
watch(situation,(newValue, oldValue) => {
  lyrics.value = situationList.value[newValue].prompt
})

onMounted(() => {
  getPromptTemplate()
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

.generate-wrapper {
  @apply relative w-full bg-[#E10414];
  min-height: 100svh;
  padding: 24vw 0 10vw;
  .note-3 {
    @apply absolute;
    top: 20.53vw;
    left: 75.2vw;
    width: 4.01vw;
    animation: bounce2 0.6s infinite linear;
  }
  .note-4 {
    @apply absolute;
    top: 32vw;
    left: 82.66vw;
    width: 6.19vw;
    animation: bounce 0.6s infinite linear;
  }
  .note-5 {
    @apply absolute;
    top: 27.2vw;
    left: 13.33vw;
    width: 6.74vw;
    animation: bounce 0.5s infinite linear;
  }
  .hello {
    @apply text-[#F7D55A] text-center font-bold tracking-wider;
    font-size: 6.4vw;
    width: 48vw;
    margin: 0 auto;
  }
  .title {
    @apply text-white text-center font-bold tracking-wider leading-[7vw];
    font-size: 3.73vw;
    margin: 3vw 0 1.5vw;
  }
  .lyrics-container {
    @apply border bg-[#FFF4D7];
    width: 89.33vw;
    height: 66.6vw;
    margin: 4.26vw auto;
    padding: 3.2vw;
    border-radius: 5.33vw;
    border: 0.53vw solid #6A3906;
    .limit {
      @apply text-[#6A390673] font-bold tracking-wider;
      font-size: 3.2vw;
      margin: 0 0 2.13vw;
    }
    .lyrics-input {
      @apply w-full h-full text-[#6A3906] bg-[#FFF4D7] block;
      height: 52.4vw;
      font-size: 3.2vw;
      resize: none;
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background-color: #F5B668;
      }
    }
  }
  .situation-select-wrapper {
    @apply relative;
    width: 89.33vw;
    margin: 0 auto 8.53vw;
    img.arrow-red {
      @apply absolute;
      top: 2.93vw;
      right: 2.13vw;
      width: 7.46vw;
      pointer-events: none;
    }
    .situation-select {
      @apply w-full text-[#6A3906] bg-[#FFF4D7] block font-bold;
      height: 13.33vw;
      padding: 0 4.26vw;
      border-radius: 5.33vw;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      font-size: 3.2vw;
      border: 0.53vw solid #6A3906;
    }
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

<template>
  <div class="firework-wrapper">
    <div class="center"></div>
    <!-- 內圈 -->
    <div v-for="i in 9"
         class="inside-line"
         :key="i"
         :style="{ '--i': i, 'background-color': props.color }">
      <div class="short"></div>
    </div>
    <!-- 內圈白點 -->
    <div v-for="i in 9" class="inside-ball" :key="i" :style="{ '--i': i }">
      <div v-for="j in 12" class="white-dot" :key="j"></div>
    </div>
    <!-- 外圈 -->
    <div v-for="i in 9"
         class="outside-line"
         :key="i"
         :style="{ '--i': i, 'background-color': props.color }">
    </div>
    <!-- 外圈白球 -->
    <div v-for="i in 9" class="outside-ball" :key="i" :style="{ '--i': i }"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: { type: String }
})
</script>

<style lang="scss" scoped>
@keyframes explosion {
  0% {
    opacity: 0;
    transform: rotate(calc(360deg / 9 * var(--i))) translate(0, -10vw) translateY(2vw);
  }
  40%, 70%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes explosion2 {
  0% {
    opacity: 0;
    transform: rotate(calc(20deg + 360deg / 9 * var(--i))) translate(0, -13vw) translateY(1.5vw);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sparkle {
  0% {
    opacity: 0;
  }
  50%, 80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sparkle2 {
  0% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  90% {
    opacity: 0.5;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sparkle3 {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  85% {
    opacity: 0.5;
  }
  90% {
    opacity: 1;
  }
  95% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.firework-wrapper {
  @apply relative flex justify-center items-center;
  width: 26vw;
  height: 26vw;
  .center {
    @apply bg-[#FFB258] rounded-full;
    width: 0.7vw;
    height: 0.7vw;
    animation: sparkle 2.5s ease-in-out infinite;
  }
  .inside-line {
    @apply absolute flex flex-col-reverse bg-[#FF67BF] rounded-full;
    width: 0.4vw;
    height: 5.6vw;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(calc(360deg / 9 * var(--i))) translate(0, -10vw); /* 圍繞中心點旋轉 */
    animation: explosion 2.5s ease-in-out infinite;
    opacity: 0;
    .short {
      @apply w-full bg-[#FFB258] rounded-full;
      height: 25%;
    }
  }
  .inside-ball {
    @apply absolute flex flex-col-reverse rounded-full;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(calc(20deg + 360deg / 9 * var(--i))) translate(0, -7vw); /* 圍繞中心點旋轉 */
    animation: sparkle 2.5s ease-in-out infinite;
    .white-dot {
      @apply bg-white rounded-full;
      width: 0.26vw;
      height: 0.26vw;
      margin: 0.1vw 0;
    }
  }
  .outside-line {
    @apply absolute flex flex-col-reverse bg-[#FF67BF] rounded-full;
    width: 0.4vw;
    height: 4.67vw;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(calc(20deg + 360deg / 9 * var(--i))) translate(0, -13vw); /* 圍繞中心點旋轉 */
    animation: explosion2 2.5s ease-in-out infinite;
    animation-delay: 0.5s;
    opacity: 0;
  }
  .outside-ball {
    @apply absolute flex flex-col-reverse bg-white rounded-full;
    width: 1.08vw;
    height: 1.08vw;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(calc(-1.5deg + 360deg / 9 * var(--i))) translate(0, -12.5vw); /* 圍繞中心點旋轉 */
    animation-delay: 0.5s;
    &:nth-child(2n) {
      animation: sparkle2 2.5s ease-in-out infinite;
    }
    &:nth-child(2n+1) {
      animation: sparkle3 2.5s ease-in-out infinite;
    }
  }
}
</style>

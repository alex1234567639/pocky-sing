<template>
  <div class="sound-wave pc">
    <div class="sound-item" v-for="i in 17" :key="i">
      <div class="short"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes sound {
  0% {
    opacity: .5;
    height: 30%;
  }
  100% {
    opacity: 1;
    height: 60%;
  }
}
@keyframes soundLong {
  0% {
    opacity: .5;
    height: 40%;
  }
  100% {
    opacity: 1;
    height: 100%;
  }
}

.sound-wave {
  @apply flex justify-around items-center;
  width: 40.72vw;
  height: 17.52vw;
  & .sound-item {
    @apply bg-contain bg-center rounded-full;
    width: 0.97vw;
    margin: 0 0.69vw;
    //height: 17.52vw;
    background: #723600;
    animation: sound 0ms -800ms linear infinite alternate;
    transition: height 0.8s;
    & .short {
      @apply rounded-full;
      height: 3vw;
      background-color: #F5B668;
    }
  }
  .sound-item:nth-child(4n+1) {
    background: #55A852;
  }
  .sound-item:nth-child(4n+2) {
    background: #FF97D7;
  }
  .sound-item:nth-child(4n+3) {
    background: #723600;
  }
  .sound-item:nth-child(4n+4) {
    background: #F7D55A;
  }
  .sound-item:nth-child(3n) {
    transform: rotate(180deg);
  }
  .sound-item:nth-child(1)  { animation-duration: 874ms; }
  .sound-item:nth-child(2)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 633ms; }
  .sound-item:nth-child(3)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 707ms; }
  .sound-item:nth-child(4)  { animation-duration: 858ms; }
  .sound-item:nth-child(5)  { animation-duration: 600ms; }
  .sound-item:nth-child(6)  { animation-duration: 741ms;  }
  .sound-item:nth-child(7)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 819ms; }
  .sound-item:nth-child(8)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 687ms; }
  .sound-item:nth-child(9)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 742ms; }
  .sound-item:nth-child(10)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 874ms; }
  .sound-item:nth-child(11)  { animation-duration: 633ms; }
  .sound-item:nth-child(12)  { animation-duration: 707ms; }
  .sound-item:nth-child(13)  { animation-duration: 858ms; }
  .sound-item:nth-child(14)  { animation-duration: 600ms; }
  .sound-item:nth-child(15)  { animation-duration: 741ms; }
  .sound-item:nth-child(16)  { animation-duration: 619ms; }
  .sound-item:nth-child(17)  { animation-duration: 887ms; }
}
</style>
<script setup>
</script>

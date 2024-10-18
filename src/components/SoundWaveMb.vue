<template>
  <div class="sound-wave-mb">
    <div class="sound-item" v-for="i in 14" :key="i">
      <div class="short"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes soundShort {
  0% {
    opacity: .5;
    height: 15%;
  }
  100% {
    opacity: 1;
    height: 40%;
  }
}
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
    height: 120%;
  }
}

.sound-wave-mb {
  @apply hidden justify-around items-center;
  width: 36.66vw;
  height: 18.88vw;
  & .sound-item {
    @apply bg-contain bg-center rounded-full;
    width: 1.04vw;
    margin: 0 0.79vw;
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
  .sound-item:nth-child(1)  { animation: soundShort 0ms -800ms linear infinite alternate; animation-duration: 874ms; }
  .sound-item:nth-child(2)  { animation-duration: 633ms; }
  .sound-item:nth-child(3)  { animation-duration: 707ms; }
  .sound-item:nth-child(4)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 858ms; }
  .sound-item:nth-child(5)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 600ms; }
  .sound-item:nth-child(6)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 741ms;  }
  .sound-item:nth-child(7)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 819ms; }
  .sound-item:nth-child(8)  { animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 687ms; }
  .sound-item:nth-child(9)  { animation-duration: 742ms; }
  .sound-item:nth-child(10)  {  animation-duration: 874ms; }
  .sound-item:nth-child(11)  { animation-duration: 633ms; }
  .sound-item:nth-child(12)  { animation-duration: 707ms; }
  .sound-item:nth-child(13)  { animation: soundShort 0ms -800ms linear infinite alternate; animation-duration: 858ms; }
  .sound-item:nth-child(14)  { animation: soundShort 0ms -800ms linear infinite alternate; animation-duration: 600ms; }
}

@media (max-width: 768px) {
  .sound-wave-mb {
    @apply flex;
  }
}
</style>
<script setup>
</script>

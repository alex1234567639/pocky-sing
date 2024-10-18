<template>
  <div class="generating-wave">
    <div class="sound-item" v-for="i in 12" :key="i">
      <div class="short"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes sound {
  0% {
    opacity: .7;
    height: 15%;
  }
  100% {
    opacity: 1;
    height: 40%;
  }
}
@keyframes soundMid {
  0% {
    opacity: .7;
    height: 40%;
  }
  100% {
    opacity: 1;
    height: 70%;
  }
}
@keyframes soundLong {
  0% {
    opacity: .7;
    height: 40%;
  }
  100% {
    opacity: 1;
    height: 100%;
  }
}

.generating-wave {
  @apply flex justify-around items-center;
  width: 85.06vw;
  height: 67.56vw;
  margin: 13.33vw auto 0;
  & .sound-item {
    @apply relative bg-contain bg-center rounded-full;
    width: 3.54vw;
    margin: 0 1.83vw;
    //height: 17.52vw;
    background: #723600;
    animation: sound 0ms -800ms linear infinite alternate;
    transition: height 0.8s;
    & .short {
      @apply rounded-full;
      height: 9.29vw;
      background-color: #FFB258;
    }
    &:nth-child(1), &:nth-child(2), &:nth-child(11), &:nth-child(12) {
      & .short {
        height: 5vw;
      }
    }
  }
  .sound-item:nth-child(1)  { background: #F7D55A; transform: rotate(180deg); animation-duration: 874ms; }
  .sound-item:nth-child(2)  { background: #55A852; animation-duration: 633ms; }
  .sound-item:nth-child(3)  { background: #FF97D7; transform: rotate(180deg); animation: soundMid 0ms -800ms linear infinite alternate; animation-duration: 707ms; }
  .sound-item:nth-child(4)  { background: #723600; transform: rotate(180deg); animation: soundMid 0ms -800ms linear infinite alternate; animation-duration: 858ms; }
  .sound-item:nth-child(5)  { background: #F7D55A; animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 750ms; }
  .sound-item:nth-child(6)  { background: #55A852; transform: rotate(180deg); animation: soundMid 0ms -800ms linear infinite alternate; animation-duration: 700ms;  }
  .sound-item:nth-child(7)  { background: #FF97D7; animation: soundLong 0ms -800ms linear infinite alternate; animation-duration: 819ms; }
  .sound-item:nth-child(8)  { background: #723600; transform: rotate(180deg); animation: soundMid 0ms -800ms linear infinite alternate; animation-duration: 687ms; }
  .sound-item:nth-child(9)  { background: #F7D55A; transform: rotate(180deg); animation: soundMid 0ms -800ms linear infinite alternate; animation-duration: 742ms; }
  .sound-item:nth-child(10)  { background: #55A852; animation: soundMid 0ms -800ms linear infinite alternate; animation-duration: 874ms; }
  .sound-item:nth-child(11)  { background: #FF97D7; transform: rotate(180deg); animation-duration: 633ms; }
  .sound-item:nth-child(12)  { background: #723600; animation-duration: 707ms; }
}
</style>
<script setup>
</script>

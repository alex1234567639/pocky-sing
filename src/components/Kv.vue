<template>
  <div class="kv-wrapper">
    <div class="top-section"></div>
    <div class="bot-section">
      <div class="pocky-list">
        <div class="pocky-item" v-for="i in 9" :key="i">
          <div class="short"></div>
        </div>
      </div>

      <div class="pocky-box">
        <img src="/src/assets/img/pocky-box.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes boxShow {
  from {
    transform: translateY(15vw) scale(0.9);
  }
  to {
    transform: translateY(0) scale(1);
  }
}
@keyframes pockyShow {
  from {
    opacity: 0.6;
    transform: translateY(15vw);
  }
  80% {
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(2vw);
  }
}
@keyframes goOpacity0 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(1.1);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(.9) rotate(-8deg);
    -ms-transform: scale(.9) rotate(-8deg);
    transform: scale(.9) rotate(-8deg);
  }

  30%, 50%, 70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    -ms-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%, 60% {
    -webkit-transform: scale(1.3) rotate(-8deg);
    -ms-transform: scale(1.3) rotate(-8deg);
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    -webkit-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

.kv-wrapper {
  @apply flex flex-col fixed top-0 left-0 w-full h-screen z-10;
  padding: 15vw 0 0;
  .top-section {
    @apply w-full bg-[#E10414];
    height: 65vw;
    animation: goOpacity0 1s forwards;
    animation-delay: 1.8s;
  }
  .bot-section {
    @apply relative w-full flex-grow bg-[#E10414];
    animation: fadeout 1s forwards;
    animation-delay: 2.5s;
    .pocky-list {
      @apply absolute w-full flex justify-center items-end;
      height: 37vw;
      .pocky-item {
        @apply opacity-0 rounded-full;
        width: 2.41vw;
        margin: 0 1vw;
        animation: pockyShow 0.5s forwards;
        animation-delay: 1.5s;
      }
      .pocky-item:nth-child(1) {
        height: 13vw;
        background-color: #55A852
      }
      .pocky-item:nth-child(2) {
        height: 14vw;
        background-color: #FF97D7;
        .short {
          @apply rounded-full;
          height: 6vw;
          background-color: #F5B668;
        }
      }
      .pocky-item:nth-child(3) {
        height: 19vw;
        background-color: #F7D55A;
        animation-delay: 1.6s;
      }
      .pocky-item:nth-child(4) {
        height: 23vw;
        background-color: #723600;
        animation-delay: 1.7s;
      }
      .pocky-item:nth-child(5) {
        height: 16.93vw;
        background-color: #FF97D7
      }
      .pocky-item:nth-child(6) {
        height: 31vw;
        background-color: #55A852;
        .short {
          @apply rounded-full;
          height: 15vw;
          background-color: #F5B668;
        }
      }
      .pocky-item:nth-child(7) {
        height: 23.45vw;
        background-color: #F7D55A;
        animation-delay: 1.6s;
      }
      .pocky-item:nth-child(8) {
        height: 16vw;
        background-color: #723600;
        animation-delay: 1.7s;
        .short {
          @apply rounded-full;
          height: 7vw;
          background-color: #F5B668;
        }
      }
      .pocky-item:nth-child(9) {
        height: 11vw;
        background-color: #FF97D7;
        animation-delay: 1.6s;
      }
    }
    .pocky-box {
      @apply absolute w-full text-center;
      top: 36vw;
      animation: boxShow 1.5s forwards;
      //animation: boxShow 1.5s forwards, tada 1s linear 1s;
      img {
        @apply inline-block;
        width: 53.34vw;
      }
    }
  }
}
</style>
<script setup>
</script>

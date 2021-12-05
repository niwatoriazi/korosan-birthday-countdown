<script setup>
import CountDownWrapper from './components/CountDownWrapper.vue';
</script>

<template>
  <div id="bg-video" class="w-screen h-screen fixed filter blur-md">
    <video
      class="w-full h-full object-cover"
      src="./assets/korosan-birthday-countdown-back-video.mp4"
      autoplay
      muted
      playsinline
      loop
    ></video>
  </div>
  <CountDownWrapper></CountDownWrapper>
  <div id="page-title-wrapper" class="display-width">
    <p id="page-title" class="text-sm lg:text-base text-center text-white">ころさんお誕生日カウントダウン(非公式)</p>
  </div>
  <div id="copy-wright-wrapper" class="display-width">
    <a
      href="https://twitter.com/niwatoriazi"
      target="_blank"
      id="copy-right"
      class="text-xs lg:text-base text-center underline text-white"
    >©2021 にわとりあじ</a>
  </div>
  <div id="frame" class="fixed inset-0 w-screen h-screen pointer-events-none"></div>
  <a
    href="https://niwatoriazi.github.io/okayun-birthday-countdown/"
    id="okayun-counter-link"
    class="fixed right-10 bottom-38 lg:right-20 lg:bottom-76 transform hover:-rotate-6 hover:scale-110 duration-200"
  >
    <img src="./assets/1f359.svg" class="w-16 lg:w-24" />
  </a>
  <a
    href="https://twitter.com/inugamikorone"
    id="twitter-share-link"
    target="_blank"
    class="fixed right-10 bottom-24 lg:right-20 lg:bottom-48 transform hover:-rotate-6 hover:scale-110 duration-200"
  >
    <img class="w-16 lg:w-24" src="./assets/2021Twitter_logo-blue.png" alt="twitter-logo" />
  </a>
  <a
    href="https://youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q"
    id="youtube-channel-link"
    target="_blank"
    class="fixed right-10 bottom-10 lg:right-20 lg:bottom-20 transform hover:-rotate-6 hover:scale-110 duration-200"
  >
    <img class="w-16 lg:w-24" src="./assets/youtube_social_icon_red.webp" alt="youtube-logo" />
  </a>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=DotGothic16&family=Hachi+Maru+Pop&family=Press+Start+2P&display=swap);
@supports (-webkit-touch-callout: none) {
  #bg-video {
    height: -webkit-fill-available;
  }
  #frame {
    height: -webkit-fill-available;
  }
  #count-down-wrapper {
    height: -webkit-fill-available;
    overflow: hidden;
  }
}
body {
  background-color: #fee039;
  cursor: url(./assets/yubi.png), auto;
}
#party {
  z-index: -1;
}
#count-down-wrapper {
  z-index: -2;
  #count-down-timer {
    font-family: "Press Start 2P", "DotGothic16", cursive;
    color: white;
    filter: drop-shadow(0px 0px 2.2px rgba(0, 0, 0, 0.042))
      drop-shadow(0px 0px 5.3px rgba(0, 0, 0, 0.061))
      drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.075))
      drop-shadow(0px 0px 17.9px rgba(0, 0, 0, 0.089))
      drop-shadow(0px 0px 33.4px rgba(0, 0, 0, 0.108))
      drop-shadow(0px 0px 80px rgba(0, 0, 0, 0.15));

    span {
      vertical-align: 25%;
    }
  }
}
.z-layer:not(:first-child) {
  color: #455a64;
}
#page-title-wrapper {
  z-index: 1;
  width: 100vw;
  height: 50px;
  @media (orientation: portrait) {
    height: 30px;
  }
  top: 0px;
  position: fixed;
  display: grid;
  place-content: center;
  #page-title {
    font-family: "Hachi Maru Pop", cursive;
  }
}
#copy-wright-wrapper {
  z-index: 1;
  width: 100vw;
  height: 50px;
  @media (orientation: portrait) {
    height: 30px;
  }
  bottom: 0px;
  position: fixed;
  display: grid;
  place-content: center;
  #copy-right {
    cursor: url(./assets/ao-yubi.png), pointer;
    font-family: "Hachi Maru Pop", cursive;
  }
}
#bg-video {
  z-index: -3;
}
#frame {
  border: solid 50px #fee039;
  z-index: 0;
  @media (orientation: portrait) {
    border: solid 30px #fee039;
  }
}
#okayun-counter-link {
  cursor: url(./assets/ao-yubi.png), pointer;
}
#twitter-share-link {
  cursor: url(./assets/ao-yubi.png), pointer;
}
#youtube-channel-link {
  cursor: url(./assets/ao-yubi.png), pointer;
}
</style>

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

// define all timer variables
const day = ref(0);
const hour = ref(0);
const minute = ref(0);
const second = ref(0);

setInterval(function () {
    const distance = dayjs('2022-10-01 00:00:00').diff(dayjs())
    day.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hour.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minute.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    second.value = Math.floor((distance % (1000 * 60)) / 1000);
}, 100);

const getDay = computed(() => {
    let digit = 3;
    return (Array(digit).join('0') + day.value).slice(-digit);
});
const getHour = computed(() => {
    let digit = 2;
    return (Array(digit).join('0') + hour.value).slice(-digit);
});
const getMinute = computed(() => {
    let digit = 2;
    return (Array(digit).join('0') + minute.value).slice(-digit);
});
const getSecond = computed(() => {
    let digit = 2;
    return (Array(digit).join('0') + second.value).slice(-digit);
});
</script>
<template>
    <div
        id="count-down-wrapper"
        class="w-screen h-screen grid place-items-center pointer-events-none fixed"
    >
        <h1
            id="count-down-timer"
            class="lg:text-9xl text-6xl lg:text-center md:text-left leading-tight lg:leading-snug whitespace-normal whitespace-no-wrap"
        >
            <span class="lg:text-7xl text-3xl">誕生日まであと</span><br>{{getDay}}<span class="lg:text-7xl text-3xl">日</span><br class="lg:hidden">{{getHour}}<span class="lg:text-7xl text-3xl">時間</span><br />{{getMinute}}<span class="lg:text-7xl text-3xl">分</span><br class="lg:hidden">{{getSecond}}<span class="lg:text-7xl text-3xl">秒</span>
        </h1>
    </div>
</template>
<style lang="scss">
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
</style>
/*jshint esversion: 6 */
const CountDown = {
    data() {
        return {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };
    },
    created: function () {
        var self = this;
        setInterval(function () {
            distance = dayjs('2022-10-01 00:00:00').diff(dayjs())
            self.day = Math.floor(distance / (1000 * 60 * 60 * 24));
            self.hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            self.minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            self.second = Math.floor((distance % (1000 * 60)) / 1000);
        }, 100)
    },
    computed: {
        getDay() {
            let digit = 3;
            return (Array(digit).join('0') + this.day).slice(-digit);
        },
        getHour() {
            let digit = 2;
            return (Array(digit).join('0') + this.hour).slice(-digit);
        },
        getMinute() {
            let digit = 2;
            return (Array(digit).join('0') + this.minute).slice(-digit);
        },
        getSecond() {
            let digit = 2;
            return (Array(digit).join('0') + this.second).slice(-digit);
        }
    }
};
Vue.createApp(CountDown).mount('#count-down-wrapper');
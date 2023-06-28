import PageBuilder from "./PageBuilder";
export default class Clock {
    constructor(parent) {
        this.$wrapper = document.querySelector(parent);
        this.clockLeg = new PageBuilder({
            tag: "div",
            attrs: {
                class: "clock-leg"
            }
        });
        this.clockBall = new PageBuilder({
            tag: "div",
            attrs: {
                class: "clock-ball"
            }
        })
        this.clockLeg.appendChild(this.clockBall);
        this.$wrapper.appendChild(this.clockLeg);

        this.startClock();
    }
    startClock() {
        this.updateTime();
        setInterval(() => this.updateTime(), 300000); // Run every 5 mins
    }
    updateTime() {
        const time = new Date();
        const hour24 = time.getHours();
        const hour12 = hour24 > 11 ? hour24 - 12 : hour24;
        const mins = time.getMinutes();

        let rotate = 90;
        rotate += hour12 * 30;
        rotate += mins / 2;

        this.clockLeg.style.rotate = `${rotate}deg`;
    }
}
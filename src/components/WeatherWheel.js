import PageBuilder from "./PageBuilder.js";
export default class WeatherWheel {
    constructor() {
        this.$wrapper = document.querySelector(".current-weather");
        this.openWheel();
    }
    closeWheel() {
        this.wheelHub.remove();
    }
    openWheel() {
        // create wheel element
        this.wheelHub = new PageBuilder({
            tag: "div",
            attrs: {
                class: "wheel-hub"
            }
        });

        const weatherList = [
            'sunny',
            'partly-cloudy',
            'cloudy',
            'rain',
            'thunderstorm',
            'snow',
            'fog',
            'hail'
        ]

        weatherList.forEach((weather, index) => {
            const element = new PageBuilder({
                tag: "div",
                attrs: {
                    class: "wheel-element",
                    style: `rotate:${index * 45}deg`
                }
            });

            const bgHolder = new PageBuilder({
                tag: "button",
                attrs: {
                    class: "wheel-element-background"
                }
            });
            bgHolder.style.backgroundImage = `url('assets/icons/weather-${weather}.svg`;
            bgHolder.style.rotate = `-${index * 45}deg`;

            bgHolder.addEventListener("click", () => this.closeWheel());
            element.appendChild(bgHolder);
            this.wheelHub.appendChild(element);
        })
        const divMask = new PageBuilder({
            tag: "div",
            attrs: {
                class: "wheel-hub-background"
            }
        });
        this.wheelHub.appendChild(divMask);

        this.$wrapper.appendChild(this.wheelHub);
    }
}
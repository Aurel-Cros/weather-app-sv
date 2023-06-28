export default class WeatherWheel {
    constructor() {
        this.$wrapper = document.querySelector(".current-weather");
        this.openWheel();
    }
    closeWheel() {
        this.wheelHub.remove();
    }
    openWheel() {
        console.log('Open the wheel !');
        // create wheel element
        this.wheelHub = document.createElement("div");
        this.wheelHub.className = "wheel-hub";

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
            const element = document.createElement("div");
            element.className = "wheel-element";
            element.style.rotate = `${index * 45}deg`;

            const bgHolder = document.createElement("button");
            bgHolder.className = "wheel-element-background";
            bgHolder.style.backgroundImage = `url('weather-${weather}.svg`;
            bgHolder.style.rotate = `-${index * 45}deg`;

            bgHolder.addEventListener("click", () => this.closeWheel());
            element.appendChild(bgHolder);
            this.wheelHub.appendChild(element);
        })
        const divMask = document.createElement("div");
        divMask.className = "wheel-hub-background";
        this.wheelHub.appendChild(divMask);

        this.$wrapper.appendChild(this.wheelHub);
    }
}
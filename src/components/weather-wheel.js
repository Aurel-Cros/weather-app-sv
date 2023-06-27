const $wrapper = document.querySelector(".current-weather");
const button = document.querySelector(".current-weather img");
button.addEventListener("click", openWheel);

function openWheel() {
    console.log('Open the wheel !');
    // create wheel element
    const wheelHub = document.createElement("div");
    wheelHub.className = "wheel-hub";

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

        const bgHolder = document.createElement("div");
        bgHolder.className = "wheel-element-background";
        bgHolder.style.backgroundImage = `url('weather-${weather}.svg`;
        bgHolder.style.rotate = `-${index * 45}deg`;

        element.appendChild(bgHolder);
        wheelHub.appendChild(element);
    })
    const divMask = document.createElement("div");
    divMask.className = "wheel-hub-background";
    wheelHub.appendChild(divMask);
    $wrapper.appendChild(wheelHub);
}
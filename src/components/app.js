import WeatherWheel from './weather-wheel';
const button = document.querySelector(".current-weather img");
button.addEventListener("click", () => { new WeatherWheel() });

// On open, fetch information of random cities
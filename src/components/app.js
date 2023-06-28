import WeatherWheel from './WeatherWheel';
import Clock from './Clock';

const button = document.querySelector(".current-weather img");
button.addEventListener("click", () => { new WeatherWheel() });

const clockElement = new Clock('.weather-graph-values');

// On open, fetch information of random cities
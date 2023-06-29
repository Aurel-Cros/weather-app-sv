import PopupOverlay from "./PopupOverlay.js";
import WeatherWheel from './WeatherWheel';
import Clock from './Clock';
import { popupTemplates } from "./Templates.js";

const root = document.querySelector("#root");

const currWeatherIcon = document.querySelector(".current-weather img");
currWeatherIcon.addEventListener("click", () => { new WeatherWheel() });

const clockElement = new Clock('.weather-graph-values');

// Select data elements
export const $ = {
    currentWeather: document.querySelector(".current-weather p"),
    cityName: document.querySelector(".city-name"),
    countryName: document.querySelector(".country"),
    countyName: document.querySelector(".country span"),
    highTemp: document.querySelector(".temp-hi"),
    lowTemp: document.querySelector(".temp-lo"),
    mainTemp: document.querySelector(".main-temp"),
    mainWind: document.querySelector(".weather-graph-values .wind"),
    mainHumi: document.querySelector(".weather-graph-values .humidity"),
    todayDate: document.querySelector(".today-date"),
    fiveDays: document.querySelector(".five-days-pred"),
    shortText: document.querySelector(".short-text")
}

const today = new Date();
$.todayDate.textContent = `${today.toLocaleString('en-en', { weekday: 'short' })} ${today.getMonth()}/${today.getDate()}`;

$.mainTemp.addEventListener("click", (e) => {
    makePopup(e, 'filterPopup');
});

$.countryName.addEventListener("click", (e) => {
    makePopup(e, 'searchPopup');
});

const makePopup = (e, type) => {
    const x = `50%`;
    const y = `${e.clientY - e.offsetY}px`;
    console.log(e, x, y);
    const popup = new PopupOverlay(popupTemplates[type], { x: x, y: y });
    if (!popup.empty)
        root.append(popup);
}
// On open, fetch information of random cities
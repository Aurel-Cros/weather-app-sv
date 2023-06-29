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
    const x = `50%`;
    const y = `${e.clientY - e.layerY / 2}px`;
    console.log(x, y)
    root.append(new PopupOverlay(popupTemplates.filterPopup, { x: x, y: y }))
})

$.cityName.addEventListener("click", (e) => {
    const x = `50%`;
    const y = `${e.clientY}px`;
    console.log(e, x, y);
    const searchPopup = new PopupOverlay(popupTemplates.searchPopup, { x: x, y: y });
    if (!searchPopup.empty)
        root.append(searchPopup);
})
// On open, fetch information of random cities
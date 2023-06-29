import PopupOverlay from "./PopupOverlay.js";
import WeatherWheel from './WeatherWheel';
import Clock from './Clock';
import { popupTemplates } from "./templates.js";

const root = document.querySelector("#root");

const clockElement = new Clock('.weather-graph-values');

// Select data elements
export const $ = {
    currentWeatherName: document.querySelector(".current-weather p"),
    currentWeatherIcon: document.querySelector(".current-weather img"),
    cityName: document.querySelector(".city-name p"),
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

// Weather wheel opener
$.currentWeatherIcon.addEventListener("click", () => { new WeatherWheel() });

// Display the date of today
const today = new Date();
$.todayDate.textContent = `${today.toLocaleString('en-en', { weekday: 'short' })} ${today.getMonth()}/${today.getDate()}`;

// Search popup when clicking on the country name
$.countryName.addEventListener("click", (e) => {
    makePopup(e, 'searchPopup');
});
// Filter popup when clicking on the main temperature
$.mainTemp.addEventListener("click", (e) => {
    makePopup(e, 'filterPopup');
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
// const city = await fetch('city.list.json')
//     .then((response) => response.json())
//     .then((data) => {
//         const randomNumber = Math.trunc(Math.random() * data.length);
//         return data[randomNumber];
//     })
//     .catch(e => {
//         console.error(e)
//     })

// const apiKeyOWM = '5d376246ec5123d7e576ffd3bb8a5db4';
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKeyOWM}`;
// const apiParameters = `&lat=${city.coord.lat}&lon=${city.coord.lon}`
// const randomCity = await fetch(apiUrl + apiParameters)
//     .then(response => response.json())
//     .then(data => data);
const randomCityString = {
    "coord": {
        "lon": 8.7174, "lat": 45.9784
    }, "weather": [
        {
            "id": 804,
            "main": "Clouds", "description": "overcast clouds", "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.34,
        "feels_like": 296.41,
        "temp_min": 295.08,
        "temp_max": 297.69,
        "pressure": 1019,
        "humidity": 65
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.51,
        "deg": 0
    },
    "clouds": {
        "all": 100
    },
    "dt": 1688032439,
    "sys": {
        "type": 2, "id": 2036943, "country": "IT", "sunrise": 1688009819, "sunset": 1688066387
    },
    "timezone": 7200,
    "id": 6534440,
    "name": "Brezzo di Bedero",
    "cod": 200
};
const randomCity = JSON.parse(randomCityString);
$.cityName.textContent = randomCity.name;
$.countryName.textContent = randomCity.sys.country;
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
    countryFlag: document.querySelector(".country img"),
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
const city = await fetch('city.list.json')
    .then((response) => response.json())
    .then((data) => {
        const randomNumber = Math.trunc(Math.random() * data.length);
        return data[randomNumber];
    })
    .catch(e => {
        console.error(e)
    })

const apiKeyOWM = '5d376246ec5123d7e576ffd3bb8a5db4';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKeyOWM}`;
const apiParameters = `&units=metric&lat=${city.coord.lat}&lon=${city.coord.lon}`
const randomCity = await fetch(apiUrl + apiParameters)
    .then(response => response.json())
    .then(data => data);
// const randomCityString = `{
//     "coord": {
//         "lon": 8.7174, "lat": 45.9784
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds", "description": "overcast clouds", "icon": "04d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 27.3,
//         "feels_like": 28.1,
//         "temp_min": 21.8,
//         "temp_max": 29.9,
//         "pressure": 1019,
//         "humidity": 65
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 0.51,
//         "deg": 0
//     },
//     "clouds": {
//         "all": 100
//     },
//     "dt": 1688032439,
//     "sys": {
//         "type": 2, "id": 2036943, "country": "IT", "sunrise": 1688009819, "sunset": 1688066387
//     },
//     "timezone": 7200,
//     "id": 6534440,
//     "name": "Brezzo di Bedero",
//     "cod": 200
// }`;
// const randomCity = JSON.parse(randomCityString);

const countryInfo = await fetch('country_dial_info.json')
    .then(response => response.json())
    .then(data => data.find(country => country.code == randomCity.sys.country));

const backgroundNumber = Math.round(Math.random() * 5);
console.log(randomCity.weather[0].main);
console.log(randomCity.clouds);
switch (randomCity.weather[0].main) {
    case 'Clear':
        $.currentWeatherIcon.src = "weather-sunny.svg";
        root.className = `sunny bg${backgroundNumber}`;
        break;
    case 'Drizzle':
    case 'Rain':
        $.currentWeatherIcon.src = "weather-rain.svg";
        root.className = `rainy bg${backgroundNumber}`;
        break;
    case 'Thunderstorm':
        $.currentWeatherIcon.src = "weather-thunderstorm.svg";
        root.className = `stormy bg${backgroundNumber}`;
        break;
    case 'Snow':
        $.currentWeatherIcon.src = "weather-snow.svg"
        root.className = `snowy bg${backgroundNumber}`;
        break;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
        $.currentWeatherIcon.src = "weather-fog.svg";
        root.className = `foggy bg${backgroundNumber}`;
        break;
    case 'Clouds':
        if (randomCity.clouds.all < 11)
            $.currentWeatherIcon.src = "weather-sunny.svg";
        else if (randomCity.clouds.all < 30) {
            $.currentWeatherIcon.src = "weather-partly-cloudy.svg";
            root.className = `p-sunny bg${backgroundNumber}`;
        }
        else {
            $.currentWeatherIcon.src = "weather-cloudy.svg";
            root.className = `cloudy bg${backgroundNumber}`;
        }
        break;
}

$.currentWeatherName.textContent = randomCity.weather[0].main;

$.cityName.textContent = randomCity.name;
$.countryName.append(countryInfo.name);
$.countryFlag.src = `https://flagsapi.com/${randomCity.sys.country}/flat/32.png`;

$.mainTemp.textContent = Math.trunc(randomCity.main.temp) + '°';
$.highTemp.textContent = Math.trunc(randomCity.main.temp_max) + '°';
$.lowTemp.textContent = Math.trunc(randomCity.main.temp_min) + '°';

$.mainWind.textContent = Math.round(10 * randomCity.wind.speed / 3.6) / 10 + ' km/h'; // m/s to km/h

$.mainHumi.textContent = randomCity.main.humidity + '%';
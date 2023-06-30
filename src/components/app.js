import PopupOverlay from "./PopupOverlay.js";
import WeatherWheel from './WeatherWheel';
import Clock from './Clock';
import { predictionCardTemplate, popupTemplates } from "./templates.js";
import PageBuilder from "./PageBuilder.js";

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
$.todayDate.textContent = `${today.toLocaleString('en-GB', { weekday: 'long' })} ${today.getMonth() + 1}/${today.getDate()}`;

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
const apiUrlRoot = `https://api.openweathermap.org/data/2.5/`
const apiKey = `?appid=${apiKeyOWM}`;
const apiCurrent = 'weather';
const apiForecast = `forecast`;
const apiParameters = `&units=metric&lat=${city.coord.lat}&lon=${city.coord.lon}`

const randomCity = await fetch(apiUrlRoot + apiCurrent + apiKey + apiParameters)
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.error(err) });

const forecast5Days = await fetch(apiUrlRoot + apiForecast + apiKey + apiParameters)
    .then(response => response.json())
    .then(data => data)
    .catch(err => { console.error(err) });

const countryInfo = await fetch('country_dial_info.json')
    .then(response => response.json())
    .then(data => data.find(country => country.code == randomCity.sys.country));

const backgroundNumber = Math.round(Math.random() * 5) || 1;

// INSERT CURRENT WEATHER DATA IN THE DISPLAY

$.currentWeatherIcon.alt = `Current weather : ${randomCity.weather[0].main} (${randomCity.weather[0].description})`;
$.currentWeatherIcon.src = getWeatherAssets(randomCity.weather[0].main).icon;
root.className = getWeatherAssets(randomCity.weather[0].main).rootClass + ` bg${backgroundNumber}`;

function getWeatherAssets(weatherName) {
    const assets = {
        icon: null,
        rootClass: null
    }
    switch (weatherName) {
        case 'Clear':
            assets.icon = "weather-sunny.svg";
            assets.rootClass = `sunny`;
            break;
        case 'Drizzle':
        case 'Rain':
            assets.icon = "weather-rain.svg";
            assets.rootClass = `rainy`;
            break;
        case 'Thunderstorm':
            assets.icon = "weather-thunderstorm.svg";
            assets.rootClass = `stormy`;
            break;
        case 'Snow':
            assets.icon = "weather-snow.svg"
            assets.rootClass = `snowy`;
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
            assets.icon = "weather-fog.svg";
            assets.rootClass = `foggy`;
            break;
        case 'Clouds':
            if (randomCity.clouds.all < 11)
                assets.icon = "weather-sunny.svg";
            else if (randomCity.clouds.all < 30) {
                assets.icon = "weather-partly-cloudy.svg";
                assets.rootClass = `p-sunny`;
            }
            else {
                assets.icon = "weather-cloudy.svg";
                assets.rootClass = `cloudy`;
            }
            break;
    }
    return assets;
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

// INSERT DATA IN THE 5 DAYS PREDICTION ZONE

const forecastResults = [];
forecast5Days.list.forEach(prediction => {
    const predDate = new Date(prediction.dt * 1000); // PHP sends seconds, JS uses milliseconds
    const day = predDate.getDate();
    const dayName = predDate.toLocaleString('en-GB', { weekday: 'short' });

    let dayForecast = forecastResults.findLast(a => a.day === day);
    if (!dayForecast) {
        forecastResults.push({ day: day, dayName: dayName });
        dayForecast = forecastResults.findLast(a => a.day === day);
        dayForecast.temps = [];
        dayForecast.chanceOfRain = [];
        dayForecast.weather = {};
    }
    dayForecast.temps.push(prediction.main.temp);
    dayForecast.chanceOfRain.push(prediction.pop);
    dayForecast.weather[prediction.weather[0].main] = (dayForecast.weather[prediction.weather[0].main] ?? 0) + 1;
})
forecastResults.forEach(day => {
    if (day.day === new Date().getDate())
        return;
    const sortedTemps = day.temps.sort((a, b) => a - b);
    const minTemp = Math.trunc(sortedTemps[0]);
    const maxTemp = Math.trunc(sortedTemps.findLast(a => 1));
    const avgHumi = Math.trunc(day.chanceOfRain.reduce((accu, humi) => accu + humi * 100, 0) / day.chanceOfRain.length);
    const predCard = new PageBuilder(predictionCardTemplate);

    const dayWeather = Object.entries(day.weather).reduce((max, entry) => entry[1] >= max[1] ? entry : max, [0, -Infinity])

    predCard.querySelector(".day").textContent = `${day.dayName}`;
    predCard.querySelector(".min-max-temps").textContent = minTemp + "° / " + maxTemp + "°";
    predCard.querySelector(".chanceOfRain").textContent = avgHumi + "%";
    predCard.querySelector("img").src = getWeatherAssets(dayWeather[0]).icon;
    predCard.querySelector("img").alt = dayWeather[0];
    $.fiveDays.append(predCard);
})

// Get short text from Wikipedia
const wikiApiRoot = "https://en.wikipedia.org/api/rest_v1/page/summary/";
fetch(wikiApiRoot + randomCity.name)
    .then(response => response.json())
    .then(data => {
        if (data.title === 'Not found.')
            return
        console.log(data.extract.length)
        const wikiExtract = data.extract.length > 300 ? data.extract.slice(0, 300) + '...' : data.extract_html;
        const wikiUrl = data.content_urls.mobile.page;

        $.shortText.innerHTML = wikiExtract;
        const wikiLink = new PageBuilder({ tag: "a", attrs: { href: wikiUrl }, content: "+", target: "_blank" })
        $.shortText.append(wikiLink);
    })
    .catch(err => { console.log(err); return err });

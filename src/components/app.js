import PopupOverlay from "./PopupOverlay.js";
import WeatherWheel from './WeatherWheel.js';
import Clock from './Clock.js';
import { predictionCardTemplate, popupTemplates } from "./templates.js";
import PageBuilder from "./PageBuilder.js";
import fetchWithRetry from './FetchWithRetry.js';

export default class App {
    root = document.querySelector("#root");

    DOM = {
        currentWeatherName: document.querySelector(".current-weather p"),
        currentWeatherIcon: document.querySelector(".current-weather img"),
        cityName: document.querySelector(".city-name p"),
        countryInfo: document.querySelector(".country"),
        countyName: document.querySelector(".country span"),
        highTemp: document.querySelector(".temp-hi"),
        lowTemp: document.querySelector(".temp-lo"),
        mainTemp: document.querySelector(".main-temp"),
        mainWind: document.querySelector(".weather-graph-values .wind"),
        mainHumi: document.querySelector(".weather-graph-values .humidity"),
        todayDate: document.querySelector(".today-date"),
        fiveDays: document.querySelector(".five-days-pred"),
        shortText: document.querySelector(".short-text"),
        randomBtn: document.querySelector(".randomize button")
    }

    constructor() {
        this.buildApp();
        this.initListeners();
        this.refreshDisplay();
    }
    /*
    BUILDING AND INITIALIZER METHODS
    */
    buildApp() {
        this.clock = new Clock('.weather-graph-values');
        this.todayDate = new Date();
        this.DOM.todayDate.textContent = `${this.todayDate.toLocaleString('en-GB', { weekday: 'long' })} ${this.todayDate.getMonth() + 1}/${this.todayDate.getDate()}`;
    }
    initListeners() {
        // Weather wheel opener
        this.DOM.currentWeatherIcon.addEventListener("click", () => { new WeatherWheel() });

        // Display the date of today
        // Search popup when clicking on the country name
        this.DOM.countryInfo.addEventListener("click", (e) => {
            this.makePopup(e, 'searchPopup');
        });

        // Filter popup when clicking on the main temperature
        this.DOM.mainTemp.addEventListener("click", (e) => {
            this.makePopup(e, 'filterPopup');
        });

        this.DOM.randomBtn.addEventListener("click", () => {
            this.refreshDisplay();
        });
    }

    /*
    WIDGETS
    */
    makePopup(e, type) {
        const x = `50%`;
        const y = `${e.clientY - e.offsetY}px`;
        const popup = new PopupOverlay(popupTemplates[type], { x: x, y: y });
        if (!popup.empty)
            this.root.append(popup);
    }
    /*
    Main controlling methods
    */
    async refreshDisplay() {
        await this.getOneRandom();
        await this.getWeatherData();
        this.insertCurrentData();
        this.insertForecastData();
        await this.InsertWikiShortText();
    }
    async getOneRandom() {
        const randomNumber = Math.round(Math.random() * 27632);
        const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=${randomNumber}&limit=1&hateoasMode=false`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_APIKEY,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        const query = await fetchWithRetry(url, options);
        const returnedData = query.data[0];

        this.city = {
            name: returnedData.name,
            countryName: returnedData.country,
            countryCode: returnedData.countryCode,
            regionName: returnedData.region,
            wikiDataId: returnedData.wikiDataId,
            coord: {
                lat: returnedData.latitude,
                lon: returnedData.longitude
            },
            weather: {

                current: {},
                forecast5Days: {}
            }
        }

        console.log(this.city);
    }

    async getWeatherData() {
        const apiKeyOWM = process.env.OPENWEATHERMAP_APIKEY;
        const apiUrlRoot = `https://api.openweathermap.org/data/2.5/`
        const apiKey = `?appid=${apiKeyOWM}`;
        const apiCurrent = 'weather';
        const apiForecast = `forecast`;
        const apiParameters = `&units=metric&lat=${this.city.coord.lat}&lon=${this.city.coord.lon}`

        const weatherPromise = fetch(apiUrlRoot + apiCurrent + apiKey + apiParameters)
            .then(response => response.json())
            .then(data => data)
            .catch(err => { console.error(err) });

        const forecastPromise = fetch(apiUrlRoot + apiForecast + apiKey + apiParameters)
            .then(response => response.json())
            .then(data => data)
            .catch(err => { console.error(err) });

        await Promise.all([weatherPromise, forecastPromise])
            .then(data => {
                this.city.weather.current = data[0];
                this.city.weather.forecast5Days = data[1];
            })
    }
    insertCurrentData() {
        this.DOM.currentWeatherName.textContent = this.city.weather.current.weather[0].main;
        this.DOM.cityName.textContent = this.city.name;

        const flagIcon = new PageBuilder({
            tag: "img",
            attrs: {
                src: `https://flagsapi.com/${this.city.countryCode}/flat/32.png`,
                alt: `Flag of ${this.city.countryName}`,
                class: 'flag'
            }
        })

        const regionName = new PageBuilder({
            tag: "span",
            content: this.city.regionName
        });
        const countryName = new PageBuilder({
            tag: "p",
            content: this.city.countryName + ", "
        });
        countryName.appendChild(regionName);
        this.DOM.countryInfo.replaceChildren(flagIcon, countryName);

        this.DOM.mainTemp.textContent = Math.trunc(this.city.weather.current.main.temp) + '°';
        this.DOM.highTemp.textContent = Math.trunc(this.city.weather.current.main.temp_max) + '°';
        this.DOM.lowTemp.textContent = Math.trunc(this.city.weather.current.main.temp_min) + '°';

        this.DOM.mainWind.textContent = Math.round(10 * this.city.weather.current.wind.speed * 3.6) / 10 + ' km/h'; // Meter per sec to kph is n * 3.6

        this.DOM.mainHumi.textContent = this.city.weather.current.main.humidity + '%';

        this.DOM.currentWeatherIcon.alt = `Current weather : ${this.city.weather.current.weather[0].main} (${this.city.weather.current.weather[0].description})`;

        const assets = this.getWeatherAssets(this.city.weather.current.weather[0].main);
        this.DOM.currentWeatherIcon.src = assets.icon;

        const backgroundNumber = Math.round(Math.random() * 5) || 1;
        this.root.className = assets.rootClass + ` bg${backgroundNumber}`;
    }
    insertForecastData() {

        const forecastResults = [];
        this.DOM.fiveDays.replaceChildren();
        this.city.weather.forecast5Days.list.forEach(prediction => {
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
            predCard.querySelector("img").src = this.getWeatherAssets(dayWeather[0]).icon;
            predCard.querySelector("img").alt = dayWeather[0];
            this.DOM.fiveDays.appendChild(predCard);
        })
    }
    async InsertWikiShortText() {
        // Get short text from Wikipedia
        const getWikiUrl = await fetch(`https://www.wikidata.org/w/api.php?origin=*&action=wbgetentities&props=sitelinks/urls&ids=${this.city.wikiDataId}&format=json&sitefilter=enwiki`)
            .then(response => response.json())
            .then(data => data.entities[this.city.wikiDataId].sitelinks.enwiki.url)
            .catch(() => {
                const errorMessage = 'No wiki data.';
                console.log(errorMessage);
                this.DOM.shortText.replaceChildren(errorMessage);
                return false
            });
        if (!getWikiUrl)
            return;
        const wikiId = getWikiUrl.split('/').findLast(() => true);
        const wikiApiRoot = "https://en.wikipedia.org/api/rest_v1/page/summary/";
        fetch(wikiApiRoot + wikiId)
            .then(response => response.json())
            .then(data => {
                const wikiExtract = data.extract.length > 300 ? data.extract.slice(0, 300) + '...' : data.extract_html;
                const wikiUrl = data.content_urls.mobile.page;

                this.DOM.shortText.innerHTML = wikiExtract;
                const wikiLink = new PageBuilder({ tag: "a", attrs: { href: wikiUrl, target: "_blank" }, content: "+" })
                this.DOM.shortText.append(wikiLink);
            })
            .catch(() => {
                const errorMessage = 'Wikipedia returned an error.';
                console.log(errorMessage);
                this.DOM.shortText.replaceChildren(errorMessage);
                return false
            });

    }
    getWeatherAssets(weatherName) {
        const assets = {
            icon: 'assets/icons/',
            rootClass: null
        }
        switch (weatherName) {
            case 'Clear':
                assets.icon += "weather-sunny.svg";
                assets.rootClass = `sunny`;
                break;
            case 'Drizzle':
            case 'Rain':
                assets.icon += "weather-rain.svg";
                assets.rootClass = `rainy`;
                break;
            case 'Thunderstorm':
                assets.icon += "weather-thunderstorm.svg";
                assets.rootClass = `stormy`;
                break;
            case 'Snow':
                assets.icon += "weather-snow.svg"
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
                assets.icon += "weather-fog.svg";
                assets.rootClass = `foggy`;
                break;
            case 'Clouds':
                if (this.city.weather.current.clouds.all < 11)
                    assets.icon += "weather-sunny.svg";
                else if (this.city.weather.current.clouds.all < 30) {
                    assets.icon += "weather-partly-cloudy.svg";
                    assets.rootClass = `p-sunny`;
                }
                else {
                    assets.icon += "weather-cloudy.svg";
                    assets.rootClass = `cloudy`;
                }
                break;
        }
        return assets;
    }
}
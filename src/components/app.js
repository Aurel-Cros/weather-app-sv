import { SearchPopup, ErrorPopup } from "./PopupOverlay.js";
import Clock from './Clock.js';
import { predictionCardTemplate } from "./templates.js";
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
        this.getRandomCity();
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
        // Display the date of today
        // Search popup when clicking on the country name
        this.DOM.countryInfo.addEventListener("click", (e) => {
            this.searchPopup(e);
        });

        this.DOM.randomBtn.addEventListener("click", () => {
            this.getRandomCity();
        });
    }

    /*
    WIDGETS
    */
    searchPopup(e) {
        const x = `50%`;
        const y = `${e.clientY - e.offsetY}px`;
        const pos = { x: x, y: y };

        const popup = new SearchPopup(pos);
        if (popup.empty)
            return;

        this.root.append(popup.element);
        popup.input.addEventListener("change", (e) => {
            this.getSearchCity(e.target.value, popup.isCountryLocked);
            popup.close();
        })
    }
    cityNotFound() {
        const pos = { x: "50%", y: "22%" };
        const errorPopup = new ErrorPopup(pos, 'City name not found. Try a different one.');
        this.root.append(errorPopup.element);
        console.log("City name not found.");
    }

    /*
    App flow
    */
    async getSearchCity(cityName, isCountryLocked) {
        await this.getOneByName(cityName, isCountryLocked);
        await this.displayCity();
    }
    async getRandomCity() {
        await this.getOneRandom();
        await this.displayCity();
    }
    async displayCity() {
        await this.getWeatherData();
        this.insertCurrentData();
        this.insertForecastData();
        await this.InsertWikiShortText();
    }

    /*
    API calls and data management
    */
    async getOneByName(cityName, isCountryLocked) {
        const apiKeyOWM = process.env.OPENWEATHERMAP_APIKEY;
        const countryCode = isCountryLocked ? `,${this.city.countryCode}` : '';
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}${countryCode}&limit=10&appid=${apiKeyOWM}`;

        const queryOWM = await fetchWithRetry(url);
        const result = queryOWM[0];

        if (!result) {
            this.cityNotFound();
            return
        }

        const rapidParameters = `location=${result.lat}${(result.lon >= 0 ? '%2B' : '') + result.lon}&namePrefix=${cityName}&sort=-population`;

        const url2 = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&hateoasMode=false&${rapidParameters}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_APIKEY,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        const queryRapid = await fetchWithRetry(url2, options);
        const finalData = queryRapid.data.find(element => element.type === 'CITY');

        if (!finalData) {
            this.cityNotFound();
            return
        }

        this.city = {
            name: finalData.name,
            countryName: finalData.country,
            countryCode: finalData.countryCode,
            regionName: finalData.region,
            wikiDataId: finalData.wikiDataId,
            coord: {
                lat: finalData.latitude,
                lon: finalData.longitude
            },
            weather: {

                current: {},
                forecast5Days: {}
            }
        }
    }
    async getOneRandom() {
        const randomNumber = Math.round(Math.random() * 615134);
        console.log(randomNumber);
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

    /*
    Data inserts
    */
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
            if (day.day === new Date().getDate()) {
                const sortedTemps = day.temps.sort((a, b) => a - b);
                const minTemp = Math.trunc(sortedTemps[0]);
                const maxTemp = Math.trunc(sortedTemps[sortedTemps.length - 1]);
                this.DOM.highTemp.textContent = Math.trunc(maxTemp) + '°';
                this.DOM.lowTemp.textContent = Math.trunc(minTemp) + '°';
                return;
            }
            const sortedTemps = day.temps.sort((a, b) => a - b);
            const minTemp = Math.trunc(sortedTemps[0]);
            const maxTemp = Math.trunc(sortedTemps[sortedTemps.length - 1]);
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
                this.DOM.shortText.style.textAlign = "center";
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

    // Ressource getter
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
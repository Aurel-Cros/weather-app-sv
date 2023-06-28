import PopupOverlay from "./PopupOverlay.js";
import WeatherWheel from './WeatherWheel';
import Clock from './Clock';

const root = document.querySelector("#root");

const currWeatherIcon = document.querySelector(".current-weather img");
currWeatherIcon.addEventListener("click", () => { new WeatherWheel() });

const clockElement = new Clock('.weather-graph-values');

// Select data elements
const $ = {
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

// Pop up templates

const popupTemplates = {
    searchPopup: {
        tag: "div",
        attrs: { class: "search-popup" },
        children: [
            {
                tag: "div",
                children: [
                    {
                        tag: "input",
                        attrs: {
                            id: "country-check",
                            type: "checkbox"
                        }
                    },
                    {
                        tag: "label",
                        content: "Country",
                        attrs: {
                            class: "country-lock",
                            for: "country-check"
                        }
                    }
                ]
            },
            {
                tag: "div",
                children: [
                    {
                        tag: "input",
                        attrs: {
                            id: "county-check",
                            type: "checkbox"
                        }
                    },
                    {
                        tag: "label",
                        content: "Country",
                        attrs: {
                            class: "country-lock",
                            for: "county-check"
                        }
                    }
                ]
            },
            {
                tag: "input",
                attrs: {
                    placeholder: "Search"
                }
            }
        ]
    },
    filterPopup: {
        tag: "div",
        attrs: {
            class: "filter-popup"
        },
        children: [
            {
                tag: "div",
                children: [
                    {
                        tag: "img",
                        attrs: {
                            src: "max-temp.svg"
                        }
                    },
                    {
                        tag: "p",
                        content: "34°C",
                        attrs: {
                            contentEditable: true
                        }
                    },
                    {
                        tag: "img",
                        attrs: {
                            src: "min-temp.svg"
                        }
                    },
                    {
                        tag: "p",
                        content: "24°C",
                        attrs: {
                            contentEditable: true
                        }
                    }
                ]
            },
            {
                tag: "div",
                children: [
                    {
                        tag: "img",
                        attrs: {
                            src: "details-wind.svg"
                        }
                    },
                    {
                        tag: "p",
                        content: "00",
                        attrs: {
                            contentEditable: true
                        }
                    },
                    {
                        tag: "p",
                        content: " - "
                    },
                    {
                        tag: "p",
                        content: "00",
                        attrs: {
                            contentEditable: true
                        }
                    },
                    {
                        tag: "input",
                        attrs: {
                            type: "radio",
                            name: "speedUnit",
                            id: "kmh",
                            value: "kmh",
                            checked: true
                        }
                    },
                    {
                        tag: "label",
                        content: "km/h",
                        attrs: {
                            for: "kmh"
                        }
                    },
                    {
                        tag: "input",
                        attrs: {
                            type: "radio",
                            name: "speedUnit",
                            id: "mph",
                            value: "mph"
                        }
                    },
                    {
                        tag: "label",
                        content: "mph",
                        attrs: {
                            for: "mph"
                        }
                    }
                ]
            }
        ]
    }
};

root.append(new PopupOverlay(popupTemplates.filterPopup, { x: '10px', y: '50%' }))
// On open, fetch information of random cities
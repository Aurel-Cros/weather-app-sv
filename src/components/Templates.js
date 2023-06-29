// Pop up templates

export const popupTemplates = {
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
                            class: 'filter-wind-min',
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
                            class: 'filter-wind-max',
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
                        tag: "p",
                        content: " / "
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
            },
            {
                tag: "div",
                children: [
                    {
                        tag: "img",
                        attrs: {
                            src: "details-humidity.svg"
                        }
                    },
                    {
                        tag: "p",
                        content: "00",
                        attrs: {
                            class: 'filter-humi-min',
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
                            class: 'filter-humi-max',
                            contentEditable: true
                        }
                    },
                    {
                        tag: "p",
                        content: "%"
                    }
                ]
            },
            {
                tag: "div",
                attrs: {
                    class: "temp-unit"
                },
                children: [
                    {
                        tag: "input",
                        attrs: {
                            type: "radio",
                            name: "tempUnit",
                            id: "celsius",
                            value: "celsius",
                            checked: true
                        }
                    },
                    {
                        tag: "label",
                        content: "°C",
                        attrs: {
                            for: "celsius"
                        }
                    },
                    {
                        tag: "p",
                        content: " / "
                    },
                    {
                        tag: "input",
                        attrs: {
                            type: "radio",
                            name: "tempUnit",
                            id: "faren",
                            value: "faren"
                        }
                    },
                    {
                        tag: "label",
                        content: "°F",
                        attrs: {
                            for: "faren"
                        }
                    }

                ]
            }
        ]
    }
};
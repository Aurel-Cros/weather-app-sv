// Pop up templates

export const popupTemplates = {
    errorPopup: {
        tag: "div",
        children: [
            {
                tag: "p",
                attrs: {
                    class: "error-message"
                }
            }
        ]
    },
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
                    type: "text",
                    placeholder: "Search"
                }
            }
        ]
    }
};

export const predictionCardTemplate = {
    tag: "div",
    attrs: { class: "pred-card" },
    children: [
        {
            tag: "p",
            attrs: {
                class: "day"
            }
        },
        {
            tag: "img"
        },
        {
            tag: "p",
            attrs: {
                class: "min-max-temps"
            }
        },
        {
            tag: "p",
            attrs: {
                class: "chanceOfRain",
                title: "Probability of precipitation"
            }
        }
    ]
}
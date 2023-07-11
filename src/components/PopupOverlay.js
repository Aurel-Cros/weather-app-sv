import PageBuilder from "./PageBuilder.js";
import { popupTemplates } from "./templates.js";

class PopupOverlay {
    constructor(position) {
        if (PopupOverlay.exists) {
            PopupOverlay.instance.close()
            return { empty: true }
        }
        PopupOverlay.exists = true;
        PopupOverlay.instance = this;

        this.mouseCoordinates = position;

        const template = {
            tag: "div",
            attrs: {
                class: "popup-overlay theme-fill-ui"
            },
            children: [
                {
                    tag: "button",
                    content: "X",
                    attrs: {
                        class: "popup-close-btn"
                    }
                },
                {
                    tag: "div",
                    attrs: {
                        class: "background"
                    }
                }
            ]
        };
        this.element = new PageBuilder(template);

        this.position();

        this.closeBtn = this.element.querySelector(".popup-close-btn");
        this.closeBtn.addEventListener("click", () => this.close())
    }
    position() {
        const x = this.mouseCoordinates.x;
        const y = this.mouseCoordinates.y;
        this.element.style.left = x;
        setTimeout(() => {
            this.element.style.top = y;
            this.element.style.translate = "-50% -30%";
        });
    }
    close() {
        PopupOverlay.exists = false;
        PopupOverlay.instance = null;

        this.element.style.top = '-10%';
        this.element.style.translate = '-50% -100%';
        setTimeout(() => {
            this.element.remove();
        }, 1000);
    }

}

export class SearchPopup extends PopupOverlay {
    constructor(position) {
        super(position)
        this.isCountryLocked = false;
        const popupDOM = new PageBuilder(popupTemplates.searchPopup);
        this.element.appendChild(popupDOM);
        this.input = this.element.querySelector("input[type='text']");
        this.countryLock = this.element.querySelector("label");
        this.countryLock.addEventListener("click", () => {
            this.isCountryLocked = !this.isCountryLocked;
        })
    }
}

export class ErrorPopup extends PopupOverlay {
    constructor(position, message) {
        super(position)
        const popupDOM = new PageBuilder(popupTemplates.errorPopup);
        const errorMessage = popupDOM.querySelector(".error-message");
        errorMessage.textContent = message;
        this.element.appendChild(popupDOM);
    }
}
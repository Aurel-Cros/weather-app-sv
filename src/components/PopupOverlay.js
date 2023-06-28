import PageBuilder from "./PageBuilder.js";

export default class PopupOverlay {
    constructor(structure) {
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
                structure,
                {
                    tag: "div",
                    attrs: {
                        class: "background"
                    }
                }
            ]
        };
        this.element = new PageBuilder(template);

        this.closeBtn = this.element.querySelector(".popup-close-btn");
        this.closeBtn.addEventListener("click", () => this.close())
        return this.element;
    }
    close() {
        this.element.remove();
    }

}
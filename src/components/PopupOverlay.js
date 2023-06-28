import PageBuilder from "./PageBuilder.js";

export default class PopupOverlay {
    constructor(structure, position) {
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

        this.position();

        this.closeBtn = this.element.querySelector(".popup-close-btn");
        this.closeBtn.addEventListener("click", () => this.close())
        return this.element;
    }
    position() {
        const x = this.mouseCoordinates.x;
        const y = this.mouseCoordinates.y;
        this.element.style.left = x;
        setTimeout(() => {
            this.element.style.top = y;
        });
    }
    close() {
        this.element.style.top = '-100%';
        setTimeout(() => {
            this.element.remove();
        }, 600);
    }

}
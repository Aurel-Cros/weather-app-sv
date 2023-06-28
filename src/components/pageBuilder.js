export default class PageBuilder {
    constructor(structure) {
        if (Array.isArray(structure))
            throw new Exception('Wrong format');

        const _parent = this.makeOne(structure);
        return _parent
    }

    makeOne(structure) {
        const newElement = document.createElement(structure.tag);

        for (const attribute in structure.attrs) {
            newElement.setAttribute(attribute, structure.attrs[attribute]);
        }
        newElement.textContent = structure.content || '';

        structure.children?.forEach((child) => {
            newElement.appendChild(this.makeOne(child));
        })

        return newElement;
    }
}
/*
const test = {
    tag: "div",
    attrs: {
        id: "container",
        draggable: false
    },
    children: [
        {
            tag: "p",
            content: "Blabla"
        },
        {
            tag: "div",
            attrs: { class: "column" },
            children: [
                {
                    tag: "p",
                    content: "Bonjour les loulous",
                    attrs: {
                        class: "pouet"
                    }
                }
            ]
        }
    ]
}

const newPage = new PageBuilder(test);
*/
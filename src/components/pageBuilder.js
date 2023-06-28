export default class PageBuilder {
    /**
     * Creates a DOM tree from a JS object literal.
     * Tag is mandatory, other parameters are optional.
     * @param {Object} structure
     * {
            tag: "tag name",
            attrs: {
                attribute: "value"
            },
            content: "Text"
            children: [{},...]
        }
     */
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
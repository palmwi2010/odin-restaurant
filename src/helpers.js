function make(element, className) {
    let newElement = document.createElement(element);

    if (className) {
        newElement.classList.add(className);
    }
    return newElement;
}

export {make};
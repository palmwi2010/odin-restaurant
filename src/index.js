import './style.css';

class Viewport {
    contentContainer = document.querySelector('#content')

    clearScreen() {
        this.contentContainer.innerHTML = '';
    }
}

const viewController = new Viewport();

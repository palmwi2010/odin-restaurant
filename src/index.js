import './style.css';
import chefImg from './chef.jpg';

class Viewport {
    contentContainer = document.querySelector('#content')

    make(element, newClass, textContent) {
        let newElement = document.createElement(element);
        newElement.classList.add(newClass);
        return newElement;
    }

    clearScreen() {
        this.contentContainer.innerHTML = '';
    }

    initButtons() {
        const buttons = document.querySelectorAll('.nav-btn');
        
        // Assign buttons
        buttons[0].addEventListener('click', ()=>this.initHome());
        buttons[1].addEventListener('click', ()=>this.initMenu());
        buttons[2].addEventListener('click', () => this.initAbout());
    }

    initHome() {
        // Method to initialize the Home screen
        this.clearScreen();

        // Create top banner
        let topBanner = this.make('div', 'content-banner');
        let header = document.createElement('h1');
        let subHeader = document.createElement('p');
        header.textContent = "Welcome to Giancarlo's";
        subHeader.textContent = "The finest pizzeria in Southwater";

        topBanner.appendChild(header);
        topBanner.appendChild(subHeader);
        this.contentContainer.appendChild(topBanner);

        // Create main content
        let mainContent = this.make('div', 'content-main');
        const cardContent = [
            {'title': 'Bookings', 'body': 'Come and join us!'},
            {'title': 'Contact', 'body': 'Give us a ring!'},
            {'title': 'Thirsty Thursday', 'body': 'Come and join us this Thursday for a pint and a pizza for 50% off!'},
            {'title': 'Reviews', 'body': "Hear why we're the best, or let us know yourself!"}
        ]

        // Loop through and add cards
        let pairContainer;
        for (let i = 0; i < cardContent.length; i++) {
            if (i % 2 === 0) {
                pairContainer = this.make('div', 'content-pair');
            }
            let card = this.make('div', 'content-item');
            let cardHeader = this.make('h2', 'item-header');
            let cardBody = document.createElement('p');
            cardHeader.innerText = cardContent[i].title;
            cardBody.innerText = cardContent[i].body;
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            pairContainer.appendChild(card);

            if (i % 2 === 1) {
                mainContent.appendChild(pairContainer);
            }
        }
        this.contentContainer.appendChild(mainContent);
    }

    initMenu() {
        this.clearScreen();

        let menuContainer = this.make('div','menu-container');

        // Set menu
        const menuItems = [
            {'name': 'Margarita', 'price': '9.99', 'Ingredients': 'Tomato, cheese, parsley.'},
            {'name': 'American', 'price': '10.99', 'Ingredients': 'Tomato, cheese, pepperoni.'},
            {'name': 'Hot and spicy', 'price': '12.99', 'Ingredients': 'Tomato, cheese, chorizo, chilli.'},
            {'name': 'Dough balls', 'price': '4.99', 'Ingredients': 'Doughy balls with garlic butter.'}
        ]

        for (let i = 0; i < menuItems.length; i++) {
            let item = menuItems[i];
            let menuItem = this.make('div', 'menu-item');
            let itemHeader = document.createElement('h2');
            let itemBody = document.createElement('p');
            let itemPrice = this.make('p', 'price');
            itemHeader.textContent = item.name;
            itemBody.textContent = item.Ingredients;
            itemPrice.textContent = `$${item.price}`;

            let fakeImg = this.make('div', 'fake-img');
            menuItem.appendChild(fakeImg);

            let menuContent = this.make('div', 'menu-content');
            menuContent.appendChild(itemHeader);
            menuContent.appendChild(itemBody);
            menuItem.appendChild(menuContent);
            menuItem.appendChild(itemPrice);
            menuContainer.appendChild(menuItem);
        }
        this.contentContainer.appendChild(menuContainer);
    }

    initAbout() {
        this.clearScreen();

        let aboutContainer = this.make('div', 'about-container');

        let header = this.make('h1', 'about-header');
        header.textContent = 'Our story';

        let img = new Image();
        img.src = chefImg;

        const contentParas = [
            "Our journey started in June 2022. We were walking through the rocky Himalayas, when we smelt something amazing. We followed and followed, and came around to find a small hut.",
            "Upon arrival, we were greeted by a sherpa in sunglasses drinking a diet coke. Next thing we know, he goes into the hut and comes back out with a pizza and offers us a slice.",
            "With low expectations, we each tried a bite. And lo and behold, it was the nicest pizza we ever had! We just had to bring this pizza to Southwater, so we hired the sherpa and set up shop back in the UK.",
            "We haven't looked back since, and our excited to delight our local customers for many years to come."
        ]


        aboutContainer.appendChild(header);
        aboutContainer.appendChild(img);

        contentParas.forEach(para => {
            let elem = document.createElement('p');
            elem.textContent = para;
            aboutContainer.appendChild(elem);
        });


        this.contentContainer.appendChild(aboutContainer);
    }



}

const viewController = new Viewport();
viewController.initHome();
viewController.initButtons();

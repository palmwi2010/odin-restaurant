import {make} from './helpers.js';


function initMenu() {

    const container = document.querySelector('#content');
    container.innerHTML = '';

    let menuContainer = make('div','menu-container');

    // Set menu
    const menuItems = [
        {'name': 'Margarita', 'price': '9.99', 'Ingredients': 'Tomato, cheese, parsley.'},
        {'name': 'American', 'price': '10.99', 'Ingredients': 'Tomato, cheese, pepperoni.'},
        {'name': 'Hot and spicy', 'price': '12.99', 'Ingredients': 'Tomato, cheese, chorizo, chilli.'},
        {'name': 'Dough balls', 'price': '4.99', 'Ingredients': 'Doughy balls with garlic butter.'}
    ]

    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        let menuItem = make('div', 'menu-item');
        let itemHeader = document.createElement('h2');
        let itemBody = document.createElement('p');
        let itemPrice = make('p', 'price');
        itemHeader.textContent = item.name;
        itemBody.textContent = item.Ingredients;
        itemPrice.textContent = `$${item.price}`;

        let fakeImg = make('div', 'fake-img');
        menuItem.appendChild(fakeImg);

        let menuContent = make('div', 'menu-content');
        menuContent.appendChild(itemHeader);
        menuContent.appendChild(itemBody);
        menuItem.appendChild(menuContent);
        menuItem.appendChild(itemPrice);
        menuContainer.appendChild(menuItem);
    }
    container.appendChild(menuContainer);
}

export {initMenu};
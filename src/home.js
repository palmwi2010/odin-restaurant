import {make} from './helpers.js';

function initHome() {

    const container = document.querySelector('#content');
    container.innerHTML = '';

    // Create top banner
    let topBanner = make('div', 'content-banner');
    let header = document.createElement('h1');
    let subHeader = document.createElement('p');
    header.textContent = "Welcome to Giancarlo's";
    subHeader.textContent = "The finest pizzeria in Southwater";

    topBanner.appendChild(header);
    topBanner.appendChild(subHeader);
    container.appendChild(topBanner);

    // Create main content
    let mainContent = make('div', 'content-main');
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
            pairContainer = make('div', 'content-pair');
        }
        let card = make('div', 'content-item');
        let cardHeader = make('h2', 'item-header');
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
    container.appendChild(mainContent);
}

export {initHome}
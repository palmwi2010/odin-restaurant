import {make} from './helpers.js';
import chefImg from './chef.jpg';

function initAbout() {

    const container = document.querySelector('#content');
    container.innerHTML = '';

    let aboutContainer = make('div', 'about-container');

    let header = make('h1', 'about-header');
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


    container.appendChild(aboutContainer);
}

export {initAbout};
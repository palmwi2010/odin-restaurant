import './style.css';
import {initHome} from './home.js';
import {initMenu} from './menu.js';
import {initAbout} from './about.js';

function initButtons() {
        const buttons = document.querySelectorAll('.nav-btn');
        
        // Assign buttons
        buttons[0].addEventListener('click', ()=>initHome());
        buttons[1].addEventListener('click', ()=>initMenu());
        buttons[2].addEventListener('click', () => initAbout());
    }

initButtons();
initHome();
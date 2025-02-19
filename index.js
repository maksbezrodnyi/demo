import { renderMenu } from "./modules/navigation.js";
import { Tablist } from "./modules/tablist.js";
import { Modal } from "./modules/modal.js";

const toggle = document.querySelector('[aria-pressed]');

toggle.addEventListener('click', () => {
    let pressed = toggle.getAttribute('aria-pressed') === 'true';
    toggle.setAttribute('aria-pressed', !pressed);
}
);

const handleLoader = () => {
    renderMenu.renderNavigation();

    const tablistElements = document.querySelectorAll('.tablist');
    tablistElements.forEach(tablistElement => new Tablist(tablistElement));

    new Modal();
}

document.onload = handleLoader();


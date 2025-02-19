import { mockNavigation } from './mockData.js';

class RenderMenu {
    constructor() {
        this.navigation = mockNavigation;
    }

    renderNavigation() {
        const menu = document.getElementById('menu');

        this.navigation.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.innerHTML = `<a href="${item.link}">${item.title}</a>`;
            menu.appendChild(menuItem);
        });
    }
}

export const renderMenu = new RenderMenu();
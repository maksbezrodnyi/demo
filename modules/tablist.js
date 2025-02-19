export class Tablist {
    constructor(element) {
        this.tablist = element;
        this.tabs = Array.from(this.tablist.querySelectorAll('[role="tab"]'));
        this.panels = Array.from(this.tablist.querySelectorAll('[role="tabpanel"]'));

        this.init();
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => this.changeTabPanel(e));
            tab.addEventListener('keydown', (e) => this.tabKeydown(e));
        });
    }

    changeTabPanel(e) {
        const targetTab = e.target;
        const targetPanelId = targetTab.getAttribute('aria-controls');
        const targetPanel = this.panels.find(panel => panel.id === targetPanelId);

        this.tabs.forEach(tab => {
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
        });

        this.panels.forEach(panel => {
            panel.hidden = true;
        });

        targetTab.setAttribute('aria-selected', 'true');
        targetTab.removeAttribute('tabindex');
        targetPanel.hidden = false;
        targetTab.focus();
    }

    tabKeydown(e) {
        const keydownLeft = 37;
        const keydownRight = 39;
        const index = this.tabs.indexOf(document.activeElement);

        if (e.keyCode === keydownLeft && index > 0) {
            this.tabs[index - 1].focus();
        } else if (e.keyCode === keydownRight && index < this.tabs.length - 1) {
            this.tabs[index + 1].focus();
        }
    }
}
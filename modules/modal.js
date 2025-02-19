export class Modal {
    constructor() {
        this.openButton = document.getElementById('openModal');
        this.modal = document.getElementById('modal');
        this.closeButton = document.querySelector('.close-btn');
        this.modalText = document.getElementById('modalText');
        this.focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        this.init();
    }

    init() {
        this.openButton.addEventListener('click', () => this.openModal());
        this.closeButton.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.closeModal();
            } else if (event.key === 'Tab') {
                this.trapFocus(event);
            }
        });
    }

    openModal() {
        this.modal.classList.add('show');
        this.modal.setAttribute('aria-hidden', 'false');
        this.openButton.setAttribute('aria-expanded', 'true');
        console.log('getFocusableElements', this.getFocusableElements());
        this.getFocusableElements[0].focus();
    }

    closeModal() {
        this.modal.classList.remove('show');
        this.modal.setAttribute('aria-hidden', 'true');
        this.openButton.setAttribute('aria-expanded', 'false');
        this.openButton.focus();
    }

    getFocusableElements() {
        const elements = this.modal.querySelectorAll(this.focusableElements);
        return elements.length ? elements : [this.closeButton];
    }

    trapFocus(event) {

        const focusableElements = this.getFocusableElements();
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            event.preventDefault();
        }
    }
}

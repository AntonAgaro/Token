export default class TabMenu {
    constructor(buttonSelector, tabMenuSelector, headerSelector, activeClass, closeBtn) {
        this.btn = document.querySelector(buttonSelector);
        this.tabMenu = document.querySelector(tabMenuSelector);
        this.closeBtn = this.tabMenu.querySelector('.close');
        this.header = document.querySelector(headerSelector);
        this.activeClass = activeClass;
    }

    showTabMenu() {
        this.tabMenu.classList.toggle(this.activeClass);
        this.header.classList.toggle('header-hide');
    }

    hideTabMenu() {
        this.tabMenu.classList.remove(this.activeClass);
        this.header.classList.remove('header-hide');
    }

    bindTab() {
        document.addEventListener('click', (event) => {
            const target = event.target;
            if (target == this.btn) {
                this.showTabMenu();
            }
            if (target.matches('.header__menu-item-link') || target == this.closeBtn) {
                this.hideTabMenu();
            }

        });

    }
}
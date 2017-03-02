export class PageScroll {
    constructor() {
        this.homePage = document.querySelector('.section.home');
        this.homePage.style.setProperty('height', this.homePage.clientHeight);
    }
}
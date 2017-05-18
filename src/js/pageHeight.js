export class PageHeight {
    constructor() {
        this.homePage = document.querySelector('.section.home');
        this.setHomePageHeight();
    }

    setHomePageHeight() {
        this.homePage.style.setProperty('height', window.innerHeight);
        console.log(this.homePage.clientHeight);
    }
}
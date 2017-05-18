import scroll from 'scroll';

export class PageScroll {
    constructor() {
        this.aboutContainer = document.querySelector('.section.about');
        this.scrollChevron = document.querySelector('.fa-chevron-down');

        this.scrollChevron.addEventListener('click', (event) => this.scrollToAbout(event));
    }
 
    scrollToAbout() {
        scroll.top(document.body, this.aboutContainer.offsetTop);
    }
}
import { ProjectOverlay } from './projectOverlay';
new ProjectOverlay();

import { PageScroll } from './pageScroll';
new PageScroll();

import { PageHeight } from './pageHeight';
let pageHeight = new PageHeight();


pageHeight.setHomePageHeight();

window.addEventListener('resize', () => {
    pageHeight.setHomePageHeight();
});


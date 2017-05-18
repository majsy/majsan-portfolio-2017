'use strict';

var _projectOverlay = require('./projectOverlay');

var _pageScroll = require('./pageScroll');

var _pageHeight = require('./pageHeight');

new _projectOverlay.ProjectOverlay();

new _pageScroll.PageScroll();

var pageHeight = new _pageHeight.PageHeight();

pageHeight.setHomePageHeight();

window.addEventListener('resize', function () {
    pageHeight.setHomePageHeight();
});
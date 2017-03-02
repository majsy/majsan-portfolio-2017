'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageScroll = exports.PageScroll = function PageScroll() {
    _classCallCheck(this, PageScroll);

    this.homePage = document.querySelector('.section.home');
    this.homePage.style.setProperty('height', this.homePage.clientHeight);
};
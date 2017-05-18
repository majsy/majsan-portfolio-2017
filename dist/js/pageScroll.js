'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageScroll = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scroll = require('scroll');

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageScroll = exports.PageScroll = function () {
    function PageScroll() {
        var _this = this;

        _classCallCheck(this, PageScroll);

        this.aboutContainer = document.querySelector('.section.about');
        this.scrollChevron = document.querySelector('.fa-chevron-down');

        this.scrollChevron.addEventListener('click', function (event) {
            return _this.scrollToAbout(event);
        });
    }

    _createClass(PageScroll, [{
        key: 'scrollToAbout',
        value: function scrollToAbout() {
            _scroll2.default.top(document.body, this.aboutContainer.offsetTop);
        }
    }]);

    return PageScroll;
}();
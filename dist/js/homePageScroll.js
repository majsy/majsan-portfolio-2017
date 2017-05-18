'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HomePageScroll = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scroll = require('scroll');

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePageScroll = exports.HomePageScroll = function () {
    function HomePageScroll() {
        _classCallCheck(this, HomePageScroll);

        this.projectsContainer = document.querySelector('.section.projects');

        console.log('hej');

        // on button click, call this.scrollToProjects
        this.scrollToProjects();
    }

    _createClass(HomePageScroll, [{
        key: 'scrollToProjects',
        value: function scrollToProjects() {
            _scroll2.default.top(document.body, this.projectsContainer.offsetTop);
            console.log('hej');
        }
    }]);

    return HomePageScroll;
}();
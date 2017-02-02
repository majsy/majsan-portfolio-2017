'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectOverlay = exports.ProjectOverlay = function () {
    function ProjectOverlay() {
        var _this = this;

        _classCallCheck(this, ProjectOverlay);

        this.projectOverlay = document.querySelector('.project-overlay');
        this.projectContainer = document.querySelector('.section.projects');
        this.projectTitle = [].slice.call(document.querySelectorAll('.projects .list-item'));
        this.closeIcon = this.projectOverlay.querySelector('.close');
        this.projectContents = [].slice.call(this.projectOverlay.querySelectorAll('.project-content'));

        this.projectTitle.forEach(function (title) {
            return title.addEventListener('click', function (event) {
                return _this.displayOverlay(event, title.dataset.projectId);
            });
        });

        this.closeIcon.addEventListener('click', function (event) {
            return _this.hideOverlay(event);
        });
    }

    _createClass(ProjectOverlay, [{
        key: 'displayOverlay',
        value: function displayOverlay(event, projectId) {
            event.preventDefault();

            // hide all project contents    
            this.projectContents.forEach(function (element) {
                return element.classList.remove('is-visible');
            });

            // show currently active project
            this.getProjectContent(projectId).classList.add('is-visible');

            // animate project container up
            this.projectOverlay.style.setProperty('transform', 'translateY(0%)');
            // TODO change to using a class
            this.projectContainer.classList.add('project-overlay-visible');

            // set height of container to height of project
            this.projectContainer.style.setProperty('height', this.projectOverlay.clientHeight);
        }
    }, {
        key: 'hideOverlay',
        value: function hideOverlay(event) {
            event.preventDefault();

            // animate project overlay down
            this.projectOverlay.style.setProperty('transform', 'translateY(100%)');
            this.projectContainer.classList.remove('project-overlay-visible');

            // reset height
            this.projectContainer.style.removeProperty('height');
        }
    }, {
        key: 'getProjectContent',
        value: function getProjectContent(projectId) {
            return this.projectContents.find(function (element) {
                return element.dataset.projectId == projectId;
            });
        }
    }]);

    return ProjectOverlay;
}();
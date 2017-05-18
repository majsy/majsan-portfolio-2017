export class ProjectOverlay {
    constructor() {
        this.projectOverlay = document.querySelector('.project-overlay');
        this.projectContainer = document.querySelector('.section.projects');
        this.projectTitle = [].slice.call(document.querySelectorAll('.projects .list-item'));
        this.closeIcon = this.projectOverlay.querySelector('.close');
        this.projectContents = [].slice.call(this.projectOverlay.querySelectorAll('.project-content'));

        this.projectTitle
            .forEach(title =>
                title.addEventListener('click', (event) => this.displayOverlay(event, title.dataset.projectId)));

        this.closeIcon.addEventListener('click', (event) => this.hideOverlay(event));
    }

    displayOverlay(event, projectId) {
        event.preventDefault();

        // hide all project contents    
        this.projectContents.forEach(element => element.classList.remove('is-visible'));

        // show currently active project
        this.getProjectContent(projectId).classList.add('is-visible');

        // animate project container up
        this.projectOverlay.style.setProperty('transform', 'translateY(0%)');

        this.projectContainer.classList.add('project-overlay-visible');

        // set height of container to height of project
        this.projectContainer.style.setProperty('height', this.projectOverlay.clientHeight);
    }

    hideOverlay(event) {
        event.preventDefault();

        // animate project overlay down
        this.projectOverlay.style.setProperty('transform', 'translateY(100%)');
        this.projectContainer.classList.remove('project-overlay-visible');

        // reset height
        this.projectContainer.style.removeProperty('height');
    }

    getProjectContent(projectId) {
        return this.projectContents.find(element => element.dataset.projectId == projectId);
    }
}
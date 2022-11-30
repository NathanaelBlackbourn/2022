window.addEventListener('DOMContentLoaded', runFrame());

/** This objects holds HTML elements in the work-frame section of the site */
const frameElements = {};

function runFrame() {
    getFrameElements();
}

function getFrameElements() {
    // Work frame itself
    frameElements.frame = document.getElementById('frame');
}
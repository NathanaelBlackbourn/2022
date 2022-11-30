window.addEventListener('DOMContentLoaded', projectButtonListeners);

// Project loading functionality

/** Adds openWork function as a listener to each project button. */
function projectButtonListeners() {
    const frame = document.getElementById('frame');
    navElements.recreateButton.addEventListener('click', () => {
        frame.src = 'work/aterskapa-en-hemsida/index.html';
    })
 }
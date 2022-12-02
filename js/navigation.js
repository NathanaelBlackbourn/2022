/** This file controls the interactivity of the header element. */

/** Calls the function responsible for page navigation. */
function runNav() {
    // Navigation between sections
    getNavElements();
    welcomeListener();
    projectsListener();
    aboutListener();
    // Launching projects
    projectButtonListeners();
}

/** Gets elements from the DOM relevant to page navigation. Assings them to the DOMElements object. */
function getNavElements() {
    // Columns to toggle
    DOMElements.welcome = document.getElementById('welcome');
    DOMElements.main = document.getElementById('nav-main');
    DOMElements.projectsCol = document.getElementById('projects-col');
    DOMElements.aboutCol = document.getElementById('about-col');
    DOMElements.CVCol = document.getElementById('cv-col');
    // Buttons that toggle columns
    DOMElements.goButton = document.getElementById('go');
    DOMElements.workButton = document.getElementById('work-button');
    DOMElements.projectsButton = document.getElementById('projects-button');
    DOMElements.aboutButton = document.getElementById('about-me-button');
}

/**
 * Checks arguments for class hidden, removes when found.
 * @param  {...HTMLElement} elements Column elements to be shown.
 */
 function toggleOn(...elements) {
    elements.forEach(e => {
        e.classList.toggle('hidden');
    })
}

/**
 * Checks arguments for class hidden, adds where missing.
 * @param  {...HTMLElement} elements Column elements to be hidden.
 */
function toggleOff(...elements) {
    elements.forEach(e => {
        if (e.classList.contains('hidden') === false) {
            e.classList.toggle('hidden');
        }
    })
}

/** Adds event listener to welcome block. */
function welcomeListener() {
    DOMElements.goButton.addEventListener("click", () => {
        toggleOn(DOMElements.main);
        toggleOff(DOMElements.welcome);
    });
}

/** Adds event listener to projects button */
function projectsListener() {

    DOMElements.projectsButton.addEventListener('click', () => {
        toggleOn(DOMElements.projectsCol);
        toggleOff(DOMElements.aboutCol, DOMElements.CVCol);
    })
}

/** Adds event listener to about me button */
function aboutListener () {
    DOMElements.aboutButton.addEventListener('click', () => {
        toggleOn(DOMElements.aboutCol, DOMElements.CVCol);
        toggleOff(DOMElements.projectsCol);
    })
}
 
 /** Adds openWork function as a listener to each project button. */
function projectButtonListeners() {
    DOMElements.frame = document.getElementById('frame');
    document.getElementById('recreate-button').addEventListener('click', () => {
        DOMElements.frame.src = 'work/aterskapa-en-hemsida/index.html';
        clopenHeader();
    })
    document.getElementById('modernise-button').addEventListener('click', () => {
        DOMElements.frame.src = 'work/modernisera-en-hemsida/index.html';
        clopenHeader();
    })
    document.getElementById('game-button').addEventListener('click', () => {
        DOMElements.frame.src = 'work/textbaserat-spel/index.html';
        clopenHeader();
    })
 }
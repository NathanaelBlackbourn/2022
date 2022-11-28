window.addEventListener('DOMContentLoaded', runNav);

/** Object declared empty, populated on page load with HTML elements in nav. */
const navElements = {};

/** Applies functionality to header nav by calling in other specific functions. */
function runNav() {
    getNavElements();
    welcomeListener();
    workListener();
    projectsListener();
    aboutListener();
    CVListeners();
}

/** Gets HTML elements in nav bar after page load and adds to navElements object */
function getNavElements() {
    navElements.header = document.querySelector('header');
    // Columns to toggle
    navElements.welcome = document.getElementById('welcome');
    navElements.main = document.getElementById('nav-main');
    navElements.workCol = document.getElementById('work-col');
    navElements.projectsCol = document.getElementById('projects-col');
    navElements.aboutCol = document.getElementById('about-col');
    navElements.CVCol = document.getElementById('cv-col');
    // Buttons that toggle columns
    navElements.goButton = document.getElementById('go');
    navElements.workButton = document.getElementById('work-button');
    navElements.projectsButton = document.getElementById('projects-button');
    navElements.aboutButton = document.getElementById('about-me-button');
    // CV scroll buttons
    navElements.skillsButton = document.getElementById('skills-button');
    navElements.educationButton = document.getElementById('education-button');
    navElements.experienceButton = document.getElementById('experience-button');
    navElements.languagesButton = document.getElementById('languages-button');
    // CV scroll button targets
    navElements.skillsLine = document.getElementById('skills-line');
    navElements.educationLine = document.getElementById('education-line');
    navElements.experienceLine = document.getElementById('experience-line');
    navElements.languagesLine = document.getElementById('languages-line');
}

/**
 * Checks arguments for class hidden, removes when found.
 * @param  {...HTMLElement} elements Column elements to be shown.
 */
function toggleOn(...elements) {
    elements.forEach(e => {
        if (e.classList.contains('hidden')) {
            e.classList.toggle('hidden');
        }
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
    navElements.goButton.addEventListener("click", () => {
        toggleOn(navElements.main);
        toggleOff(navElements.welcome);
    });
}

/** Adds event listener to work button */
function workListener() {
    navElements.workButton.addEventListener('click', () => {
        toggleOn(navElements.workCol);
        toggleOff(navElements.projectsCol, navElements.aboutCol, navElements.CVCol);
    })
}

/** Adds event listener to projects button */
function projectsListener() {
    navElements.projectsButton.addEventListener('click', () => {
        toggleOn(navElements.projectsCol);
        toggleOff(navElements.workCol, navElements.aboutCol, navElements.CVCol);
    })
}

/** Adds event listener to about me button */
function aboutListener () {
    navElements.aboutButton.addEventListener('click', () => {
        toggleOn(navElements.aboutCol, navElements.CVCol);
        toggleOff(navElements.workCol, navElements.projectsCol);
        navElements.header.classList.toggle('expanded');
    })
}

/** CV nav buttons scroll to place */
function CVListeners() {
    navElements.skillsButton.addEventListener('click', () => {
        navElements.skillsLine.scrollIntoView(true);
    })
    navElements.educationButton.addEventListener('click', () => {
        navElements.educationLine.scrollIntoView(true);
    })
    navElements.experienceButton.addEventListener('click', () => {
        navElements.experienceLine.scrollIntoView(true);
    })
    navElements.languagesButton.addEventListener('click', () => {
        navElements.languagesLine.scrollIntoView(true);
    })
}
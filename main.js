window.addEventListener('DOMContentLoaded', runNav);

/** Object declared empty, populated on page load with HTML elements in nav. */
const navElements = {};

/** Applies functionality to header nav by calling in other specific functions. */
function runNav() {
    getNavElements();
    welcomeListener();
    aboutListener();
    CVListeners();
}

/** Gets HTML elements in nav bar after page load and adds to navElements object */
function getNavElements() {
    navElements.header = document.querySelector('header');
    // Columns to toggle
    navElements.welcome = document.getElementById('welcome');
    navElements.main = document.getElementById('nav-main');
    navElements.aboutCol = document.getElementById('about-col');
    navElements.CVCol = document.getElementById('cv-col');
    // Buttons that toggle columns
    navElements.goButton = document.getElementById('go');
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
 * Takes elements as arguments and toggles hidden state.
 * @param {HTMLElement} 1 or more, adds to array
 */
function toggleElements (...elements) {
    elements.forEach(element => {
        element.classList.toggle("hidden");
    });
}

/** Adds event listener to welcome block. */
function welcomeListener() {
    navElements.goButton.addEventListener("click", () => {
        toggleElements(navElements.welcome, navElements.main);
    });
}

/** Adds event listener to about me button */
function aboutListener () {
    navElements.aboutButton.addEventListener('click', () => {
        toggleElements(navElements.aboutCol, navElements.CVCol);
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
/** This file runs the script and holds the DOMElements object where interactive DOM elements are assigned to properties. */

window.addEventListener('DOMContentLoaded', runPage);

/** Object declared empty, populated on page load with HTML elements in nav. */
const DOMElements = {};

/** Applies functionality to header nav by calling in other specific functions. */
function runPage() {
    getDOMElements();
    // navigation.js
    runNav();
    runHeaderPositioning();
    // header-position.js
    runHeaderDynamics();
}

/** Gets overarching HTML elements and assigns then to the DOMElements object */
function getDOMElements() {
    DOMElements.header = document.querySelector('header');
    // Columns to toggle
    DOMElements.welcome = document.getElementById('welcome');
    DOMElements.main = document.getElementById('nav-main');
    DOMElements.workCol = document.getElementById('work-col');
    DOMElements.projectsCol = document.getElementById('projects-col');
    DOMElements.aboutCol = document.getElementById('about-col');
    DOMElements.CVCol = document.getElementById('cv-col');
    // Buttons that toggle columns
    DOMElements.goButton = document.getElementById('go');
    DOMElements.workButton = document.getElementById('work-button');
    DOMElements.projectsButton = document.getElementById('projects-button');
    DOMElements.aboutButton = document.getElementById('about-me-button');
    // Buttons that load projects
    DOMElements.recreateButton = document.getElementById('recreate-button');
}
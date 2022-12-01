/** This file runs the script and holds the DOMElements object where interactive DOM elements are assigned to properties. */

window.addEventListener('DOMContentLoaded', runPage);
/**
 * @typedef {{ [key: string]: HTMLElement }} MyDomElements
 */


/**
 * Object declared empty, populated on page load with HTML elements in nav.
 * @type {MyDomElements}
 **/
const DOMElements = {};

/** Applies functionality to header nav by calling in other specific functions. */
function runPage() {
    getDOMElements();
    // navigation.js
    runNav();
    // header-position.js
    runHeaderDynamics();
}

/** Gets overarching HTML elements and assigns then to the DOMElements object */
function getDOMElements() {
    DOMElements.header = document.querySelector('header');
}
/** This file controls the positioning and size of the header element */

/** Tracks whether the header is open or closed. */
let headerOpen = true;

/** Calls functions respnsible for the header element's dynamics. */
function runHeaderDynamics() {
    addClopenListeners();
}

/** Adds listener to clopen button in the bottom right corner of the header */
function addClopenListeners() {
    DOMElements.clopen = document.getElementById('clopen');
    clopen.addEventListener('click', clopenHeader)
}

/** Checks the headerOpen variable and closes or opens the header accordingly */
function clopenHeader() {
    const headerHeight = getHeaderHeight();
    if (headerOpen) {
        DOMElements.header.style.top = '-' + (headerHeight - 35) + 'px';
        headerOpen = false;
        DOMElements.clopen.innerText = 'open';
    } else {
        DOMElements.header.style.top = '0';
        headerOpen = true;
        DOMElements.clopen.innerText = 'close';
    }
}

/** Returns the current height of the header */
function getHeaderHeight() {
    const headerRect = DOMElements.header.getBoundingClientRect();
    return headerRect.height
}

/** Resets header height to auto. Enables sizing header organically. */
function resetHeight() {
    DOMElements.header.style.height = 'auto';
}

/** Fixes header height to facilitate layout. Fixes max at window height. */
 function heightControl() {
    // Get viewport height
    const windowHeight = window.innerHeight;
    //Get organic header height
    const autoHeight = getHeaderHeight();
    //Set height to autmoatic height or limit to 100vh
    if (autoHeight < windowHeight) {
        DOMElements.header.style.height = autoHeight + 'px';
    } else {
        DOMElements.header.style.height = windowHeight + 'px';
    }
 }
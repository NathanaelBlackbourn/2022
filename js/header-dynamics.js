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
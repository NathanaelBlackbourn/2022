/** This file controls the positioning and size of the header element */

/** Calls functions respnsible for the header element's dynamics. */
function runHeaderDynamics() {

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
    const headerRect = DOMElements.header.getBoundingClientRect();
    const autoHeight = headerRect.height;
    //Set height to autmoatic height or limit to 100vh
    if (autoHeight < windowHeight) {
        DOMElements.header.style.height = autoHeight + 'px';
    } else {
        DOMElements.header.style.height = windowHeight + 'px';
    }
 }
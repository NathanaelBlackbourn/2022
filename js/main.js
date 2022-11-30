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
    projectButtonListeners();
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
    // Buttons that load projects
    navElements.recreateButton = document.getElementById('recreate-button');
    // CV scroll nav
    navElements.CVScrollNav = document.getElementById('cv-scroll-nav');
    // CV scroll buttons
    navElements.skillsButton = document.getElementById('skills-button');
    navElements.educationButton = document.getElementById('education-button');
    navElements.experienceButton = document.getElementById('experience-button');
    navElements.languagesButton = document.getElementById('languages-button');
    // CV scroll button targets
    navElements.skillsHeader = document.getElementById('skills-header');
    navElements.educationHeader = document.getElementById('education-header');
    navElements.experienceHeader = document.getElementById('experience-header');
    navElements.languagesBlock = document.getElementById('languages-block');
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
    navElements.goButton.addEventListener("click", () => {
        resetHeight();
        toggleOn(navElements.main);
        toggleOff(navElements.welcome);
        heightControl();
    });
}

/** Adds event listener to work button */
function workListener() {
    navElements.workButton.addEventListener('click', () => {
        resetHeight();
        toggleOn(navElements.workCol);
        toggleOff(navElements.projectsCol, navElements.aboutCol, navElements.CVCol);
        heightControl();
    })
}

/** Adds event listener to projects button */
function projectsListener() {
    navElements.projectsButton.addEventListener('click', () => {
        resetHeight();
        toggleOn(navElements.projectsCol);
        toggleOff(navElements.workCol, navElements.aboutCol, navElements.CVCol);
        heightControl();
    })
}

/** Adds event listener to about me button */
function aboutListener () {
    navElements.aboutButton.addEventListener('click', () => {
        resetHeight();
        toggleOn(navElements.aboutCol, navElements.CVCol);
        toggleOff(navElements.workCol, navElements.projectsCol);
        heightControl();
    })
}

/** CV nav buttons scroll to place */
function CVListeners() {
    navElements.skillsButton.addEventListener('click', () => {
        navElements.skillsHeader.scrollIntoView({behavior: 'smooth', block: 'start'});
    })
    navElements.educationButton.addEventListener('click', () => {
        navElements.educationHeader.scrollIntoView({behavior: 'smooth', block: 'start'});
    })
    navElements.experienceButton.addEventListener('click', () => {
        navElements.experienceHeader.scrollIntoView({behavior: 'smooth', block: 'start'});
    })
    navElements.languagesButton.addEventListener('click', () => {
        const colRect = navElements.CVCol.getBoundingClientRect();
        navElements.CVCol.scroll({top: navElements.CVCol.scrollHeight - colRect.height, behavior: 'smooth'})
    })
}

/** Resets header height to auto. Enables sizing header organically. */
function resetHeight() {
    navElements.header.style.height = 'auto';
}

/** Fixes header height to facilitate layout. Fixes max at window height. */
 function heightControl() {
    // Get viewport height
    const windowHeight = window.innerHeight;
    //Get organic header height
    const headerRect = navElements.header.getBoundingClientRect();
    const autoHeight = headerRect.height;
    //Set height to autmoatic height or limit to 100vh
    if (autoHeight < windowHeight) {
        navElements.header.style.height = autoHeight + 'px';
    } else {
        navElements.header.style.height = windowHeight + 'px';
    }
 }

 // Project loading functionality

 function projectButtonListeners() {
    navElements.recreateButton.addEventListener('click', () => {
        frameElements.frame.innerHTML='<object type="text/html" data="work/aterskapa-en-hemsida/index.html"></object>'
    })
 }

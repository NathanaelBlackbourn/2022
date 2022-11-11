function toggleElements (...elements) {
    elements.forEach(element => {
        element.classList.toggle("hidden");
    });
}

function nav() {
    let goButton = document.getElementById("go");
    let welcome = document.getElementById("welcome");
    let navMain = document.getElementById("nav-main");
    goButton.addEventListener("click", (e) => {
        toggleElements(welcome, navMain);
    });
}

nav();
let themeDots = document.getElementsByClassName("theme-dot");
let currentMode = localStorage.getItem("currentMode");

if (currentMode == null) {
    setTheme("light");
} else {
    setTheme(currentMode);
}


for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener("click", function () {
        let mode = this.dataset.mode;
        currentMode = mode;
        setTheme(currentMode);
    });
    themeDots[i].addEventListener("mouseover", function () {
        let mode = this.dataset.mode;
        setHoverTheme(mode);
    });
    themeDots[i].addEventListener("mouseout", function () {
        let mode = this.dataset.mode;
        clearHoverTheme();
    });
}

function setTheme(mode) {
    if (currentMode == "light") {
        document.getElementById("theme-style").href = "default.css";
    } else if (currentMode == "dark") {
        document.getElementById("theme-style").href = "dark-mode.css";
    }

    localStorage.setItem("currentMode", currentMode);
}

function setHoverTheme(mode) {
    if (mode == "light") {
        document.getElementById("theme-style").href = "default.css";
    } else if (mode == "dark") {
        document.getElementById("theme-style").href = "dark-mode.css";
    }
}

function clearHoverTheme() {
    if (currentMode == "light") {
        document.getElementById("theme-style").href = "default.css";
    } else if (currentMode == "dark") {
        document.getElementById("theme-style").href = "dark-mode.css";
    }
}
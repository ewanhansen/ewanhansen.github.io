let themeDots = document.getElementsByClassName("theme-dot");
let currentMode = localStorage.getItem("currentMode");
var darkProfilePic = new Image();
var lightProfilePic = new Image();
lightProfilePic.src = "./images/ProfilePictureInverted.png";
darkProfilePic.src = "./images/ProfilePicture.png";


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
        document.getElementById("profile_pic").src = lightProfilePic.src;
    } else if (currentMode == "dark") {
        document.getElementById("theme-style").href = "dark-mode.css";
        document.getElementById("profile_pic").src = darkProfilePic.src;
    }

    localStorage.setItem("currentMode", currentMode);
}

function setHoverTheme(mode) {
    if (mode == "light") {
        document.getElementById("theme-style").href = "default.css";

    } else if (mode == "dark") {
        document.getElementById("theme-style").href = "dark-mode.css";
        document.getElementById("profile_pic").src = darkProfilePic.src;
    }
}

function clearHoverTheme() {
    if (currentMode == "light") {
        document.getElementById("theme-style").href = "default.css";
        document.getElementById("profile_pic").src = lightProfilePic.src;
    } else if (currentMode == "dark") {
        document.getElementById("theme-style").href = "dark-mode.css";
        document.getElementById("profile_pic").src = darkProfilePic.src;
    }
}
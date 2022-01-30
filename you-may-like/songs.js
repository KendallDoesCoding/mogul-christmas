// Const Songs
const songs = {
    "Christmas Song": {
        start: "0",
        end: "211"
    },
    "Baby It's Cold Outside": {
        start: "212",
        end: "373"
    },
    "The Most Wonderful Time Of The Year": {
        start: "374",
        end: "524"
    },
    "Last Christmas": {
        start: "525",
        end: "807"
    },
    "Little Saint Nick": {
        start: "808",
        end: "939"
    },
    "All I Want For Christmas": {
        start: "940",
        end: "1179"
    },
    "All Of The Above": {
        start: "0"
    },
};
const songsDOM = document.querySelector(".songs");
const embed = document.getElementById("embed");
const newTabGithub = document.querySelector(".social");
const toggle = document.querySelector(".round");
const slider = document.querySelector(".slider");
toggle.addEventListener("click", modeSwitch);

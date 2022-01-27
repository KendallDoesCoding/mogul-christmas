// Darkmode/Lightmode
const slider = document.querySelector(".slider");
const toggle_lyrics_page = document.querySelector(".round");
toggle_socials_page.addEventListener("click", modeSwitch);
let isLight = true;

function modeSwitch() {
    isLight = !isLight;
    isLight
        ?
        (slider.style.backgroundImage = "url('../images/day.png')") :
        (slider.style.backgroundImage = "url('../images/night.png')");
    const rootElement = document.body;
    rootElement.classList.toggle("darkMode");
}

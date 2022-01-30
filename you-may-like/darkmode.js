let isLight = true;

const updateMode = () => {
    isLight
        ?
        (slider.style.backgroundImage = "url('./images/day.png')") :
        (slider.style.backgroundImage = "url('./images/night.png')");
    const rootElement = document.body;
    rootElement.classList.toggle("darkMode");
}

function modeSwitch() {
    isLight = !isLight;
    updateMode()
}
embed.style = "display:none";
let userHasClickedASong = false;

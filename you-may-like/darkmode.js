// Darkmode/Lightmode
const slider = document.querySelector(".slider");
const toggle_lyrics_page = document.querySelector(".round");
toggle_lyrics_page.addEventListener("click", modeSwitch);
let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

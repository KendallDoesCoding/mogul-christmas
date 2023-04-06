// Find the lyrics for the song "all i want for christmas" in the "lyrics" array.
const song = lyrics.find((x) => x.name === "all i want for christmas").lyrics;

// Select the lyrics container from the HTML document
const lyrics__container = document.getElementsByClassName("lyrics")[0];

// Select the slider for the song "all i want for christmas"
const slider_all_I_want_for_christmas = document.querySelector(".slider");

// Create a new paragraph element for each line of the song, and append it to the lyrics container
song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return lyrics__container.appendChild(p);
});

// Select the toggle button for switching between light and dark modes
const toggle_all_I_want_for_christmas = document.querySelector(".round");
toggle_all_I_want_for_christmas.addEventListener("click", modeSwitch);

// Set the initial mode to "light"
let isLight_all_I_want_for_christmas = true;
function modeSwitch() {
  isLight_all_I_want_for_christmas = !isLight_all_I_want_for_christmas;
  isLight_all_I_want_for_christmas
    ? (slider_all_I_want_for_christmas.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_all_I_want_for_christmas.style.backgroundImage =
        "url('../../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

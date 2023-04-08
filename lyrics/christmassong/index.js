// Find the lyrics of the song "christmas song" from the "lyrics" array of objects
const christmas_song = lyrics.find((x) => x.name === "christmas song").lyrics;

// Get the first element with class "lyrics" from the HTML document
const christmas_song__container = document.getElementsByClassName("lyrics")[0];

// Loop through each item of the lyrics and append it as a <p> element to the container
christmas_song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return christmas_song__container.appendChild(p);
});

// Get the slider and toggle elements from the HTML document
const slider_christmas_song = document.querySelector(".slider");

const toggle_christmas_song = document.querySelector(".round");

// Add an event listener to the toggle element to switch between light and dark modes when clicked
toggle_christmas_song.addEventListener("click", modeSwitch);

// Initialize a boolean variable to track the current mode (light or dark) of the lyrics section
let isLight_christmas_song = true;

// Define the function to switch between light and dark modes
function modeSwitch() {
  isLight_christmas_song = !isLight_christmas_song;

  // Change the background image of the slider based on the current mode
  isLight_christmas_song
    ? (slider_christmas_song.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_christmas_song.style.backgroundImage =
        "url('../../images/night.png')");
  // Toggle the "darkMode" class on the root element of the document to switch between light and dark mode
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

// Find the lyrics of the song "Baby, It's Cold Outside" from the lyrics array
const its_cold_outside = lyrics.find(
  (x) => x.name === "baby its cold outside"
).lyrics;

// Select the HTML element with the class "lyrics" to contain the lyrics of the song
const its_cold_outside__container =
  document.getElementsByClassName("lyrics")[0];

// Create HTML paragraph elements for each line of the lyrics and append them to the lyrics container
its_cold_outside.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return its_cold_outside__container.appendChild(p);
});

// Select the slider element for the song "Baby, It's Cold Outside"
const slider_baby_its_cold_outside = document.querySelector(".slider");

// Select the toggle button for the dark mode of the song "Baby, It's Cold Outside"
const toggle_on_baby_its_cold_outside = document.querySelector(".round");

// Add an event listener to the toggle button for the dark mode of the song "Baby, It's Cold Outside"
toggle_on_baby_its_cold_outside.addEventListener("click", modeSwitch);

// Set the initial state of the dark mode to light
let isLight_baby_its_cold_outside = true;

// Define the function to switch between light and dark modes
function modeSwitch() {
  isLight_baby_its_cold_outside = !isLight_baby_its_cold_outside;

  isLight_baby_its_cold_outside
    ? (slider_baby_its_cold_outside.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_baby_its_cold_outside.style.backgroundImage =
        "url('../../images/night.png')");

  // Toggle the "darkMode" class of the body element to switch the color scheme of the page
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

// Darkmode/Lightmode
// Select the slider element from the DOM
const slider = document.querySelector(".slider");
// Select the toggle element from the DOM
const toggle_lyrics_page = document.querySelector(".round");
// Add an event listener to the toggle element, listening for a click event
toggle_lyrics_page.addEventListener("click", modeSwitch);
// Initialize a boolean variable to track whether the page is currently in light mode or dark mode
let isLight = true;

// Define a function to switch between light mode and dark mode
function modeSwitch() {
  // Invert the value of the boolean variable
  isLight = !isLight;
  // Select the root element from the DOM (i.e. the <body> element)
  const rootElement = document.body;
  // Toggle the "darkMode" class on the root element
  rootElement.classList.toggle("darkMode");
}

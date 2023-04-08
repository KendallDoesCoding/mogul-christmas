// Darkmode/Lightmode //

// Select the slider element and store it in a variable
const slider = document.querySelector(".slider");

// Select the toggle button element and store it in a variable
const toggle_lyrics_page = document.querySelector(".round");

// Add an event listener to the toggle button that calls the modeSwitch function when clicked
toggle_lyrics_page.addEventListener("click", modeSwitch);

// Set an initial state variable to true
let isLight = true;

// Define the modeSwitch function
function modeSwitch() {
  // Invert the current state of isLight
  isLight = !isLight;
  // Select the body element and store it in a variable
  const rootElement = document.body;
  // Toggle the "darkMode" class on the body element
  rootElement.classList.toggle("darkMode");
}

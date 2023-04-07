// The toggle button wasn't working for some reason in the "Other Projects" directory, so aliraza made this script to make it work.
const toggle_other_projects = document.querySelector(".round");
const slider_other_projects = document.querySelector(".slider");
toggle_other_projects.addEventListener("click", modeSwitch);

// A boolean variable to keep track of whether the mode is currently in light mode or not
let isLight_other_projects = true;

// A function that updates the mode for other projects
const updateModeForOtherProject = () => {
  // If the mode is currently in light mode, set the background image to a day image; otherwise, set it to a night image
  isLight_other_projects
    ? (slider_other_projects.style.backgroundImage = "url('../images/day.png')")
    : (slider_other_projects.style.backgroundImage =
        "url('../images/night.png')");

  // Toggle the "darkMode" class on the root element to switch between light and dark mode
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
};

// A function that toggles the mode between light and dark
function modeSwitch() {
  // Invert the boolean value of isLight_other_projects
  isLight_other_projects = !isLight_other_projects;
  // Call the updateModeForOtherProject function to update the mode
  updateModeForOtherProject();
}

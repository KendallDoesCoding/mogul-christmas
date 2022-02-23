// The toggle button wasn't working for some reason in the "Other Projects" directory, so aliraza made this script to make it work.
const toggle_other_projects = document.querySelector(".round");
const slider_other_projects = document.querySelector(".slider");
toggle_other_projects.addEventListener("click", modeSwitch);

let isLight_other_projects = true;

const updateModeForOtherProject = () => {
  isLight_other_projects
    ? (slider_other_projects.style.backgroundImage = "url('../images/day.png')")
    : (slider_other_projects.style.backgroundImage =
        "url('../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
};

function modeSwitch() {
  isLight_other_projects = !isLight_other_projects;
  updateModeForOtherProject();
}

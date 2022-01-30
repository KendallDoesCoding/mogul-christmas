const toggle_other_projects = document.querySelector(".round");
const slider_other_projects = document.querySelector(".slider");
toggle_you-may-like_projects.addEventListener("click", modeSwitch);

let isLight_you-may-like_projects = true;

const updateModeForOtherProject = () => {
  isLight_you-may-like_projects
    ? (slider_you-may-like_projects.style.backgroundImage = "url('../images/day.png')")
    : (slider_you-may-like_projects.style.backgroundImage =
        "url('../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
};

function modeSwitch() {
  isLight_you-may-like_projects = !isLight_other_projects;
  updateModeForOtherProject();
}

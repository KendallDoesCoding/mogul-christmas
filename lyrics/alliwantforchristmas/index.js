const song = lyrics.find((x) => x.name === "all i want for christmas").lyrics;

//getting the first class and giving it a variable to use afterwards

const lyrics__container = document.getElementsByClassName("lyrics")[0];
const slider_all_I_want_for_christmas = document.querySelector(".slider");
song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  // start another line
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return lyrics__container.appendChild(p);
});

const toggle_all_I_want_for_christmas = document.querySelector(".round");
// swtiching mode (can check the function for more info)
toggle_all_I_want_for_christmas.addEventListener("click", modeSwitch);
let isLight_all_I_want_for_christmas = true;
function modeSwitch() {
  isLight_all_I_want_for_christmas = !isLight_all_I_want_for_christmas;
  // condition to change the bg img as per the song
  isLight_all_I_want_for_christmas
    ? (slider_all_I_want_for_christmas.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_all_I_want_for_christmas.style.backgroundImage =
        "url('../../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

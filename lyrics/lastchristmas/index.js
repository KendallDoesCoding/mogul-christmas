const last_christmas = lyrics.find((x) => x.name === "last christmas").lyrics;

const last_christmas__container = document.getElementsByClassName("lyrics")[0];

last_christmas.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return last_christmas__container.appendChild(p);
});

const slider_last_christmas = document.querySelector(".slider");

const toggle_last_christmas = document.querySelector(".round");
toggle_last_christmas.addEventListener("click", modeSwitch);
let isLight_last_christmas = true;
function modeSwitch() {
  isLight_last_christmas = !isLight_last_christmas;

  isLight_last_christmas
    ? (slider_last_christmas.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_last_christmas.style.backgroundImage =
        "url('../../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

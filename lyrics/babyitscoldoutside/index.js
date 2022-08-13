const its_cold_outside = lyrics.find(
  (x) => x.name === "baby its cold outside"
).lyrics;

const its_cold_outside__container =
  document.getElementsByClassName("lyrics")[0];

its_cold_outside.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return its_cold_outside__container.appendChild(p);
});

const slider_baby_its_cold_outside = document.querySelector(".slider");

const toggle_on_baby_its_cold_outside = document.querySelector(".round");
toggle_on_baby_its_cold_outside.addEventListener("click", modeSwitch);

let isLight_baby_its_cold_outside = true;
function modeSwitch() {
  isLight_baby_its_cold_outside = !isLight_baby_its_cold_outside;

  isLight_baby_its_cold_outside
    ? (slider_baby_its_cold_outside.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_baby_its_cold_outside.style.backgroundImage =
        "url('../../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

const its_cold_outside = lyrics.find(
  (x) => x.name === "baby its cold outside"
).lyrics;

const its_cold_outside__container =
  document.getElementsByClassName("lyrics")[0];

its_cold_outside.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return its_cold_outside__container.appendChild(p);
});
const toggle_on_baby_its_cold_outside = document.querySelector(".round");
toggle_on_baby_its_cold_outside.addEventListener("click", modeSwitch);

function modeSwitch() {
  // isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

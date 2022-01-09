const last_christmas = lyrics.find((x) => x.name === "last christmas").lyrics;

const last_christmas__container = document.getElementsByClassName("lyrics")[0];

last_christmas.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return last_christmas__container.appendChild(p);
});
const toggle_last_christmas = document.querySelector(".round");
toggle_last_christmas.addEventListener("click", modeSwitch);

function modeSwitch() {
  // isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

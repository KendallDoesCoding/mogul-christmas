const little_saint_nick = lyrics.find(
  (x) => x.name === "little saint nick"
).lyrics;

const little_saint_nick__container =
  document.getElementsByClassName("lyrics")[0];

little_saint_nick.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return little_saint_nick__container.appendChild(p);
});
const toggle_little_saint_nick = document.querySelector(".round");
toggle_little_saint_nick.addEventListener("click", modeSwitch);

function modeSwitch() {
  // isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

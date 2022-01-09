const christmas_song = lyrics.find((x) => x.name === "christmas song").lyrics;

const christmas_song__container = document.getElementsByClassName("lyrics")[0];

christmas_song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return christmas_song__container.appendChild(p);
});
const toggle_christmas_song = document.querySelector(".round");
toggle_christmas_song.addEventListener("click", modeSwitch);

function modeSwitch() {
  // isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

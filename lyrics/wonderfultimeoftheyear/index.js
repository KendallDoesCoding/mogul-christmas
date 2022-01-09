const song = lyrics.find(
  (x) => x.name === "the most wonderful time of the year"
).lyrics;

const lyrics__container = document.getElementsByClassName("lyrics")[0];

song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return lyrics__container.appendChild(p);
});
const toggle_wonderful_time_of_the_year = document.querySelector(".round");
toggle_wonderful_time_of_the_year.addEventListener("click", modeSwitch);

function modeSwitch() {
  // isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

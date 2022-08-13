const song = lyrics.find(
  (x) => x.name === "the most wonderful time of the year"
).lyrics;

const lyrics__container = document.getElementsByClassName("lyrics")[0];

song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return lyrics__container.appendChild(p);
});

const slider_wonderful_time_of_the_year = document.querySelector(".slider");

const toggle_wonderful_time_of_the_year = document.querySelector(".round");
toggle_wonderful_time_of_the_year.addEventListener("click", modeSwitch);
let isLight_wonderful_time_of_the_year = true;
function modeSwitch() {
  isLight_wonderful_time_of_the_year = !isLight_wonderful_time_of_the_year;

  isLight_wonderful_time_of_the_year
    ? (slider_wonderful_time_of_the_year.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_wonderful_time_of_the_year.style.backgroundImage =
        "url('../../images/night.png')");

  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

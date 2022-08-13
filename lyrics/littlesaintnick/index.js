const little_saint_nick = lyrics.find(
  (x) => x.name === "little saint nick"
).lyrics;

const little_saint_nick__container =
  document.getElementsByClassName("lyrics")[0];

little_saint_nick.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return little_saint_nick__container.appendChild(p);
});

const slider_little_saint_nick = document.querySelector(".slider");

const toggle_little_saint_nick = document.querySelector(".round");
toggle_little_saint_nick.addEventListener("click", modeSwitch);

let isLight_little_saint_nick = true;

function modeSwitch() {
  isLight_little_saint_nick = !isLight_little_saint_nick;

  isLight_little_saint_nick
    ? (slider_little_saint_nick.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_little_saint_nick.style.backgroundImage =
        "url('../../images/night.png')");

  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

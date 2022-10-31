// getting the lyrics of the song 

const christmas_song = lyrics.find((x) => x.name === "christmas song").lyrics;

const christmas_song__container = document.getElementsByClassName("lyrics")[0];

// mapping over the songs to add them and if the item is not there it breaks the line

christmas_song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  if (!item) {
    p.appendChild(document.createElement("br"));
  }
  return christmas_song__container.appendChild(p);
});

const slider_christmas_song = document.querySelector(".slider");

// switching mode

const toggle_christmas_song = document.querySelector(".round");
toggle_christmas_song.addEventListener("click", modeSwitch);

let isLight_christmas_song = true;

function modeSwitch() {

  // switch mode as per the song
  isLight_christmas_song = !isLight_christmas_song;

  isLight_christmas_song
    ? (slider_christmas_song.style.backgroundImage =
        "url('../../images/day.png')")
    : (slider_christmas_song.style.backgroundImage =
        "url('../../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

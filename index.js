// Const Songs
const songs = {
  "Christmas Song": { start: "0", end: "211" },
  "Baby It's Cold Outside": { start: "212", end: "373" },
  "The Most Wonderful Time Of The Year": { start: "374", end: "524" },
  "Last Christmas": { start: "525", end: "807" },
  "Little Saint Nick": { start: "808", end: "939" },
  "All I Want For Christmas": { start: "940", end: "1179" },
  "All Of The Above": { start: "0" },
};
const songsDOM = document.querySelector(".songs");
const embed = document.getElementById("embed");
const newTabGithub = document.querySelector(".social");
const toggle = document.querySelector(".round");
const slider = document.querySelector(".slider");
toggle.addEventListener("click", modeSwitch);

// Darkmode/Lightmode

let isLight = true;

const updateMode = () => {
  isLight
    ? (slider.style.backgroundImage = "url('./images/day.png')")
    : (slider.style.backgroundImage = "url('./images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}

function modeSwitch() {
  isLight = !isLight;
  updateMode()
}
embed.style = "display:none";
let userHasClickedASong = false;

Object.keys(songs).map((song_title) => {
  const startTime = songs[song_title].start;
  const endTime = songs[song_title].end;
  const outerElem = document.createElement("p");
  const link = document.createElement("a");
  link.innerHTML = song_title;
  link.style = "cursor: pointer";
  link.onclick = () => {
    embed.src = `https://www.youtube.com/embed/TtY9eRayseg?start=${startTime}&autoplay=1&end=${endTime}`;
    console.log(
      "If you dont know this song, we suggest you go to the lyrics page, dont worry... You can play the song from that page too :)"
    );
    if (!userHasClickedASong) {
      userHasClickedASong = true;
    }
  };
  outerElem.appendChild(link);
  songsDOM.appendChild(outerElem);
});
newTabGithub.addEventListener("click", () => {
  window.open(
    "https://github.com/KendallDoesCoding/mogul-christmas",
    "_blank",
    "resizable=yes, scroll=yes, location=1, titlebar=yes, width=800, height=900, top=10, left=10"
  );
});

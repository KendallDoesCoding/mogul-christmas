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
    ? (slider.style.backgroundImage = "url('../images/day.png')")
    : (slider.style.backgroundImage = "url('../images/night.png')");
  const rootElement = document.body;
  rootElement.classList.toggle("darkMode");
};

function modeSwitch() {
  isLight = !isLight;
  updateMode();
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

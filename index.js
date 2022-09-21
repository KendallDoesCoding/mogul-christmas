// Const Songs
const songs = {
  "Christmas Song": {
    start: "0",
    end: "211",
  },
  "Baby It's Cold Outside": {
    start: "212",
    end: "373",
  },
  "The Most Wonderful Time Of The Year": {
    start: "374",
    end: "524",
  },
  "Last Christmas": {
    start: "525",
    end: "807",
  },
  "Little Saint Nick": {
    start: "808",
    end: "939",
  },
  "All I Want For Christmas": {
    start: "940",
    end: "1179",
  },
  "All Of The Above": {
    start: "0",
  },
};
const songsDOM = document.querySelector(".songs");
const embed = document.getElementById("embed");
const newTabGithub = document.querySelector(".social");
const toggle = document.querySelector(".round");
const slider = document.querySelector(".slider");


toggle.addEventListener("click", modeSwitch);


// Darkmode/Lightmode + Making songs play when clicked

let isLight = true;

const updateMode = () => {
  isLight
    ? (slider.style.backgroundImage = "url('./images/light.png')")
    : (slider.style.backgroundImage = "url('./images/dark.png')");
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

  //stop button for individual songs
  outerElem.onclick=()=>revealStopButton();

  const link = document.createElement("a");
  link.innerHTML = song_title;
  link.style = "cursor: pointer";
  link.onclick = () => {
    embed.src = `https://www.youtube.com/embed/TtY9eRayseg?start=${startTime}&autoplay=1&end=${endTime}&enablejsapi=1`;
    console.log(
      "If you don't know this song, we suggest you go to the lyrics page. You can play the song from that page too :)"
    );
    if (!userHasClickedASong) {
      userHasClickedASong = true;
    }
  };
  outerElem.appendChild(link);
  songsDOM.appendChild(outerElem);
});

// randomly shuffle a song from main page's songs
function shuffleSongs() {
  revealStopButton();
  var properties = Object.getOwnPropertyNames(songs);
  var ranNum = Math.floor(Math.random() * (properties.length - 1));
  var songName = properties[ranNum];
  var song = songs[songName];
  console.log(songs[songName]);
  embed.src = `https://www.youtube.com/embed/TtY9eRayseg?start=${song.start}&autoplay=1&end=${song.end}&enablejsapi=1`;
}

// Open GitHub repo in a new window if user clicks GitHub icon on project website
newTabGithub.addEventListener("click", () => {
  window.open(
    "https://github.com/KendallDoesCoding/mogul-christmas",
    "_blank",
    "resizable=yes, scroll=yes, location=1, titlebar=yes, width=800, height=900, top=10, left=10"
  );
});

//stop-button-feature
const stopButton=document.querySelector("#stop-btn"); //stop button

//make the stop button visible when "play random song button is clicked"
function revealStopButton(){
  stopButton.style.display='block';
}

//stop button function
function stopVideo(){
  embed.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
  stopButton.style.display='none';
}
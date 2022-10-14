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

// getting the song class from "./index.html"
const songsDOM = document.querySelector(".songs");
// getting the tag with id embed from "./index.html"
const embed = document.getElementById("embed");
const newTabGithub = document.querySelector(".social");
const toggle = document.getElementById("round");
const toggle1 = document.getElementById("round1");
const slider = document.querySelector(".slider");
const canvasBody = document.getElementById("canvasBody");
const canvasHead = document.getElementById("canvasHead");
const navB = document.getElementById("navB");
const switchh = document.getElementById("switch");

//toggle that changes the theme
toggle.addEventListener("click", modeSwitch);
toggle1.addEventListener("click", modeSwitch);

// Darkmode/Lightmode + Making songs play when clicked

let isLight = true;

const updateMode = () => {
  isLight
    ? (slider.style.backgroundImage = "url('./images/light.png')")
    : (slider.style.backgroundImage = "url('./images/dark.png')");

  isLight
    ? (toggle1.style.backgroundImage = "url('./images/light.png')")
    : (toggle1.style.backgroundImage = "url('./images/dark.png')");

  isLight
    ? (canvasBody.style.backgroundColor = "#fdd7d1")
    : (canvasBody.style.backgroundColor = "#dadada");

  isLight
    ? (canvasHead.style.backgroundColor = "#fdd7d1")
    : (canvasHead.style.backgroundColor = "#dadada");

  isLight
    ? (navB.style.backgroundColor = "#fdd7d1c4")
    : (navB.style.backgroundColor = "#e1e1e1c4");

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
  outerElem.onclick = () => revealStopAndLoopButton();

  const link = document.createElement("a");
  link.innerHTML = song_title;
  link.style = "cursor: pointer";
  link.onclick = () => {

    //chaning embed link dynamically

    embed.src = `https://www.youtube.com/embed/TtY9eRayseg?start=${startTime}&autoplay=1&end=${endTime}&enablejsapi=1`;
    //for looping feature
    clearTimeout(timeoutData);

    loopWatcher(
      startTime,
      endTime,
      `https://www.youtube.com/embed/TtY9eRayseg?start=${startTime}&autoplay=1&end=${endTime}&enablejsapi=1`
    );
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
  revealStopAndLoopButton();
  var properties = Object.getOwnPropertyNames(songs);
  var ranNum = Math.floor(Math.random() * (properties.length - 1));
  var songName = properties[ranNum];
  var song = songs[songName];
  console.log(songs[songName]);
  embed.src = `https://www.youtube.com/embed/TtY9eRayseg?start=${song.start}&autoplay=1&end=${song.end}&enablejsapi=1`;
  //for loop feature
  clearTimeout(timeoutData);
  loopWatcher(
    song.start,
    song.end,
    `https://www.youtube.com/embed/TtY9eRayseg?start=${song.start}&autoplay=1&end=${song.end}&enablejsapi=1`
  );
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
const stopButton = document.querySelector("#stop-btn"); //stop button

//make the stop button visible when "play random song button is clicked"
function revealStopAndLoopButton() {
  stopButton.style.display = "block";
  loopButton.style.display = "inline-block";
}

//hide the stop button when it's stopped

function hideStopAndLoopButton() {
  stopButton.style.display = "none";
  loopButton.style.display = "none";
}

//stop button function
function stopVideo() {
  embed.contentWindow.postMessage(
    '{"event":"command","func":"stopVideo","args":""}',
    "*"
  );
  hideStopAndLoopButton();
  clearTimeout(timeoutData);
  toggleLoop();
}

//loop song code

const loopButton = document.querySelector("#loop-btn");
//loopState=false means no loop
//loopState=true means loop
let loopState = false;
let timeoutData = null;

//toggle loop button effect
function toggleLoop() {
  loopState = !loopState;
  if (loopState === false) {
    loopButton.classList.remove("loop-true");
    loopButton.classList.add("loop-false");
  } else if (loopState === true) {
    loopButton.classList.remove("loop-false");
    loopButton.classList.add("loop-true");
  }
}

//when loop button clicked
loopButton.addEventListener("click", () => {
  toggleLoop();
  console.log(`Loop=${loopState}`);
});

//loop function
function loopWatcher(start, end, apiURL) {
  const waitTime = (parseInt(end) - parseInt(start) + 5) * 1000; //seconds
  timeoutData = setTimeout(() => {
    if (loopState === true) {
      embed.src = apiURL;
      console.log("looped"); //remove
    } else {
      hideStopAndLoopButton();
    }
  }, waitTime);
}

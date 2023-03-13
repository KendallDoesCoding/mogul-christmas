const VIDEO_ID = "TtY9eRayseg";
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
const toggle = document.getElementById("round");
const toggle1 = document.getElementById("round1");
const slider = document.querySelector(".slider");
const audioControls = document.querySelector(".audio-controls");
const loader = document.querySelector("#loader");
const stopButton = document.querySelector("#stop-btn");
const playButton = document.querySelector("#play-btn");
const pauseButton = document.querySelector("#pause-btn");
const volumeBar = document.querySelector("#volume-bar");
const shuffleButton = document.querySelector("#shuffle-btn");
const loopButton = document.querySelector("#repeat-btn");
const canvasBody = document.getElementById("canvasBody");
const canvasHead = document.getElementById("canvasHead");
const navB = document.getElementById("navB");
const switchh = document.getElementById("switch");
let christmasCountdown = document.getElementById("christmasDayCountdown");
const body = document.getElementById("body")
let player;
let currSong;
let songList = [];
let playedNext = true;
let intervalId;
toggle.addEventListener("click", modeSwitch);
toggle1.addEventListener("click", modeSwitch);

// Darkmode/Lightmode + Making songs play when clicked
let isLight = localStorage.getItem("darkmode") === "false";
let loopState = localStorage.getItem("loop") === "true";
let shuffleState = localStorage.getItem("shuffle") === "true";
// Open GitHub repo in a new window if user clicks GitHub icon on project website
newTabGithub.addEventListener("click", () => {
  window.open(
    "https://github.com/KendallDoesCoding/mogul-christmas",
    "_blank",
    "resizable=yes, scroll=yes, location=1, titlebar=yes, width=800, height=900, top=10, left=10"
  );
});

document.getElementById('menu').addEventListener('click', displayMenu)

const updateMode = () => {
  const rootElement = document.body;
  if (!isLight) {
    canvasBody.style.backgroundColor = "#F8F6EE";
    canvasHead.style.backgroundColor = "#F8F6EE";
    body.style.backgroundColor = "#F8F6EE";
    navB.style.backgroundColor = "#F8F6EE";
    document.getElementById('line-1').style.stroke = "#272B2E";
    document.getElementById('line-2').style.stroke = "#272B2E";
    document.getElementById('line-3').style.stroke = "#272B2E";
    rootElement.classList.remove("darkMode");
  } else {
    canvasBody.style.backgroundColor = "#272B2E";
    canvasHead.style.backgroundColor = "#272B2E";
    body.style.backgroundColor = "#272B2E";
    navB.style.backgroundColor = "#272B2E";
    document.getElementById('line-1').style.stroke = "#F8F6EE";
    document.getElementById('line-2').style.stroke = "#F8F6EE";
    document.getElementById('line-3').style.stroke = "#F8F6EE";
    rootElement.classList.add("darkMode");
    christmasCountdown.style.background = "rgba(235, 235, 235, 0.05)";
  }
 
};

function modeSwitch() {
  isLight = !isLight;
  updateMode();
  localStorage.setItem("darkmode", !isLight);
}
// This function will execute on initial load of page
window.onload = function () {
  updateMode();
  updateLoop();
  updateShuffle();
  updateVolume();
  audioControls.classList.remove("hidden");
  loader.classList.add("hidden");
  volumeBar.addEventListener("change", ({ target }) => {
    player?.setVolume(target.value);
    localStorage.setItem("volume", target.value);
  });
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player("embed", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}
function onPlayerReady(event) {
  updateVolume();
}
function onPlayerStateChange(event) {
  if (player.getPlayerState() === 0) {
    if (loopState) player?.seekTo(songs[currSong]?.start || 0);
    else {
      if (shuffleState) {
        if (!playedNext) {
          playedNext = true;
          player.loadVideoById({
            videoId: VIDEO_ID,
            startSeconds: songs[currSong].start,
            endSeconds: songs[currSong].end,
          });
        } else {
          let songNum = songList.findIndex((el) => el === currSong);
          if (songList.length <= songNum + 1) {
            stopVideo();
          } else {
            currSong = songList[songNum + 1];
            playedNext = false;
            player.loadVideoById({
              videoId: VIDEO_ID,
              startSeconds: songs[currSong].start,
              endSeconds: songs[currSong].end,
            });
          }
        }
      } else stopVideo();
    }
  }
  //if playing
  if (player.getPlayerState() === 1) {
    stopButton.classList.remove("hidden");
    pauseButton.classList.remove("hidden");
    playButton.classList.add("hidden");
    intervalId = window.setInterval(() => {
      if (player.getPlayerState() === 1) {
        let secLeft =
          (currSong ? songs[currSong].end : player.getDuration()) -
          player.getCurrentTime();
        secLeft = parseInt(secLeft);
        const songBlock = document.getElementById(
          `song_${(currSong ?? "All Of The Above").split(" ").join("_")}`
        );

        const timeEl = songBlock.childNodes[1];
        timeEl.classList.add("active");
        timeEl.innerHTML = `${parseInt(secLeft / 60)}:${
          secLeft % 60 < 10 ? "0" + (secLeft % 60) : secLeft % 60
        }`;
      }
    }, 500);
  }
  // paused
  else if (player.getPlayerState() === 2) {
    pauseButton.classList.add("hidden");
    playButton.classList.remove("hidden");
  } else {
    stopButton.classList.add("hidden");
    pauseButton.classList.add("hidden");
    playButton.classList.remove("hidden");
  }
  // if buffering
  if (player.getPlayerState() === 3) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
}
embed.style = "display:none";

Object.keys(songs).map((song_title) => {
  const startTime = songs[song_title].start;
  const endTime = songs[song_title].end;
  const outerElem = document.createElement("p");
  outerElem.id = `song_${song_title.split(" ").join("_")}`;
  outerElem.className = "song_item";

  const link = document.createElement("a");
  link.innerHTML = song_title;
  link.style = "cursor: pointer";
  link.onclick = () => {
    clearTimeLeft();
    player.loadVideoById({
      videoId: VIDEO_ID,
      startSeconds: startTime,
      endSeconds: endTime,
    });
    currSong = song_title === "All Of The Above" ? undefined : song_title;
    console.log(
      "If you don't know this song, we suggest you go to the lyrics page. You can play the song from that page too :)"
    );
  };
  outerElem.appendChild(link);
  const timeLeft = document.createElement("span");
  timeLeft.className = "time-left";
  outerElem.appendChild(timeLeft);
  songsDOM.appendChild(outerElem);
});

function playSongs() {
  clearTimeLeft();
  if (player.isMuted() || player.getPlayerState() === 2) {
    player.playVideo();
  } else {
    if (songList.length) {
      if (!currSong) currSong = songList[0];
      player.loadVideoById({
        videoId: VIDEO_ID,
        startSeconds: songs[currSong].start,
        endSeconds: songs[currSong].end,
      });
    } else {
      player.loadVideoById({ videoId: VIDEO_ID });
    }
  }
}
function pauseSong() {
  player.pauseVideo();
}

// randomly shuffle a song from main page's songs
function shuffleSongsList() {
  let allSongs = { ...songs };
  delete allSongs["All Of The Above"];
  songList = Object.keys(allSongs).sort(() => Math.random() - 0.5);
  console.log("songList", songList);
}

//stop button function
function stopVideo() {
  songList = [];
  currSong = undefined;
  player.stopVideo();
  clearTimeLeft();
}

//loop song code
//toggle loop button effect
function toggleLoop() {
  loopState = !loopState;
  localStorage.setItem("loop", loopState);
  if (loopState === false) {
    loopButton.classList.remove("active");
    songList = [];
  } else if (loopState === true) {
    loopButton.classList.add("active");
  }
}
function updateLoop() {
  if (loopState === false) {
    loopButton.classList.remove("active");
  } else if (loopState === true) {
    loopButton.classList.add("active");
  }
}

function toggleShuffle() {
  shuffleState = !shuffleState;
  localStorage.setItem("shuffle", shuffleState);
  if (shuffleState === false) {
    shuffleButton.classList.remove("active");
  } else if (shuffleState === true) {
    shuffleButton.classList.add("active");
    shuffleSongsList();
  }
}
function updateShuffle() {
  if (shuffleState === false) {
    shuffleButton.classList.remove("active");
  } else if (shuffleState === true) {
    shuffleButton.classList.add("active");
    shuffleSongsList();
  }
}
function updateVolume() {
  let volumeState = parseInt(localStorage.getItem("volume") ?? 50);
  player?.setVolume?.(volumeState);
  volumeBar.value = volumeState;
}

function clearTimeLeft() {
  clearInterval(intervalId);
  const a = document.getElementsByClassName("time-left");
  for (let i = 0; i < a.length; i++) {
    a[i].classList.remove("active");
  }
}

function displayMenu(){
  document.getElementById('menu-display').style.display = 'block'
}

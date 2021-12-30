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
embed.style = "display:none"
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
      embed.style = "display:block"
      userHasClickedASong = true
    }
  };
  outerElem.appendChild(link);
  songsDOM.appendChild(outerElem);
});

// Display message if it's the 25th of December
const month = Date().getMonth()
const day = Date().getDate()

if (month === 11) {
  if (day === 25) {
    document.querySelector("luds").innerHTML += "<p class="lud">We at KendallDoesCoding wish all of you a Merry Christmas, enjoy your day and make sure you atleast listen to this album on this site atleast 10 times during your day :)</p>"
  }
}

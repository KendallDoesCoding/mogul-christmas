// Open any random song in You May Like directory.

const randomSongBtn = document.getElementById("random-button");

const links = [
  "https://www.youtube.com/watch?v=aAuKuyAZ7YM",
  "https://www.youtube.com/watch?v=R_vmuL0gjU0",
  "https://www.youtube.com/watch?v=-Xo64Q2ucQ8",
  "https://www.youtube.com/watch?v=30OaM6b48k8",
  "https://www.youtube.com/watch?v=g-OF7KGyDis",
  "https://www.youtube.com/watch?v=rnEqv8WcVq8",
  "https://www.youtube.com/watch?v=JVer2lCjARU",
  "https://www.youtube.com/watch?v=PQ-ULzAAb20",
  "https://www.youtube.com/watch?v=18qE6_-2dQs",
  "https://www.youtube.com/watch?v=jIyVB1b2aBs",
  "https://www.youtube.com/watch?v=ifCWN5pJGIE",
];
let openStuff = function () {
  // get a random number between 0 and the number of links
  var randIdx = Math.random() * links.length;
  // round it, so it can be used as array index
  randIdx = parseInt(randIdx, 10);
  // construct the link to be opened
  var link = links[randIdx];
  // open it in a new window / tab (depends on browser setting)
  window.open(link);
};

randomSongBtn.onClick = openStuff;

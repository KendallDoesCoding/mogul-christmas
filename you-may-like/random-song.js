// Open any random song url in the You May Like directory.

const randomSongBtn = document.getElementById("random-button");

const links = [
  // Bryan Adams - Must Be Santa
  "https://www.youtube.com/watch?v=aAuKuyAZ7YM",
  // Rick Astley - Love This Christmas
  "https://www.youtube.com/watch?v=uYCUNULp868",
  // Bobby Helms - Jingle Bell Rock
  "https://www.youtube.com/watch?v=R_vmuL0gjU0",
  // Pentatonix - Joy to the World
  "https://www.youtube.com/watch?v=-Xo64Q2ucQ8",
  // Joy To The World | Original
  "https://www.youtube.com/watch?v=30OaM6b48k8",
  // We Wish You A Merry Christmas | Original
  "https://www.youtube.com/watch?v=g-OF7KGyDis",
  // Sam Smith - Have Yourself A Merry Little Christmas
  "https://www.youtube.com/watch?v=rnEqv8WcVq8",
  // The Ronettes - Sleigh Ride
  "https://www.youtube.com/watch?v=JVer2lCjARU",
  // The Ronettes - Frosty The Snowman
  "https://www.youtube.com/watch?v=PQ-ULzAAb20",
  // Pentatonix - Frosty The Snowman ft: Alessia Cara
  "https://www.youtube.com/watch?v=18qE6_-2dQs",
  // Michael Bublé - Frosty The Snowman (ft. The Puppini Sisters)
  "https://www.youtube.com/watch?v=jIyVB1b2aBs",
  // Pentatonix - Mary, Did You Know?
  "https://www.youtube.com/watch?v=ifCWN5pJGIE",
  // RoomieOfficial - Santa Claus is Coming To Town
  "https://www.youtube.com/embed/gjjb5Guc8As?start=5&end=28&autoplay=1",
  // RoomieOfficial - White Christmas
  "https://www.youtube.com/embed/gjjb5Guc8As?start=28&end=48&autoplay=1",
  // RoomieOfficial - Last Christmas
  "https://www.youtube.com/embed/gjjb5Guc8As?start=49&end=67&autoplay=1",
  // RoomieOfficial - All I Want For Christmas
  "https://www.youtube.com/embed/gjjb5Guc8As?start=67&end=81&autoplay=1",
  // RoomieOfficial - Feliz Navidad
  "https://www.youtube.com/embed/gjjb5Guc8As?start=81&end=106&autoplay=1",
  // Chris Tomlin - It's Christmas
  "https://www.youtube.com/watch?v=10YJjdzZSPo"
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

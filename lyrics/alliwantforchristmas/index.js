const song = lyrics.find((x) => x.name === "all i want for christmas").lyrics;

const lyrics__container = document.getElementsByClassName("lyrics")[0];

song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return lyrics__container.appendChild(p);
});

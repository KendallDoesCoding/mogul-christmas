const christmas_song = lyrics.find((x) => x.name === "christmas song").lyrics;

const christmas_song__container = document.getElementsByClassName("lyrics")[0];

christmas_song.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return christmas_song__container.appendChild(p);
});

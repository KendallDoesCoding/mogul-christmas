const little_saint_nick = lyrics.find(
  (x) => x.name === "little saint nick"
).lyrics;

const little_saint_nick__container =
  document.getElementsByClassName("lyrics")[0];

little_saint_nick.map((item) => {
  const p = document.createElement("p");
  const textNode = document.createTextNode(item);
  p.appendChild(textNode);
  return little_saint_nick__container.appendChild(p);
});

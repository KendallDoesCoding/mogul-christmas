const songs = {
  "Christmas Song": "0",
  "Baby It's Cold Outside": "210",
  "The Most Wonderful Time Of The Year": "373",
  "Last Christmas": "525",
  "Little Saint Nick": "808",
  "All I Want For Christmas": "940"
  }
const songsDOM = document.querySelector(".songs")
const embed = document.getElementById("embed")
            
Object.keys(songs).map(song_title => {
  const seconds = songs[song_title]
  const outerElem = document.createElement("p")
  const link = document.createElement("a")
  link.innerHTML = song_title
  link.style = "cursor: pointer"
  link.onclick = () => {
    embed.src = `https://www.youtube.com/embed/TtY9eRayseg?start=${seconds}`
  }
  outerElem.appendChild(link)
  songsDOM.appendChild(outerElem)
})

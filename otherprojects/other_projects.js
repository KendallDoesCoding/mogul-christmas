const songs = {
  "Christmas Song": "0",
  "Baby It's Cold Outside": "212",
  "The Most Wonderful Time Of The Year": "374",
  "Last Christmas": "525",
  "Little Saint Nick": "808",
  "All I Want For Christmas": "940"
  }
            
Object.keys(songs).map(song_title => {
  const seconds = songs[song_title]
  const outerElem = document.createElement("p")

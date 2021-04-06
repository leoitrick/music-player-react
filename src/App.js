import React, { useState } from "react";

import "./styles/app.scss";

import Player from "./components/Player";
import Song from "./components/Song";

import data from "./util";

function App() {
  //state - getting the songs from util.js file
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;

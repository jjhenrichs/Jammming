import React, { useState, useEffect } from "react";
import styles from "../style/App.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import Playlist from "./Playlist";
import Spotify from "../utils/Spotify";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  function handleSearchInput({ target }) {
    setSearchInput(target.value);
  }

  async function search() {
    const result = await Spotify.search(searchInput);
    setSearchResult(result);
  }

  function add(track) {
    // some() tests whether at least one value in the array is similar to the passed value
    if (playlist.some((savedTrack) => savedTrack.id === track.id)) {
      alert(`${track.song} has already been added`);
    } else {
      setPlaylist([track, ...playlist]);
    }
  }

  function remove(track) {
    // setPlaylist(playlist.filter((savedTrack) => savedTrack.id === track.id));
    alert(`Removing ${track.song} from the playlist`);
  }

  return (
    <div className={styles.container}>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <SearchBar
        value={searchInput}
        onChange={handleSearchInput}
        submitQuery={search}
      />
      <div className={styles.dataContainer}>
        <SearchResult results={searchResult} onAdd={add} />
        <Playlist playlist={playlist} onRemove={remove} />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import styles from "../style/App.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import Playlist from "./Playlist";
import Spotify from "../utils/Spotify";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [playlist, setPlaylist] = useState([
    { key: 1, song: "Song 1", album: "Album 1", artist: "Artist 1" },
    { key: 2, song: "Song 2", album: "Album 2", artist: "Artist 2" },
    { key: 3, song: "Song 3", album: "Album 3", artist: "Artist 3" },
  ]);

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
    setPlaylist([track, ...playlist]);
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
        <SearchResult results={searchResult} addToPlaylist={add} />
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
}

export default App;

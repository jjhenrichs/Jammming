import React, { useState, useEffect } from "react";
import styles from "../style/App.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import Playlist from "./Playlist";
import Spotify from "../utils/Spotify";

function App() {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const accessToken = Spotify.getAccessToken();
    console.log(accessToken);
  }, []);

  function handleSearchInput({ target }) {
    setSearchInput(target.value);
  }

  function search() {
    Spotify.search(searchInput);
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
        <SearchResult />
        <Playlist />
      </div>
    </div>
  );
}

export default App;

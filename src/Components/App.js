import React, { useState, useEffect, useCallback } from "react";
import styles from "../style/App.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import Playlist from "./Playlist";
import Spotify from "../utils/Spotify";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  function clear() {
    setSearchInput("");
  }

  function handleSearchInput({ target }) {
    setSearchInput(target.value);
  }

  function changePlaylistName({ target }) {
    setPlaylistName(target.value);
  }

  async function search() {
    setSearchResult([]);

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
    setPlaylist(playlist.filter((savedTrack) => savedTrack.id !== track.id));
  }

  function savePlaylist() {
    const trackUris = playlist.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylist([]);
    });
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
        clearQuery={clear}
      />
      <div className={styles.dataContainer}>
        <SearchResult results={searchResult} onAdd={add} />
        <Playlist
          playlist={playlist}
          value={playlistName}
          onRemove={remove}
          onSave={savePlaylist}
          onNameChange={changePlaylistName}
        />
      </div>
    </div>
  );
}

export default App;

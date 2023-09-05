import React, { useState, useEffect } from "react";
import styles from "../style/App.module.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import Playlist from "./Playlist";

function App() {
  const [researchInput, setResearchInput] = useState("");

  function handleSearchInput({ target }) {
    console.log(target.value);
    setResearchInput(target.value);
  }

  function handleSubmit() {
    alert(researchInput);
  }

  function handleClearInput() {
    setResearchInput("");
  }

  return (
    <div className={styles.container}>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <SearchBar
        value={researchInput}
        onChange={handleSearchInput}
        submitQuery={handleSubmit}
        clearQuery={handleClearInput}
      />
      <div className={styles.dataContainer}>
        <SearchResult />
        <Playlist />
      </div>
    </div>
  );
}

export default App;

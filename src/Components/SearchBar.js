import React from "react";
import styles from "../style/SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter a song, artist, or album"
      />
      <div className={styles.btnContainer}>
        <button type="reset" className={styles.btn}>
          Clear
        </button>
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </div>
    </div>
  );
}

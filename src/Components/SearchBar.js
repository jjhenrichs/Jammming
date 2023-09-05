import React from "react";
import styles from "../style/SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter a song, artist, or album"
        value={props.value}
        onChange={props.onChange}
      />
      <div className={styles.btnContainer}>
        <button type="reset" className={styles.btn} onClick={props.clearQuery}>
          Clear
        </button>
        <button
          type="submit"
          className={styles.btn}
          onClick={props.submitQuery}
        >
          Search
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../style/SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="songInput"
        className={styles.input}
        placeholder="Enter a song"
        value={props.value}
        onChange={props.onChange}
      />
      <div className={styles.btnContainer}>
        <button
          type="submit"
          className={styles.btn}
          onClick={props.submitQuery}
        >
          Search
        </button>
        <button
          type="clear"
          className={styles.clearBtn}
          onClick={props.clearQuery}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../style/SearchResult.module.css";
import Tracklist from "./Tracklist";

export default function SearchResult(props) {
  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <div className={styles.trackContainer}>
        <Tracklist
          tracks={props.results}
          inPlaylist={false}
          addToPlaylist={props.addToPlaylist}
        />
      </div>
    </div>
  );
}

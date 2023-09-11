import React from "react";
import styles from "../style/Playlist.module.css";
import Tracklist from "./Tracklist";

export default function Playlist() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="New Playlist Name"
      />
      <button type="submit" className={styles.btn}>
        Save to Spotify
      </button>
    </div>
  );
}

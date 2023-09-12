import React from "react";
import styles from "../style/Playlist.module.css";
import Tracklist from "./Tracklist";

export default function Playlist(props) {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
      <Tracklist tracks={props.playlist} inPlaylist={true} />
      <button type="submit" className={styles.btn}>
        Save to Spotify
      </button>
    </div>
  );
}

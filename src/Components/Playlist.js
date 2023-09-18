import React from "react";
import styles from "../style/Playlist.module.css";
import Tracklist from "./Tracklist";

export default function Playlist(props) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        onChange={props.onNameChange}
        value={props.value}
      />
      <div className={styles.trackContainer}>
        <Tracklist
          tracks={props.playlist}
          inPlaylist={true}
          onRemove={props.onRemove}
        />
      </div>

      <button type="submit" className={styles.btn} onClick={props.onSave}>
        Save to Spotify
      </button>
    </div>
  );
}

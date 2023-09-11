import React from "react";
import styles from "../style/Track.module.css";

export default function Track(props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.songInfo}>{props.song}</h3>
      <p className={styles.trackInfo}>
        {props.artist} | {props.album}
      </p>
    </div>
  );
}

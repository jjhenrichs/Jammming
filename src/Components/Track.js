import React from "react";
import styles from "../style/Track.module.css";

export default function Track() {
  return (
    <div className={styles.container}>
      <h3 className={styles.songInfo}>Track Song</h3>
      <p className={styles.trackInfo}>Track Artist | Track Album</p>
    </div>
  );
}

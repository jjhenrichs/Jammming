import React from "react";
import styles from "../style/Tracklist.module.css";
import Track from "./Track";

export default function Tracklist() {
  return (
    <div className={styles.container}>
      <Track />
      <Track />
      <Track />
    </div>
  );
}

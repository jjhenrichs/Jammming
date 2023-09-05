import React from "react";
import styles from "../style/SearchResult.module.css";
import Track from "./Track";

export default function SearchResult() {
  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <div className={styles.trackContainer}>
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  );
}

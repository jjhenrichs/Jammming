import React from "react";
import styles from "../style/Track.module.css";

export default function Track(props) {
  return (
    <div className={styles.container}>
      <div className={styles.track_info}>
        <h3 className={styles.song_info}>{props.song}</h3>
        <p className={styles.artist_album_info}>
          {props.artist} | {props.album}
        </p>
      </div>
      <div className={styles.action_icon} onClick={() => console.log(props)}>
        {props.inPlaylist ? "-" : "+"}
      </div>
    </div>
  );
}

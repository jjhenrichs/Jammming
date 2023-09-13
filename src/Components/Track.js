import React from "react";
import styles from "../style/Track.module.css";

export default function Track(props) {
  return (
    <div className={styles.container}>
      <div className={styles.track_info}>
        <h3 className={styles.song_info}>{props.track.song}</h3>
        <p className={styles.artist_album_info}>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <div
        className={styles.action_icon}
        onClick={() => {
          console.log(props);
          props.addToPlaylist(props.track);
        }}
      >
        {props.inPlaylist ? "-" : "+"}
      </div>
    </div>
  );
}

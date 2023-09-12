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
      <div
        className={styles.action_icon}
        onClick={() =>
          props.addToPlaylist({
            key: props.key,
            song: props.song,
            artist: props.artist,
            album: props.album,
          })
        }
      >
        {props.inPlaylist ? "-" : "+"}
      </div>
    </div>
  );
}

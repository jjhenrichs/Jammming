import React from "react";
import styles from "../style/Tracklist.module.css";
import Track from "./Track";

export default function Tracklist(props) {
  return (
    <div className={styles.container}>
      <div>
        {props.tracks.map((track) => (
          <Track
            key={track.id}
            album={track.album}
            artist={track.artist}
            song={track.song}
          />
        ))}
      </div>
    </div>
  );
}

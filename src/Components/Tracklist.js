import React from "react";
import styles from "../style/Tracklist.module.css";
import Track from "./Track";

export default function Tracklist(props) {
  return (
    <div className={styles.container}>
      <div onClick={() => console.log(props)}>
        {props.tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            inPlaylist={props.inPlaylist}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        ))}
      </div>
    </div>
  );
}

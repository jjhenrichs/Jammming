import React from "react";
import styles from "../style/Playlist.module.css";
import Tracklist from "./Tracklist";

export default function Playlist() {
  return (
    <div>
      <h2>These are my Playlists</h2>
      <Tracklist />
    </div>
  );
}

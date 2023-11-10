import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Track from "../Components/Track";

describe("Track", () => {
  const track = {
    song: "Jump",
    artist: "Van Halen",
    album: "1984",
  };

  const onAdd = jest.fn();
  const onRemove = jest.fn();

  it("renders", () => {
    render(
      <Track
        key={1}
        track={track}
        inPlaylist={true}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );
  });

  it("displays the track (song) name", () => {
    render(
      <Track
        key={1}
        track={track}
        inPlaylist={true}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );
    const songName = screen.getByText(track.song);
    expect(songName).toBeInTheDocument();
  });

  it("displays the track artist and track album on 1 line.", () => {
    render(
      <Track
        key={1}
        track={track}
        inPlaylist={true}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );
    const songInfo = screen.getByText(`${track.artist} | ${track.album}`);
    expect(songInfo).toBeInTheDocument();
  });

  it("displays a '-' when the track is not placed in the playlist", () => {
    render(
      <Track
        key={1}
        track={track}
        inPlaylist={true}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );
    const minus = screen.getByText("-");
    expect(minus).toBeInTheDocument();
  });

  it("displays a '+' when the track is not in the playlist", () => {
    render(
      <Track
        key={1}
        track={track}
        inPlaylist={false}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );
    const plus = screen.getByText("+");
    expect(plus).toBeInTheDocument();
  });
});

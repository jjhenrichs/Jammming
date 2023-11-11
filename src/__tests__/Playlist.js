import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Playlist from "../Components/Playlist";

describe("Playlist", () => {
  const onSave = jest.fn();
  const onNameChange = jest.fn();
  const playlist = [
    {
      song: `I'm Still Standing`,
      artist: "Elton John",
      album: "Too Low for Zero",
    },
    {
      song: "Jump",
      artist: "Van Halen",
      album: "1984",
    },
    {
      song: "Check Yo Self",
      artist: "Ice Cube",
      album: "The Predator",
    },
  ];

  it("renders", () => {
    render(
      <Playlist
        playlist={playlist}
        onSave={onSave}
        onNameChange={onNameChange}
      />
    );
  });

  it("can change the name of the playlist", () => {
    render(
      <Playlist
        playlist={playlist}
        onSave={onSave}
        onNameChange={onNameChange}
      />
    );

    const input = screen.getByRole("textbox");
    userEvent.type(input, "Playlist #1");
    expect(input).toHaveValue("Playlist #1");
  });

  it("can save a playlist", () => {
    render(
      <Playlist
        playlist={playlist}
        onSave={onSave}
        onNameChange={onNameChange}
      />
    );
    const button = screen.getByRole("button", { name: /Save To Spotify/i });
    userEvent.click(button);
    expect(onSave).toHaveReturned();
  });

  it("can't save an empty playlist", () => {
    render(
      <Playlist playlist={[]} onSave={onSave} onNameChange={onNameChange} />
    );
    const button = screen.getByRole("button", { name: /Save To Spotify/i });
    userEvent.click(button);
    expect(onSave).not.toHaveReturned();
  });
});

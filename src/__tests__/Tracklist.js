import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tracklist from "../Components/Tracklist";

describe("Tracklist", () => {
  const tracks = [
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

  it("renders a list of tracks", () => {
    render(<Tracklist tracks={tracks} />);
  });
});

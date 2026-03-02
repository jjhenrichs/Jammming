import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResult from "../Components/SearchResults";

describe("SearchResult", () => {

    const results = [
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
    render(<SearchResult results={[]} onAdd={() => {}} />);
  });

  it("displays a header", () => {
    render(<SearchResult results={[]} onAdd={() => {}} />);
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
  });
});

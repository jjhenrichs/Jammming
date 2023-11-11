import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResult from "../Components/SearchResults";

describe("SearchResult", () => {
  it("renders", () => {
    render(<SearchResult results={[]} onAdd={() => {}} />);
  });

  it("displays a header", () => {
    render(<SearchResult results={[]} onAdd={() => {}} />);
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
  });
});

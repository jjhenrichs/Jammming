import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../Components/SearchBar";

describe("SearchBar", () => {
  it("renders", () => {
    render(<SearchBar />);
  });

  it("displays an input field", () => {
    render(<SearchBar />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
});

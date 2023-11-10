import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
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

  it("updates the input field value when typing", () => {
    render(<SearchBar />);
    const inputField = screen.getByRole("textbox");
    userEvent.type(inputField, "Tiny Dancer");
    expect(inputField).toHaveValue("Tiny Dancer");
  });
});

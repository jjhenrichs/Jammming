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

  it("displays Seacrch Button", () => {
    render(<SearchBar />);
    const searchButton = screen.getByRole("button", { name: /Search/i });
    expect(searchButton).toBeInTheDocument();
  });

  it("displays Clear button", () => {
    render(<SearchBar />);
    const clearButton = screen.getByRole("button", { name: /Clear/i });
    expect(clearButton);
  });

  it("clears the search bar when clear is clicked", () => {
    render(<SearchBar />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Jump");
    const clearButton = screen.getByRole("button", { name: /Clear/i });
    userEvent.click(clearButton);
    expect(input).toBeEmptyDOMElement();
  });

  it("sumbit a song query when Search is pressed", () => {
    const searchFunction = jest.fn();
    render(<SearchBar submitQuery={searchFunction} />);
    const input = screen.getByRole("textbox");
    const search = screen.getByRole("button", { name: /Search/i });
    userEvent.type(input, "Jump");
    userEvent.click(search);
    expect(searchFunction).toBeCalled();
  });
});

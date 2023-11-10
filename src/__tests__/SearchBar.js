import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "../Components/SearchBar";

describe("SearchBar", () => {
  it("renders", () => {
    render(<SearchBar />);
  });
});

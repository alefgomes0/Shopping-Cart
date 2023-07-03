import { render, screen } from "@testing-library/react";
import { HomeContent } from "./HomeContent";
import { BrowserRouter } from "react-router-dom";

describe("Landing page", () => {
  test("renders correctly", () => {

    render(
      <BrowserRouter>
        <HomeContent />
      </BrowserRouter>
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", {
      name: /you want, we have it/i,
    });
    expect(headingElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link", {
      name: /start shopping/i,
    });
    expect(linkElement).toBeInTheDocument();
  });
});

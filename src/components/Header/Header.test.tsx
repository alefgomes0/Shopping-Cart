import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";


describe("Header", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const headingElement = screen.getByRole("heading", {
      name: "BookStore"
    });
    expect(headingElement).toBeInTheDocument();

    expect(screen.getAllByRole("link")).toHaveLength(4);

    const cartElement = screen.getByRole("img")
    expect(cartElement).toBeInTheDocument();
  });

});

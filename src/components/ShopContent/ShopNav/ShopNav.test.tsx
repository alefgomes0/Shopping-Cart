import { render, screen } from "@testing-library/react"
import { ShopNav } from "./ShopNav"


describe("ShopNav", () => {
  test("renders correctly", () => {
    render(<ShopNav />)
    const headingElement = screen.getByRole("heading", {
      name: "Genres"
    })
    expect(headingElement).toBeInTheDocument()
    const checkboxesElement = screen.getAllByRole("checkbox");
    expect(checkboxesElement).toBeTruthy();
  })
})
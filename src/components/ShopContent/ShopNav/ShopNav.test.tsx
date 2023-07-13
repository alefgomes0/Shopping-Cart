import { render, screen } from "@testing-library/react"
import { ShopNav } from "./ShopNav"
import { ShopData } from "../../../data/ShopData"


/* describe("ShopNav", () => {
  test("renders correctly", () => {
    render(<ShopNav genreList={ShopData}/>)
    const headingElement = screen.getByRole("heading", {
      name: "Genres"
    })
    expect(headingElement).toBeInTheDocument()
    const checkboxesElement = screen.getAllByRole("checkbox");
    expect(checkboxesElement).toBeTruthy();
  })
}) */
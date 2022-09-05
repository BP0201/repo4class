import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

/** SMOKE TEST */
it('renders without crashing', () => {
  render(<Carousel />)
})

/** SNAPSHOT TEST */
it('matches expected outcome', () => {
  const { getByText } = render(<Carousel />)
  expect(getByText("Shells from far away beaches."))
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  /** Go to second image */
  const rightArrow = queryByTestId("right-arrow")
  fireEvent.click(rightArrow)

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();

  // move backwards in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

it('hides left arrow when card index is 0', () => {
  const { queryByTestId } = render(<Carousel />)
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument()
  const rightArrow = queryByTestId("right-arrow")
  fireEvent.click(rightArrow)
  expect(queryByTestId("left-arrow")).toBeInTheDocument()
});

it('hides right arrow when card index is 2', () => {
  const { queryByTestId } = render(<Carousel />)
  const rightArrow = queryByTestId("right-arrow")
  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)
  expect(rightArrow).not.toBeInTheDocument()
});
